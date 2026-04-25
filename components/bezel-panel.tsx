import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ScrewCorners } from "@/components/screw"

export function BezelPanel({
  children,
  className,
  variant = "brass",
  screws = true,
  padding = "p-5 sm:p-7",
}: {
  children: ReactNode
  className?: string
  variant?: "brass" | "dark"
  screws?: boolean
  padding?: string
}) {
  return (
    <div
      className={cn(
        "relative",
        variant === "brass" ? "bezel" : "bezel-dark",
        padding,
        className,
      )}
    >
      {screws && <ScrewCorners />}
      {children}
    </div>
  )
}
