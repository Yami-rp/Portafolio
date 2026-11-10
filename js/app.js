/* Lógica del portafolio (compartida por ES y EN).
   Requiere que antes se cargue js/data-es.js o js/data-en.js (define IM, S y SLOTS). */
const LINKEDIN = "https://www.linkedin.com/in/elida-yamileth-rodriguez-pineda?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      EMAIL = "rodriguezyamileth2080@gmail.com",
      PLATZI = "https://platzi.com/@rodriguezyami869/",
      CERTIPORT = "https://verify.certiport.com/";
/* Opcional: pega aquí tu endpoint de Formspree (https://formspree.io) para recibir los mensajes directo en tu correo sin abrir la app de correo. */
const FORM_ENDPOINT = "";

/* ---------- datos derivados ---------- */
const PROYECTOS = S.projs.map(p => ({ ...p, img: IM[p.k] }));
const CURSOS = [["sc", 15, "e8236c86-e5a0-4d31-9ffc-f4067e7b6c77"], ["ie", 16, "e8c3962f-ce39-4b12-9cf6-1dae2439f682"], ["ec", 14, "0ebc083b-8516-4acf-9af7-95a8d6fd8916"], ["rc", 10, "73349588-a426-4402-890d-176efd5560d3"]]
  .map((c, i) => ({ n: S.courses_l[i], img: IM[c[0]], h: c[1], id: c[2] }));
const RECONOCIMIENTOS = S.awards;   /* [{year, items:[{n,t,img}]}] */
const CERTIFICACIONES = S.certs;

/* ---------- utilidades ---------- */
const $ = s => document.querySelector(s), dlg = $("#dlg"), dc = $("#dc");
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const TI = {
  "Canva": { i: "assets/img/canva.svg" },
  "Figma": { s: "figma", c: "F24E1E" },
  "HTML": { s: "html5", c: "E34F26" },
  "CSS": { s: "css3", c: "1572B6" },
  "Tailwind CSS": { s: "tailwindcss", c: "06B6D4" },
  "JavaScript": { s: "javascript", c: "F7DF1E" },
  "Next.js": { s: "nextdotjs", c: "888888" },
  "Node.js": { s: "nodedotjs", c: "5FA04E" },
  "Supabase": { s: "supabase", c: "3FCF8E" },
  "GitHub": { s: "github", c: "888888" }
};
const techChips = list => list.map(n => { const t = TI[n], src = t ? (t.i || `https://cdn.simpleicons.org/${t.s}/${t.c}`) : "";
  return `<span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-ln text-sm">${src ? `<img src="${src}" alt="" style="width:18px;height:18px;background:none">` : ""}${esc(n)}</span>` }).join("");

const open = html => { dc.innerHTML = html; dlg.showModal() };
const BTN = "btn", BTNO = "btn o";
let tt; function toast(m) { const t = $("#toast"); t.textContent = m; t.classList.add("on"); clearTimeout(tt); tt = setTimeout(() => t.classList.remove("on"), 2600) }

/* ---------- render: proyectos ---------- */
$("#pj").innerHTML = PROYECTOS.map((p, i) => `<article class="card"><div class="aspect-[16/10] grid place-items-center overflow-hidden" style="background:${p.bg}"><img src="${p.img}" alt="Logo ${esc(p.n)}" class="w-full h-full ${p.fit === "contain" ? "object-contain p-3" : "object-cover"}"></div><div class="p-5 flex flex-col gap-2.5 flex-1"><h3 class="font-display font-bold text-lg">${S.project} ${i + 1}: ${esc(p.n)}</h3><p class="text-mu text-[.92rem] flex-1">${esc(p.d)}</p><div class="flex flex-wrap gap-3 mt-2">${p.l.map(l => `<a class="${BTN}" href="${l}" target="_blank" rel="noopener">${S.view}</a>`).join("")}<button class="${BTNO}" data-p="${i}">${S.more}</button></div></div></article>`).join("");

/* ---------- render: cursos ---------- */
$("#cs").innerHTML = CURSOS.map((c, i) => `<article class="card"><button class="aspect-[16/10] grid place-items-center bg-white overflow-hidden cursor-zoom-in" data-c="${i}" aria-label="${esc(c.n)}"><img src="${c.img}" alt="${esc(c.n)}" loading="lazy" class="w-full h-full object-contain"></button><div class="p-5 flex flex-col gap-2.5"><h3 class="font-display font-bold text-lg">${esc(c.n)}</h3><p class="text-mu text-[.92rem]">${c.h} ${S.hrs}</p></div></article>`).join("");

