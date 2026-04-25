"use client"

import { useEffect, useState } from "react"
import { TapeReel } from "@/components/tape-reel"

export function LoadingScreen() {
  const [hidden, setHidden] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const DURATION = 950
    const tick = (t: number) => {
      const pct = Math.min(100, Math.round(((t - start) / DURATION) * 100))
      setProgress(pct)
      if (pct < 100) raf = requestAnimationFrame(tick)
      else setTimeout(() => setHidden(true), 120)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  if (hidden) return null

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] flex items-center justify-center bg-casing transition-opacity duration-500"
      style={{ opacity: progress >= 100 ? 0 : 1, pointerEvents: progress >= 100 ? "none" : "auto" }}
    >
      <div className="w-full max-w-xl px-6">
        {/* Reels */}
        <div className="flex items-center justify-between gap-8 mb-8">
          <TapeReel size={110} speed="fast" />
          <div
            className="flex-1 h-2 relative"
            style={{
              background:
                "repeating-linear-gradient(90deg, #3a332d 0 3px, #1a1613 3px 6px)",
              border: "1px solid #0e0b09",
            }}
            aria-hidden
          />
          <TapeReel size={110} speed="fast" />
        </div>

        {/* VU sweep */}
        <div className="mb-6 border border-brass/40 bg-cream/95 paper-grain">
          <svg viewBox="0 0 300 28" className="w-full h-7 block">
            <line x1="10" y1="24" x2="290" y2="24" stroke="#2a2420" strokeWidth="0.6" />
            {Array.from({ length: 21 }).map((_, i) => (
              <line
                key={i}
                x1={10 + i * 14}
                y1="24"
                x2={10 + i * 14}
                y2={i % 5 === 0 ? 14 : 18}
                stroke={i > 15 ? "#7a1f2b" : "#2a2420"}
                strokeWidth="0.6"
              />
            ))}
            <line
              x1={10 + (progress / 100) * 280}
              y1="24"
              x2={10 + (progress / 100) * 280}
              y2="6"
              stroke="#7a1f2b"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle
              cx={10 + (progress / 100) * 280}
              cy="24"
              r="2.5"
              fill="#7a1f2b"
            />
          </svg>
        </div>

        {/* Readout */}
        <div className="flex items-center justify-between typewriter text-[11px] text-brass mb-3">
          <span className="flex items-center gap-2">
            <span
              className="inline-block h-2 w-2 rounded-full bg-oxblood led-on"
              aria-hidden
            />
            NOW LOADING ▸ SIDE A
          </span>
          <span>
            {String(progress).padStart(3, "0")}
            <span className="opacity-60">/100</span>
          </span>
        </div>

        {/* Student info */}
        <div
          className="typewriter text-[11px] text-cream/70 border-t border-brass/30 pt-3"
          style={{ letterSpacing: "0.14em" }}
        >
          COMP 009 · OOP · BSIT 2-1
        </div>
      </div>
    </div>
  )
}
