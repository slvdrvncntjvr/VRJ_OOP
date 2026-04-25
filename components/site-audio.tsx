"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

type SiteAudioContextValue = {
  isPlaying: boolean
  currentTime: number
  duration: number
  src: string
  title: string
  togglePlay: () => Promise<void>
  stop: () => void
}

const SiteAudioContext = createContext<SiteAudioContextValue | null>(null)

const TRACK_SRC = "/Oras%20Makina.mp3"
const TRACK_TITLE = "Oras Makina"

export function SiteAudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onTimeUpdate = () => setCurrentTime(audio.currentTime)
    const onLoadedMetadata = () => setDuration(audio.duration)
    const onEnded = () => setIsPlaying(false)

    audio.addEventListener("timeupdate", onTimeUpdate)
    audio.addEventListener("loadedmetadata", onLoadedMetadata)
    audio.addEventListener("ended", onEnded)

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate)
      audio.removeEventListener("loadedmetadata", onLoadedMetadata)
      audio.removeEventListener("ended", onEnded)
    }
  }, [])

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      await audio.play()
      setIsPlaying(true)
      return
    }

    audio.pause()
    setIsPlaying(false)
  }, [])

  const stop = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.pause()
    audio.currentTime = 0
    setCurrentTime(0)
    setIsPlaying(false)
  }, [])

  const value = useMemo(
    () => ({
      isPlaying,
      currentTime,
      duration,
      src: TRACK_SRC,
      title: TRACK_TITLE,
      togglePlay,
      stop,
    }),
    [isPlaying, currentTime, duration, togglePlay, stop],
  )

  return (
    <SiteAudioContext.Provider value={value}>
      {children}
      <audio ref={audioRef} src={TRACK_SRC} preload="metadata" />
    </SiteAudioContext.Provider>
  )
}

export function useSiteAudio() {
  const context = useContext(SiteAudioContext)
  if (!context) {
    throw new Error("useSiteAudio must be used within SiteAudioProvider")
  }
  return context
}
