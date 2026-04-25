import { cn } from "@/lib/utils"

export function TapeReel({
  size = 120,
  className,
  speed = "normal",
}: {
  size?: number
  className?: string
  speed?: "normal" | "fast"
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={cn(speed === "fast" ? "reel-spin-fast" : "reel-spin", className)}
      aria-hidden
    >
      {/* Outer rim */}
      <circle cx="50" cy="50" r="48" fill="#2a2420" stroke="#c9a961" strokeWidth="1" />
      <circle cx="50" cy="50" r="46" fill="none" stroke="#0e0b09" strokeWidth="0.5" />

      {/* Tape visible (the dark wound magnetic tape) */}
      <circle cx="50" cy="50" r="38" fill="#1a1613" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="#3a332d" strokeWidth="0.4" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="#3a332d" strokeWidth="0.4" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="#3a332d" strokeWidth="0.4" />

      {/* Inner hub plate */}
      <circle cx="50" cy="50" r="22" fill="#ede4d3" />
      <circle cx="50" cy="50" r="22" fill="none" stroke="#2a2420" strokeWidth="0.8" />

      {/* Spoke holes (the classic 6-hole reel) */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180
        const cx = 50 + Math.cos(angle) * 13
        const cy = 50 + Math.sin(angle) * 13
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r="3.5" fill="#1e1a17" />
            <circle
              cx={cx}
              cy={cy}
              r="3.5"
              fill="none"
              stroke="#7a5a22"
              strokeWidth="0.4"
            />
          </g>
        )
      })}

      {/* Center spindle */}
      <circle cx="50" cy="50" r="4" fill="#2a2420" />
      <circle cx="50" cy="50" r="4" fill="none" stroke="#c9a961" strokeWidth="0.4" />
      <rect x="48.5" y="46.5" width="3" height="7" fill="#c9a961" />
    </svg>
  )
}
