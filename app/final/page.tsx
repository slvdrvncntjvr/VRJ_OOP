import { BezelPanel } from "@/components/bezel-panel"
import { JCard } from "@/components/j-card"
import { PdfEmbed } from "@/components/pdf-embed"
import { VuMeter } from "@/components/vu-meter"

type Section = {
  slug: string
  label: string
  sub: string
  items: {
    title: string
    filename: string
    trackNumber: string
    duration: string
    annotation?: string
    src?: string
  }[]
}

const SECTIONS: Section[] = [
  {
    slug: "quizzes",
    label: "FINAL QUIZZES",
    sub: "FINAL · TRACK 01",
    items: [
      {
        title: "Final Quiz",
        filename: "final-quiz.pdf",
        trackNumber: "01",
        duration: "03:20",
        annotation: "questions, answers, and explanation",
      },
    ],
  },
  {
    slug: "activities",
    label: "FINAL ACTIVITIES",
    sub: "FINAL · TRACK 02-03",
    items: [
      {
        title: "Activity 1",
        filename: "final-activity-1.pdf",
        trackNumber: "02",
        duration: "05:10",
        annotation: "include screenshots of code and output",
      },
      {
        title: "Activity 2",
        filename: "final-activity-2.pdf",
        trackNumber: "03",
        duration: "05:45",
        annotation: "add short explanation and key learning",
      },
    ],
  },
  {
    slug: "project",
    label: "FINAL PROJECT",
    sub: "FINAL · TRACK 04",
    items: [
      {
        title: "Final Project Output",
        filename: "final-project.pdf",
        trackNumber: "04",
        duration: "10:30",
        annotation: "code, screenshots, and reflection",
      },
    ],
  },
  {
    slug: "exam",
    label: "FINAL EXAM",
    sub: "FINAL · TRACK 05",
    items: [
      {
        title: "Final Exam",
        filename: "final-exam.pdf",
        trackNumber: "05",
        duration: "11:30",
        annotation: "answers or code with reflection",
      },
    ],
  },
]

export default function FinalPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      <BezelPanel variant="dark" padding="p-5 sm:p-7">
        <div className="flex items-center gap-4 mb-6">
          <span
            className="typewriter text-[10px] font-bold px-2 py-1 bg-oxblood text-cream"
            style={{ letterSpacing: "0.22em" }}
          >
            SIDE C
          </span>
          <span
            className="typewriter text-[10px] text-brass"
            style={{ letterSpacing: "0.2em" }}
          >
            FINAL OUTPUTS
          </span>
          <span
            className="flex-1 h-px"
            style={{
              background:
                "repeating-linear-gradient(90deg, rgba(201,169,97,0.5) 0 4px, transparent 4px 7px)",
            }}
            aria-hidden
          />
          <span className="typewriter text-[10px] text-cream/60">5 TRACKS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 items-end">
          <div>
            <div
              className="typewriter text-[11px] text-oxblood mb-2"
              style={{ letterSpacing: "0.22em" }}
            >
              ▸ FINAL PAGE
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl leading-[0.95] text-cream text-balance">
              Final Requirements
            </h1>
            <p className="text-cream/70 mt-3 max-w-prose leading-relaxed text-[15px]">
              This section stores your final-term outputs. Use each card for PDFs,
              code screenshots, and reflections. Keep explanations short and clear.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <VuMeter label="FINAL" channel="L" />
            <VuMeter label="OUTPUT" channel="R" />
          </div>
        </div>
      </BezelPanel>

      {SECTIONS.map((section) => (
        <section key={section.slug} id={section.slug} className="space-y-4">
          <div className="flex items-center gap-4">
            <h2
              className="typewriter text-[11px] font-bold text-brass px-2 py-1 border border-brass/50 bezel-dark"
              style={{ letterSpacing: "0.24em" }}
            >
              {section.label}
            </h2>
            <span className="typewriter text-[10px] text-cream/60">{section.sub}</span>
            <span
              className="flex-1 h-px"
              style={{
                background:
                  "repeating-linear-gradient(90deg, rgba(201,169,97,0.35) 0 4px, transparent 4px 7px)",
              }}
              aria-hidden
            />
            <span className="typewriter text-[10px] text-cream/50">
              {section.items.length.toString().padStart(2, "0")} TRACK
              {section.items.length > 1 ? "S" : ""}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {section.items.map((item) => (
              <BezelPanel key={item.filename} variant="brass" padding="p-2.5" screws>
                <PdfEmbed
                  side="B"
                  title={item.title}
                  filename={item.filename}
                  trackNumber={item.trackNumber}
                  duration={item.duration}
                  annotation={item.annotation}
                  src={item.src}
                />
              </BezelPanel>
            ))}
          </div>
        </section>
      ))}

      <BezelPanel variant="brass" padding="p-2.5">
        <JCard title="REFLECTION" catalog="FINAL">
          <div className="p-6 sm:p-9 space-y-4">
            <p className="font-serif text-2xl text-graphite leading-snug text-pretty">
              Final outputs show my growth from basic implementation to more
              organized problem solving in OOP.
            </p>
            <p className="text-graphite/80 leading-relaxed text-[15px]">
              Compared to midterm, I am more confident in designing class
              responsibilities, choosing method boundaries, and testing logic in
              smaller steps. I also improved how I document code and connect
              each output to concepts like encapsulation, inheritance, and
              reusability.
            </p>
            <div className="flex items-end justify-between pt-4 border-t border-dashed border-graphite/30">
              <p className="handwritten text-oxblood/85 text-[18px]">- Vincent</p>
              <span className="typewriter text-[10px] text-graphite/60">END OF FINAL</span>
            </div>
          </div>
        </JCard>
      </BezelPanel>
    </div>
  )
}
