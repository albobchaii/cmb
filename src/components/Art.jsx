// Ilustrasi SVG sederhana — ganti dengan foto produk asli bila sudah tersedia.

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

export function ProductArt({ kind, color = '#fbeaea' }) {
  const ink = '#a3222a'
  const paper = '#ffffff'
  return (
    <svg viewBox="0 0 200 160" role="img" aria-hidden="true">
      <ellipse cx="100" cy="142" rx="70" ry="8" fill={ink} opacity="0.06" />
      {kind === 'box' && (
        <g>
          <path d="M70 50 Q85 20 100 46 Q115 18 130 50" fill={paper} stroke={ink} strokeWidth="1.5" />
          <rect x="40" y="55" width="120" height="80" rx="8" fill={color} stroke={ink} strokeWidth="1.5" />
          <rect x="70" y="50" width="60" height="12" rx="6" fill={paper} stroke={ink} strokeWidth="1.5" />
          <text x="100" y="105" textAnchor="middle" fontSize="16" fontWeight="600" letterSpacing="2" fill={ink}>CMB</text>
        </g>
      )}
      {kind === 'roll' && (
        <g>
          <rect x="55" y="40" width="90" height="95" rx="10" fill={paper} stroke={ink} strokeWidth="1.5" />
          <ellipse cx="100" cy="40" rx="45" ry="14" fill={color} stroke={ink} strokeWidth="1.5" />
          <ellipse cx="100" cy="40" rx="14" ry="5" fill={paper} stroke={ink} strokeWidth="1.5" />
          <path d="M145 95 L160 135 L120 135" fill={paper} stroke={ink} strokeWidth="1.5" />
          <rect x="55" y="80" width="90" height="22" fill={color} opacity="0.7" />
        </g>
      )}
      {kind === 'towel' && (
        <g>
          <rect x="35" y="45" width="40" height="90" rx="8" fill={paper} stroke={ink} strokeWidth="1.5" />
          <rect x="85" y="45" width="40" height="90" rx="8" fill={paper} stroke={ink} strokeWidth="1.5" />
          <rect x="135" y="45" width="30" height="90" rx="8" fill={color} stroke={ink} strokeWidth="1.5" />
          {[60, 80, 100, 120].map((y) => <line key={y} x1="40" x2="120" y1={y} y2={y} stroke={color} strokeWidth="3" />)}
        </g>
      )}
      {kind === 'pack' && (
        <g>
          <rect x="50" y="60" width="100" height="70" rx="12" fill={color} stroke={ink} strokeWidth="1.5" />
          <path d="M80 60 Q100 30 120 60" fill={paper} stroke={ink} strokeWidth="1.5" />
          <rect x="30" y="85" width="60" height="45" rx="10" fill={paper} stroke={ink} strokeWidth="1.5" />
          <text x="100" y="108" textAnchor="middle" fontSize="14" fontWeight="600" fill={ink}>CMB</text>
        </g>
      )}
      {kind === 'napkin' && (
        <g>
          {[0, 1, 2].map((i) => (
            <rect key={i} x={50 + i * 8} y={110 - i * 22} width="100" height="22" rx="4" fill={i === 1 ? color : paper} stroke={ink} strokeWidth="1.5" />
          ))}
          <path d="M60 50 L100 30 L140 50 L100 70 Z" fill={paper} stroke={ink} strokeWidth="1.5" />
        </g>
      )}
      {kind === 'bulk' && (
        <g>
          <path d="M40 60 L100 40 L160 60 L100 80 Z" fill={paper} stroke={ink} strokeWidth="1.5" />
          <path d="M40 60 L100 80 L100 135 L40 115 Z" fill={color} stroke={ink} strokeWidth="1.5" />
          <path d="M160 60 L100 80 L100 135 L160 115 Z" fill={color} stroke={ink} strokeWidth="1.5" opacity="0.75" />
          <text x="70" y="102" textAnchor="middle" fontSize="13" fontWeight="600" fill={ink}>CMB</text>
        </g>
      )}
    </svg>
  )
}
