import { BezelPanel } from "@/components/bezel-panel"
import { JCard } from "@/components/j-card"
import { HomeCassettePlayer } from "@/components/home-cassette-player"
import { Tracklist } from "@/components/tracklist"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      <BezelPanel padding="p-3 sm:p-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-3 sm:gap-5">
          <JCard side="A" catalog="CAT. SVJ-001 · 2026 · HOME">
            <div className="p-6 sm:p-10 relative min-h-[390px] flex flex-col">
              <div className="flex items-center justify-between typewriter text-[10px] text-graphite/70 pb-3 border-b border-graphite/20">
                <span>E-PORTFOLIO</span>
                <span>OBJECT-ORIENTED PROGRAMMING</span>
              </div>

              <div className="flex-1 flex flex-col justify-center py-8">
                <div
                  className="typewriter text-[11px] text-oxblood mb-3"
                  style={{ letterSpacing: "0.22em" }}
                >
                  ▸ STUDENT
                </div>
                <h1 className="font-serif text-[2.75rem] sm:text-6xl leading-[0.95] text-graphite text-balance">
                  Salvador Vincent Javier
                </h1>
                <p className="typewriter text-[11px] text-graphite/70 mt-3">
                  PREFERRED NAME · VINCENT
                </p>

                <div
                  className="typewriter text-[11px] text-oxblood mt-8 mb-2"
                  style={{ letterSpacing: "0.22em" }}
                >
                  ▸ COURSE
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-graphite leading-tight text-pretty">
                  COMP 009 — Object-Oriented Programming
                </h2>
                <p className="typewriter text-[11px] text-graphite/70 mt-2">
                  POLYTECHNIC UNIVERSITY OF THE PHILIPPINES · BSIT 2-1 · A.Y. 2025-2026
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-graphite/20 pt-3 typewriter text-[10px] text-graphite/70">
                <span>HOME</span>
                <span>CONTENT FIRST</span>
                <span>2026</span>
              </div>
            </div>
          </JCard>

          <HomeCassettePlayer />
        </div>
      </BezelPanel>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6">
        <BezelPanel variant="brass" padding="p-2.5">
          <JCard title="INTRODUCTION · A1">
            <div className="p-6 sm:p-8 space-y-4">
              <div
                className="typewriter text-[10px] text-oxblood"
                style={{ letterSpacing: "0.22em" }}
              >
                ▸ INTRO
              </div>
              <p className="font-serif text-xl sm:text-2xl text-graphite leading-snug text-pretty">
                This portfolio is a collection of my work and reflections in
                Object-Oriented Programming.
              </p>
              <p className="text-graphite/80 leading-relaxed text-[15px]">
                It includes my Midterm and Final outputs in Java, together with
                short explanations of what I learned. The cassette style is here
                for identity, but the content stays clear and organized.
              </p>
              <p className="text-graphite/80 leading-relaxed text-[15px]">
                This website focuses on content completeness, OOP application,
                code presentation, and reflection, so each section is arranged
                to match course requirements.
              </p>
            </div>
          </JCard>
        </BezelPanel>

        <BezelPanel variant="brass" padding="p-2.5">
          <JCard title="ADDITIONAL LINKS" catalog="PLAY ORDER">
            <div className="px-4 pt-4 pb-2 flex items-center justify-between">
              <div
                className="typewriter text-[10px] text-oxblood"
                style={{ letterSpacing: "0.22em" }}
              >
                ▸ OPEN A SECTION
              </div>
              <div className="typewriter text-[10px] text-graphite/60">
                HOME · MIDTERM · FINAL · CONTACT
              </div>
            </div>
            <Tracklist className="pb-3" />
            <div className="px-5 pb-5 pt-3 border-t border-dashed border-graphite/30 space-y-2">
              <p className="typewriter text-[10px] text-graphite/70">MEDIA INPUT STATUS</p>
              <p className="text-[14px] text-graphite/80 leading-relaxed">
                Compilation_PDF is prepared for your source files. Place final
                PDFs and screenshots there, then publish copies through public/portfolio.
              </p>
            </div>
          </JCard>
        </BezelPanel>
      </div>
    </div>
  )
}
