'use client';

import React, { useState } from 'react';
import styles from './LocalSeoGridSimulator.module.css';

interface PinNode {
  index: number;
  rank: number;
  corridor: string;
  pinCode: string;
  monthlySearches: number;
  phoneCallShare: string;
}

const BHUBANESWAR_GRID: PinNode[] = [
  { index: 1, rank: 1, corridor: 'Patia / Infocity Tech Hub', pinCode: '751024', monthlySearches: 4200, phoneCallShare: '92%' },
  { index: 2, rank: 1, corridor: 'KIIT Square Corridor', pinCode: '751024', monthlySearches: 3800, phoneCallShare: '89%' },
  { index: 3, rank: 1, corridor: 'Chandrasekharpur Commercial Hub', pinCode: '751016', monthlySearches: 3100, phoneCallShare: '91%' },
  { index: 4, rank: 2, corridor: 'Sailashree Vihar Residential Area', pinCode: '751021', monthlySearches: 1800, phoneCallShare: '78%' },
  { index: 5, rank: 1, corridor: 'Kalarahanga & Nandan Kanan Road', pinCode: '751024', monthlySearches: 1600, phoneCallShare: '84%' },

  { index: 6, rank: 1, corridor: 'Jaydev Vihar Metro Junction', pinCode: '751013', monthlySearches: 5100, phoneCallShare: '94%' },
  { index: 7, rank: 1, corridor: 'Nayapalli Commercial Spine', pinCode: '751012', monthlySearches: 4600, phoneCallShare: '93%' },
  { index: 8, rank: 1, corridor: 'IRC Village VIP Enclave', pinCode: '751015', monthlySearches: 2900, phoneCallShare: '88%' },
  { index: 9, rank: 2, corridor: 'CRP Square Transit Corridor', pinCode: '751015', monthlySearches: 2400, phoneCallShare: '81%' },
  { index: 10, rank: 1, corridor: 'Acharya Vihar Science Hub', pinCode: '751022', monthlySearches: 2200, phoneCallShare: '86%' },

  { index: 11, rank: 1, corridor: 'Saheed Nagar Retail Corridor', pinCode: '751007', monthlySearches: 5800, phoneCallShare: '96%' },
  { index: 12, rank: 1, corridor: 'Janpath Commercial Promenade', pinCode: '751001', monthlySearches: 6200, phoneCallShare: '95%' },
  { index: 13, rank: 1, corridor: 'Master Canteen & Station Plaza', pinCode: '751001', monthlySearches: 4900, phoneCallShare: '92%' },
  { index: 14, rank: 2, corridor: 'Kharvela Nagar Business District', pinCode: '751001', monthlySearches: 3400, phoneCallShare: '85%' },
  { index: 15, rank: 1, corridor: 'Bapuji Nagar Gold & Electronics', pinCode: '751009', monthlySearches: 4100, phoneCallShare: '90%' },

  { index: 16, rank: 1, corridor: 'Rasulgarh Industrial & Auto Hub', pinCode: '751010', monthlySearches: 3900, phoneCallShare: '87%' },
  { index: 17, rank: 2, corridor: 'Cuttack-Puri Arterial Bypass', pinCode: '751010', monthlySearches: 2700, phoneCallShare: '80%' },
  { index: 18, rank: 1, corridor: 'Mancheswar Industrial Estate', pinCode: '751017', monthlySearches: 2500, phoneCallShare: '88%' },
  { index: 19, rank: 2, corridor: 'Palasuni Regional Transport Gate', pinCode: '751010', monthlySearches: 2100, phoneCallShare: '79%' },
  { index: 20, rank: 1, corridor: 'Laxmisagar Urban Sector', pinCode: '751006', monthlySearches: 2600, phoneCallShare: '86%' },

  { index: 21, rank: 1, corridor: 'Khandagiri & Udayagiri Corridor', pinCode: '751030', monthlySearches: 3600, phoneCallShare: '91%' },
  { index: 22, rank: 1, corridor: 'Baramunda Inter-State Bus Hub', pinCode: '751003', monthlySearches: 3300, phoneCallShare: '89%' },
  { index: 23, rank: 2, corridor: 'Dumduma High-Density Township', pinCode: '751019', monthlySearches: 2200, phoneCallShare: '82%' },
  { index: 24, rank: 1, corridor: 'Pokhariput Airport South Sector', pinCode: '751020', monthlySearches: 2800, phoneCallShare: '87%' },
  { index: 25, rank: 1, corridor: 'Bhitarkanika & Lingaraj Heritage', pinCode: '751002', monthlySearches: 2400, phoneCallShare: '85%' },
];

