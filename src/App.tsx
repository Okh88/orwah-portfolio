import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Globe, Smartphone, Paintbrush, Server, Upload, Palette, Moon, Sun, FileText } from "lucide-react";

// ---- Quick Start -----------------------------------------------------------
// 1) Click the image to upload your own photo.
// 2) Click a color chip to change the accent color.
// 3) Edit the PROJECTS array to showcase your apps.
// 4) Replace social links, email, and phone below.
// 5) (Optional) Connect the Contact button to your form backend.

const DEFAULTS = {
  name: "Orwah Khadrow",
  roles: ["Mobile App Development", "Web Design", "IT Tekniker"],
  email: "orwah.khadrow@hotmail.com",
  phone: "+46 739400093",
  location: "Sweden",
  social: {
    github: "https://github.com/okh88",
    linkedin: "https://www.linkedin.com/in/orwah-khadrow/",
    website: "https://okh88.github.io/orwah-portfolio/",
  },
};

// NOTE: Avoid import.meta.env.BASE_URL so this runs in any environment (canvas, dev, or Pages)
// Use simple relative paths to /public/images assets.
const PROJECTS = [
  {
    title: "TogetherWeCan – Volunteer App",
    tags: ["Android", "Firebase", "Figma"],
    description:
      "Android app built with Kotlin + Jetpack Compose and Firebase for event discovery and volunteering.",
    links: { demo: "#", code: "#" },
    image: "images/TogetherWeCan.png",
  },
  {
    title: "My Word Today",
    tags: ["Swift", "Android", "Figma"],
    description: "Challenge Words with friends.",
    links: { demo: "#", code: "https://apps.apple.com/us/app/my-word-today/id6741070359" },
    image: "images/My Word Today.png",
  },
  {
    title: "Medicine-Tracker",
    tags: ["Next.js", "SwiftUi", "Figma"],
    description: "Easy to Plan your pills and tasks.",
    links: { demo: "#", code: "https://apps.apple.com/us/app/medicine-tracker/id6742337631?platform=iphone" },
    image: "images/Medicine-Tracker.png",
  },
  {
    title: "Sermon Caster",
    tags: ["Kotlin", "Figma"],
    description:
      "To create an inclusive experience for all participants, regardless of language, by providing live translation of spoken messages",
    links: { demo: "#", code: "#" },
    image: "images/SermonCaster.png",
  },
];

const SKILLS = [
  { name: "Kotlin / Jetpack Compose", icon: Smartphone },
  { name: "React / Next.js", icon: Globe },
  { name: "UI/UX & Web Design", icon: Paintbrush },
  { name: "IT Support / Technician", icon: Server },
];

