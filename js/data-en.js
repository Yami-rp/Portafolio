/* Portfolio data and texts — ENGLISH */
const IM = {
  sec: "assets/img/sec.jpg", med: "assets/img/med.jpg", loq: "assets/img/loq.jpg",
  sc: "assets/img/sc.jpg", ec: "assets/img/ec.jpg", rc: "assets/img/rc.jpg", ie: "assets/img/ie.jpg",
  hil: "assets/img/hil.jpg"
};

const S = {
  role: "My role", tech: "Technologies used",
  project: "Project", more: "More info", noLink: "This project doesn't have a public link yet.", view: "View project",
  hrs: "hours of theory and practice. Passed on November 8, 2026 on Platzi.",
  platzi: "View Platzi profile", code: "Verification code",
  slot: "Space for a new award",
  items: "awards", item: "award",
  certDate: "Date earned", certExp: "Expires 5 years after the issue date.", certVerify: "Verify on Certiport",
  send: "Send message", sending: "Sending…", ok: "Message ready! Your email app will open so you can send it.",
  copied: "Copied", nocopy: "Couldn't copy", subj: "Message from your portfolio", from_: "From",
  projs: [
    { n: "SecureSence", k: "sec", bg: "#5b7a66", fit: "contain", d: "A project to help people when they need it most: it let users contact the nearest ambulances and had an emergency button that automatically called the closest ambulance center.", l: [],
      video: "videos/securesence.mp4",
      role: "Designer.",
      tech: ["Microsoft Lists", "Power Apps", "Figma"] },
    { n: "MedSpark", k: "med", bg: "#06063a", fit: "cover", d: "A website to look after Salvadorans' wallets through cashback: customers bought medical products at partner pharmacies and earned cashback on every purchase.", l: ["https://jeferson50.github.io/MedSpark2.0/"],
      role: "Designer, Frontend Developer, and Pitch Development.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Clerck", "GitHub" ] },
    { n: "Loqalli", k: "loq", bg: "#fff", fit: "cover", d: "Loqalli is a digital platform that connects tourists with local entrepreneurs to share cultural experiences, promote Salvadoran traditions, and boost the local economy.", l: ["https://loqalli-expo-tech.vercel.app/"],
      role: "Frontend and Backend Developer, as well as participating in the development and presentation of the project pitch.",
      tech: ["Next.js", "Node.js", "Supabase", "Tailwind CSS","Verify", "GitHub"] }
  ],
  courses_l: ["Supply Chain", "Business Innovation", "E-commerce Fundamentals", "Conflict Resolution"],
  /* Awards grouped by year: each year is a card */
  awards: [
    { year: "2024", items: [
      { n: "Outstanding performance · 1st semester 2024", t: "For earning high grades at both institutions during the first semester of 2024.", img: "assets/img/rec-2024-s1.jpg" },
      { n: "Outstanding performance · 2nd semester 2024", t: "For earning high grades at both institutions during the second semester of 2024.", img: "assets/img/rec-2024-s2.jpg" }
    ]},
    { year: "2025", items: [
      { n: "Certificate of achievement · 1st semester 2025", t: "For earning a high grade at ¡Supérate! Hilasal during the first semester of 2025. July 2025.", img: "assets/img/rec-2025-s1.jpg" },
      { n: "Certificate of achievement · 2nd semester 2025", t: "For earning a high grade at ¡Supérate! Hilasal during the second semester of 2025. December 2025.", img: "assets/img/rec-2025-s2.jpg" }
    ]},
    { year: "2026", items: [
      { n: "Certificate of achievement · 1st semester 2026", t: "For earning a high grade at ¡Supérate! Hilasal during the first semester of 2026. July 2026.", img: "assets/img/rec-2026-s1.jpg" },
      { n: "Power BI Fundamentals", t: "40-hour module, third year of studies at ¡Supérate! Hilasal. San Juan Opico, September 11, 2026.", img: IM.hil }
    ]}
  ],
  /* Certifications */
  certs: [
    { n: "Excel Associate", sub: "Microsoft Office Specialist · Microsoft 365 Apps", date: "November 4, 2025", code: "J7as-4wvV", img: "assets/img/cert-excel-associate.jpg" },
    { n: "Excel Expert", sub: "Microsoft Office Specialist · Microsoft 365 Apps", date: "March 25, 2026", code: "w6v8P-488s", img: "assets/img/cert-excel-expert.jpg" }
  ]
};

const SLOTS = 0; /* empty slots at the end of awards */