/* ---------- render: reconocimientos (una card por año) ---------- */
$("#rc").innerHTML = RECONOCIMIENTOS.map((g, gi) => `<article class="card"><div class="grid gap-2 p-3 pb-0 ${g.items.length > 1 ? "grid-cols-2" : "grid-cols-1"}">${g.items.map((r, ri) => `<button class="thumb" data-r="${gi}.${ri}" aria-label="${esc(r.n)}"><img src="${r.img}" alt="${esc(r.n)}" loading="lazy"></button>`).join("")}</div><div class="p-5 flex flex-col gap-2"><div class="flex items-baseline justify-between gap-3"><h3 class="year">${g.year}</h3><span class="text-mu text-xs">${g.items.length} ${g.items.length === 1 ? S.item : S.items}</span></div><ul class="text-mu text-[.92rem] grid gap-1.5 list-disc pl-5">${g.items.map(r => `<li>${esc(r.n)}</li>`).join("")}</ul></div></article>`).join("")
  + Array.from({ length: SLOTS }, () => `<article class="card empty"><b class="font-display font-extrabold text-4xl">+</b><span>${S.slot}</span></article>`).join("");

/* ---------- render: certificaciones ---------- */
$("#ct").innerHTML = CERTIFICACIONES.map((c, i) => `<article class="card"><button class="aspect-[16/10] grid place-items-center bg-white overflow-hidden cursor-zoom-in" data-k="${i}" aria-label="${esc(c.n)}"><img src="${c.img}" alt="${esc(c.n)}" loading="lazy" class="w-full h-full object-contain"></button><div class="p-5 flex flex-col gap-2"><h3 class="font-display font-bold text-lg">${esc(c.n)}</h3><p class="text-mu text-[.92rem]">${esc(c.sub)}</p><p class="text-mu text-[.92rem]"><b class="text-tx">${S.certDate}:</b> ${esc(c.date)}</p><p class="text-mu text-xs">${S.code}: ${esc(c.code)}</p></div></article>`).join("");

/* ---------- clics: copiar + modales ---------- */
document.addEventListener("click", e => {
  const t = e.target.closest("[data-p],[data-c],[data-r],[data-k],.cp"); if (!t) return;
  if (t.matches(".cp")) { navigator.clipboard && navigator.clipboard.writeText(t.dataset.c).then(() => toast(S.copied)).catch(() => toast(S.nocopy)); return }
  if (t.dataset.p !== undefined) { const p = PROYECTOS[t.dataset.p]; open(`<h3 class="font-display font-bold text-2xl">${esc(p.n)}</h3>${p.video ? `<video controls playsinline preload="metadata" poster="${p.img}" style="display:block;margin:0 auto;width:auto;max-width:100%;max-height:70vh;border-radius:12px;background:#000"><source src="${p.video}" type="video/mp4"></video>` : `<div style="background:${p.bg};border-radius:8px;padding:16px"><img src="${p.img}" alt="Logo ${esc(p.n)}" style="max-height:200px;background:none"></div>`}<p class="text-mu">${esc(p.d)}</p>${p.role ? `<div><h4 class="font-display font-bold">${S.role}</h4><p class="text-mu mt-1">${esc(p.role)}</p></div>` : ""}${p.tech ? `<div><h4 class="font-display font-bold">${S.tech}</h4><div class="flex flex-wrap gap-2 mt-2">${techChips(p.tech)}</div></div>` : ""}<div class="flex flex-wrap gap-3">${p.l.length ? p.l.map(l => `<a class="${BTN}" href="${l}" target="_blank" rel="noopener">${S.view}</a>`).join("") : `<span class="text-mu">${S.noLink}</span>`}</div>`); return }
  if (t.dataset.c !== undefined) { const c = CURSOS[t.dataset.c]; open(`<h3 class="font-display font-bold text-2xl">${esc(c.n)}</h3><img src="${c.img}" alt="${esc(c.n)}"><div class="flex flex-wrap gap-3"><a class="${BTN}" href="${PLATZI}" target="_blank" rel="noopener">${S.platzi}</a></div><p class="text-mu text-xs">${S.code}: ${c.id}</p>`); return }
  if (t.dataset.r !== undefined) { const [gi, ri] = t.dataset.r.split(".").map(Number), g = RECONOCIMIENTOS[gi], r = g.items[ri]; open(`<div class="flex items-baseline gap-3"><span class="year">${g.year}</span><h3 class="font-display font-bold text-2xl">${esc(r.n)}</h3></div><img src="${r.img}" alt="${esc(r.n)}"><p class="text-mu">${esc(r.t)}</p>`); return }
  if (t.dataset.k !== undefined) { const c = CERTIFICACIONES[t.dataset.k]; open(`<h3 class="font-display font-bold text-2xl">${esc(c.n)}</h3><p class="text-mu -mt-2">${esc(c.sub)}</p><img src="${c.img}" alt="${esc(c.n)}"><p class="text-mu"><b class="text-tx">${S.certDate}:</b> ${esc(c.date)}<br>${S.certExp}</p><div class="flex flex-wrap gap-3"><a class="${BTN}" href="${CERTIPORT}" target="_blank" rel="noopener">${S.certVerify}</a></div><p class="text-mu text-xs">${S.code}: ${esc(c.code)}</p>`) }
});
$("#dx").onclick = () => dlg.close();
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close() });
dlg.addEventListener("close", () => { dc.innerHTML = "" });

