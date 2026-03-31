// ============================================================
// PORTFOLIO DATA FILE — Edit this file to update your website
// ============================================================
// This file is plain JSON wrapped in a JavaScript variable.
// You can edit it in any text editor (VS Code, Notepad, etc.)
//
// STRUCTURE:
//   meta         → name, title, email, phone, linkedin, github
//   about        → paragraphs, stats
//   skills       → skill categories and items
//   experience   → work history with highlights
//   projects     → portfolio projects with links
//   education    → degree info
//   certificates → certs and achievements
//
// IMAGES: Place images in the assets/ folder, then reference
// them in this file as "assets/your-image.jpg"
// ============================================================

const PORTFOLIO_DATA = {
  "meta": {
    "name": "Shadman Arko",
    "title": "Software Engineer",
    "tagline": "Crafting worlds from code — game developer, system architect, and live-ops engineer with 6+ years shipping products to millions.",
    "email": "shadman.arko@gmail.com",
    "phone": "+4917628921681",
    "location": "Berlin, Germany",
    "locationNote": "With Work Permit",
    "linkedin": "https://www.linkedin.com/in/shadman-arko-6a15179a",
    "github": "https://github.com/shadmanArko",
    "avatar": "assets/avatar.PNG",
    "resumeFile": "assets/resume.pdf",
    "siteTitle": "Shadman Arko — Software Engineer",
    "favicon": ""
  },
  "about": {
    "headline": "I build games, systems, and simulations that people love.",
    "paragraphs": [
      "Software Engineer with 6+ years of experience delivering 20+ projects across backend, app, and game development. I specialize in scalable architecture, live game systems, and immersive simulations — from mobile titles with 100,000+ daily users to military training VR platforms.",
      "Skilled in C#, Unity, Kotlin, Python, and ASP.NET with deep knowledge in multithreading, data-driven design, and cloud/SDK integrations. I apply engineering best practices (SOLID, KISS, MVC) to build maintainable, future-proof solutions.",
      "Known for taking ownership, driving technical excellence, and shipping polished products under any circumstances — whether it's a live game update or a mission-critical simulation."
    ],
    "stats": [
      { "value": "6+", "label": "Years Experience" },
      { "value": "20+", "label": "Projects Shipped" },
      { "value": "100K+", "label": "Daily Active Users" },
      { "value": "93%", "label": "Steam Positive Reviews" }
    ]
  },
  "skills": [
    {
      "category": "Game Engines",
      "icon": "🎮",
      "items": ["Unity (C#)", "Unreal Engine", "Godot (GDScript)"]
    },
    {
      "category": "Languages",
      "icon": "💻",
      "items": ["C#", "Python", "Kotlin", "Java", "JavaScript", "GDScript", "C++", "Dart"]
    },
    {
      "category": "Backend & Web",
      "icon": "⚙️",
      "items": ["ASP.NET Core", "Spring Boot", "Vue.js", "Three.js", "NopCommerce", "REST APIs"]
    },
    {
      "category": "XR & Simulation",
      "icon": "🥽",
      "items": ["VR (Meta Quest, HTC Vive)", "AR (ARCore/ARKit)", "Haptics (bHaptics)", "Photon Networking"]
    },
    {
      "category": "Architecture & Patterns",
      "icon": "🏗️",
      "items": ["SOLID", "MVC / MVM", "Dependency Injection", "Zenject", "Scriptable Object Architecture", "UniRx / UniTask"]
    },
    {
      "category": "Tools & DevOps",
      "icon": "🛠️",
      "items": ["Git", "Jenkins", "CI/CD", "Blender", "Maya", "Jira"]
    }
  ],
  "experience": [
    {
      "company": "Kolibri Games (Ubisoft Mobile)",
      "role": "Software Engineer — Unity & C#",
      "period": "Jan 2025 — Dec 2025",
      "location": "Berlin, Germany",
      "logo": "assets/kolibri.png",
      "color": "#f59e0b",
      "highlights": [
        "Contributed to Idle Miner Tycoon, a live game with 100,000+ daily active users, as part of the core feature team.",
        "Designed and implemented new gameplay features and content across iOS and Android, ensuring smooth cross-platform performance.",
        "Developed client-side architecture in Unity (C#) and collaborated on backend systems built with ASP.NET, including API integration and data synchronization.",
        "Improved and refactored legacy systems, enhancing maintainability, performance, and scalability in a large, long-running codebase.",
        "Worked in a live-ops environment, delivering updates, resolving production issues, and contributing to long-term product stability.",
        "Collaborated with designers, PMs, and backend engineers to transform feature specs into high-quality, player-ready implementations."
      ],
      "tags": ["Unity", "C#", "ASP.NET", "LiveOps", "iOS", "Android"]
    },
    {
      "company": "Red Thorn Interactive",
      "role": "Senior Software Engineer — Lead Developer",
      "period": "Oct 2022 — Dec 2024",
      "location": "Remote",
      "logo": "assets/redthorn.png",
      "color": "#ef4444",
      "highlights": [
        "Led a 9-member cross-functional development team and shipped a multi-platform game (Windows, macOS, Linux) from concept to launch.",
        "Architected the entire game system — high-level design, core architecture decisions, and implementation of complex gameplay features.",
        "Collaborated closely with the product team to translate requirements into technical plans, roadmaps, and feature implementations.",
        "Assigned tasks, mentored junior developers, and maintained high engineering standards across the entire production pipeline.",
        "Coordinated with artists, designers, QA, and other disciplines for smooth production alignment.",
        "The released game achieved 93% positive reviews on Steam, reflecting strong team performance and exceptional delivery quality."
      ],
      "tags": ["Unity", "Godot", "ASP.NET", "System Architecture", "Team Lead", "Steam"]
    },
    {
      "company": "Brain Station 23",
      "role": "Software Engineer — Interactive Development",
      "period": "Aug 2021 — Sep 2022",
      "location": "Dhaka, Bangladesh",
      "logo": "assets/bs23.png",
      "color": "#3b82f6",
      "highlights": [
        "Worked at one of the largest software companies in Bangladesh, delivering custom solutions for international clients.",
        "Contributed to ~10 diverse projects, adapting quickly to different domains and technology stacks.",
        "Developed solutions across C#, ASP.NET, Flutter, Unity, C++, Unreal Engine, JavaScript, Three.js, Vue.js, and NopCommerce.",
        "Implemented features for web, mobile, and interactive applications, often switching technologies based on project needs.",
        "Conducted requirements analysis with clients and translated business needs into technical specs and development plans.",
        "Gained extensive experience in multi-platform development, rapid prototyping, and full SDLC in a client-driven environment."
      ],
      "tags": ["Unity", "ASP.NET", "Flutter", "Unreal Engine", "Three.js", "Vue.js"]
    },
    {
      "company": "Bangladesh Army",
      "role": "Software Engineer — VR/Simulation",
      "period": "Aug 2020 — Jul 2021",
      "location": "Dhaka, Bangladesh",
      "logo": "assets/army.png",
      "color": "#22c55e",
      "highlights": [
        "Developed two real-time military training simulation systems used by the Bangladesh Army for operational training.",
        "Small Arms Firing Simulator: Built a multiplayer VR training system supporting 16 simultaneous trainees with haptic suits, interactive weapon controllers, and custom sensors.",
        "Integrated physics-based weapon mechanics and real-time synchronization using Unity (C#) and Photon Networking.",
        "Radio Communication Simulator: Created a fully interactive 3D radio system replicating real military radios and operational functions.",
        "Implemented accurate UI/UX behavior, signal logic, and device interactions to mimic real-world communication workflows.",
        "Collaborated closely with military personnel to convert operational requirements into reliable, mission-ready simulation tools."
      ],
      "tags": ["Unity", "VR", "Photon", "Haptics", "HTC Vive", "Meta Quest"]
    },
    {
      "company": "Dreamerz Lab",
      "role": "Junior Software Engineer — VR/AR",
      "period": "Jul 2019 — Jul 2020",
      "location": "Dhaka, Bangladesh",
      "logo": "assets/dreamerz.png",
      "color": "#a855f7",
      "highlights": [
        "Developed VR and AR interactive applications across various industry domains, focusing on immersive UX and real-time interaction.",
        "Worked with Unity (C#), ARCore/ARKit, and custom interaction systems to build high-quality XR solutions.",
        "Contributed across the full dev cycle: requirement analysis, prototyping, implementation, optimization, and deployment.",
        "Built interactive systems with 3D environments, gesture-based interactions, and device-specific features for mobile and headset platforms.",
        "Gained strong experience in cross-platform XR development and rapid prototyping for enterprise clients."
      ],
      "tags": ["Unity", "AR", "ARCore", "ARKit", "C#", "XR"]
    }
  ],
  "projects": [
  {
    "title": "Idle Miner Tycoon",
    "subtitle": "Mobile Tycoon — Live Game",
    "company": "Kolibri Games (Ubisoft Mobile)",
    "period": "Jan 2025 — Present",
    "role": "Feature Developer, Tool Developer",
    "description": "Working on a large-scale live mobile game with 100K+ daily active users. Responsible for feature development, LiveOps systems, internal tools, and backend integration to support continuous content delivery and player engagement.",
    "thumbnail": "assets/projects/imt.jpg",
    "platforms": ["Android", "iOS"],
    "tags": ["Unity", "C#", "LiveOps", "Backend Integration"],
    "links": [
      { "label": "App Store", "url": "https://apps.apple.com/us/app/idle-miner-tycoon-gold-digger/id1116645064" }
    ],
    "featured": true
  },
  {
    "title": "The Starfallen Prince",
    "subtitle": "Bullet Heaven Roguelike — Steam",
    "company": "Red Thorn Interactive",
    "period": "2024 — Present",
    "role": "Lead Developer, System Architect",
    "description": "A fast-paced bullet heaven roguelike set in a fallen feudal sci-fi world. Leading full development, including gameplay systems, architecture, and performance optimization for PC platforms.",
    "thumbnail": "assets/projects/starfallen.jpg",
    "platforms": ["Windows", "macOS", "Linux"],
    "tags": ["Unity", "C#", "Roguelike", "System Architecture"],
    "links": [
      { "label": "Steam", "url": "https://store.steampowered.com/app/4221840/The_Starfallen_Prince/" }
    ],
    "featured": true
  },
  {
    "title": "Museum Keeper",
    "subtitle": "PC/Console Tycoon — Steam",
    "company": "Red Thorn Interactive",
    "period": "Jan 2024 — Dec 2024",
    "role": "Lead Developer, System Architect",
    "description": "A museum management simulation game released on Steam. Designed full system architecture and backend (ASP.NET), implemented gameplay systems, and led the project to launch across PC and Nintendo Switch.",
    "thumbnail": "assets/projects/museum.jpg",
    "platforms": ["Windows", "macOS", "Linux", "Nintendo Switch"],
    "tags": ["Godot", "GDScript", "ASP.NET Core", "System Design"],
    "links": [
      { "label": "Steam", "url": "https://store.steampowered.com/app/2708780/Museum_Keeper/" }
    ],
    "featured": true
  },
  {
    "title": "AlexanderBall: A Countryball Tale",
    "subtitle": "Grand Strategy / RTS — Steam",
    "company": "Red Thorn Interactive",
    "period": "Oct 2022 — Feb 2024",
    "role": "Lead Developer, System Architect",
    "description": "A Play-Pause grand strategy game with 93% positive reviews on Steam. Led full development from architecture to release, combining RTS, turn-based, and strategy mechanics into a unique hybrid system.",
    "thumbnail": "assets/projects/alexander.jpg",
    "platforms": ["Windows", "macOS", "Linux"],
    "tags": ["Unity", "C#", "Strategy", "System Architecture"],
    "links": [
      { "label": "Steam", "url": "https://store.steampowered.com/app/1944660/AlexanderBall_A_Countryball_Tale/" }
    ],
    "featured": true
  },
  {
    "title": "Founders",
    "subtitle": "Play-Pause Strategy RPG — In Development",
    "company": "Red Thorn Interactive",
    "period": "Jul 2023 — Nov 2024",
    "role": "Lead Developer",
    "description": "An ambitious strategy RPG inspired by Civilization. Built with advanced architecture patterns including Dependency Injection (Zenject), UniRx, UniTask, and parallel systems for scalability and performance.",
    "thumbnail": "assets/projects/founders.jpg",
    "platforms": ["PC"],
    "tags": ["Unity", "C#", "Zenject", "Architecture"],
    "links": [
      { "label": "GitHub", "url": "https://github.com/shadmanArko/Founders" }
    ],
    "featured": false
  },
  {
    "title": "Silent Scream",
    "subtitle": "Horror / Stealth — Steam",
    "company": "Brain Station 23",
    "period": "Jul 2022 — Sep 2022",
    "role": "Gameplay Programmer",
    "description": "A horror-stealth game inspired by Junji Ito and Lovecraft. Developed gameplay systems and mechanics supporting stealth, AI interaction, and atmosphere-driven design.",
    "thumbnail": "assets/projects/silent.jpg",
    "platforms": ["Windows", "macOS", "Linux"],
    "tags": ["Unity", "C#", "Horror", "Stealth"],
    "links": [
      { "label": "Steam", "url": "https://store.steampowered.com/app/1955750/SILENT_SCREAM/" }
    ],
    "featured": false
  },
  {
    "title": "SAFS — Small Arms Firing Simulator",
    "subtitle": "Military VR Training System",
    "company": "Bangladesh Navy",
    "period": "Jan 2021 — Jul 2021",
    "role": "Lead Unity Developer",
    "description": "A multiplayer VR military training simulator supporting 16 users with haptic feedback (bHaptics). Built with Photon networking and deployed on HTC Vive Pro and Meta Quest 2.",
    "thumbnail": "assets/projects/safs.jpg",
    "platforms": ["HTC Vive Pro", "Meta Quest 2"],
    "tags": ["Unity", "VR", "Photon", "Multiplayer"],
    "links": [],
    "featured": false
  },
  {
    "title": "Fire Awareness VR Simulator",
    "subtitle": "Enterprise VR Training",
    "company": "Brain Station 23",
    "period": "Oct 2021",
    "role": "Lead Unity Developer",
    "description": "A VR training simulator for fire safety and emergency response. Built using Unity XR toolkit for Meta Quest 2 with realistic interaction and scenario-based learning.",
    "thumbnail": "assets/projects/fire.jpg",
    "platforms": ["Meta Quest 2"],
    "tags": ["Unity", "VR", "XR"],
    "links": [
      { "label": "Demo", "url": "https://www.youtube.com/watch?v=zLBzYY3aDn8" }
    ],
    "featured": false
  },
  {
    "title": "NOX Eternus",
    "subtitle": "Mobile Strategy Game",
    "company": "Brain Station 23",
    "period": "Nov 2021 — Jan 2022",
    "role": "Developer",
    "description": "A mobile strategy game combining narrative and decision-making systems. Focused on gameplay implementation and delivering a polished user experience.",
    "thumbnail": "assets/projects/nox.jpg",
    "platforms": ["Android"],
    "tags": ["Unity", "C#"],
    "links": [
      { "label": "Google Play", "url": "https://play.google.com/store/apps/details?id=com.ictgames.noxeterners&hl=en_US" }
    ],
    "featured": false
  },
  {
    "title": "Westwood Manor",
    "subtitle": "Horror Puzzle Game",
    "company": "Brain Station 23",
    "period": "Sep 2021 — Dec 2021",
    "role": "Gameplay Programmer",
    "description": "A HDRP-based horror puzzle game featuring immersive environments and interactive gameplay systems. Focused on gameplay mechanics and player interaction.",
    "thumbnail": "assets/projects/westwood.jpg",
    "platforms": ["PC"],
    "tags": ["Unity", "HDRP"],
    "links": [
      { "label": "Itch.io", "url": "https://brainstation23.itch.io/westwood-manor" }
    ],
    "featured": false
  },
  {
    "title": "Dungeon Run",
    "subtitle": "Arcade Runner",
    "company": "Brain Station 23",
    "period": "Sep 2021 — Nov 2021",
    "role": "Gameplay Programmer",
    "description": "A fast-paced arcade runner with procedural level design and responsive controls. Implemented core gameplay systems and mechanics.",
    "thumbnail": "assets/projects/dungeon.jpg",
    "platforms": ["PC"],
    "tags": ["Unity", "C#"],
    "links": [
      { "label": "Itch.io", "url": "https://brainstation23.itch.io/dungeonrun" }
    ],
    "featured": false
  },
  {
    "title": "AutoLab",
    "subtitle": "Augmented Reality App",
    "company": "Dreamerz Lab",
    "period": "Jul 2019 — Dec 2019",
    "role": "Junior Gameplay Programmer",
    "description": "An AR-based interactive application blending real-world interaction with virtual gameplay elements. Focused on AR integration and gameplay systems.",
    "thumbnail": "assets/projects/autolab.jpg",
    "platforms": ["Android"],
    "tags": ["Unity", "AR"],
    "links": [
      { "label": "Google Play", "url": "https://play.google.com/store/apps/details?id=com.dreamerzlab.autolab&hl=en_US" }
    ],
    "featured": false
  },
  {
    "title": "Project L.I.F.E.",
    "subtitle": "NASA Space Apps — Top 10 Global",
    "company": "BRAC University",
    "period": "Oct 2019",
    "role": "Developer",
    "description": "A VR Mars survival simulation built using NASA open data. Achieved Top 10 globally in NASA Space Apps Challenge.",
    "thumbnail": "assets/projects/life.jpg",
    "platforms": ["VR", "Cross-Platform"],
    "tags": ["Unity", "VR", "NASA"],
    "links": [
      { "label": "Project Page", "url": "https://2019.spaceappschallenge.org/challenges/planets-near-and-far/build-planet-workshop/teams/ducks-in-disguise/project/" }
    ],
    "featured": false
  }
],
  "certificates": [
    {
      "title": "Game Development for Modern Platforms",
      "issuer": "Michigan State University (via Coursera)",
      "date": "August 2020",
      "logo": "assets/certs/msu.png",
      "image": "assets/certs/msu_cert.jpg"
    },
    {
      "title": "Game Development — 18-Day Hands-On Training",
      "issuer": "CVIS Research Lab, BRAC University",
      "date": "Fall 2018",
      "logo": "assets/certs/bracu.png",
      "image": "assets/certs/bracu_gamedev.jpg"
    },
    {
      "title": "Virtual and Augmented Reality — CVIS Training",
      "issuer": "BRAC University",
      "date": "Spring 2019",
      "logo": "assets/certs/bracu.png",
      "image": "assets/certs/bracu_vr.jpg"
    },
    {
      "title": "Workshop: Learn to Create a VR Game with Unity",
      "issuer": "VRCON — Bangladesh Innovation Forum",
      "date": "2019",
      "logo": "assets/certs/vrcon.png",
      "image": "assets/certs/vrcon_unity.jpg"
    },
    {
      "title": "Workshop: VR Pipeline",
      "issuer": "VRCON — Bangladesh Innovation Forum",
      "date": "2019",
      "logo": "assets/certs/vrcon.png",
      "image": "assets/certs/vrcon_pipeline.jpg"
    },
    {
      "title": "NASA Space Apps Challenge 2019",
      "issuer": "NASA / BASIS",
      "date": "2019",
      "note": "Top 10 Global — Team Ducks in Disguise",
      "logo": "assets/certs/nasa.png",
      "image": "assets/certs/nasa_cert.jpg"
    },
    {
      "title": "Certificate of Excellence — Outstanding Poster Presentation",
      "issuer": "BRAC University Natural Sciences Club (BUNSC)",
      "date": "July 24, 2017",
      "note": "Simulated 3D Environment — Twenty-One-Ovation",
      "logo": "assets/certs/bracu.png",
      "image": "assets/certs/bunsc_cert.jpg"
    },
    {
      "title": "Presentation Skills",
      "issuer": "BRAC University",
      "date": "Jan 2017 — Apr 2017",
      "logo": "assets/certs/bracu.png",
      "image": "assets/certs/bracu_presentation.jpg"
    }
  ]
}
  ;
