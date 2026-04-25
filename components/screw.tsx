import { cn } from "@/lib/utils"

export function Screw({
  className,
  size = 12,
}: {
  className?: string
  size?: number
}) {
  return (
    <span
      aria-hidden
      className={cn("inline-block rounded-full shrink-0", className)}
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 35% 30%, #f1d88a 0%, #c9a961 35%, #7a5a22 85%, #2a1f0c 100%)",
        boxShadow:
          "inset 0 1px 1px rgba(255, 240, 200, 0.6), inset 0 -1px 1px rgba(0,0,0,0.6), 0 1px 1px rgba(0,0,0,0.55)",
      }}
    >
      <span
        className="block h-full w-full relative"
        style={{
          background:
            "linear-gradient(90deg, transparent 44%, rgba(0,0,0,0.7) 44%, rgba(0,0,0,0.7) 56%, transparent 56%)",
          borderRadius: "9999px",
          transform: "rotate(32deg)",
        }}
      />
    </span>
  )
}

export function ScrewCorners({ size = 12 }: { size?: number }) {
  return (
    <>
      <Screw size={size} className="absolute top-1.5 left-1.5" />
      <Screw size={size} className="absolute top-1.5 right-1.5" />
      <Screw size={size} className="absolute bottom-1.5 left-1.5" />
      <Screw size={size} className="absolute bottom-1.5 right-1.5" />
    </>
  )
}
