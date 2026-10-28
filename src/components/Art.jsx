export function Icon({ name }) {
  const common = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (name) {
    case 'leaf':
      return <svg {...common}><path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15" /><path d="M5 19c3-5 6-8 10-10" /></svg>
    case 'drop':
      return <svg {...common}><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" /></svg>
    case 'shield':
      return <svg {...common}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></svg>
    case 'truck':
      return <svg {...common}><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></svg>
    case 'pin':
      return <svg {...common}><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>
    case 'phone':
      return <svg {...common}><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" /></svg>
    case 'mail':
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
    case 'clock':
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
    case 'bag':
      return <svg {...common}><path d="M5 8h14l-1 12H6z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
    case 'award':
      return <svg {...common}><circle cx="12" cy="9" r="6" /><path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5" /></svg>
    case 'users':
      return <svg {...common}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6.5 6.5 0 0 1 3.5 5.5" /></svg>
    case 'eye':
      return <svg {...common}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>
    case 'target':
      return <svg {...common}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>
    case 'feather':
      return <svg {...common}><path d="M20 4c-7 0-13 5-13 12v4" /><path d="M20 4c0 8-5 12-13 12" /><path d="M7 16l6-6" /></svg>
    case 'layers':
      return <svg {...common}><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 13l9 5 9-5" /></svg>
    case 'tag':
      return <svg {...common}><path d="M3 12V4h8l10 10-8 8z" /><circle cx="7.5" cy="8.5" r="1.5" /></svg>
    default:
      return null
  }
}

// Dekorasi hero: lembar tissue dan gulungan tampak samping.
export function TissueSheet() {
  return (
    <svg viewBox="0 0 160 160" aria-hidden="true">
      <defs>
        <pattern id="sheet-dots" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="5" r="1.1" fill="#e9d3d6" />
        </pattern>
      </defs>
      <path d="M18 22 Q50 14 80 20 T142 18 Q148 50 142 80 T144 140 Q110 148 80 142 T16 144 Q10 110 16 80 T18 22Z" fill="#fff" stroke="#ecdcde" strokeWidth="1.5" />
      <path d="M18 22 Q50 14 80 20 T142 18 Q148 50 142 80 T144 140 Q110 148 80 142 T16 144 Q10 110 16 80 T18 22Z" fill="url(#sheet-dots)" />
      <path d="M22 82 Q80 76 140 82" fill="none" stroke="#ecdcde" strokeWidth="1.2" strokeDasharray="4 5" />
    </svg>
  )
}

export function TissueRollSide() {
  return (
    <svg viewBox="0 0 160 160" aria-hidden="true">
      <circle cx="80" cy="80" r="62" fill="#fff" stroke="#ecdcde" strokeWidth="1.5" />
      {[50, 38, 26].map((r) => <circle key={r} cx="80" cy="80" r={r} fill="none" stroke="#f1e3e5" strokeWidth="1.2" />)}
      <circle cx="80" cy="80" r="16" fill="#fbeaea" stroke="#a3222a" strokeWidth="1.5" />
      <path d="M142 80 Q150 120 128 150" fill="none" stroke="#ecdcde" strokeWidth="1.5" />
    </svg>
  )
}
