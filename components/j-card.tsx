import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function JCard({
  children,
  className,
  side,
  catalog,
  title,
}: {
  children: ReactNode
  className?: string
  side?: "A" | "B"
  catalog?: string
  title?: string
}) {
  return (
    <article
      className={cn(
        "jcard paper-grain relative overflow-hidden",
        "border border-graphite/15",
        className,
      )}
    >
      {(side || catalog || title) && (
        <header className="flex items-center justify-between gap-3 border-b border-dashed border-graphite/30 px-4 py-2">
          <div className="flex items-center gap-2">
            {side && (
              <span
                className="typewriter text-[10px] font-bold px-1.5 py-0.5 bg-oxblood text-cream"
                style={{ letterSpacing: "0.18em" }}
              >
                SIDE {side}
              </span>
            )}
            {title && (
              <span className="typewriter text-[11px] text-graphite/80">
                {title}
              </span>
            )}
          </div>
          {catalog && (
            <span className="typewriter text-[10px] text-graphite/60">
              {catalog}
            </span>
          )}
        </header>
      )}
      <div className="relative">{children}</div>
    </article>
  )
}
