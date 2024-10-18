'use client';

import React, { useMemo } from "react";

interface TypographicLinesProps {
  ascender: number;
  capHeight: number;
  xHeight: number;
  baseline: number;
  descender: number;
  charWidth: number;
  containerWidth: number;
}

export default function TypographicLines({ascender, capHeight, xHeight, baseline, descender, charWidth, containerWidth}: TypographicLinesProps) {
  const totalHeight = (ascender - descender);

  const horizontalLines = useMemo(() => [
    { name: 'Ascender', position: 0 },
    { name: 'Cap Height', position: ((ascender - capHeight) / totalHeight) * 100 },
    { name: 'X-Height', position: ((ascender - xHeight) / totalHeight) * 100 },
    { name: 'Baseline', position: ((ascender - baseline) / totalHeight) * 100 },
    { name: 'Descender', position: 100 },
  ], [ascender, capHeight, xHeight, baseline, totalHeight]);

  const verticalLines = useMemo(() => [
    { name: 'Left', position: ((containerWidth / 2 - charWidth / 2) / containerWidth) * 100 },
    { name: 'Right', position: ((containerWidth / 2 + charWidth / 2) / containerWidth) * 100 },
  ], [charWidth, containerWidth]);

  return (
    <div className="absolute inset-0 font-helvetica">
        {horizontalLines.map((line) => (
            <div key={line.name} className="absolute w-full border" style={{ top: `${line.position}%` }}>
                <span className="absolute text-[8px] sm:text-xs">{line.name}</span>
            </div>
        ))}
        {verticalLines.map((line) => (
            <div key={line.name} className="absolute h-full border" style={{ left: `${line.position}%` }}></div>
        ))}
    </div>
  );
}
