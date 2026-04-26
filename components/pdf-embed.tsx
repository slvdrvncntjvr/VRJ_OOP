import { JCard } from "@/components/j-card"
import { TransportControls } from "@/components/transport-controls"
import { TapeReel } from "@/components/tape-reel"
import { FileText } from "lucide-react"
import { cn } from "@/lib/utils"

export interface PdfEmbedProps {
  title: string
  filename: string
  side: "A" | "B"
  trackNumber: string
  duration: string
  src?: string
  className?: string
  annotation?: string
}

export function PdfEmbed({
  title,
  filename,
  side,
  trackNumber,
  duration,
  src,
  className,
  annotation,
}: PdfEmbedProps) {
  return (
    <JCard
      side={side}
      title={`TRACK ${trackNumber}`}
      catalog={`CAT. ${filename}`}
      className={cn("flex flex-col", className)}
    >
      {/* Title block — looks like the J-card spine text */}
      <div className="px-5 pt-4 pb-3 border-b border-graphite/20 flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="typewriter text-[10px] text-oxblood mb-1">
            TRACK {trackNumber} · {duration}
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-graphite leading-tight text-pretty">
            {title}
          </h3>
          {annotation && (
            <p className="handwritten mt-2 text-[13px] text-oxblood/80">
              {annotation}
            </p>
          )}
        </div>
        <FileText
          className="h-5 w-5 text-graphite/40 shrink-0 mt-1"
          aria-hidden
        />
      </div>

      {/* The "tape window" area */}
      <div className="p-4 bg-[#dfd3ba]">
        <div
          className="relative w-full border border-graphite/25 bg-[#1a1613]"
          style={{ aspectRatio: "16 / 10" }}
        >
          {src ? (
            <iframe
              src={src}
              title={title}
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-cream">
              <div className="flex items-center gap-10 opacity-80">
                <TapeReel size={56} speed="normal" />
                <TapeReel size={56} speed="normal" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <span
                  className="typewriter text-[11px] text-oxblood flex items-center gap-2"
                  style={{ letterSpacing: "0.22em" }}
                >
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full bg-oxblood led-on"
                    aria-hidden
                  />
                  PREVIEW NOT AVAILABLE YET
                </span>
                <span
                  className="typewriter text-[9px] text-cream/50"
                  style={{ letterSpacing: "0.18em" }}
                >
                  UNDER CONSTRUCTION ▸ WILL UPLOAD {filename.toUpperCase()} SOON
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Transport controls — decorative only */}
      <div className="px-4 pb-4 pt-2 flex items-center justify-between gap-3 flex-wrap">
        <TransportControls />
        <div className="typewriter text-[10px] text-graphite/60 flex items-center gap-3">
          <span>SIDE {side}</span>
          <span className="opacity-40">·</span>
          <span>{duration}</span>
        </div>
      </div>
    </JCard>
  )
}
