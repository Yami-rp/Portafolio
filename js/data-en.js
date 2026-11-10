/* Datos y textos del portafolio — ENGLISH */
const IM = {
  sec: "assets/img/sec.jpg", med: "assets/img/med.jpg", loq: "assets/img/loq.jpg",
  sc: "assets/img/sc.jpg", ec: "assets/img/ec.jpg", rc: "assets/img/rc.jpg", ie: "assets/img/ie.jpg",
  hil: "assets/img/hil.jpg"
};

const S = {
  project: "Project", more: "More info", noLink: "This project doesn't have a public link yet.", view: "View project",
  hrs: "hours of theory and practice. Completed on November 8, 2026 on Platzi.",
  platzi: "View Platzi profile", code: "Verification code",
  slot: "Space for a new award",
  items: "awards", item: "award",
  certDate: "Date of achievement", certExp: "Certificate expires 5 years after date of issue.", certVerify: "Verify on Certiport",
  send: "Send message", sending: "Sending…", ok: "Message ready! Your email app will open to send it.",
  copied: "Copied", nocopy: "Couldn't copy", subj: "Message from your portfolio", from_: "From",
  projs: [
    { n: "SecureSence", k: "sec", bg: "#5b7a66", fit: "contain", d: "A project to help people when they need it most: it let users contact the nearest ambulances and had an emergency button that automatically called the closest ambulance center.", l: [] },
    { n: "MedSpark", k: "med", bg: "#06063a", fit: "cover", d: "A website to look after Salvadorans' wallets through cashback: customers bought medical products at partner pharmacies and earned cashback on every purchase.", l: ["https://jeferson50.github.io/MedSpark2.0/"] },
    { n: "Loqalli", k: "loq", bg: "#fff", fit: "cover", d: "Loqalli is a digital platform that connects tourists with local entrepreneurs to share cultural experiences, promote Salvadoran traditions, and boost the local economy. My role: Frontend and Backend Developer, as well as participating in the development and presentation of the project pitch.", l: ["https://loqalli-expo-tech.vercel.app/"] }
  ],
  courses_l: ["Supply Chain", "Business Innovation", "E-commerce Fundamentals", "Conflict Resolution"],
  /* Awards grouped by year: each year is one card */
  awards: [
    { year: "2024", items: [
      { n: "Outstanding Performance · 1st semester 2024", t: "For achieving high scores in both institutions during the first semester of 2024.", img: "assets/img/rec-2024-s1.jpg" },
      { n: "Outstanding Performance · 2nd semester 2024", t: "For achieving high scores in both institutions during the second semester of 2024.", img: "assets/img/rec-2024-s2.jpg" }
    ]},
    { year: "2025", items: [
      { n: "Certificate of Achievement · 1st semester 2025", t: "For achieving a high grade in ¡Supérate! Hilasal during the first semester of 2025. July 2025.", img: "assets/img/rec-2025-s1.jpg" },
      { n: "Certificate of Achievement · 2nd semester 2025", t: "For achieving a high grade in ¡Supérate! Hilasal during the second semester of 2025. December 2025.", img: "assets/img/rec-2025-s2.jpg" }
    ]},
    { year: "2026", items: [
      { n: "Certificate of Achievement · 1st semester 2026", t: "For achieving a high grade in ¡Supérate! Hilasal during the first semester of 2026. July 2026.", img: "assets/img/rec-2026-s1.jpg" },
      { n: "Power BI Fundamentals", t: "40-hour module, third year of studies at ¡Supérate! Hilasal. San Juan Opico, September 11, 2026.", img: IM.hil }
    ]}
  ],
  /* Certifications */
  certs: [
    { n: "Excel Associate", sub: "Microsoft Office Specialist · Microsoft 365 Apps", date: "November 4, 2025", code: "J7as-4wvV", img: "assets/img/cert-excel-associate.jpg" },
    { n: "Excel Expert", sub: "Microsoft Office Specialist · Microsoft 365 Apps", date: "March 25, 2026", code: "w6v8P-488s", img: "assets/img/cert-excel-expert.jpg" }
  ]
};

const SLOTS = 0; /* empty slots at the end of the awards section */
