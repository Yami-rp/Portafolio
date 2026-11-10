/* Datos y textos del portafolio — ESPAÑOL */
const IM = {
  sec: "assets/img/sec.jpg", med: "assets/img/med.jpg", loq: "assets/img/loq.jpg",
  sc: "assets/img/sc.jpg", ec: "assets/img/ec.jpg", rc: "assets/img/rc.jpg", ie: "assets/img/ie.jpg",
  hil: "assets/img/hil.jpg"
};

const S = {
  role: "Mi rol", tech: "Tecnologías usadas",
  project: "Proyecto", more: "Más información", noLink: "Este proyecto aún no tiene enlace público.", view: "Ver proyecto",
  hrs: "horas de teoría y práctica. Aprobado el 8 de noviembre de 2026 en Platzi.",
  platzi: "Ver perfil en Platzi", code: "Código de verificación",
  slot: "Espacio para un nuevo reconocimiento",
  items: "reconocimientos", item: "reconocimiento",
  certDate: "Fecha de logro", certExp: "Vence 5 años después de la fecha de emisión.", certVerify: "Verificar en Certiport",
  send: "Enviar mensaje", sending: "Enviando…", ok: "¡Mensaje listo! Se abrirá tu app de correo para enviarlo.",
  copied: "Copiado", nocopy: "No se pudo copiar", subj: "Mensaje desde tu portafolio", from_: "De",
  projs: [
    { n: "SecureSence", k: "sec", bg: "#5b7a66", fit: "contain", d: "Proyecto para ayudar a las personas cuando más lo necesitan: permitía contactar a las ambulancias más cercanas y tenía un botón de emergencia que llamaba automáticamente al centro de ambulancias más cercano.", l: [],
      video: "videos/securesence.mp4",
      role: "Escribe aquí tu rol en SecureSence.",
      tech: ["HTML", "CSS", "JavaScript"] },
    { n: "MedSpark", k: "med", bg: "#06063a", fit: "cover", d: "Sitio web para cuidar el bolsillo de los salvadoreños mediante cashback: los clientes compraban productos médicos en farmacias aliadas y recibían cashback en cada compra.", l: ["https://jeferson50.github.io/MedSpark2.0/"],
      role: "Escribe aquí tu rol en MedSpark.",
      tech: ["HTML", "CSS", "JavaScript"] },
    { n: "Loqalli", k: "loq", bg: "#fff", fit: "cover", d: "Loqalli es una plataforma digital que conecta turistas con emprendedores locales para compartir experiencias culturales, promover las tradiciones salvadoreñas e impulsar la economía local.", l: ["https://loqalli-expo-tech.vercel.app/"],
      role: "Programadora Frontend y Backend, además de participar en la elaboración y presentación del pitch del proyecto.",
      tech: ["Next.js", "Node.js", "Supabase", "Tailwind CSS", "GitHub"] }
  ],
  courses_l: ["Supply Chain", "Innovación Empresarial", "Fundamentos de Ecommerce", "Resolución de Conflictos"],
  /* Reconocimientos agrupados por año: cada año es una card */
  awards: [
    { year: "2024", items: [
      { n: "Desempeño sobresaliente · 1.er semestre 2024", t: "Por obtener altas calificaciones en ambas instituciones durante el primer semestre de 2024.", img: "assets/img/rec-2024-s1.jpg" },
      { n: "Desempeño sobresaliente · 2.º semestre 2024", t: "Por obtener altas calificaciones en ambas instituciones durante el segundo semestre de 2024.", img: "assets/img/rec-2024-s2.jpg" }
    ]},
    { year: "2025", items: [
      { n: "Certificado de logro · 1.er semestre 2025", t: "Por obtener una calificación alta en ¡Supérate! Hilasal durante el primer semestre de 2025. Julio de 2025.", img: "assets/img/rec-2025-s1.jpg" },
      { n: "Certificado de logro · 2.º semestre 2025", t: "Por obtener una calificación alta en ¡Supérate! Hilasal durante el segundo semestre de 2025. Diciembre de 2025.", img: "assets/img/rec-2025-s2.jpg" }
    ]},
    { year: "2026", items: [
      { n: "Certificado de logro · 1.er semestre 2026", t: "Por obtener una calificación alta en ¡Supérate! Hilasal durante el primer semestre de 2026. Julio de 2026.", img: "assets/img/rec-2026-s1.jpg" },
      { n: "Fundamentos de Power BI", t: "Módulo de 40 horas, tercer año de estudios en ¡Supérate! Hilasal. San Juan Opico, 11 de septiembre de 2026.", img: IM.hil }
    ]}
  ],
  /* Certificaciones */
  certs: [
    { n: "Excel Associate", sub: "Microsoft Office Specialist · Microsoft 365 Apps", date: "4 de noviembre de 2025", code: "J7as-4wvV", img: "assets/img/cert-excel-associate.jpg" },
    { n: "Excel Expert", sub: "Microsoft Office Specialist · Microsoft 365 Apps", date: "25 de marzo de 2026", code: "w6v8P-488s", img: "assets/img/cert-excel-expert.jpg" }
  ]
};

const SLOTS = 0; /* espacios vacíos al final de reconocimientos */