import { cn } from "@/lib/utils"

export function VuMeter({
  label = "VU",
  className,
  channel = "L",
}: {
  label?: string
  className?: string
  channel?: "L" | "R"
}) {
  return (
    <div
      className={cn(
        "relative w-full bg-cream border border-graphite/30 overflow-hidden",
        className,
      )}
      style={{
        background:
          "linear-gradient(180deg, #f4ecd9 0%, #e4d6b5 70%, #d4c093 100%)",
      }}
    >
      {/* Scale markings */}
      <svg viewBox="0 0 200 110" className="w-full h-auto block">
        {/* Arc */}
        <path
          d="M 15 100 A 90 90 0 0 1 185 100"
          fill="none"
          stroke="#2a2420"
          strokeWidth="1"
        />
        {/* Red overload zone */}
        <path
          d="M 140 35 A 90 90 0 0 1 185 100"
          fill="none"
          stroke="#7a1f2b"
          strokeWidth="2.5"
        />
        {/* Tick marks */}
        {[-40, -30, -20, -10, 0, 5, 10].map((db, i) => {
          const angle = (i / 6) * 76 - 38
          const rad = (angle * Math.PI) / 180
          const x1 = 100 + Math.sin(rad) * 78
          const y1 = 100 - Math.cos(rad) * 78
          const x2 = 100 + Math.sin(rad) * 88
          const y2 = 100 - Math.cos(rad) * 88
          const tx = 100 + Math.sin(rad) * 70
          const ty = 100 - Math.cos(rad) * 70
          return (
            <g key={db}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={db >= 0 ? "#7a1f2b" : "#2a2420"}
                strokeWidth="1.2"
              />
              <text
                x={tx}
                y={ty + 3}
                textAnchor="middle"
                fontSize="7"
                fontFamily="var(--font-jetbrains-mono), monospace"
                fill={db >= 0 ? "#7a1f2b" : "#2a2420"}
              >
                {db > 0 ? `+${db}` : db}
              </text>
            </g>
          )
        })}
        {/* Needle */}
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="18"
          stroke="#2a2420"
          strokeWidth="1.3"
          strokeLinecap="round"
          className="vu-needle"
          style={{ transformOrigin: "100px 100px" }}
        />
        {/* Pivot */}
        <circle cx="100" cy="100" r="5" fill="#2a2420" />
        <circle cx="100" cy="100" r="2" fill="#c9a961" />

        {/* Labels */}
        <text
          x="100"
          y="55"
          textAnchor="middle"
          fontSize="8"
          fontFamily="var(--font-dm-serif), serif"
          fill="#2a2420"
          opacity="0.7"
        >
          {label}
        </text>
        <text
          x="14"
          y="105"
          fontSize="7"
          fontFamily="var(--font-jetbrains-mono), monospace"
          fill="#2a2420"
        >
          {channel}
        </text>
      </svg>
    </div>
  )
}
