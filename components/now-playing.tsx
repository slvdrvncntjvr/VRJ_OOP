"use client"

import { usePathname } from "next/navigation"
import { TapeReel } from "@/components/tape-reel"
import { Button } from "@/components/ui/button"
import { useSiteAudio } from "@/components/site-audio"

const TRACKS: Record<string, { track: string; title: string; duration: string }> = {
  "/": { track: "01", title: "HOME", duration: "02:34" },
  "/midterm": { track: "02", title: "MIDTERM", duration: "14:20" },
  "/final": { track: "03", title: "FINAL", duration: "12:10" },
  "/contact": { track: "04", title: "CONTACT", duration: "01:12" },
}

export function NowPlaying() {
  const pathname = usePathname()
  const { isPlaying, togglePlay, stop } = useSiteAudio()
  const key = Object.keys(TRACKS).find((k) =>
    k === "/" ? pathname === "/" : pathname.startsWith(k),
  )
  const current = TRACKS[key ?? "/"]

  return (
    <footer className="relative z-[3] border-t border-brass/25 bezel-dark">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 py-3 flex items-center gap-3 sm:gap-4 flex-wrap">
        <div className="flex items-center gap-2 typewriter text-[10px] text-brass">
          <TapeReel size={22} speed={isPlaying ? "fast" : "normal"} />
          <span style={{ letterSpacing: "0.2em" }}>NOW PLAYING</span>
        </div>

        <div className="order-3 sm:order-none basis-full sm:basis-auto flex-1 min-w-0 flex items-center gap-2 sm:gap-3">
          <span className="typewriter text-[11px] text-cream/70">
            TRACK {current.track}
          </span>
          <span
            className="flex-1 h-px"
            style={{
              background:
                "repeating-linear-gradient(90deg, rgba(201,169,97,0.5) 0 4px, transparent 4px 7px)",
            }}
            aria-hidden
          />
          <span className="font-serif text-[15px] sm:text-base text-cream whitespace-nowrap">
            {current.title}
          </span>
          <span
            className="flex-1 h-px"
            style={{
              background:
                "repeating-linear-gradient(90deg, rgba(201,169,97,0.5) 0 4px, transparent 4px 7px)",
            }}
            aria-hidden
          />
        </div>

        <div className="order-2 sm:order-none ml-auto sm:ml-0 flex items-center gap-2 sm:gap-3">
          <Button
            type="button"
            onClick={() => {
              void togglePlay()
            }}
            className="h-7 px-2 typewriter text-[9px]"
          >
            {isPlaying ? "Pause" : "Play"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={stop}
            className="h-7 px-2 typewriter text-[9px] bg-transparent text-cream border-brass/40 hover:bg-graphite/40"
          >
            Stop
          </Button>
          <span className="typewriter text-[11px] text-oxblood">
            {current.duration}
          </span>
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-oxblood led-on"
          />
        </div>

        <div
          className="w-full typewriter text-[9px] text-cream/45 pt-1 border-t border-brass/15"
          style={{ letterSpacing: "0.2em" }}
        >
          SALVADOR VINCENT JAVIER (VINCENT) · POLYTECHNIC UNIVERSITY OF THE PHILIPPINES · BSIT 2-1 · © 2026
        </div>
      </div>
    </footer>
  )
}