export default function LocalSeoGridSimulator() {
  const [selectedPin, setSelectedPin] = useState<PinNode>(BHUBANESWAR_GRID[10]); // Saheed Nagar

  return (
    <section className={styles.simSection} id="grid-simulator">
      <div className="container">
        <div className={styles.simCard}>
          <div className={styles.simHeader}>
            <span className={styles.simEyebrow}>HYPERLOCAL GEO-GRID TELEMETRY</span>
            <h2 className={styles.simTitle}>
              Bhubaneswar Map 3-Pack Rank Tracker
            </h2>
            <p className={styles.simSub}>
              Google Maps rankings change every 500 meters. Click any coordinate below on our 5x5 geo-grid to inspect live Map 3-Pack rank dominance across Bhubaneswar pin codes.
            </p>
          </div>

          <div className={styles.gridSimulatorWrapper}>
            {/* Visual 5x5 Geo-Grid */}
            <div className={styles.mapVisual}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                📍 Bhubaneswar Urban 5x5 Geo-Radius
              </span>

              <div className={styles.grid5x5}>
                {BHUBANESWAR_GRID.map((pin) => {
                  const isSelected = selectedPin.index === pin.index;
                  const pinColorClass = pin.rank === 1 ? styles.pinGreen : pin.rank === 2 ? styles.pinYellow : styles.pinOrange;
                  return (
                    <button
                      key={pin.index}
                      onClick={() => setSelectedPin(pin)}
                      className={`${styles.gridPin} ${pinColorClass}`}
                      style={{
                        outline: isSelected ? '3px solid #0B2093' : 'none',
                        outlineOffset: '2px',
                      }}
                      title={`${pin.corridor} — Rank #${pin.rank}`}
                    >
                      #{pin.rank}
                    </button>
                  );
                })}
              </div>

              <div className={styles.mapLegend}>
                <div>
                  <span className={styles.legendDot} style={{ background: '#10B981' }} />
                  <span>Rank #1 (Absolute 3-Pack Leader)</span>
                </div>
                <div>
                  <span className={styles.legendDot} style={{ background: '#F59E0B' }} />
                  <span>Rank #2 (3-Pack Verified)</span>
                </div>
              </div>
            </div>

            {/* Selected Pin Telemetry */}
            <div className={styles.telemetryPanel}>
              <div className={styles.activePinInfo}>
                <span className={styles.pinStatusBadge}>
                  ✓ Active Map 3-Pack Dominance
                </span>
                <h3 className={styles.pinLocationName}>{selectedPin.corridor}</h3>
                <div style={{ fontSize: '13px', color: '#FCD34D', fontWeight: 700 }}>
                  PIN Code: {selectedPin.pinCode} · Bhubaneswar Corridor
                </div>
              </div>

              <div className={styles.statRow}>
                <span className={styles.statLabel}>Google Map 3-Pack Ranking</span>
                <span className={styles.statVal} style={{ color: '#10B981' }}>#{selectedPin.rank} in Bhubaneswar</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Monthly &quot;Near Me&quot; Searches</span>
                <span className={styles.statVal}>{selectedPin.monthlySearches.toLocaleString()} Queries</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Direct Phone Call Capture Rate</span>
                <span className={styles.statVal}>{selectedPin.phoneCallShare}</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Driving Direction Requests</span>
                <span className={styles.statVal}>+340% Higher Than Competitors</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Review Sentiment Rating</span>
                <span className={styles.statVal} style={{ color: '#FCD34D' }}>4.9★ (380+ Verified Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
