'use strict';
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './AmazonPpcProfitSimulator.module.css';

type AdFormat = 'products' | 'brands' | 'display';

interface FormatConfig {
  name: string;
  badge: string;
  insight: string;
  defaultMultiplier: number;
}

const FORMAT_CONFIGS: Record<AdFormat, FormatConfig> = {
  products: {
    name: 'Sponsored Products (Exact Keyword Match)',
    badge: 'Top-of-Search Ad 1',
    insight: 'Targets high-intent consumer keywords (e.g., "pure shilajit resin for stamina") with +50% bid modifier on Top-of-Search placement.',
    defaultMultiplier: 1.0
  },
  brands: {
    name: 'Sponsored Brands Video in Search',
    badge: 'Headline Video Unit',
    insight: 'Captures 74% higher CTR than static image units with auto-playing 15-second product demonstration video directly in customer search results.',
    defaultMultiplier: 1.25
  },
  display: {
    name: 'Sponsored Display (ASIN Defense & Off-Amazon Retargeting)',
    badge: 'Product Detail Page Defense',
    insight: 'Places defensive ad banners directly underneath your competitors’ "Add to Cart" box to intercept their high-intent customers.',
    defaultMultiplier: 0.85
  }
};

export default function AmazonPpcProfitSimulator() {
  const [format, setFormat] = useState<AdFormat>('products');
  const [baseBid, setBaseBid] = useState<number>(18);
  const [topOfSearchMultiplier, setTopOfSearchMultiplier] = useState<number>(45);

  const cfg = FORMAT_CONFIGS[format];
  const effectiveCpc = ((baseBid * (1 + topOfSearchMultiplier / 100)) * cfg.defaultMultiplier).toFixed(2);
  const simulatedAcos = (14.2 + (Number(effectiveCpc) * 0.28)).toFixed(1);
  const simulatedTacos = (Number(simulatedAcos) * 0.38).toFixed(1);
  const buyBoxRate = Math.min(99.8, 94.0 + (topOfSearchMultiplier * 0.1)).toFixed(1);

  return (
    <div className={styles.simulatorContainer}>
      <div className={styles.header}>
        <div className={styles.badge}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          Amazon Advertising Cockpit
        </div>
        <h2 className={styles.title}>Simulate ACoS Optimization &amp; Buy Box Dominance</h2>
        <p className={styles.subtitle}>
          Test bid adjustments across Sponsored Products, Sponsored Brands Video, and ASIN Retargeting
          to see how our algorithmic placement multipliers maximize organic rank velocity while maintaining low TACoS.
        </p>
      </div>

      <div className={styles.adFormatSelector}>
        <button
          className={`${styles.formatBtn} ${format === 'products' ? styles.activeFormat : ''}`}
          onClick={() => setFormat('products')}
        >
          Sponsored Products
        </button>
        <button
          className={`${styles.formatBtn} ${format === 'brands' ? styles.activeFormat : ''}`}
          onClick={() => setFormat('brands')}
        >
          Sponsored Brands Video
        </button>
        <button
          className={`${styles.formatBtn} ${format === 'display' ? styles.activeFormat : ''}`}
          onClick={() => setFormat('display')}
        >
          Sponsored Display &middot; ASIN Defense
        </button>
      </div>

      <div className={styles.layoutGrid}>
        {/* Left: Simulated Amazon SERP Tile */}
        <div className={styles.previewCard}>
          <div>
            <div className={styles.serpTopBar}>
              <span className={styles.sponsoredPill}>Sponsored &middot; {cfg.badge}</span>
              <span className={styles.bestSellerBadge}>#1 Best Seller</span>
            </div>

            <div className={styles.productDisplay}>
              <div className={styles.productThumbBox}>
                <Image
                  src="/images/heed_1.png"
                  alt="Heed Ayurveda product on Amazon"
                  width={90}
                  height={90}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <div className={styles.productDetails}>
                <h3>Heed Organics Pure Himalayan Shilajit Resin (20g) with Fulvic Acid</h3>
                <div className={styles.ratingRow}>
                  <span>&#9733;&#9733;&#9733;&#9733;&#9733; 4.8</span>
                  <span style={{ color: '#64748B', fontWeight: 500 }}>(1,842 ratings)</span>
                </div>
                <div>
                  <span className={styles.priceTag}>₹1,249</span>
                  <span className={styles.primeBadge}>prime FREE Next-Day</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.campaignTelemetry}>
            <div className={styles.telemetryMiniItem}>
              <span className={styles.val}>{simulatedAcos}%</span>
              <span className={styles.lbl}>Campaign ACoS</span>
            </div>
            <div className={styles.telemetryMiniItem}>
              <span className={styles.val}>{simulatedTacos}%</span>
              <span className={styles.lbl}>Target TACoS</span>
            </div>
            <div className={styles.telemetryMiniItem}>
              <span className={styles.val}>{buyBoxRate}%</span>
              <span className={styles.lbl}>Buy Box Share</span>
            </div>
          </div>
        </div>

        {/* Right: Controls & Optimization Logic */}
        <div className={styles.controlCard}>
          <div className={styles.sliderBlock}>
            <div className={styles.sliderRow}>
              <span>Base Keyword Bid</span>
              <span className={styles.sliderRowVal}>₹{baseBid}.00</span>
            </div>
            <input
              type="range"
              min={6}
              max={40}
              step={1}
              value={baseBid}
              onChange={(e) => setBaseBid(Number(e.target.value))}
              className={styles.rangeInput}
            />
          </div>

          <div className={styles.sliderBlock}>
            <div className={styles.sliderRow}>
              <span>Top-of-Search (First Page) Modifier</span>
              <span className={styles.sliderRowVal}>+{topOfSearchMultiplier}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={150}
              step={5}
              value={topOfSearchMultiplier}
              onChange={(e) => setTopOfSearchMultiplier(Number(e.target.value))}
              className={styles.rangeInput}
            />
          </div>

          <div className={styles.strategicInsight}>
            <h4>Copilot Strategic Engine Insight:</h4>
            <p>
              Effective CPC is calculated at <strong>₹{effectiveCpc}</strong>. Our dayparting scripts dynamically throttle bids during low-converting hours (1 AM - 5 AM) and deploy peak budget when desktop conversion velocity peaks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
