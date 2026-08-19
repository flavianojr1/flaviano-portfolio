'use client';

import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolio as p, Locale } from '@/data/portfolio';

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="mx-auto max-w-6xl px-6 py-24 sm:px-8"
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>('pt');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    if (savedLocale) setLocale(savedLocale);

    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const changeLocale = (l: Locale) => {
    setLocale(l);
    localStorage.setItem('locale', l);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const t = (o: any) => o[locale];

  return (
    <main className="grid-bg min-h-screen overflow-hidden transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#07111f]/85">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <a href="#inicio" className="font-mono text-sm font-bold tracking-tight text-slate-900 dark:text-white">
            <span className="text-sky-600 dark:text-cyan">FA</span>JUNIOR
            <span className="text-sky-600 dark:text-cyan">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 text-xs text-slate-600 dark:text-slate-300 md:flex">
            {p.nav[locale].map((n, i) => (
              <a
                key={n}
                href={['#inicio', '#sobre', '#projetos', '#experiencia', '#contato'][i]}
                className="transition hover:text-sky-600 dark:hover:text-cyan"
              >
                {n}
              </a>
            ))}

            <div className="flex items-center gap-2 border-l border-slate-200 pl-4 dark:border-white/10">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-white/15 dark:text-cyan dark:hover:bg-cyan/10"
                aria-label="Alternar tema claro/escuro"
                title={theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}
              >
                {mounted ? (
                  theme === 'light' ? <Moon size={14} /> : <Sun size={14} />
                ) : (
                  <span className="h-3 w-3" />
                )}
              </button>

              {/* Language Switcher */}
              <button
                onClick={() => changeLocale(locale === 'pt' ? 'en' : 'pt')}
                className="rounded-full border border-slate-200 px-3 py-1 font-mono text-[10px] font-semibold text-sky-600 transition hover:bg-sky-50 dark:border-white/15 dark:text-cyan dark:hover:bg-cyan/10"
                aria-label="Alternar idioma"
              >
                {locale === 'pt' ? 'EN' : 'PT'}
              </button>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition dark:border-white/15 dark:text-cyan"
              aria-label="Alternar tema"
            >
              {mounted ? (
                theme === 'light' ? <Moon size={15} /> : <Sun size={15} />
              ) : (
                <span className="h-3 w-3" />
              )}
            </button>
            <button
              className="p-1 text-slate-700 dark:text-white"
              onClick={() => setOpen(!open)}
              aria-label="Abrir menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              className="overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-[#07111f]/95 md:hidden"
            >
              <div className="flex flex-col gap-5 px-6 py-6 text-sm text-slate-700 dark:text-slate-200">
                {p.nav[locale].map((n, i) => (
                  <a
                    onClick={() => setOpen(false)}
                    key={n}
                    href={['#inicio', '#sobre', '#projetos', '#experiencia', '#contato'][i]}
                  >
                    {n}
                  </a>
                ))}
                <div className="flex items-center justify-between border-t border-slate-200 pt-4 dark:border-white/10">
                  <span className="text-xs text-slate-500">{locale === 'pt' ? 'Idioma' : 'Language'}</span>
                  <button
                    onClick={() => changeLocale(locale === 'pt' ? 'en' : 'pt')}
                    className="font-mono font-bold text-sky-600 dark:text-cyan"
                  >
                    {locale === 'pt' ? 'EN (English)' : 'PT (Português)'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-6 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-20"
      >
        <div className="absolute right-10 top-40 h-64 w-64 rounded-full bg-sky-400/10 blur-[100px] dark:bg-cyan/10" />
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="relative"
        >
          <motion.p variants={fade} className="mb-6 font-mono text-xs uppercase tracking-[.25em] text-sky-600 dark:text-cyan font-semibold">
            {t(p.hero).eyebrow}
          </motion.p>
          <motion.p variants={fade} className="text-lg text-slate-500 dark:text-slate-400">
            {locale === 'pt' ? 'Olá, eu sou' : 'Hello, I am'}
          </motion.p>
          <motion.h1
            variants={fade}
            className="mt-2 max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-.05em] sm:text-7xl"
          >
            <span className="text-gradient">{p.name}</span>
          </motion.h1>
          <motion.p variants={fade} className="mt-5 font-mono text-sm font-medium text-sky-600 dark:text-cyan">
            {t(p.role)}
          </motion.p>
          <motion.p variants={fade} className="mt-7 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">
            {t(p.hero).description}
          </motion.p>
          <motion.div variants={fade} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="group flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-sky-600/20 transition hover:bg-sky-700 dark:bg-cyan dark:text-ink dark:hover:bg-white dark:shadow-none"
            >
              {t(p.hero).primary}
              <ArrowUpRight
                size={16}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
            <a
              href="#contato"
              className="rounded-full border border-slate-300 bg-white/50 px-6 py-3.5 text-sm font-medium text-slate-700 transition hover:border-sky-600 hover:text-sky-600 dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-cyan dark:hover:text-cyan"
            >
              {t(p.hero).secondary}
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="absolute -inset-3 rounded-[2rem] border border-sky-500/20 dark:border-cyan/20" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-sky-500/10 dark:border-white/10 dark:bg-[#02070d] dark:shadow-cyan/10">
            <img
              src="/images/profile-light.png"
              alt="Retrato de Flaviano Astolfo Junior"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-xl border border-slate-200/80 bg-white/95 px-4 py-3 shadow-lg backdrop-blur dark:border-white/10 dark:bg-[#0c1a2c]/90">
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500">
              {locale === 'pt' ? 'Foco' : 'Focus'}
            </p>
            <p className="mt-1 text-sm font-semibold text-sky-600 dark:text-cyan">SQL Server · Power BI · Python</p>
            <p className="mt-1 text-sm font-semibold text-sky-600 dark:text-cyan">Analytics · Automação</p>
          </div>
        </motion.div>

        <a
          href="#sobre"
          className="absolute bottom-10 left-6 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-slate-400 transition hover:text-sky-600 dark:text-slate-500 dark:hover:text-cyan sm:flex"
        >
          <ArrowDown size={14} /> {locale === 'pt' ? 'Role para explorar' : 'Scroll to explore'}
        </a>
      </section>

      {/* Sobre Section */}
      <Section id="sobre">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="font-mono text-xs font-semibold text-sky-600 dark:text-cyan">{t(p.about).label}</p>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              {t(p.about).title}
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">{t(p.about).text}</p>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 dark:border-white/10">
              {t(p.about).facts.map((x: string) => (
                <div key={x} className="text-xs font-medium leading-5 text-slate-500 dark:text-slate-400">
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Toolkit / Habilidades Section */}
      <Section id="habilidades">
        <p className="font-mono text-xs font-semibold text-sky-600 dark:text-cyan">{t(p.skills).label}</p>
        <h2 className="mt-5 max-w-lg text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          {t(p.skills).title}
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {p.skillsData.map((s, i) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={s.name}
              className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/[.03] ${
                i === 0 ? 'sm:col-span-2' : ''
              }`}
            >
              <span className="text-2xl text-sky-600 dark:text-cyan">{s.icon}</span>
              <h3 className="mt-10 font-mono text-lg font-bold text-slate-900 dark:text-white">{s.name}</h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.type}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projetos Section */}
      <Section id="projetos">
        <p className="font-mono text-xs font-semibold text-sky-600 dark:text-cyan">{t(p.projects).label}</p>
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          {t(p.projects).title}
        </h2>
        <p className="mt-5 max-w-xl text-slate-600 dark:text-slate-400">{t(p.projects).intro}</p>
        <div className="mt-12 space-y-8">
          {p.projectsData.map((x, i) => (
            <motion.article
              whileHover={{ y: -4 }}
              key={x.title}
              className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/[.03] md:grid-cols-2"
            >
              <div className="min-h-64 bg-slate-100 p-4 dark:bg-[#0b1c30]">
                <img src={x.image} alt={`Mockup do projeto ${x.title}`} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-sky-600 dark:text-cyan">
                  0{i + 1} · {x.category}
                </p>
                <h3 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">{x.title}</h3>
                <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  <b className="font-semibold text-slate-900 dark:text-slate-200">
                    {locale === 'pt' ? 'Contexto' : 'Context'} ·{' '}
                  </b>
                  {t(x.problem)}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  <b className="font-semibold text-slate-900 dark:text-slate-200">
                    {locale === 'pt' ? 'Solução' : 'Solution'} ·{' '}
                  </b>
                  {t(x.solution)}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {x.tech.map((z) => (
                    <span
                      key={z}
                      className="rounded-full border border-sky-200/60 bg-sky-50 px-3 py-1 font-mono text-[10px] font-semibold text-sky-700 dark:border-transparent dark:bg-cyan/10 dark:text-cyan"
                    >
                      {z}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-white/10">
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">{t(x.result)}</span>
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver ${x.title}`}
                    className="text-slate-400 transition hover:text-sky-600 dark:hover:text-cyan"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Experiência Section */}
      <Section id="experiencia">
        <p className="font-mono text-xs font-semibold text-sky-600 dark:text-cyan">{t(p.experience).label}</p>
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          {t(p.experience).title}
        </h2>
        <div className="mt-12 border-l-2 border-sky-500/30 pl-8 dark:border-cyan/30">
          {p.experienceData.map((x) => (
            <div key={x.period} className="relative mb-12">
              <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-sky-600 shadow-[0_0_12px_#0284c7] dark:bg-cyan dark:shadow-[0_0_15px_#5ee7f5]" />
              <p className="font-mono text-xs font-semibold text-sky-600 dark:text-cyan">{x.period}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{t(x.role)}</h3>
              <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-400">{t(x.text)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contato Section */}
      <Section id="contato">
        <div className="rounded-3xl border border-sky-200 bg-sky-50/60 p-8 shadow-sm dark:border-cyan/20 dark:bg-cyan/[.06] sm:p-14">
          <p className="font-mono text-xs font-semibold text-sky-600 dark:text-cyan">{t(p.contact).label}</p>
          <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            {t(p.contact).title}
          </h2>
          <p className="mt-6 max-w-lg leading-7 text-slate-600 dark:text-slate-400">{t(p.contact).text}</p>
          <a
            href={p.links.email}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-sky-600/20 transition hover:bg-sky-700 dark:bg-cyan dark:text-ink dark:hover:bg-white dark:shadow-none"
          >
            <Mail size={16} />
            {t(p.contact).cta}
          </a>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/50 dark:border-white/10 dark:bg-transparent">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© 2025 {p.name}</span>
          <div className="flex gap-5">
            <a href={p.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-sky-600 dark:hover:text-cyan">
              <Github size={16} />
            </a>
            <a href={p.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-sky-600 dark:hover:text-cyan">
              <Linkedin size={16} />
            </a>
            <a href={p.links.email} aria-label="Email" className="transition hover:text-sky-600 dark:hover:text-cyan">
              <Mail size={16} />
            </a>
          </div>
          <span className="font-mono">Built with data & curiosity.</span>
        </div>
      </footer>
    </main>
  );
}