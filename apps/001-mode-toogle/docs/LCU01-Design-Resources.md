# LCU-01 // Light Control Unit
## Design Resources & Style Guide

---

## 🔤 Typography

### Fonts Used

| Role | Font Family | Weight(s) | Source |
|------|-------------|-----------|--------|
| **Primary Monospace** | `Share Tech Mono` | 400 (Regular) | Google Fonts |
| **Display / Headings** | `Orbitron` | 400, 600, 800 | Google Fonts |
| **UI Labels / Body** | `Rajdhani` | 300, 400, 600, 700 | Google Fonts |

### Import URL
```css
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;600;800&family=Rajdhani:wght@300;400;600;700&display=swap');
```

### Font Usage by Element

| Element | Font | Size | Weight | Letter-Spacing |
|---------|------|------|--------|----------------|
| Logo / Unit ID | Orbitron | 14px | 800 | 3px |
| Large metric values | Orbitron | 20–26px | 600 | — |
| Clock / time | Orbitron | 13px | 400 | 2px |
| State label (ACTIVE/STANDBY) | Orbitron | 16px | 600 | 4px |
| Section labels | Rajdhani | 10–11px | 400 | 3–4px |
| Body / log text | Share Tech Mono | 10–13px | 400 | 1–2px |
| Metric unit superscripts | Share Tech Mono | 11–12px | 400 | — |

---

## 🎨 Color Palette

### CSS Variables (Root Theme)

```css
:root {
  /* Backgrounds */
  --bg:       #0a0c0a;   /* Deepest background */
  --bg2:      #0e110e;   /* Panel background */
  --bg3:      #121612;   /* Center stage background */
  --panel:    #0d110d;   /* Side panel fill */

  /* Borders */
  --border:   #1e2e1e;   /* Subtle border */
  --border2:  #2a402a;   /* Visible border */

  /* Accent — Active State (Green) */
  --accent:   #7fff00;   /* Chartreuse — primary glow */
  --accent2:  #4db800;   /* Mid green — bars, fills */
  --accent3:  #a8ff3e;   /* Bright green — text highlights */

  /* Status Colors */
  --warn:     #ffaa00;   /* Amber — PWR indicator */
  --danger:   #ff3333;   /* Red — error / off indicator */

  /* Dim / Inactive */
  --dim:      #2a3a2a;   /* Very dim green-grey */
  --off-accent: #2a3a2a; /* Inactive accent tone */

  /* Text */
  --text:       #c8e6c8; /* Default text */
  --text-dim:   #5a7a5a; /* Muted / label text */
  --text-bright: #e8ffe8; /* Highlighted text */

  /* Shadows / Glows */
  --glow:        0 0 10px rgba(127,255,0,0.3);
  --glow-strong: 0 0 20px rgba(127,255,0,0.6), 0 0 40px rgba(127,255,0,0.2);
}
```

### Color Roles at a Glance

| Hex | Preview | Role |
|-----|---------|------|
| `#0a0c0a` | ⬛ | Deepest background |
| `#0e110e` | ⬛ | Panel background |
| `#121612` | ⬛ | Center grid background |
| `#1e2e1e` | 🟫 | Subtle border lines |
| `#2a402a` | 🟩 | Visible panel borders |
| `#7fff00` | 🟢 | Primary accent / glow (Chartreuse) |
| `#4db800` | 🟢 | Secondary accent / fills |
| `#a8ff3e` | 🟢 | Bright accent / active text |
| `#ffaa00` | 🟡 | Warning / PWR dot (Amber) |
| `#ff3333` | 🔴 | Danger / ACT dot off (Red) |
| `#c8e6c8` | ⬜ | Default body text |
| `#5a7a5a` | 🩶 | Dimmed label text |
| `#e8ffe8` | ⬜ | Bright / active text |
| `#2a3a2a` | 🟫 | Inactive / dim elements |

---

## 💡 State Themes

### OFF / Standby State
- Bulb: `radial-gradient(circle at 40% 35%, #2a4a2a, #0d150d)` — dark green-grey
- Power ring: `conic-gradient` of `#1e2e1e` and `#2a402a` — no glow
- All metric text: `--text-dim` (`#5a7a5a`)
- ACT indicator: `--danger` (`#ff3333`)
- Waveform: dashed flat line in `#2a402a`

### ON / Active State
- Bulb: `radial-gradient(circle, #ffffa0, #ffd700, #ffaa00, #cc7700)` — warm yellow-gold
- Bulb glow: `box-shadow: 0 0 40px 15px rgba(255,200,0,0.5)` + outer glow layers
- Power ring: `conic-gradient` of `--accent2` and `--accent3` + spinning animation
- All metric text: `--accent3` (`#a8ff3e`) with `text-shadow: --glow`
- ACT indicator: `--accent` (`#7fff00`) pulsing
- Waveform: animated sine wave with `#7fff00` + `shadowBlur: 8px`

---

## 🧱 Layout Grid

```
┌──────────────────────────────────────────────┐  ← 44px Topbar
│ LCU-01 // LIGHT CONTROL UNIT         16:07:22│
├───────────┬──────────────────────┬────────────┤  ← Main (flex: 1)
│           │                      │            │
│  LEFT     │      CENTER          │   RIGHT    │
│  220px    │       1fr            │   260px    │
│           │                      │            │
│ • Metrics │  • Bulb visual       │ • Gauge    │
│ • Uptime  │  • Power button      │ • Efficiency│
│ • Schedule│  • Status bar        │ • Event log│
│           │  • Metrics row       │ • Device   │
│           │  • Waveform          │            │
├───────────┴──────────────────────┴────────────┤  ← 36px Footer
│ S/N: 8A3F  FW:v2.4.1   UPTIME   [SPACE][CLICK]│
└──────────────────────────────────────────────┘
```

---

## ✨ Effects & Animations

| Effect | CSS / JS |
|--------|----------|
| CRT scanlines | `repeating-linear-gradient` overlay (fixed, z-index 9999) |
| Vignette | `radial-gradient` overlay (fixed, z-index 9998) |
| Background grid | CSS `background-image` with 40×40px grid lines |
| Power ring spin | `@keyframes spin` — `8s linear infinite` |
| Status dot pulse | `@keyframes pulse` — `2s ease-in-out infinite` |
| Cursor blink | `@keyframes blink` — `1.2s step-end infinite` |
| Waveform draw | Canvas `requestAnimationFrame` — sine wave with phase shift |
| Gauge sweep | SVG `stroke-dashoffset` transition `0.8s ease` |
| Metric bars | CSS `width` transition `0.8s ease` |
| Bulb glow | CSS `box-shadow` transition `0.5s ease` on `.on` class |

---

## 🔧 Device Specs (Displayed in UI)

| Field | Value |
|-------|-------|
| Serial Number | `8A3F-7C2D-0019` |
| Firmware | `v2.4.1` |
| Bulb Type | `60W / E27` |
| Rated Voltage | `240V` |
| Rated Current | `0.5A` |
| Frequency | `50.0 Hz` |
| Power Factor | `0.99` |

---

## 📦 Dependencies

- **Zero external JS libraries** — pure HTML, CSS, and vanilla JavaScript
- **Google Fonts CDN** — `fonts.googleapis.com` (requires internet)
- **Canvas API** — for waveform rendering (built-in browser)
- **SVG** — for power gauge (inline, no library)

---

*LCU-01 Design System · FW v2.4.1 · Built with HTML/CSS/JS*