/* ---------- menú móvil ---------- */
const mnav = $("#mnav"), bg = $("#bg");
bg.onclick = () => { const o = mnav.classList.toggle("hidden"); bg.setAttribute("aria-expanded", !o) };
mnav.addEventListener("click", e => { if (e.target.tagName === "A") { mnav.classList.add("hidden"); bg.setAttribute("aria-expanded", "false") } });

/* ---------- link activo ---------- */
const links = [...document.querySelectorAll("#nav a")];
const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.hash === "#" + e.target.id)) }), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section").forEach(s => so.observe(s));

/* ---------- contadores + reveal ---------- */
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; cio.unobserve(e.target);
  const n = +e.target.dataset.n, t0 = performance.now(), rm = matchMedia("(prefers-reduced-motion:reduce)").matches;
  (function f(t) { const k = rm ? 1 : Math.min((t - t0) / 1200, 1); e.target.textContent = Math.round(n * k); if (k < 1) requestAnimationFrame(f) })(t0)
}), { threshold: .6 });
document.querySelectorAll("[data-n]").forEach(b => cio.observe(b));
const rio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rio.unobserve(e.target) } }), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(r => rio.observe(r));

/* ---------- tema claro/oscuro ---------- */
const root = document.documentElement;
try { const s = localStorage.getItem("tema"); if (s) root.dataset.theme = s } catch (e) { }
$("#th").onclick = () => { const v = root.dataset.theme === "light" ? "dark" : "light"; root.dataset.theme = v; try { localStorage.setItem("tema", v) } catch (e) { } };

/* ---------- formulario de contacto ---------- */
const cf = $("#cf"), card = $("#card"), err = $("#err");
card.addEventListener("pointermove", e => { const r = card.getBoundingClientRect(); card.firstElementChild.style.setProperty("--mx", (e.clientX - r.left) + "px"); card.firstElementChild.style.setProperty("--my", (e.clientY - r.top) + "px") });
$("#fm").addEventListener("input", e => $("#cnt").textContent = e.target.value.length + "/600");
cf.addEventListener("submit", async e => {
  e.preventDefault();
  const n = $("#fn"), m = $("#fe"), g = $("#fm");
  const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.value.trim());
  [[n, n.value.trim()], [m, okEmail], [g, g.value.trim()]].forEach(([el, ok]) => el.parentElement.classList.toggle("bad", !ok));
  if (!n.value.trim() || !okEmail || !g.value.trim()) { err.classList.remove("hidden"); return }
  err.classList.add("hidden");
  const btn = $("#sb"); btn.disabled = true; btn.classList.add("sending"); $("#sl").textContent = S.sending;
  const data = { name: n.value.trim(), email: m.value.trim(), message: g.value.trim() };
  let sent = false;
  if (FORM_ENDPOINT) { try { const r = await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) }); sent = r.ok } catch (_) { } }
  await new Promise(r => setTimeout(r, 900));
  if (!sent) { location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(S.subj + " – " + data.name) + "&body=" + encodeURIComponent(data.message + "\n\n" + S.from_ + ": " + data.name + " <" + data.email + ">"); toast(S.ok) }
  $("#formWrap").classList.add("hidden"); $("#thanks").classList.remove("hidden");
  btn.disabled = false; btn.classList.remove("sending"); $("#sl").textContent = S.send;
});
$("#again").onclick = () => { cf.reset(); $("#cnt").textContent = "0/600"; $("#thanks").classList.add("hidden"); $("#formWrap").classList.remove("hidden"); $("#fn").focus() };