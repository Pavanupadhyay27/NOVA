'use client';

import React, { useEffect, useState, useRef } from 'react';

interface SmoothCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function SmoothCounter({
  value,
  duration = 900,
  className,
}: SmoothCounterProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Extract numbers from value (handles numbers with commas like 48,000 and decimals like 5.8)
    const numberRegex = /(\d[\d,]*(?:\.\d+)?)/g;
    const matches = value.match(numberRegex);

    if (!matches || matches.length === 0) {
      setDisplayValue(value);
      return;
    }

    // Parse each numeric target
    const targets = matches.map((m) => {
      const clean = m.replace(/,/g, '');
      const hasDecimals = clean.includes('.');
      const val = parseFloat(clean);
      const isCommaFormatted = m.includes(',');
      return {
        val: isNaN(val) ? 0 : val,
        hasDecimals,
        decimalPlaces: hasDecimals ? clean.split('.')[1].length : 0,
        isCommaFormatted,
      };
    });

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);

      let matchIndex = 0;
      const currentString = value.replace(numberRegex, () => {
        const t = targets[matchIndex];
        matchIndex++;
        if (!t) return '';
        const currentNum = t.val * eased;
        let formattedNum = t.hasDecimals
          ? currentNum.toFixed(t.decimalPlaces)
          : Math.round(currentNum).toString();

        if (t.isCommaFormatted) {
          const parts = formattedNum.split('.');
          parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          formattedNum = parts.join('.');
        }
        return formattedNum;
      });

      setDisplayValue(currentString);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration]);

  return <span className={className}>{displayValue}</span>;
}
