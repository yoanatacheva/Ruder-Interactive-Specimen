'use client'

import { useEffect, useRef, useCallback, useState } from 'react';

export default function BaselText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [fontSize, setFontSize] = useState('16px');
  const [numberFontSize, setNumberFontSize] = useState('16px');
  const [showNumber, setShowNumber] = useState(false);
  const [temperature, setTemperature] = useState('N');
  const [ytucValue, setYtucValue] = useState(100);

  const adjustFontSize = useCallback(() => {
    if (textRef.current && containerRef.current) {
      setShowNumber(false);
      const containerWidth = containerRef.current.offsetWidth;

      let testSize = containerWidth;
      let low = 0;
      let high = testSize;

      while (low <= high) {
        testSize = Math.floor((low + high) / 2);
        textRef.current.style.fontSize = `${testSize}px`;

        const textWidth = textRef.current.scrollWidth;

        if (textWidth <= containerWidth) {
          low = testSize + 1;
        } else {
          high = testSize - 1;
        }
      }

      const newFontSize = Math.max(high, 16);
      setFontSize(`${newFontSize}px`);
      setNumberFontSize(`${newFontSize / 6}px`);
      setShowNumber(true);
    }
  }, []);

  const fetchTemperature = useCallback(async () => {
    try {
      const apiKey = '3248725198ff0e53fc4834c723b247cd';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Basel,ch&units=metric&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error(`${response.statusText}`);
      }

      const data = await response.json();
      
      if (data && data.main && typeof data.main.temp === 'number') {
        const rawTemp = data.main.temp;
        const temp = Math.round(rawTemp);
        setTemperature(temp.toString());
      
        let ytuc;
        if (rawTemp <= 0) {
          ytuc = 100;
        } else if (rawTemp >= 25) {
          ytuc = 700;
        } else {
          ytuc = 100 + (600 * (rawTemp / 25));
        }
        setYtucValue(Math.round(ytuc));
      } else {
        throw new Error('Temperature data is not available');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setTemperature('N');
    }
  }, []);

  useEffect(() => {
    adjustFontSize();
    fetchTemperature();

    setTimeout(() => {
      adjustFontSize();
    }, 200);

    window.addEventListener('resize', adjustFontSize);
    return () => window.removeEventListener('resize', adjustFontSize);
  }, [adjustFontSize, fetchTemperature]);

  return (
    <div className="flex items-center justify-center w-full py-10 px-4 overflow-hidden">
      <div ref={containerRef} className="w-full h-full font-ruder dynamic-font-ruder" style={{ '--ytuc': ytucValue } as React.CSSProperties}>
        <h1 ref={textRef} className="leading-none tracking-tide text-center relative" style={{ fontSize }}>
          BASEL
          {showNumber && (<span className="absolute top-1/2 right-0 transform -translate-y-1/2" style={{ fontSize: numberFontSize }}>{temperature}°</span>)}
        </h1>
      </div>
    </div>
  );
}