export default function App() {
  const [dark, setDark] = useState(true);
  const [accent, setAccent] = useState("#22c55e"); // emerald
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [projectImages, setProjectImages] = useState<Record<number, string>>({});
  const fileRef = useRef<HTMLInputElement>(null);
  const projectFileRefs = useRef<Array<HTMLInputElement | null>>([]);

  const themeClass = dark ? "dark" : "";

  // Robust CV link that works locally and on GitHub Pages
  const cvUrl = (typeof window !== 'undefined' && window.location.hostname.endsWith('github.io'))
    ? `https://${window.location.host}/orwah-portfolio/Orwah_Khadrow_CV.pdf`
    : 'Orwah_Khadrow_CV.pdf';

  const accentStyle = useMemo<React.CSSProperties>(() => ({
    // Used for borders, glows, and buttons
    // You can paste a brand color hex here
    ["--accent" as any]: accent,
  }), [accent]);

  function pickPhoto() {
    fileRef.current?.click();
  }

  function onPhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhotoUrl(url);
  }

  function onProjectImageChange(index: number, e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setProjectImages((prev) => ({ ...prev, [index]: url }));
  }

  return (
    <div className={`${themeClass} min-h-screen`}>
      <div
        className="bg-gray-50 text-gray-900 dark:bg-[#0b1020] dark:text-gray-100 transition-colors"
        style={accentStyle}
      >
        {/* Sticky top bar */}
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/20 border-b border-white/20 dark:border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-6 rounded-full" style={{ background: "var(--accent)" }} />
              <span className="font-semibold">{DEFAULTS.name}</span>
              <span className="hidden sm:inline text-sm opacity-70">— Portfolio</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDark((d) => !d)}
                className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-white/30 dark:border-white/10 hover:bg-white/50 dark:hover:bg-white/5 transition"
                title="Toggle theme"
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
                <span className="text-sm hidden sm:inline">Theme</span>
              </button>
              <div className="hidden sm:flex items-center gap-2 pl-2">
                <Palette size={16} className="opacity-70" />
                {[
                  "#22c55e",
                  "#06b6d4",
                  "#3b82f6",
                  "#a855f7",
                  "#ef4444",
                  "#eab308",
                ].map((c) => (
                  <button
                    key={c}
                    onClick={() => setAccent(c)}
                    className="w-5 h-5 rounded-full border border-black/10 dark:border-white/10"
                    style={{ background: c, outline: c === accent ? "2px solid white" : undefined }}
                    title={`Accent ${c}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-sm uppercase tracking-widest opacity-70">Available for work</p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
                {DEFAULTS.name}
              </h1>
              <div className="mt-4 flex flex-wrap gap-2">
                {DEFAULTS.roles.map((r) => (
                  <span
                    key={r}
                    className="text-sm px-3 py-1 rounded-full border border-black/10 dark:border-white/10"
                    style={{ boxShadow: "0 0 0 2px color-mix(in oklab, var(--accent) 35%, transparent) inset" }}
                  >
                    {r}
                  </span>
                ))}
              </div>

              <p className="mt-6 max-w-prose opacity-90">
                I build clean, fast and accessible digital products — from Android apps with
                Jetpack Compose to responsive websites and modern UI design.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="rounded-2xl px-5 py-3 font-medium"
                  style={{
                    background: "var(--accent)",
                    color: dark ? "#0b1020" : "white",
                    boxShadow: "0 10px 30px -10px color-mix(in oklab, var(--accent) 50%, transparent)",
                  }}
                >
                  See my apps
                </a>
                <a
                  href={cvUrl}
                  target="_blank" rel="noopener"
                  className="rounded-2xl px-5 py-3 font-medium border border-black/10 dark:border-white/10 hover:bg-white/50 dark:hover:bg-white/5 transition inline-flex items-center gap-2"
                >
                  <FileText size={18} /> View CV
                </a>
                <div className="flex items-center gap-2 ml-2">
                  <a href={DEFAULTS.social.github} className="p-2 rounded-xl hover:bg-white/40 dark:hover:bg-white/5" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                  <a href={DEFAULTS.social.linkedin} className="p-2 rounded-xl hover:bg-white/40 dark:hover:bg-white/5" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href={DEFAULTS.social.website} className="p-2 rounded-xl hover:bg-white/40 dark:hover:bg-white/5" aria-label="Website">
                    <Globe size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Photo + quick actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:justify-self-end"
            >
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-2xl mx-auto">
                <button onClick={pickPhoto} className="absolute inset-0 group" title="Click to change photo">
                  <img
                    src={photoUrl || "images/me.png"}
                    alt="Profile"
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white flex items-center justify-between">
                    <span className="text-sm opacity-90">Change Photo</span>
                    <Upload size={16} />
                  </div>
                </button>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={onPhotoChange}
                />
                <div className="absolute -z-10 inset-0 blur-2xl opacity-40" style={{ background: "var(--accent)" }} />
              </div>
              <div className="mt-4 flex items-center justify-center gap-3 text-sm opacity-80">
                <Mail size={16} />
                <a href={`mailto:${DEFAULTS.email}`} className="hover:underline">{DEFAULTS.email}</a>
                <span>•</span>
                <Phone size={16} />
                <a href={`tel:${DEFAULTS.phone.replace(/\s+/g, "")}`} className="hover:underline">{DEFAULTS.phone}</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section className="border-t border-white/40 dark:border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
            <h2 className="text-xl font-semibold">Core Skills</h2>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {SKILLS.map(({ name, icon: Icon }) => (
                <div key={name} className="flex items-center gap-3 rounded-2xl px-4 py-3 border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5">
                  <Icon size={18} style={{ color: "var(--accent)" }} />
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-white/40 dark:border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">Featured Applications</h2>
                <p className="opacity-80 mt-1">A selection of my recent mobile and web projects.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm opacity-70">Accent:</span>
                <div className="flex items-center gap-2">
                  {["#22c55e", "#06b6d4", "#3b82f6", "#a855f7", "#ef4444", "#eab308"].map((c) => (
                    <button
                      key={c}
                      onClick={() => setAccent(c)}
                      className="w-4 h-4 rounded-full border border-black/10 dark:border-white/10"
                      style={{ background: c, outline: c === accent ? "2px solid white" : undefined }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {PROJECTS.map((p, i) => (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:shadow-xl hover:shadow-black/5"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-white/40 to-white/10 dark:from-white/10 dark:to-white/0">
                  <button
                    type="button"
                    className="absolute inset-0 group"
                    onClick={() => projectFileRefs.current[i]?.click?.()}
                    title="Click to add/change project image"
                  >
                    <img
                      src={projectImages[i] || p.image || "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1600&auto=format&fit=crop"}
                      alt={`${p.title} cover`}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent text-white text-xs flex items-center justify-between">
                      <span className="opacity-90">Change Cover</span>
                      <Upload size={14} />
                    </div>
                  </button>
                  <input
                    ref={(el) => (projectFileRefs.current[i] = el)}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => onProjectImageChange(i, e)}
                  />
                </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <p className="mt-2 text-sm opacity-80">{p.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-full border border-black/10 dark:border-white/10" style={{ boxShadow: "0 0 0 2px color-mix(in oklab, var(--accent) 25%, transparent) inset" }}>{t}</span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <a href={p.links.demo} className="text-sm font-medium hover:underline">Live Demo</a>
                      <span className="opacity-50">•</span>
                      <a href={p.links.code} className="text-sm font-medium hover:underline">Source Code</a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="border-t border-white/40 dark:border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
              <p className="mt-4 leading-relaxed opacity-90">
                I’m a developer and designer focused on creating practical, beautiful products. I enjoy
                building Android apps (Kotlin, Compose) and modern web apps (React/Next.js), from UX
                sketches to deployment. With an IT Tekniker background, I also understand infrastructure
                and support — so the things I build are reliable and easy to maintain.
              </p>
            </div>
            <div className="rounded-3xl p-5 border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5">
              <h3 className="font-semibold">Fast facts</h3>
              <ul className="mt-3 space-y-2 text-sm opacity-90">
                <li>📍 Based in {DEFAULTS.location}</li>
                <li>🗣️ English, Arabic, Swedish</li>
                <li>✅ Open to freelance & full‑time</li>
                <li>💡 Interested in EdTech & civic apps</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-white/40 dark:border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">Let’s build something great</h2>
            <p className="mt-3 opacity-85">Have a project in mind? I’d love to hear about it.</p>
            <div className="mt-6 flex justify-center gap-3">
              <a
                href={`mailto:${DEFAULTS.email}`}
                className="rounded-2xl px-5 py-3 font-medium inline-flex items-center gap-2"
                style={{ background: "var(--accent)", color: dark ? "#0b1020" : "white" }}
              >
                <Mail size={18} /> Email me
              </a>
              <a
                href={`tel:${DEFAULTS.phone.replace(/\s+/g, "")}`}
                className="rounded-2xl px-5 py-3 font-medium border border-black/10 dark:border-white/10 hover:bg-white/50 dark:hover:bg-white/5 transition inline-flex items-center gap-2"
              >
                <Phone size={18} /> Call me
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/40 dark:border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-8 text-sm opacity-70 flex items-center justify-between">
            <span>© {new Date().getFullYear()} {DEFAULTS.name}</span>
            <div className="flex items-center gap-4">
              <a href={DEFAULTS.social.github} className="hover:underline flex items-center gap-1"><Github size={16} /> GitHub</a>
              <a href={DEFAULTS.social.linkedin} className="hover:underline flex items-center gap-1"><Linkedin size={16} /> LinkedIn</a>
              {DEFAULTS.social.website && (
                <a href={DEFAULTS.social.website} className="hover:underline flex items-center gap-1"><Globe size={16} /> Website</a>
              )}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
