# Shadman Arko — Portfolio Website

## 🚀 Quick Start

Just open `index.html` in a web browser. For the best experience (so the JSON loads properly), serve it with a local server:

```bash
# Option 1: Python (most systems have this)
python3 -m http.server 8080
# Then open: http://localhost:8080

# Option 2: Node.js
npx serve .
# Then open the URL shown

# Option 3: VS Code
# Install "Live Server" extension → right-click index.html → Open with Live Server
```

---

## 📁 Folder Structure

```
portfolio/
├── index.html              ← Main website (do not edit for content changes)
├── data/
│   └── portfolio.js      ← ✏️  ALL your content lives here
├── assets/
│   ├── avatar.jpg          ← Your profile photo
│   ├── resume.pdf          ← Downloadable resume
│   ├── bracu.png           ← BRAC University logo
│   ├── kolibri.png         ← Kolibri Games logo
│   ├── redthorn.png        ← Red Thorn Interactive logo
│   ├── bs23.png            ← Brain Station 23 logo
│   ├── army.png            ← Bangladesh Army logo
│   ├── dreamerz.png        ← Dreamerz Lab logo
│   ├── projects/
│   │   ├── imt.jpg         ← Idle Miner Tycoon screenshot
│   │   ├── museum.jpg      ← Museum Keeper screenshot
│   │   ├── cosmos.jpg      ← Kingdom of the Cosmos screenshot
│   │   ├── alexander.jpg   ← AlexanderBall screenshot
│   │   ├── safs.jpg        ← SAFS screenshot
│   │   ├── fire.jpg        ← Fire VR screenshot
│   │   ├── silent.jpg      ← Silent Scream screenshot
│   │   └── life.jpg        ← Project LIFE screenshot
│   └── certs/
│       ├── msu_cert.jpg    ← MSU certificate image
│       ├── bracu_gamedev.jpg
│       ├── bracu_vr.jpg
│       ├── vrcon_unity.jpg
│       ├── vrcon_pipeline.jpg
│       ├── nasa_cert.jpg
│       ├── bunsc_cert.jpg
│       └── bracu_presentation.jpg
└── README.md
```

---

## ✏️ How to Update Content

**Everything is in `data/portfolio.js`.** You never need to touch the HTML.

### Change personal info:
Edit the `"meta"` section — name, title, email, phone, location, social links.

### Add/edit a project:
Find the `"projects"` array. Each project has:
- `"title"`, `"subtitle"`, `"description"` — text content
- `"thumbnail"` — path to image in `assets/projects/`
- `"platforms"` — array of platform names
- `"tags"` — used for filtering
- `"links"` — array of `{ "label": "Steam", "url": "..." }`
- `"featured": true` — marks it as featured

### Add/edit experience:
Find the `"experience"` array. Each job has `"company"`, `"role"`, `"period"`, `"highlights"` (array of bullet points), and `"tags"`.

### Add a certificate:
Find the `"certificates"` array and add a new entry with `"title"`, `"issuer"`, `"date"`, and optionally `"note"`.

### Add project images:
1. Place your image in `assets/projects/`
2. In `portfolio.js`, set `"thumbnail": "assets/projects/yourimage.jpg"`

### Change your profile photo:
1. Place your photo as `assets/avatar.jpg`
2. In `portfolio.js`, confirm `"avatar": "assets/avatar.jpg"`

---

## 🎨 Design Features

- **Particle canvas background** with animated connected nodes
- **Custom animated cursor** (gold dot + ring)
- **Smooth reveal animations** on scroll (Intersection Observer)
- **Project filtering** by technology tag
- **Timeline** for work experience
- **Glassmorphism** card design
- **Fully responsive** — works on mobile, tablet, desktop
- **Dark/cinematic aesthetic** with gold + cyan accent palette
- **Custom scrollbar**, noise texture overlay
- **Loading screen** with animated bar

---

## 📧 Contact Form

The contact form uses `mailto:` — clicking "Send Message" opens the user's email client pre-filled. No backend needed.

---

## 🌐 Deployment

### GitHub Pages (free):
1. Push this folder to a GitHub repo
2. Go to Settings → Pages → set source to main branch
3. Your site will be live at `https://yourusername.github.io/portfolio`

### Netlify (free, drag & drop):
1. Go to netlify.com
2. Drag the entire `portfolio/` folder onto the Netlify dashboard
3. Your site is instantly live

### Vercel:
```bash
npm i -g vercel
vercel deploy
```

---

## 💡 Tips

- Images are **optional** — if an image fails to load, a fallback emoji is shown
- All logos in `assets/` are optional — they can be left empty
- The site works entirely offline (except Google Fonts)
- To add Google Fonts caching/offline, add the fonts to the assets folder
