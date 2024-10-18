'use client'

import React, { useState, useEffect, useRef } from 'react';

export default function RuderAnimation() {
    const textContent = "Ruder Plakat ";
    const textContent2 = "Ruder Kontur ";
    const [numRows, setNumRows] = useState(0);
    const spanRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const calculateRows = () => {
            if (spanRef.current) {
                const fontHeight = 96;
                const screenHeight = window.innerHeight - 64;
                const rows = Math.floor(screenHeight / fontHeight);
                setNumRows(rows);
            }
        };

        calculateRows();
        window.addEventListener('resize', calculateRows);

        return () => {
            window.removeEventListener('resize', calculateRows);
        };
    }, []);

    return (
        <div className="overflow-hidden pt-16">
            <div className="flex flex-col text-8xl">
                <div ref={spanRef} className="invisible absolute">
                    <span>{textContent}</span>
                </div>
                {Array.from({ length: numRows }).map((_, index) => (
                    <div key={index} className={`flex tracking-wide ${index % 2 === 0 ? 'animate-scroll-left font-ruder' : 'animate-scroll-right font-kontur dynamic-font-kontur '} w-max`} style={{ '--opsz': '300' } as React.CSSProperties}>
                        <span>{index % 2 === 0 ? textContent.repeat(20) : textContent2.repeat(20)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}