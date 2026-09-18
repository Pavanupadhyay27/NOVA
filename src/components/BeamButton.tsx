'use client';

import React from 'react';
import Link from 'next/link';
import styles from './BeamButton.module.css';

export interface BeamButtonProps {
  href?: string;
  label?: string;
  children?: React.ReactNode;
  arrow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  wrapperClassName?: string;
  style?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export default function BeamButton({
  href,
  label,
  children,
  arrow = true,
  size = 'md',
  fullWidth = false,
  className,
  wrapperClassName,
  style,
  wrapperStyle,
  onClick,
  type = 'button',
  disabled = false,
  target,
  rel,
  ariaLabel,
}: BeamButtonProps) {
  const content = (
    <>
      <span className={styles.shimmer} />
      <span className={styles.gloss} />
      <span className={styles.btnText}>{children ?? label}</span>
      {arrow && <span className={styles.arrow}>→</span>}
    </>
  );

  const wrapperClasses = [
    styles.beamWrapper,
    styles[size],
    fullWidth ? styles.fullWidth : '',
    wrapperClassName ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const innerClasses = [
    styles.innerBtn,
    fullWidth ? styles.innerFullWidth : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClasses} style={wrapperStyle}>
      <div className={styles.glowAmbient} />
      <div className={styles.beamSpin} />
      {href ? (
        <Link
          href={href}
          className={innerClasses}
          style={style}
          onClick={onClick}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
        >
          {content}
        </Link>
      ) : (
        <button
          type={type}
          className={innerClasses}
          style={style}
          onClick={onClick}
          disabled={disabled}
          aria-label={ariaLabel}
        >
          {content}
        </button>
      )}
    </div>
  );
}
