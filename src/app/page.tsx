'use client';

import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolio as p, Locale } from '@/data/portfolio';
import { TechIcon, WhatsAppIcon } from '@/components/TechIcon';

const sectionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fade = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.7,
      delay: 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-6xl px-6 py-24 sm:px-8"
    >
      {children}
    </motion.section>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="h-4 w-1 rounded-full bg-sky-600 shadow-[0_0_8px_rgba(2,132,199,0.5)] dark:bg-cyan dark:shadow-[0_0_8px_rgba(94,231,245,0.6)]" />
      <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-700 dark:text-cyan">
        {label}
      </span>
    </div>
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

  const t = (o: any) => (o && typeof o === 'object' && locale in o ? o[locale] : o?.pt ?? o ?? '');

  const navHref = ['#inicio', '#sobre', '#habilidades', '#projetos', '#experiencia', '#formacao', '#contato'];

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
          <div className="hidden items-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-300 md:flex">
            {p.nav[locale].map((n, i) => (
              <a
                key={n}
                href={navHref[i]}
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
              <div className="flex flex-col gap-4 px-6 py-6 text-sm font-medium text-slate-700 dark:text-slate-200">
                {p.nav[locale].map((n, i) => (
                  <a
                    onClick={() => setOpen(false)}
                    key={n}
                    href={navHref[i]}
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
        className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-6 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-16"
      >
        <div className="absolute right-10 top-40 h-64 w-64 rounded-full bg-sky-400/10 blur-[100px] dark:bg-cyan/10" />
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="relative"
        >
          <motion.p variants={fade} className="mb-4 font-mono text-xs uppercase tracking-[.22em] text-sky-600 dark:text-cyan font-bold">
            {t(p.hero).eyebrow}
          </motion.p>
          <motion.p variants={fade} className="text-lg text-slate-500 dark:text-slate-400">
            {locale === 'pt' ? 'Olá, eu sou o' : 'Hello, I am'}
          </motion.p>
          <motion.h1
            variants={fade}
            className="mt-2 max-w-3xl text-5xl font-bold leading-[1.05] tracking-[-.05em] sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{p.name}</span>
          </motion.h1>
          <motion.p variants={fade} className="mt-4 font-mono text-sm font-semibold text-sky-600 dark:text-cyan">
            {t(p.role)}
          </motion.p>
          <motion.p variants={fade} className="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">
            {t(p.hero).description}
          </motion.p>
          <motion.div variants={fade} className="mt-8 flex flex-wrap gap-4">
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
              className="rounded-full border border-slate-300 bg-white/50 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-sky-600 hover:text-sky-600 dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-cyan dark:hover:text-cyan"
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
          <div className="absolute -bottom-6 -left-5 rounded-xl border border-slate-200/90 bg-white/95 px-5 py-3.5 shadow-xl backdrop-blur dark:border-white/10 dark:bg-[#0c1a2c]/90">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              {locale === 'pt' ? 'Atuação Principal' : 'Primary Focus'}
            </p>
            <p className="mt-1 text-xs font-bold text-sky-700 dark:text-cyan">SQL Server · Power BI · Python</p>
            <p className="mt-0.5 text-xs font-medium text-slate-600 dark:text-slate-300">
              {locale === 'pt' ? 'Analytics · Dashboards · Automação' : 'Analytics · Dashboards · Automation'}
            </p>
          </div>
        </motion.div>

        <a
          href="#sobre"
          className="absolute bottom-8 left-6 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-slate-400 transition hover:text-sky-600 dark:text-slate-500 dark:hover:text-cyan sm:flex"
        >
          <ArrowDown size={14} /> {locale === 'pt' ? 'Role para explorar' : 'Scroll to explore'}
        </a>
      </section>

      {/* Sobre Section */}
      <Section id="sobre">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <div>
            <SectionLabel label={t(p.about).label} />
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
              {t(p.about).title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              {t(p.about).intro}
            </p>

            <div className="mt-8 flex flex-col gap-2.5">
              {t(p.about).facts.map((x: string) => (
                <div
                  key={x}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3.5 py-2.5 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[.02] dark:text-slate-300"
                >
                  <CheckCircle2 size={15} className="shrink-0 text-sky-600 dark:text-cyan" />
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-3.5">
            {t(p.about).topics.map((item: any, idx: number) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-500/30 hover:shadow-md dark:border-white/10 dark:bg-white/[.03] dark:hover:border-cyan/30"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 font-mono text-xs font-bold text-sky-700 dark:bg-cyan/10 dark:text-cyan">
                    0{idx + 1}
                  </span>
                  <h3 className="font-mono text-sm font-bold text-slate-900 dark:text-white">{item.title}</h3>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400 pl-9">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Toolkit / Habilidades Section */}
      <Section id="habilidades">
        <SectionLabel label={t(p.skills).label} />
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
          {t(p.skills).title}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {p.skillsData.map((s) => (
            <motion.div
              whileHover={{ y: -4 }}
              key={s.name}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-500/40 hover:shadow-md dark:border-white/10 dark:bg-white/[.03] dark:hover:border-cyan/40"
            >
              {/* Coluna do Ícone (32% maior à esquerda) */}
              <div className="flex w-[32%] shrink-0 items-center justify-center self-stretch rounded-2xl bg-slate-50 p-3 shadow-inner dark:bg-white/[.03] dark:border dark:border-white/5">
                <TechIcon name={s.name} className="h-16 w-16 max-h-16 max-w-16" />
              </div>

              {/* Coluna dos Tópicos (68% à direita) */}
              <div className="w-[68%] min-w-0 py-0.5">
                <h3 className="font-mono text-[15px] font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
                  {s.name}
                </h3>
                <ul className="mt-2.5 space-y-1.5">
                  {t(s.topics).map((item: string) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[13px] font-medium leading-snug text-slate-700 dark:text-slate-200"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600 shadow-[0_0_6px_rgba(2,132,199,0.4)] dark:bg-cyan dark:shadow-[0_0_6px_rgba(94,231,245,0.4)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projetos Section */}
      <Section id="projetos">
        <SectionLabel label={t(p.projects).label} />
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
          {t(p.projects).title}
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">{t(p.projects).intro}</p>
        <div className="mt-12 space-y-8">
          {p.projectsData.map((x) => (
            <motion.article
              whileHover={{ y: -4 }}
              key={x.title}
              className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-white/[.03] md:grid-cols-2"
            >
              {/* Imagem preenchendo 100% com transition suave ao passar o mouse no card */}
              <div className="relative min-h-[240px] w-full overflow-hidden bg-slate-100 sm:min-h-[300px] md:min-h-full dark:bg-[#07111f]">
                <img
                  src={x.image}
                  alt={`Prévia do projeto ${x.title}`}
                  className="project-card-image h-full w-full object-cover object-left-top"
                />
              </div>

              {/* Conteúdo textual calibrado e compacto */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-9">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-sky-600 dark:text-cyan">
                  {x.category}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">{x.title}</h3>
                <p className="mt-3 text-xs leading-5 text-slate-600 dark:text-slate-400">
                  <b className="font-semibold text-slate-900 dark:text-slate-200">
                    {locale === 'pt' ? 'Contexto' : 'Context'} ·{' '}
                  </b>
                  {t(x.problem)}
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
                  <b className="font-semibold text-slate-900 dark:text-slate-200">
                    {locale === 'pt' ? 'Solução' : 'Solution'} ·{' '}
                  </b>
                  {t(x.solution)}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {x.tech.map((z) => (
                    <span
                      key={z}
                      className="rounded-full border border-sky-200/60 bg-sky-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-sky-700 dark:border-transparent dark:bg-cyan/10 dark:text-cyan"
                    >
                      {z}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-3.5 dark:border-white/10">
                  <span className="text-xs font-bold text-sky-700 dark:text-cyan">{t(x.result)}</span>
                  {(x as any).liveUrl ? (
                    <a
                      href={(x as any).liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Acessar projeto ${x.title}`}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-sky-600 px-3.5 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-sky-700 dark:bg-cyan dark:text-ink dark:hover:bg-white"
                    >
                      <span>{locale === 'pt' ? 'Acessar' : 'Live Demo'}</span>
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <a
                      href={(x as any).githubUrl || p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ver repositório do projeto ${x.title}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                    >
                      <Github size={15} className="text-white dark:text-slate-950" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Experiência Section */}
      <Section id="experiencia">
        <SectionLabel label={t(p.experience).label} />
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
          {t(p.experience).title}
        </h2>
        <div className="mt-12 border-l-2 border-sky-500/30 pl-6 sm:pl-8 dark:border-cyan/30">
          {p.experienceData.map((x) => (
            <div key={x.company} className="relative mb-14 last:mb-0">
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3 w-3 rounded-full bg-sky-600 shadow-[0_0_12px_#0284c7] dark:bg-cyan dark:shadow-[0_0_15px_#5ee7f5]" />
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-bold text-sky-600 dark:text-cyan">{x.period}</span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{x.location}</span>
              </div>

              <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                {t(x.role)}
              </h3>
              <p className="font-mono text-sm font-semibold text-sky-700 dark:text-cyan">{x.company}</p>

              <ul className="mt-4 space-y-2.5">
                {t(x.highlights).map((h: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500 dark:bg-cyan" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Formação & Certificações Section */}
      <Section id="formacao">
        <SectionLabel label={t(p.education).label} />
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
          {t(p.education).title}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {p.educationData.map((e) => (
            <motion.div
              whileHover={{ y: -4 }}
              key={e.institution}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/[.03]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-sky-600 dark:text-cyan">{e.period}</span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                    {t(e.status)}
                  </span>
                </div>
                <h3 className="mt-4 font-mono text-base font-bold text-slate-900 dark:text-white">{t(e.course)}</h3>
              </div>
              <p className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400">{e.institution}</p>
            </motion.div>
          ))}
        </div>

        {/* Certificações & Cursos Complementares */}
        <div className="mt-12 border-t border-slate-200/80 pt-8 dark:border-white/10">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-cyan">
              {t(p.certifications).label}
            </h3>
            <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
              {p.certificationsData.length} {locale === 'pt' ? 'credenciais' : 'credentials'}
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {p.certificationsData.map((c) => (
              <div
                key={c.name}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm transition hover:border-sky-400/50 hover:shadow-md dark:border-white/10 dark:bg-white/[.03] dark:hover:border-cyan/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] font-bold text-sky-600 dark:text-cyan">{c.year}</span>
                    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                      {t(c.status)}
                    </span>
                  </div>
                  <h4 className="mt-2 text-xs font-bold leading-tight text-slate-900 line-clamp-2 dark:text-white">
                    {c.name}
                  </h4>
                </div>
                <p className="mt-2 text-[11px] font-medium text-slate-500 truncate dark:text-slate-400">
                  {c.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nuvem de Competências & Palavras-Chave */}
        <div className="mt-12 border-t border-slate-200/80 pt-8 dark:border-white/10">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-cyan">
              {t(p.skillsCloud).label}
            </h3>
            <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
              {p.skillTags.length} {locale === 'pt' ? 'competências' : 'skills'}
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            {t(p.skillsCloud).title}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.skillTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-slate-700 shadow-sm transition hover:border-sky-500/40 hover:text-sky-600 hover:shadow-sm dark:border-white/10 dark:bg-white/[.03] dark:text-slate-300 dark:hover:border-cyan/40 dark:hover:text-cyan"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Contato Section */}
      <Section id="contato">
        <div className="rounded-3xl border border-sky-200 bg-sky-50/60 p-8 shadow-sm dark:border-cyan/20 dark:bg-cyan/[.06] sm:p-14">
          <SectionLabel label={t(p.contact).label} />
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
            {t(p.contact).title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400">{t(p.contact).text}</p>
          
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-sky-600 dark:text-cyan" />
              {p.location}
            </span>
            <span className="flex items-center gap-2">
              <Mail size={16} className="text-sky-600 dark:text-cyan" />
              {p.links.emailText}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={p.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 dark:bg-emerald-500 dark:text-slate-950 dark:hover:bg-emerald-400 dark:shadow-none"
            >
              <WhatsAppIcon className="h-4 w-4 fill-white dark:fill-slate-950" />
              WhatsApp
            </a>
            <a
              href={p.links.email}
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-sky-600/20 transition hover:bg-sky-700 dark:bg-cyan dark:text-ink dark:hover:bg-white dark:shadow-none"
            >
              <Mail size={16} />
              {t(p.contact).cta}
            </a>
            <a
              href={p.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-sky-600 hover:text-sky-600 dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-cyan dark:hover:text-cyan"
            >
              <Linkedin size={16} />
              {(t(p.contact) as any).ctaLinkedIn || 'Chamar no LinkedIn'}
            </a>
            <a
              href={p.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-sky-600 hover:text-sky-600 dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-cyan dark:hover:text-cyan"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/50 dark:border-white/10 dark:bg-transparent">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()} {p.name}</span>
          <div className="flex gap-5">
            <a href={p.links.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="transition hover:text-emerald-600 dark:hover:text-emerald-400">
              <WhatsAppIcon className="h-4 w-4 fill-current" />
            </a>
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