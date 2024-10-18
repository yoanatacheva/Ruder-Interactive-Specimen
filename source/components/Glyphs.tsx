'use client';

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import TypographicLines from "@/components/TypographicLines";

const characterSets = {
    "Basic Latin": '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~',
    "Latin-1 Supplement": '¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ',
    "Latin Extended-A": 'ĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſ',
    "Latin Extended-B": 'ƒǍǎǓǔǾǿȘșȚț',
    "Spacing Modifier": 'ˆˇ˘˙˚˛˜˝',
    "General Punctuation": '‐–—―‘’‚“”„†‡•…‰′″‹›⁄',
    "Math Operators": '∂∆∏∑√∞∫≈≠≤≥'
};

interface CharacterInfo {
    glyphName: string;
    characters: string;
    unicodeDecimal: number;
    unicodeHex: string;
    htmlEntityHex: string;
}

export default function Glyphs() {
    const [font, setFont] = useState<"plakat" | "kontur">("plakat");
    const [selectedCharacter, setSelectedCharacter] = useState<string>('A');
    const [hoveredCharacter, setHoveredCharacter] = useState<string | null>(null);
    const [selectedCharacterSet, setSelectedCharacterSet] = useState<keyof typeof characterSets>("Basic Latin");

    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const spanRef = useRef<HTMLSpanElement>(null);
    const [fontSize, setFontSize] = useState<string>('16px');
    const [spanWidth, setSpanWidth] = useState<number>(0);

    const metrics = {
        ascender: 1045,
        capHeight: 792,
        xHeight: 628,
        baseline: 0,
        descender: -253
    };

    const toggleFont = () => {
        setFont(prevFont => (prevFont === 'plakat' ? 'kontur' : 'plakat'));
    };

    const getCharacterInfo = (character: string, characterSetName: string): CharacterInfo => {
        const charCode = character.charCodeAt(0);
        return {
            glyphName: character,
            characters: `${characterSetName} ${character}`,
            unicodeDecimal: charCode,
            unicodeHex: charCode.toString(16).toUpperCase().padStart(4, '0'),
            htmlEntityHex: `&#x${charCode.toString(16).toUpperCase()};`,
        };
    };

    const displayedCharacter = hoveredCharacter || selectedCharacter;
    const characterInfo = getCharacterInfo(displayedCharacter, selectedCharacterSet);

    const calculateFontSize = () => {
        if (containerRef.current) {
            const parentWidth = containerRef.current.offsetWidth;
            setContainerWidth(parentWidth);
            const newFontSize = `${parentWidth * 0.77}px`;
            setFontSize(newFontSize);
        }
    };

    const updateSpanWidth = () => {
        if (spanRef.current) {
            const width = spanRef.current.offsetWidth;
            setSpanWidth(width);
        }
    };

    useEffect(() => {
        calculateFontSize();
        window.addEventListener('resize', calculateFontSize);
        return () => {
            window.removeEventListener('resize', calculateFontSize);
        };
    }, []);

    useEffect(() => {
        updateSpanWidth();
    }, [displayedCharacter, fontSize]);

    return (
        <div className="min-h-[32rem]">
            <div className="grid grid-cols-3 w-full p-4">
                <div className="flex justify-start">
                    <Button variant="ghost" size="icon" className="w-fit py-2 z-10" onClick={toggleFont}>
                        {font === 'plakat' ? <span>Kontur</span> : <span>Plakat</span>}
                    </Button>
                </div>
                <div className="flex justify-center">
                </div>
                <div className="flex justify-end text-sm">
                    <Select onValueChange={(value) => setSelectedCharacterSet(value as keyof typeof characterSets)}>
                        <SelectTrigger className="w-fit [&>span]:mr-2">
                            <SelectValue placeholder="Select Character Set" />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.keys(characterSets).map(setName => (
                                <SelectItem className="font-helvetica cursor-pointer" key={setName} value={setName}>{setName}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="w-full min-h-[28rem] p-4 flex flex-col lg:flex-row">
                {/* Character showcase section */}
                <div className="w-full lg:w-1/3 flex flex-row mb-8 lg:flex-col lg:pr-4 lg:mb-0">
                    <div ref={containerRef} className={`relative w-1/2 lg:w-full aspect-square flex items-center justify-center leading-none ${font === 'plakat' ? 'font-ruder' : 'font-kontur'}`}> 
                        <span ref={spanRef} className="z-10" style={{ fontSize }}>{displayedCharacter}</span>
                        <TypographicLines {...metrics} charWidth={spanWidth} containerWidth={containerWidth} />
                    </div>
                    <div className="flex items-center w-1/2 ml-4 lg:ml-0 lg:mt-16 lg:w-full text-sm">
                        <table className="border-collapse text-nowrap w-fit h-fit">
                            <tbody>
                                <tr><td className="pr-4 hidden sm:table-cell">Glyph Name</td><td>{characterInfo.glyphName}</td></tr>
                                <tr><td className="pr-4 hidden sm:table-cell">Characters</td><td>{characterInfo.characters}</td></tr>
                                <tr><td className="pr-4 hidden sm:table-cell">Unicode Decimal</td><td>{characterInfo.unicodeDecimal}</td></tr>
                                <tr><td className="pr-4 hidden sm:table-cell">Unicode Hex</td><td>{characterInfo.unicodeHex}</td></tr>
                                <tr><td className="pr-4 hidden sm:table-cell">HTML Entity (Hex)</td><td>{characterInfo.htmlEntityHex}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Grid of characters section */}
                <div className="w-full lg:w-2/3 overflow-y-auto">
                    <div className="grid grid-cols-8 md:grid-cols-10 xl:grid-cols-12 2xl:grid-cols-14 w-full">
                        {characterSets[selectedCharacterSet].split('').map((character) => (
                            <div
                                key={character}
                                className={`aspect-square flex items-center justify-center text-2xl sm:text-4xl 2xl:text-5xl cursor-pointer border font-ruder
                                    ${selectedCharacter === character ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
                                onClick={() => setSelectedCharacter(character)}
                                onMouseEnter={() => setHoveredCharacter(character)}
                                onMouseLeave={() => setHoveredCharacter(null)}
                            >
                                {character}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}