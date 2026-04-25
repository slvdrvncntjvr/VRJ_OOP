"use client"

import { useState } from "react"
import { BezelPanel } from "@/components/bezel-panel"
import { TransportControls } from "@/components/transport-controls"
import { Screw } from "@/components/screw"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "recording" | "done">("idle")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("recording")
    setTimeout(() => setStatus("done"), 1400)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Header strip */}
      <div className="flex items-center gap-3">
        <span
          className="typewriter text-[10px] font-bold px-2 py-1 bg-oxblood text-cream"
          style={{ letterSpacing: "0.22em" }}
        >
          TRACK 04
        </span>
        <span
          className="typewriter text-[11px] text-brass"
          style={{ letterSpacing: "0.2em" }}
        >
          CONTACT · SEND A MESSAGE
        </span>
        <span
          className="flex-1 h-px"
          style={{
            background:
              "repeating-linear-gradient(90deg, rgba(201,169,97,0.45) 0 4px, transparent 4px 7px)",
          }}
          aria-hidden
        />
        <span className="typewriter text-[10px] text-cream/60">01:12</span>
      </div>

      {/* ─── BLANK CASSETTE ─── */}
      <BezelPanel variant="dark" padding="p-3 sm:p-5">
        {/* The cassette shell */}
        <div
          className="relative mx-auto"
          style={{
            background:
              "linear-gradient(180deg, #f4ecd9 0%, #ede4d3 40%, #d4c093 100%)",
            border: "2px solid #2a2420",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -2px 6px rgba(0,0,0,0.15), 0 12px 30px rgba(0,0,0,0.6)",
          }}
        >
          {/* Shell screws */}
          <Screw size={10} className="absolute top-2 left-2" />
          <Screw size={10} className="absolute top-2 right-2" />
          <Screw size={10} className="absolute bottom-2 left-2" />
          <Screw size={10} className="absolute bottom-2 right-2" />
          <Screw size={10} className="absolute top-2 left-1/2 -translate-x-1/2" />

          {/* Top label strip */}
          <div className="px-10 sm:px-14 pt-5 pb-3 border-b border-graphite/25">
            <div className="flex items-center justify-between typewriter text-[10px] text-graphite/70">
              <span>JAVIER AUDIO · C-60 BLANK</span>
              <span>NORMAL BIAS · 120µs EQ</span>
            </div>
          </div>

          {/* The main hand-labeled form */}
          <form
            onSubmit={handleSubmit}
            className="paper-grain px-6 sm:px-10 py-6 sm:py-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-x-8 gap-y-5 items-start"
          >
            {/* Fields column */}
            <div className="space-y-5">
              <Field label="TO:" name="to" defaultValue="Salvador Vincent Javier" />
              <Field label="PREFERRED:" name="preferred" defaultValue="Vincent" />
              <Field label="FROM:" name="from" placeholder="your name" />
              <Field
                label="DATE:"
                name="date"
                defaultValue={new Date()
                  .toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                  .toUpperCase()}
              />
              <div>
                <label
                  htmlFor="message"
                  className="typewriter text-[11px] text-oxblood font-bold block mb-1"
                  style={{ letterSpacing: "0.2em" }}
                >
                  MESSAGE:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Write your message here. A short greeting is okay."
                  className="w-full bg-transparent font-serif text-graphite text-lg leading-relaxed outline-none resize-none placeholder:text-graphite/40"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(180deg, transparent 0 28px, rgba(42,36,32,0.25) 28px 29px)",
                    lineHeight: "29px",
                    padding: "0 2px",
                  }}
                />
              </div>
            </div>

            {/* Reel holes column */}
            <div className="hidden md:flex flex-col items-center justify-center gap-4 pt-2">
              <ReelHole />
              <ReelHole />
            </div>

            {/* Footer row */}
            <div className="md:col-span-2 pt-5 mt-2 border-t border-dashed border-graphite/30 flex items-center justify-between gap-5 flex-wrap">
              <p className="handwritten text-oxblood/80 text-[15px]">
                type your message then press record
              </p>
              <div className="flex items-center gap-4">
                <TransportControls />
                <button
                  type="submit"
                  aria-label="Record message"
                  className="relative group flex items-center gap-3"
                >
                  <span
                    className="relative h-14 w-14 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "radial-gradient(circle at 35% 30%, #b5303c 0%, #7a1f2b 55%, #3d0e14 100%)",
                      boxShadow:
                        "inset 0 2px 4px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(0,0,0,0.6), 0 3px 0 rgba(0,0,0,0.55), 0 6px 14px rgba(0,0,0,0.4)",
                    }}
                  >
                    <span
                      className="h-5 w-5 rounded-full bg-cream/95"
                      aria-hidden
                    />
                    <span
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition"
                      style={{
                        boxShadow:
                          "0 0 22px 6px rgba(122,31,43,0.7), 0 0 2px rgba(255,150,160,0.8) inset",
                      }}
                    />
                  </span>
                  <span className="typewriter text-[12px] text-graphite font-bold tracking-widest">
                    {status === "idle" && "● REC"}
                    {status === "recording" && "● RECORDING…"}
                    {status === "done" && "✓ TAPE FILLED"}
                  </span>
                </button>
              </div>
            </div>
          </form>

          {/* Bottom tape window */}
          <div
            className="mx-10 sm:mx-14 mb-5 h-6 border border-graphite/30"
            style={{
              background:
                "linear-gradient(180deg, #1a1613 0%, #2a2420 50%, #1a1613 100%)",
            }}
            aria-hidden
          >
            <div className="h-full flex items-center justify-between px-3">
              <div className="h-4 w-4 rounded-full bg-[#0e0b09] border border-brass/50" />
              <span
                className="typewriter text-[9px] text-brass/60"
                style={{ letterSpacing: "0.25em" }}
              >
                · · · · · · · · · · · · · · ·
              </span>
              <div className="h-4 w-4 rounded-full bg-[#0e0b09] border border-brass/50" />
            </div>
          </div>
        </div>
      </BezelPanel>

      {/* Channel contact strip */}
      <BezelPanel variant="brass" padding="p-2.5">
        <div className="jcard paper-grain px-5 sm:px-7 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-graphite/30">
          <ChannelRow label="E-MAIL" value="slvdrvncntjvr@gmail.com" />
          <ChannelRow label="UNIVERSITY" value="Polytechnic University of the Philippines" />
          <ChannelRow label="OFFICE HRS" value="MWF · 14:00–16:00" />
        </div>
      </BezelPanel>
    </div>
  )
}

