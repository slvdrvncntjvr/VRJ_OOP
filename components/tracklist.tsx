import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const TRACKS = [
  { n: "01", title: "Home", sub: "Profile and course overview", duration: "02:20", href: "/" },
  { n: "02", title: "Midterm", sub: "Quizzes, seatwork, activities, exam", duration: "12:40", href: "/midterm" },
  { n: "03", title: "Final", sub: "Final outputs and reflection", duration: "12:10", href: "/final" },
  { n: "04", title: "Contact", sub: "Message and channels", duration: "01:12", href: "/contact" },
]

export function Tracklist({ className }: { className?: string }) {
  return (
    <ol className={cn("divide-y divide-dashed divide-graphite/25", className)}>
      {TRACKS.map((t) => (
        <li key={t.n}>
          <Link
            href={t.href}
            className="group grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-5 px-4 sm:px-5 py-3 hover:bg-graphite/[0.04] transition-colors"
          >
            <span
              className="typewriter text-[11px] text-oxblood font-bold"
              style={{ letterSpacing: "0.18em" }}
            >
              TRACK {t.n}
            </span>
            <span className="flex items-baseline gap-3 min-w-0">
              <span className="font-serif text-lg sm:text-xl text-graphite shrink-0 whitespace-nowrap">
                {t.title}
              </span>
              <span
                className="flex-1 border-b border-dotted border-graphite/40 translate-y-[-4px]"
                aria-hidden
              />
              <span className="hidden sm:inline typewriter text-[11px] text-graphite/60 truncate min-w-0">
                {t.sub}
              </span>
            </span>
            <span className="flex items-center gap-2">
              <span className="typewriter text-[11px] text-graphite/70 tabular-nums">
                {t.duration}
              </span>
              <ChevronRight className="h-4 w-4 text-graphite/40 group-hover:text-oxblood group-hover:translate-x-0.5 transition" />
            </span>
          </Link>
        </li>
      ))}
    </ol>
  )
}
