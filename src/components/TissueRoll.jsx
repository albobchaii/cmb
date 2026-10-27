import { useEffect, useRef } from 'react'

// Gulungan tissue yang berputar & terulur mengikuti posisi scroll.
// Nilai scroll dikirim lewat CSS variable (--p, --spin, --deg) agar animasi tetap ringan.
export default function TissueRoll() {
  const ref = useRef(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      const el = ref.current
      el.style.setProperty('--p', p.toFixed(4))
      el.style.setProperty('--spin', `${Math.round(window.scrollY * 0.6)}px`)
      el.style.setProperty('--deg', `${Math.round(window.scrollY * 0.9)}deg`)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div ref={ref} className="tissue" aria-hidden="true">
      <div className="tissue-v">
        <div className="tissue-roll" />
        <div className="tissue-sheet" />
      </div>
      <div className="tissue-h">
        <div className="tissue-h-sheet" />
        <div className="tissue-h-roll" />
      </div>
    </div>
  )
}
