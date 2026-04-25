import { Rewind, Play, FastForward, Square, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

type Ctl = { icon: typeof Play; label: string; accent?: boolean }

const CONTROLS: Ctl[] = [
  { icon: Rewind, label: "REW" },
  { icon: Play, label: "PLAY" },
  { icon: FastForward, label: "FF" },
  { icon: Square, label: "STOP" },
  { icon: Circle, label: "REC", accent: true },
]

export function TransportControls({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-stretch gap-1.5 border border-graphite/30 p-1.5",
        "bg-gradient-to-b from-[#e4d6b5] to-[#d4c093]",
        className,
      )}
      aria-hidden
    >
      {CONTROLS.map(({ icon: Icon, label, accent }) => (
        <div
          key={label}
          className={cn(
            "deck-btn flex flex-col items-center justify-center gap-0.5 px-2.5 py-1.5 min-w-[42px]",
          )}
        >
          <Icon
            className={cn(
              "h-3.5 w-3.5",
              accent ? "text-oxblood fill-oxblood" : "text-brass",
            )}
            strokeWidth={2.5}
          />
          <span
            className="typewriter text-[8px] text-cream/70"
            style={{ letterSpacing: "0.15em" }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
