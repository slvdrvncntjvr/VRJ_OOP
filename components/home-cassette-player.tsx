"use client"

import { useMemo } from "react"
import { TapeReel } from "@/components/tape-reel"
import { Button } from "@/components/ui/button"
import { useSiteAudio } from "@/components/site-audio"

export function HomeCassettePlayer() {
  const { isPlaying, currentTime, duration, togglePlay, stop } = useSiteAudio()
  const displayDuration = duration > 0 ? duration : 207

  const progress = useMemo(() => {
    if (!displayDuration) return 0
    return Math.min(100, (currentTime / displayDuration) * 100)
  }, [currentTime, displayDuration])

  function formatTime(value: number) {
    if (!Number.isFinite(value) || value <= 0) return "00:00"
    const mins = Math.floor(value / 60)
    const secs = Math.floor(value % 60)
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
  }

  return (
    <div className="bezel-dark p-4 sm:p-5 space-y-4" aria-label="Cassette player">
      <div className="flex items-center justify-between typewriter text-[10px] text-brass">
        <span>CASSETTE PLAYER</span>
        <span>ORAS MAKINA</span>
      </div>

      <div className="flex items-center gap-3 border border-brass/20 p-2.5">
        <img
          src="/Oras%20Makina.jpg"
          alt="Oras Makina cover"
          className="h-12 w-12 object-cover border border-brass/40"
        />
        <div className="min-w-0">
          <p className="font-serif text-[15px] text-cream leading-tight truncate">
            Oras Makina
          </p>
          <p className="typewriter text-[10px] text-cream/60">RUN TIME · 03:27</p>
        </div>
      </div>

      <div className="relative flex items-center justify-around gap-4 py-3 border border-brass/20">
        <TapeReel size={94} speed={isPlaying ? "fast" : "normal"} />
        <div
          aria-hidden
          className="absolute left-[31%] right-[31%] top-1/2 -translate-y-1/2 h-[3px]"
          style={{
            background:
              "linear-gradient(180deg, #2a2420 0%, #0e0b09 50%, #2a2420 100%)",
          }}
        />
        <TapeReel size={94} speed={isPlaying ? "fast" : "normal"} />
      </div>

      <div className="space-y-2">
        <div className="h-1.5 bg-[#0f0c0a] border border-brass/30">
          <div
            className="h-full bg-oxblood transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between typewriter text-[10px] text-cream/70">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(displayDuration)}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          type="button"
          onClick={() => {
            void togglePlay()
          }}
          className="typewriter text-[11px] tracking-wider"
        >
          {isPlaying ? "Pause" : "Play"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={stop}
          className="typewriter text-[11px] tracking-wider bg-transparent text-cream border-brass/40 hover:bg-graphite/40"
        >
          Stop
        </Button>
      </div>
    </div>
  )
}
