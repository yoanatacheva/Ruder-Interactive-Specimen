'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { RotateCcw, Minus, AlignCenter} from "lucide-react";

export default function Play() {
    const [font, setFont] = useState("plakat");
    const [selectedTextType, setSelectedTextType] = useState<"line" | "paragraph" | null>(null);
    const [textSize, setTextSize] = useState(100);
    const [lineHeight, setLineHeight] = useState(1);
    const [letterSpacing, setLetterSpacing] = useState(0);
    const [sliderLetterSpacing, setSliderLetterSpacing] = useState(0);
    const [isSingleLine, setIsSingleLine] = useState(true);
    const [displayedText, setDisplayedText] = useState('');
    const [typingComplete, setTypingComplete] = useState(false);
    const [isTypingStarted, setIsTypingStarted] = useState(false);
    const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const textRef = useRef<HTMLSpanElement>(null);
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
            setTextSize(newFontSize);
        }
    }, []);

    const checkIfSingleLine = useCallback(() => {
        if (textRef.current) {
            const computedStyle = window.getComputedStyle(textRef.current);
            const lineHeightValue = parseFloat(computedStyle.lineHeight);
            const fontSizeValue = parseFloat(computedStyle.fontSize);

            const lineHeightPx = isNaN(lineHeightValue) ? fontSizeValue * 1.2 : lineHeightValue;

            const scrollHeight = textRef.current.scrollHeight;
            const lines = Math.round(scrollHeight / lineHeightPx);
            setIsSingleLine(lines <= 1);
        }
    }, []);

    const startTypingEffect = useCallback(() => {
        const messages = [
            'Art\u00A0Basel',
            'AGI Open',
            'Kunsthalle Basel',
            'Kunstmuseum Basel',
            'Emil Ruder',
            'Basel Academy of Art and Design',
            'Lineto Type Foundry',
        ];
        const randomIndex = Math.floor(Math.random() * messages.length);
        const fullText = messages[randomIndex];

        let index = 0;
        const typingSpeed = 100;

        if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
        }

        typingIntervalRef.current = setInterval(() => {
            if (index < fullText.length) {
                setDisplayedText((prev) => prev + fullText[index]);
                index++;
            } else {
                clearInterval(typingIntervalRef.current!);
                setTypingComplete(true);
            }
        }, typingSpeed);
    }, []);

    const setCaretToEnd = (el: HTMLElement) => {
        const range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        const sel = window.getSelection();
        if (sel) {
            sel.removeAllRanges();
            sel.addRange(range);
        }
    };
    
    const isSmallScreen = () => {
        return typeof window !== 'undefined' && window.innerWidth < 768;
    };

    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !isTypingStarted) {
                    setIsTypingStarted(true);
                }
            });
        };
    
        const observerOptions = {
            root: null,
            threshold: 0.5
        };
    
        const currentContainer = containerRef.current;
        const observer = new IntersectionObserver(observerCallback, observerOptions);
    
        if (currentContainer) {
            observer.observe(currentContainer);
        }
    
        return () => {
            if (currentContainer) {
                observer.unobserve(currentContainer);
            }
        };
    }, [isTypingStarted]);

    useEffect(() => {
        if (isTypingStarted && !typingComplete) {
            if (textRef.current && !isSmallScreen()) {
                textRef.current.focus();
            }
            startTypingEffect();
        }
    }, [startTypingEffect, typingComplete, isTypingStarted]);

    useEffect(() => {
        if (textRef.current && !isSmallScreen()) {
            textRef.current.focus();
        }
    }, []);

    useEffect(() => {
        adjustFontSize();
        window.addEventListener('resize', adjustFontSize);
        return () => window.removeEventListener('resize', adjustFontSize);
    }, [adjustFontSize]);

    useEffect(() => {
        adjustFontSize();
        if (!typingComplete && textRef.current && document.activeElement === textRef.current) {
            setCaretToEnd(textRef.current);
        }
    }, [font, displayedText, typingComplete, adjustFontSize]);

    useEffect(() => {
        checkIfSingleLine();
    }, [checkIfSingleLine, displayedText, textSize, letterSpacing, lineHeight, font, selectedTextType]);

    useEffect(() => {
        const relativeLetterSpacing = sliderLetterSpacing * (textSize / 100);
        setLetterSpacing(relativeLetterSpacing);
    }, [textSize, sliderLetterSpacing]);

    const handleInput = () => {
        setTypingComplete(true);
        adjustFontSize();
        setSelectedTextType(null);
    };

    const toggleFont = () => {
        setFont(prevFont => (prevFont === 'plakat' ? 'kontur' : 'plakat'));
    };

    const setLineText = () => {
        if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
        }
        setDisplayedText('Art\u00A0Basel');
        setLineHeight(1);
        setLetterSpacing(0);
        setSliderLetterSpacing(0);
        setSelectedTextType('line');
        setTypingComplete(true);
    };

    const setParagraphText = () => {
        if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
        }
        setDisplayedText('Art Basel is an international art fair with events in Basel, Miami Beach, and Hong Kong.');
        setLineHeight(1);
        setLetterSpacing(0);
        setSliderLetterSpacing(0);
        setSelectedTextType('paragraph');
        setTypingComplete(true);
    };

    const resetText = () => {
        if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
        }
        setDisplayedText('');
        setLineHeight(1);
        setLetterSpacing(0);
        setSliderLetterSpacing(0);
        setFont('plakat');
        setSelectedTextType(null);
        setTypingComplete(false);
        setIsTypingStarted(false);
    };
    
    const handleTextSizeChange = useCallback((value: number[]) => {
        const newFontSize = value[0];
        setTextSize(newFontSize);
    }, []);

    const handleLineHeightChange = useCallback((value: number[]) => {
        if (isSingleLine) return;
        setLineHeight(value[0]);
    }, [isSingleLine]);

    const handleLetterSpacingChange = useCallback((value: number[]) => {
        const newSliderLetterSpacing = value[0];
        setSliderLetterSpacing(newSliderLetterSpacing);
    }, []);

    return (
        <div className="h-[calc(100vh-4rem)] min-h-[36rem]">
            <div className="grid grid-cols-3 w-full p-4">
                {/* Left column: Font toggle button */}
                <div className="flex justify-start">
                    <Button variant="ghost" size="icon" className="w-fit py-2 z-10" onClick={toggleFont}>
                        {font === 'plakat' ? <span>Kontur</span> : <span>Plakat</span>}
                    </Button>
                </div>

                {/* Center column: Line and Paragraph buttons */}
                <div className="flex justify-center">
                    <Button
                        variant="ghost"
                        className={`flex items-center z-10 ${selectedTextType === 'line' ? 'text-muted-foreground' : ''}`}
                        onClick={setLineText}
                    >
                        <Minus strokeWidth={1} className="w-4 h-4 m-2" />
                        <span>Line</span>
                    </Button>
                    <Button
                        variant="ghost"
                        className={`flex items-center z-10 ${selectedTextType === 'paragraph' ? 'text-muted-foreground' : ''}`}
                        onClick={setParagraphText}
                    >
                        <AlignCenter strokeWidth={1} className="w-4 h-4 m-2" />
                        <span>Paragraph</span>
                    </Button>
                </div>

                {/* Right column: Refresh button */}
                <div className="flex justify-end">
                    <Button variant="ghost" size="icon" aria-label="Refresh text" className="z-10 justify-end" onClick={resetText}>
                        <RotateCcw strokeWidth={1} className="w-4 h-4" />
                    </Button>
                </div>
            </div>
            <div className="w-full h-[calc(100vh-15.75rem)] md:h-[calc(100vh-12.75rem)] min-h-[24.25rem] p-4">
                <div ref={containerRef} className="flex items-center justify-center w-full h-full overflow-hidden"> 
                    <span
                        ref={textRef}
                        className={`flex leading-none items-center justify-center text-center bg-transparent outline-none tracking-wide ${font === 'plakat' ? 'font-ruder' : 'font-kontur'}`}
                        style={{ whiteSpace: 'pre-wrap', overflowAnchor: 'none', fontSize: `${textSize}px`, lineHeight: lineHeight, letterSpacing: `${letterSpacing}px` }}
                        contentEditable
                        suppressContentEditableWarning={true}
                        onInput={handleInput}
                    >
                        {displayedText}
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 py-2 md:py-6 px-4">
                <div className="flex items-center space-x-4">
                    <span className="w-6 text-center">TT</span>
                    <div className="flex-grow mx-4">
                        <Slider
                            min={10}
                            max={1000}
                            value={[textSize]}
                            onValueChange={handleTextSizeChange}
                            className="cursor-pointer"
                        />
                    </div>
                    <span className="w-8 md:w-6 text-right">{textSize.toFixed(0)}</span>
                </div>
                <div className="flex items-center space-x-4">
                    <span className={`w-6 text-center ${isSingleLine ? 'opacity-50' : ''}`}>AA</span>
                    <div className="flex-grow mx-4">
                        <Slider
                            min={0.8}
                            max={1.6}
                            step={0.01}
                            value={[lineHeight]}
                            onValueChange={handleLineHeightChange}
                            className={isSingleLine ? 'opacity-50 cursor-default' : 'cursor-pointer'}
                        />
                    </div>
                    <span className={`w-8 md:w-6  text-right ${isSingleLine ? 'opacity-50' : ''}`}>{lineHeight.toFixed(2)}</span>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="w-6 text-center">AV</span>
                    <div className="flex-grow mx-4">
                        <Slider
                            min={-10}
                            max={30}
                            step={0.01}
                            value={[sliderLetterSpacing]}
                            onValueChange={handleLetterSpacingChange}
                            className="cursor-pointer"
                        />
                    </div>
                    <span className="w-8 md:w-6 text-right">{sliderLetterSpacing.toFixed(0)}</span>
                </div>
            </div>
        </div>
    );
}