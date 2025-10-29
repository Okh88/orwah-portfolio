
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Download, Moon, Sun, Globe, Smartphone, Code, MonitorSmartphone } from "lucide-react";

// ====== QUICK CONFIG ======
// Change these values to personalize your site fast.
const PROFILE = {
  name: "Orwah Khadrow",
  roles: ["Mobile App Developer", "Web Designer", "IT Tekniker"],
  location: "Lund, Sweden",
  email: "orwah@example.com",
  phone: "+46 70 000 00 00",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/orwah-khadrow/",
  // Swap this with your own hosted image (square or 4:5 works best)
  photo: "https://drive.google.com/file/d/17ctoopqPauBjFIwh1rb7G9hTdMklnVnm/view?usp=drive_link", // placeholder
  // Short bio
  tagline:
    "I design and build thoughtful mobile & web experiences, and keep systems running smoothly as an IT technician.",
};

// Showcase projects (edit freely)
const PROJECTS = [
  {
    title: "TogetherWeCan – Volunteer App",
    category: "Android",
    blurb:
      "Android app built with Kotlin + Jetpack Compose and Firebase for event discovery and volunteering.",
    image:
      "https://drive.google.com/file/d/1LwsTEXPN300RE7gNzDYDJ6aAiTOimF3O/view?usp=drive_link",
    tags: ["Kotlin", "Compose", "Firebase", "Maps"],
    link: "#",
  },
  {
    title: "My Word Today– Challenge Words with friends",
    category: "iOS",
    blurb:
      "Responsive web portal for exploring parks and cycling routes, with Mapbox GL and Node.js backend.",
    image:
      "https://drive.google.com/file/d/1CcynqoXG2gEOU22hFfkebCGha1mvVKHm/view?usp=drive_link",
    tags: ["Xcode", "firebase"],
    link: "#",
  },
  {
    title: "Medicine-Tracker",
    category: "iOS / Android",
    blurb:
      "Easy to Plan your pills and tasks.",
    image:
      "https://drive.google.com/file/d/16xXMzr621Gkd9hIR5WXqjDRRNa1KL7z_/view?usp=sharing",
    tags: ["Xcode", "firebase"],
    link: "#",
  },
];

const SERVICES = [
  {
    title: "Mobile App Development",
    icon: Smartphone,
    lines: ["Kotlin / Jetpack Compose / Xcode / React Naitve", "Firebase & REST APIs", "Play Store readiness"],
  },
  {
    title: "Web Design",
    icon: MonitorSmartphone,
    lines: ["React / Next.js", "Modern UI/UX", "Figma", "Responsive & accessible"],
  },
  {
    title: "IT Support",
    icon: Code,
    lines: ["MDM & device imaging", "Backup & monitoring", "Scripting (Bash/Python)"],
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full px-3 py-1 text-xs bg-black/5 dark:bg-white/5">
      {children}
    </span>
  );
}

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-neutral-50 text-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 transition-colors">
        {/* Nav */}
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-black/30">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="font-bold tracking-tight">{PROFILE.name}</div>
            <nav className="flex items-center gap-2">
              <a href="#work" className="px-3 py-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10">Work</a>
              <a href="#about" className="px-3 py-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10">About</a>
              <a href="#services" className="px-3 py-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10">Services</a>
              <a href="#contact" className="px-3 py-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10">Contact</a>
              <button
                aria-label="Toggle theme"
                onClick={() => setDark((d) => !d)}
                className="ml-1 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 pt-14 pb-16 grid md:grid-cols-[1.1fr,0.9fr] gap-8 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight">
              {PROFILE.name}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300">
              {PROFILE.tagline}
            </motion.p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {PROFILE.roles.map((r) => (
                <Badge key={r}>{r}</Badge>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#work" className="px-5 py-2 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium hover:opacity-90">
                View Work
              </a>
              <a href="#contact" className="px-5 py-2 rounded-2xl border border-neutral-300 dark:border-neutral-700 font-medium hover:bg-black/5 dark:hover:bg-white/5">
                Contact Me
              </a>
              <a href="#" className="px-5 py-2 rounded-2xl border border-neutral-300 dark:border-neutral-700 font-medium inline-flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5">
                <Download size={16} /> Download CV
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <span className="inline-flex items-center gap-1"><MapPin size={16} /> {PROFILE.location}</span>
              <a className="inline-flex items-center gap-1 hover:underline" href={`mailto:${PROFILE.email}`}><Mail size={16} /> {PROFILE.email}</a>
              <a className="inline-flex items-center gap-1 hover:underline" href={`tel:${PROFILE.phone}`}><Phone size={16} /> {PROFILE.phone}</a>
            </div>

            <div className="mt-4 flex gap-3">
              <a className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10" href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></a>
              <a className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10" href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img src={PROFILE.photo} alt="Portrait of Orwah Khadrow" className="w-full h-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-black/10 dark:ring-white/10 rounded-3xl pointer-events-none" />
          </motion.div>
        </section>

        {/* Work */}
        <section id="work" className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Selected Work</h2>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 inline-flex items-center gap-2"><Globe size={16}/> Updated {new Date().getFullYear()}</div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <a key={p.title} href={p.link} className="group rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-shadow">
                <div className="relative aspect-video overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
                </div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">{p.category}</div>
                  <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm">{p.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 hover:shadow-lg transition-shadow">
                <s.icon />
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                  {s.lines.map((l) => (
                    <li key={l}>• {l}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-[0.9fr,1.1fr] gap-8 items-start">
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6">
            <h2 className="text-2xl md:text-3xl font-bold">About</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              I’m a developer with a focus on clean UI and robust, maintainable code. I’ve built apps that connect
              communities, map cities, and automate IT operations. I value clarity, performance, and accessibility.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Kotlin", "Android", "Compose", "React", "TypeScript", "Firebase", "GIS", "FME"].map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6">
            <h3 className="text-xl font-semibold">Highlights</h3>
            <ul className="mt-3 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>• Led Android app from prototype to beta with 1k+ test users.</li>
              <li>• Designed a fast, accessible React frontend for a GIS portal.</li>
              <li>• Implemented MDM rollout & scripting that cut tickets by 40%.</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-6xl mx-auto px-4 py-14">
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Let’s work together</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              Tell me about your idea and I’ll get back within 24 hours.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm">
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" href={`mailto:${PROFILE.email}`}>
                <Mail size={16}/> Email Me
              </a>
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-300 dark:border-neutral-700" href={`tel:${PROFILE.phone}`}>
                <Phone size={16}/> Call
              </a>
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-neutral-300 dark:border-neutral-700" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={16}/> LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="py-10 text-center text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} {PROFILE.name}. Built with React & Tailwind.
        </footer>
      </div>
    </div>
  );
}