function Field({
  label,
  name,
  defaultValue,
  placeholder,
}: {
  label: string
  name: string
  defaultValue?: string
  placeholder?: string
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="typewriter text-[11px] text-oxblood font-bold block mb-1"
        style={{ letterSpacing: "0.2em" }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full bg-transparent font-serif text-graphite text-xl outline-none placeholder:text-graphite/35"
        style={{
          borderBottom: "1px solid rgba(42,36,32,0.55)",
          paddingBottom: 4,
        }}
      />
    </div>
  )
}

function ReelHole() {
  return (
    <div
      className="h-16 w-16 rounded-full flex items-center justify-center"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #1e1a17 0%, #1e1a17 45%, #2a2420 45%, #2a2420 52%, #ede4d3 52%, #d4c093 100%)",
        boxShadow:
          "inset 0 2px 5px rgba(0,0,0,0.45), inset 0 -1px 0 rgba(255,255,255,0.3)",
      }}
      aria-hidden
    >
      <svg viewBox="0 0 40 40" className="h-8 w-8">
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 60 * Math.PI) / 180
          const cx = 20 + Math.cos(angle) * 10
          const cy = 20 + Math.sin(angle) * 10
          return <circle key={i} cx={cx} cy={cy} r="1.5" fill="#c9a961" />
        })}
        <circle cx="20" cy="20" r="2.5" fill="#c9a961" />
      </svg>
    </div>
  )
}

function ChannelRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="sm:px-4 py-1">
      <div
        className="typewriter text-[10px] text-oxblood mb-1"
        style={{ letterSpacing: "0.22em" }}
      >
        {label}
      </div>
      <div className="font-serif text-graphite text-lg leading-tight break-all">
        {value}
      </div>
    </div>
  )
}
