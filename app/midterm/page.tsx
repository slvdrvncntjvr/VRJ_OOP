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
    label: "QUIZZES",
    sub: "MIDTERM · TRACK 01-02",
    items: [
      {
        title: "Midterm Quiz 1",
        filename: "midterm-quiz-1.pdf",
        trackNumber: "01",
        duration: "03:10",
        annotation: "questions, answers, and short explanation",
        src: "/portfolio/midterm/midterm-quiz-1.pdf",
      },
      {
        title: "Midterm Quiz 2",
        filename: "midterm-quiz-2.pdf",
        trackNumber: "02",
        duration: "02:55",
        annotation: "include your score and reflection",
        src: "/portfolio/midterm/midterm-quiz-2.jpeg",
      },
    ],
  },
  {
    slug: "seatwork",
    label: "SEATWORK",
    sub: "MIDTERM · TRACK 03",
    items: [
      {
        title: "Midterm Seatwork 1",
        filename: "midterm-seatwork-1.pdf",
        trackNumber: "03",
        duration: "04:20",
        annotation: "show solution with explanation",
        src: "/portfolio/midterm/midterm-seatwork-1.pdf",
      },
    ],
  },
  {
    slug: "activities",
    label: "ACTIVITIES",
    sub: "MIDTERM · TRACK 04-06",
    items: [
      {
        title: "Activity 1 — ATM Program",
        filename: "midterm-activity-atm.pdf",
        trackNumber: "04",
        duration: "05:30",
        annotation: "add code screenshot plus learnings",
        src: "/portfolio/midterm/midterm-activity-atm.pdf",
      },
      {
        title: "Activity 2 — Decision Structures",
        filename: "midterm-activity-decision-structures.pdf",
        trackNumber: "05",
        duration: "04:45",
        src: "/portfolio/midterm/midterm-activity-decision-structures.pdf",
      },
      {
        title: "Activity 3 — Methods",
        filename: "midterm-activity-methods.pdf",
        trackNumber: "06",
        duration: "04:10",
        src: "/portfolio/midterm/midterm-activity-methods.pdf",
      },
    ],
  },
  {
    slug: "exam",
    label: "EXAM",
    sub: "MIDTERM · TRACK 07",
    items: [
      {
        title: "Midterm Exam",
        filename: "midterm-exam.pdf",
        trackNumber: "07",
        duration: "12:00",
        annotation: "answers or code with reflection",
        src: "/portfolio/midterm/midterm-exam.pdf",
      },
    ],
  },
]

function SideBSpine() {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="flex items-center gap-2">
        <span
          className="typewriter text-[10px] font-bold px-2 py-1 bg-oxblood text-cream"
          style={{ letterSpacing: "0.22em" }}
        >
          SIDE B
        </span>
        <span
          className="typewriter text-[10px] text-brass"
          style={{ letterSpacing: "0.2em" }}
        >
          MIDTERM OUTPUTS
        </span>
      </div>
      <span
        className="flex-1 h-px"
        style={{
          background:
            "repeating-linear-gradient(90deg, rgba(201,169,97,0.5) 0 4px, transparent 4px 7px)",
        }}
        aria-hidden
      />
      <span className="typewriter text-[10px] text-cream/60">
        7 TRACKS
      </span>
    </div>
  )
}

export default function MidtermPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      <BezelPanel variant="dark" padding="p-5 sm:p-7">
        <SideBSpine />
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 items-end">
          <div>
            <div
              className="typewriter text-[11px] text-oxblood mb-2"
              style={{ letterSpacing: "0.22em" }}
            >
              ▸ MIDTERM PAGE
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl leading-[0.95] text-cream text-balance">
              Midterm Requirements
            </h1>
            <p className="text-cream/70 mt-3 max-w-prose leading-relaxed text-[15px]">
              This page contains quizzes, seatwork, activities, and exam
              outputs. Each card is ready for your PDF or screenshot upload,
              with short explanation and reflection.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <VuMeter label="Q / S" channel="L" />
            <VuMeter label="A / E" channel="R" />
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
            <span className="typewriter text-[10px] text-cream/60">
              {section.sub}
            </span>
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
              <BezelPanel
                key={item.filename}
                variant="brass"
                padding="p-2.5"
                screws
              >
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
        <JCard title="REFLECTION" catalog="MIDTERM">
          <div className="p-6 sm:p-9 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6">
            <div
              className="typewriter text-[10px] text-oxblood shrink-0"
              style={{ letterSpacing: "0.22em", writingMode: "vertical-rl" }}
            >
              ▸ REFLECTION
            </div>
            <div className="space-y-4">
              <p className="font-serif text-2xl text-graphite leading-snug text-pretty">
                Midterm was the point where OOP started to feel practical, not
                just theoretical.
              </p>
              <p className="text-graphite/80 leading-relaxed text-[15px]">
                Through quizzes, seatwork, and activities, I improved in
                building classes, separating methods by purpose, and tracing
                program flow before coding. I also became more careful in
                explaining outputs, not only showing them. My next goal is to
                write cleaner class designs and use abstraction more
                consistently.
              </p>
              <div className="flex items-end justify-between pt-4 border-t border-dashed border-graphite/30">
                <p className="handwritten text-oxblood/85 text-[18px]">
                  - Vincent
                </p>
                <span className="typewriter text-[10px] text-graphite/60">
                  END OF MIDTERM
                </span>
              </div>
            </div>
          </div>
        </JCard>
      </BezelPanel>
    </div>
  )
}
