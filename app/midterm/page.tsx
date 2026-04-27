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
    slug: "assignments",
    label: "ASSIGNMENTS",
    sub: "MIDTERM · TRACK 01-02",
    items: [
      {
        title: "About Me",
        filename: "about-me.pdf",
        trackNumber: "01",
        duration: "02:40",
        annotation: "Personal introduction and profile details submitted as part of the opening requirement",
        src: "/portfolio/midterm/about-me.pdf",
      },
      {
        title: "Midterm Assignment #1 - Introduction to Java",
        filename: "midterm-assignment-1-introduction-to-java.pdf",
        trackNumber: "02",
        duration: "03:35",
        annotation: "Foundational Java concepts and initial coding exercises for the midterm period",
        src: "/portfolio/midterm/midterm-assignment-1-introduction-to-java.pdf",
      },
    ],
  },
  {
    slug: "quizzes",
    label: "QUIZZES",
    sub: "MIDTERM · TRACK 03-04",
    items: [
      {
        title: "Midterm Quiz #1",
        filename: "midterm-quiz-1.pdf",
        trackNumber: "03",
        duration: "03:10",
        annotation: "Physical output only - this quiz was completed on paper and is kept as a placeholder",
      },
      {
        title: "Midterm Quiz #2",
        filename: "midterm-quiz-2.pdf",
        trackNumber: "04",
        duration: "02:55",
        annotation: "Digital submission copy for the second midterm quiz",
        src: "/portfolio/midterm/midterm-quiz-2.jpeg",
      },
    ],
  },
  {
    slug: "seatwork",
    label: "SEATWORK",
    sub: "MIDTERM · TRACK 05-07",
    items: [
      {
        title: "Midterm Seatwork #1",
        filename: "midterm-seatwork-1.pdf",
        trackNumber: "05",
        duration: "04:20",
        annotation: "Physical output only - this seatwork was completed on paper and is kept as a placeholder",
      },
      {
        title: "Midterm Seatwork #2 - Basic ATM System",
        filename: "midterm-seatwork-2-basic-atm-system.pdf",
        trackNumber: "06",
        duration: "05:30",
        annotation: "ATM system implementation covering input flow, validation, and basic account actions",
        src: "/portfolio/midterm/midterm-seatwork-2-basic-atm-system.pdf",
      },
      {
        title: "Midterm Seatwork #3 - StudentAgeAnalyzer",
        filename: "midterm-seatwork-3-student-age-analyzer.pdf",
        trackNumber: "07",
        duration: "04:50",
        annotation: "Student age analyzer solution with conditional checks and summarized output",
        src: "/portfolio/midterm/midterm-seatwork-3-student-age-analyzer.pdf",
      },
    ],
  },
  {
    slug: "activities",
    label: "ACTIVITIES",
    sub: "MIDTERM · TRACK 08-12",
    items: [
      {
        title: "Midterm Activity #1 - Variables",
        filename: "midterm-activity-1-variables.pdf",
        trackNumber: "08",
        duration: "04:20",
        annotation: "Variable declaration and usage exercises from the first midterm activity",
        src: "/portfolio/midterm/midterm-activity-1-variables.pdf",
      },
      {
        title: "Midterm Activity #2 - Operators",
        filename: "midterm-activity-2-operators.pdf",
        trackNumber: "09",
        duration: "04:45",
        annotation: "Operator-focused exercises including arithmetic, relational, and logical operations",
        src: "/portfolio/midterm/midterm-activity-2-operators.pdf",
      },
      {
        title: "Midterm Activity #3 - Simple Wallet System",
        filename: "midterm-activity-wallet-system.pdf",
        trackNumber: "10",
        duration: "04:55",
        annotation: "Adds balance tracking, deposit and withdrawal logic, and a simple transaction flow",
        src: "/portfolio/midterm/midterm-activity-wallet-system.pdf",
      },
      {
        title: "Midterm Activity #4 - Grade Evaluation System",
        filename: "midterm-activity-grade-evaluation-system.pdf",
        trackNumber: "11",
        duration: "05:15",
        annotation: "Evaluates the final grade using score thresholds and a straightforward decision flow",
        src: "/portfolio/midterm/midterm-activity-grade-evaluation-system.pdf",
      },
      {
        title: "Midterm Activity #5 - Personal Expense Tracker",
        filename: "midterm-activity-expense-tracker.pdf",
        trackNumber: "12",
        duration: "05:05",
        annotation: "Tracks spending categories and totals using a structured personal expense workflow",
        src: "/portfolio/midterm/midterm-activity-expense-tracker.pdf",
      },
    ],
  },
  {
    slug: "exam",
    label: "EXAM",
    sub: "MIDTERM · TRACK 13",
    items: [
      {
        title: "Midterm Exam",
        filename: "midterm-exam.pdf",
        trackNumber: "13",
        duration: "00:00",
        annotation: "The midterm exam is handled on paper, so this card stays as a placeholder until the official result is available.",
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
        13 TRACKS
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
              This section compiles my midterm assignments, quizzes, seatwork,
              activities, and exam entry. Digital outputs are embedded per
              requirement, while physical-only outputs are kept as placeholders.
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
            <div className="space-y-4">
              <p className="font-serif text-2xl text-graphite leading-snug text-pretty">
                Midterm was the point where I stopped treating OOP as a list of
                definitions and started using it to structure actual programs.
              </p>
              <p className="text-graphite/80 leading-relaxed text-[15px]">
                The quizzes, activities, and the paper-based exam all pushed me
                to think more carefully about class design, method use, and
                program flow before I write code. I also became more confident
                in explaining what my output means instead of only submitting
                the result. If I improve anything next, it should be cleaner
                structure, more consistent abstraction, and faster problem
                breakdown during timed work.
              </p>
              <div className="pt-4 border-t border-dashed border-graphite/30">
                <p className="handwritten text-oxblood/85 text-[18px]">- Vincent</p>
              </div>
            </div>
          </div>
        </JCard>
      </BezelPanel>
    </div>
  )
}
