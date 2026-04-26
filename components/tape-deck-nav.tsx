"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Screw } from "@/components/screw"

const ITEMS = [
  { href: "/", label: "HOME", track: "01" },
  { href: "/midterm", label: "MIDTERM", track: "02" },
  { href: "/final", label: "FINAL", track: "03" },
  { href: "/contact", label: "CONTACT", track: "04" },
]

export function TapeDeckNav() {
  const pathname = usePathname()

  return (
    <div className="sticky top-0 z-[50] bezel-dark border-b border-[#0a0807]">
      <div className="mx-auto max-w-6xl px-3 sm:px-5 py-3 flex items-center gap-3 sm:gap-5">
        {/* Left brand plate */}
        <div className="hidden sm:flex items-center gap-2 pr-4 border-r border-brass/25">
          <Screw size={10} />
          <div className="typewriter text-[10px] leading-tight text-brass">
            <div>JAVIER · AUDIO</div>
            <div className="text-cream/60">MODEL SVJ-2026</div>
          </div>
          <Screw size={10} />
        </div>

        {/* Buttons */}
        <nav className="grid grid-cols-4 gap-1.5 sm:flex sm:items-center sm:gap-3 flex-1 w-full sm:w-auto">
          {ITEMS.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col items-center"
              >
                {/* LED indicator */}
                <span
                  aria-hidden
                  className={cn(
                    "h-1.5 w-1.5 rounded-full mb-1.5",
                    active ? "bg-oxblood led-on" : "bg-[#2a1214] opacity-60",
                  )}
                />
                <button
                  type="button"
                  data-active={active}
                  className={cn(
                    "deck-btn typewriter text-[10px] sm:text-[11px] font-bold",
                    "w-full px-2 sm:px-5 py-2 sm:py-2.5 min-w-0 sm:min-w-[104px]",
                    "text-brass hover:text-cream transition-colors",
                    active && "text-cream",
                  )}
                  style={{ letterSpacing: "0.18em" }}
                  tabIndex={-1}
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="opacity-60 hidden sm:inline">{item.track}</span>
                    {item.label}
                  </span>
                </button>
              </Link>
            )
          })}
        </nav>

        {/* Right counter readout */}
        <div className="hidden md:flex items-center gap-2 pl-4 border-l border-brass/25">
          <div
            className="bezel-dark px-3 py-1.5 typewriter text-[11px] text-oxblood"
            style={{
              background: "#0e0b09",
              boxShadow: "inset 0 2px 6px rgba(0,0,0,0.9), inset 0 0 12px rgba(122,31,43,0.3)",
              textShadow: "0 0 6px rgba(122,31,43,0.6)",
            }}
          >
            ▸ {String(ITEMS.findIndex((i) =>
              i.href === "/" ? pathname === "/" : pathname.startsWith(i.href),
            ) + 1).padStart(3, "0")}
          </div>
        </div>
      </div>
    </div>
  )
}
