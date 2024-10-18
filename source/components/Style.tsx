'use client';

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

export default function Style() {
    const [font, setFont] = useState("plakat");
    const [textType, setTextType] = useState("lowercase");
    const textRef = useRef<HTMLParagraphElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const adjustFontSize = useCallback(() => {
        if (textRef.current && containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const containerHeight = containerRef.current.offsetHeight;
            
            let testSize = Math.max(containerWidth, containerHeight);
            let low = 0;
            let high = testSize;
            
            while (low <= high) {
                testSize = Math.floor((low + high) / 2);
                textRef.current.style.fontSize = `${testSize}px`;
                
                const textWidth = textRef.current.scrollWidth;
                const textHeight = textRef.current.scrollHeight;
                
                if (textWidth <= containerWidth && textHeight <= containerHeight) {
                    low = testSize + 1;
                } else {
                    high = testSize - 1;
                }
            }
            
            const newFontSize = Math.max(high, 16);
            textRef.current.style.fontSize = `${newFontSize}px`;
        }
    }, []);

    useEffect(() => {
        adjustFontSize();
        window.addEventListener('resize', adjustFontSize);
        return () => window.removeEventListener('resize', adjustFontSize);
    }, [adjustFontSize, font, textType]);

    const toggleFont = () => {
        setFont(prevFont => (prevFont === 'plakat' ? 'kontur' : 'plakat'));
    };

    const getText = () => {
        switch (textType) {
            case "uppercase":
                return (
                    <>
                        <span className="block pb-4">ABCDEFGHIJ</span>
                        <span className="block pb-4">KLMNOPQRS</span>
                        <span className="block pb-4">TUVWXYZÁÊÌØÜ</span>
                    </>
                );
            case "lowercase":
                return (
                    <>
                        <span className="block pb-4">abcdefghij</span>
                        <span className="block pb-4">klmnopqrs</span>
                        <span className="block pb-4">tuvwxyzáêìøü</span>
                    </>
                );
            case "miscellaneous":
                return (
                    <>
                        <span className="block pb-4">1234567890</span>
                        <span className="block pb-4">%*@$¢£¥</span>
                        <span className="block pb-4">;:!?&ß§#</span>
                    </>
                );
            default:
                return (
                    <>
                        <span className="block pb-4">abcdefghij</span>
                        <span className="block pb-4">klmnopqrs</span>
                        <span className="block pb-4">tuvwxyzáêìøü</span>
                    </>
                );
        }
    };

    const handleMovement = useCallback((event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            let xPosition: number;

            if ("touches" in event) {
                const touch = event.touches[0];
                xPosition = (touch.clientX - rect.left) / rect.width;
            } else {
                xPosition = (event.clientX - rect.left) / rect.width;
            }
    
            let minValue: number = 100;
            let maxValue: number = 900;
            let cssVariable: string = '--ytuc';
    
            if (font === "kontur") {
                minValue = 95;
                maxValue = 380;
                cssVariable = '--opsz';
            }
    
            const mappedValue = Math.ceil(minValue + (xPosition * (maxValue - minValue)));
            containerRef.current.style.setProperty(cssVariable, `${mappedValue}`);
        }
    }, [font]);

    return (
        <div className="h-[calc(100vh-12rem)] sm:h-[calc(100vh-4rem)] min-h-[36rem]">
            <div className="grid grid-cols-3 w-full p-4">
                <div className="flex justify-start">
                    <Button variant="ghost" size="icon" className="w-fit py-2 z-10" onClick={toggleFont}>
                        {font === 'plakat' ? <span>Kontur</span> : <span>Plakat</span>}
                    </Button>
                </div>
                <div className="flex justify-center">
                    <Button variant="ghost" onClick={() => setTextType("uppercase")} className={`${textType === "uppercase" ? "text-muted-foreground" : ""} z-10`}>
                        <span className="sm:hidden">Upper</span>
                        <span className="hidden sm:block">Uppercase</span>
                    </Button>

                    <Button variant="ghost" onClick={() => setTextType("lowercase")} className={`${textType === "lowercase" ? "text-muted-foreground" : ""} z-10`}>
                        <span className="sm:hidden">Lower</span>
                        <span className="hidden sm:block">Lowercase</span>
                    </Button>

                    <Button variant="ghost" onClick={() => setTextType("miscellaneous")} className={`${textType === "miscellaneous" ? "text-muted-foreground" : ""} z-10`}>
                        <span className="sm:hidden">Misc</span>
                        <span className="hidden sm:block">Miscellaneous</span>
                    </Button>
                </div>
                <div className="flex justify-end">
                </div>
            </div>
            <div className="w-full h-[calc(100vh-19.5rem)] sm:h-[calc(100vh-11.5rem)] px-4 py-6 min-h-[28.5rem]">
                <div ref={containerRef} className={`flex items-center justify-center w-full h-full text-center ${font === 'plakat' ? 'font-ruder dynamic-font-ruder' : 'font-kontur dynamic-font-kontur'}`}
                    onMouseMove={handleMovement}
                    onTouchMove={handleMovement}>
                    <p className="leading-none whitespace-nowrap" ref={textRef} style={{ overflowAnchor: 'none'}} >
                        {getText()}
                    </p>
                </div>
            </div>
            <div className="p-4 text-sm text-center text-muted-foreground">*Move the mouse or drag your finger horizontally.</div>
        </div>
    );
}