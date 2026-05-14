███╗   ███╗ ██████╗ ██████╗ ███████╗    ████████╗ ██████╗  ██████╗  ██████╗ ██╗     ███████╗
████╗ ████║██╔═══██╗██╔══██╗██╔════╝    ╚══██╔══╝██╔═══██╗██╔════╝ ██╔════╝ ██║     ██╔════╝
██╔████╔██║██║   ██║██║  ██║█████╗         ██║   ██║   ██║██║  ███╗██║  ███╗██║     █████╗  
██║╚██╔╝██║██║   ██║██║  ██║██╔══╝         ██║   ██║   ██║██║   ██║██║   ██║██║     ██╔══╝  
██║ ╚═╝ ██║╚██████╔╝██████╔╝███████╗       ██║   ╚██████╔╝╚██████╔╝╚██████╔╝███████╗███████╗
╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝       ╚═╝    ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝╚══════╝

## 🖥️ Interface Layout

┌─────────────────────────────────────────────────────────┐
│  HEADER  │  LCU-01 // Light Control Unit    │ PWR ● ACT │
├──────────┼──────────────────────────────────────────────┤
│          │                                  │           │
│  LEFT    │                                  │  RIGHT    │
│ SIDEBAR  │         MAIN CONTENT             │  SIDEBAR  │
│          │                                  │           │
│ Power    │   [ BULB + TOGGLE CONTROL ]      │ Efficiency│
│ Metrics  │                                  │   Stats   │
│          │                                  │           │
├──────────┴──────────────────────────────────────────────┤
│  FOOTER  │  © Karan Pillay  │  GITHUB · LINKEDIN · DOCS │
└─────────────────────────────────────────────────────────┘

<-------------------------------------------------------------->

## ✨ Features

- **💡 Interactive Bulb Toggle** — Animated bulb with filament that responds to power state
- **🕐 Real-Time Clock** — Live timestamp in the header (`HH:MM:SS:MS` format)
- **⌨️ Keyboard Shortcut** — Press `SPACE` to toggle modes instantly
- **🎨 Industrial UI Design** — Retro-futuristic HMI aesthetic with Orbitron & Share Tech Mono fonts
- **📱 Responsive Layout** — Viewport-aware design for multiple screen sizes

<-------------------------------------------------------------->

## 🗂️ Project Structure

001-mode-toogle-/
│
├── index.html              # Main HTML entry point
|── readme.md
│
├── src/
│   ├── style.css           # Core stylesheet
│   └── index.js            # Toggle logic & clock
|
|──docs/
|    |──about.md
|    |──ai.md
│
└── resource/
     ├── javascript.png      # Favicon
     └── switch on.png       # Power button image 
     |── audio.wav           # Intial Audio

<-------------------------------------------------------------->