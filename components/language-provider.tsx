'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

export type Language = 'pt' | 'en'

const LANGUAGES: Language[] = ['pt', 'en']

export const COPY = {
  pt: {
    languageName: 'Português',
    nav: {
      home: 'home',
      about: 'sobre',
      experience: 'trajetória',
      projects: 'projetos',
      skills: 'habilidades',
      contact: 'contato',
    },
    controls: {
      menuOpen: 'Abrir menu',
      menuClose: 'Fechar menu',
      themeGroup: 'Selecionar tema',
      themeGold: 'Dourado',
      themeLight: 'Claro',
      languageGroup: 'Selecionar idioma',
      languagePt: 'Português',
      languageEn: 'Inglês',
    },
    hero: {
      eyebrow: 'Desenvolvedor Full Stack',
      typewriter: 'Desenvolvedor Full Stack',
      tags: ['C#', '.NET', 'Angular', 'TypeScript'],
      projectsCta: 'Ver Projetos',
      cvCta: 'Baixar CV',
      quote: 'Projetos, universo e código movem ideias.',
    },
    about: {
      tag: 'Sobre mim',
      title: 'Quem sou eu',
      bio: [
        'Sou desenvolvedor Full Stack com foco em C#/.NET e Angular. Estou concluindo Sistemas de Informação na UNIFEI.',
        'Construo projetos completos com C#/.NET, Angular e PostgreSQL, do banco de dados à interface.',
        'Gosto de APIs REST, automações e bancos de dados. Também tenho experiência com Python, FastAPI e Node.js.',
      ],
      timeline: [
        {
          title: 'Bacharelado em Sistemas de Informação',
          org: 'Universidade Federal de Itajubá (UNIFEI)',
          period: '01/2023 - Previsão 07/2027',
        },
        {
          title: 'Idiomas',
          org: 'Português (Nativo) - Inglês (Intermediário)',
          period: '',
        },
      ],
    },
    experience: {
      tag: 'Trajetória',
      title: 'Linha do tempo',
      entries: [
        {
          period: '2025',
          title: 'Analista de Automação de Processos',
          org: 'Aptiv · Paraisópolis, MG (Presencial)',
          description:
            'Scripts de automação desktop com Python, Selenium e PyAutoGUI e ferramentas internas com Electron e JavaScript, reduzindo o tempo de tarefas operacionais repetitivas.',
        },
        {
          period: '2026',
          title: 'Analista de Dados',
          org: 'INF8Vision · Remoto',
          description:
            'Pipelines de dados com APIs REST (Google Ads, Meta Ads), Python e Power BI, com ETL via Google Apps Script e Make e atualizações automáticas por GitHub Actions.',
        },
        {
          period: 'Futuro',
          title: 'Próximo capítulo',
          org: 'Aberto a oportunidades',
          description:
            'Busco minha primeira oportunidade como desenvolvedor Full Stack, com C#, .NET, Angular e TypeScript.',
        },
      ],
    },
    projects: {
      tag: 'Projetos',
      title: 'Projetos',
      previous: 'Projeto anterior',
      next: 'Próximo projeto',
      goTo: 'Ir para',
      openSite: 'Abrir o site do projeto',
      viewCode: 'Ver código',
      viewCodeOf: 'Ver o código no GitHub do projeto',
      items: [
        {
          title: 'PERE',
          description:
            'Plataforma de estudo com repetição espaçada. Professores criam módulos e turmas; alunos estudam em sessões curtas, com ou sem conta (modo visitante). Reduzi de 41–52 para 7 as consultas SQL por resposta de aluno, medindo antes e depois.',
          tags: ['ASP.NET Core 10', 'EF Core', 'PostgreSQL', 'Angular 22', 'Tailwind', 'Docker', 'FSRS'],
          site: 'https://pere-estudos.vercel.app',
          repo: 'https://github.com/Brenovnc/PERE',
        },
        {
          title: 'Orbis',
          description:
            'Minigames de geografia no mapa: 9 jogos, mundo e Brasil, em português e inglês, com suporte a celular. Os dados são gerados por script a partir de fontes abertas, e o desempenho do mapa foi otimizado com medições no navegador.',
          tags: ['Angular 22', 'TypeScript', 'D3', 'TopoJSON', 'Tailwind', 'Vitest'],
          site: 'https://orbis-geography.vercel.app',
          repo: 'https://github.com/Brenovnc/Orbis',
        },
      ],
    },
    skills: {
      tag: 'Tecnologias',
      title: 'Minhas habilidades',
      areas: [
        {
          title: 'Front-end',
          items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'D3'],
        },
        {
          title: 'Back-end',
          items: ['C#', '.NET / ASP.NET Core', 'Entity Framework Core', 'Python / FastAPI', 'Node.js', 'xUnit', 'Vitest'],
        },
        {
          title: 'Banco de Dados',
          items: ['SQL Server', 'PostgreSQL', 'Neon', 'Power BI'],
        },
        {
          title: 'Outras Tecnologias',
          items: ['Git & GitHub', 'GitHub Actions', 'Docker', 'Vercel', 'Postman'],
        },
      ],
    },
    footer: {
      aria: 'Contato e redes',
      location: 'Localização: Minas Gerais, Brasil',
      copyright:
        '© 2026 Breno Vieira · Construído com código, curiosidade e café.',
    },
  },
  en: {
    languageName: 'English',
    nav: {
      home: 'home',
      about: 'about',
      experience: 'experience',
      projects: 'projects',
      skills: 'skills',
      contact: 'contact',
    },
    controls: {
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      themeGroup: 'Select theme',
      themeGold: 'Gold',
      themeLight: 'Light',
      languageGroup: 'Select language',
      languagePt: 'Portuguese',
      languageEn: 'English',
    },
    hero: {
      eyebrow: 'Full Stack Developer',
      typewriter: 'Full Stack Developer',
      tags: ['C#', '.NET', 'Angular', 'TypeScript'],
      projectsCta: 'View Projects',
      cvCta: 'Download CV',
      quote: 'Projects, the universe, and code move ideas forward.',
    },
    about: {
      tag: 'About me',
      title: 'Who I am',
      bio: [
        "I'm a Full Stack developer focused on C#/.NET and Angular. I'm finishing my Information Systems degree at UNIFEI.",
        'I build complete projects with C#/.NET, Angular and PostgreSQL, from the database to the interface.',
        'I enjoy REST APIs, automation and databases. I also have experience with Python, FastAPI and Node.js.',
      ],
      timeline: [
        {
          title: 'Bachelor in Information Systems',
          org: 'Federal University of Itajubá (UNIFEI)',
          period: '01/2023 - Expected 07/2027',
        },
        {
          title: 'Languages',
          org: 'Portuguese (Native) - English (Intermediate)',
          period: '',
        },
      ],
    },
    experience: {
      tag: 'Journey',
      title: 'Timeline',
      entries: [
        {
          period: '2025',
          title: 'Process Automation Analyst',
          org: 'Aptiv · Paraisópolis, MG (On-site)',
          description:
            'Desktop automation scripts with Python, Selenium and PyAutoGUI, and internal tools with Electron and JavaScript, cutting the time of repetitive operational tasks.',
        },
        {
          period: '2026',
          title: 'Data Analyst',
          org: 'INF8Vision · Remote',
          description:
            'Data pipelines with REST APIs (Google Ads, Meta Ads), Python and Power BI, with ETL via Google Apps Script and Make and automatic refreshes through GitHub Actions.',
        },
        {
          period: 'Future',
          title: 'Next chapter',
          org: 'Open to opportunities',
          description:
            'Looking for my first opportunity as a Full Stack developer, working with C#, .NET, Angular and TypeScript.',
        },
      ],
    },
    projects: {
      tag: 'Projects',
      title: 'Projects',
      previous: 'Previous project',
      next: 'Next project',
      goTo: 'Go to',
      openSite: 'Open the project website',
      viewCode: 'View code',
      viewCodeOf: 'View the project code on GitHub',
      items: [
        {
          title: 'PERE',
          description:
            'Spaced-repetition study platform. Teachers create modules and classes; students study in short sessions, with or without an account (guest mode). I cut SQL queries per student answer from 41–52 down to 7, measuring before and after.',
          tags: ['ASP.NET Core 10', 'EF Core', 'PostgreSQL', 'Angular 22', 'Tailwind', 'Docker', 'FSRS'],
          site: 'https://pere-estudos.vercel.app',
          repo: 'https://github.com/Brenovnc/PERE',
        },
        {
          title: 'Orbis',
          description:
            'Geography minigames on a map: 9 games, world and Brazil, in Portuguese and English, mobile-friendly. Data is generated by a script from open sources, and map performance was optimized with in-browser measurements.',
          tags: ['Angular 22', 'TypeScript', 'D3', 'TopoJSON', 'Tailwind', 'Vitest'],
          site: 'https://orbis-geography.vercel.app',
          repo: 'https://github.com/Brenovnc/Orbis',
        },
      ],
    },
    skills: {
      tag: 'Technologies',
      title: 'My skills',
      areas: [
        {
          title: 'Front-end',
          items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'D3'],
        },
        {
          title: 'Back-end',
          items: ['C#', '.NET / ASP.NET Core', 'Entity Framework Core', 'Python / FastAPI', 'Node.js', 'xUnit', 'Vitest'],
        },
        {
          title: 'Databases',
          items: ['SQL Server', 'PostgreSQL', 'Neon', 'Power BI'],
        },
        {
          title: 'Other Technologies',
          items: ['Git & GitHub', 'GitHub Actions', 'Docker', 'Vercel', 'Postman'],
        },
      ],
    },
    footer: {
      aria: 'Contact and social links',
      location: 'Location: Minas Gerais, Brazil',
      copyright: '© 2026 Breno Vieira · Built with code, curiosity, and coffee.',
    },
  },
} as const

type Copy = (typeof COPY)[Language]

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: Copy
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function normalizeLanguage(value: string | null): Language | null {
  if (value === 'pt' || value === 'en') return value
  return null
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  const applyLanguage = useCallback((next: Language) => {
    setLanguageState(next)
    document.documentElement.lang = next === 'pt' ? 'pt-BR' : 'en'
    localStorage.setItem('bv-language', next)
  }, [])

  useEffect(() => {
    const stored = normalizeLanguage(localStorage.getItem('bv-language'))
    if (stored) applyLanguage(stored)
  }, [applyLanguage])

  const setLanguage = useCallback(
    (next: Language) => {
      applyLanguage(next)
    },
    [applyLanguage],
  )

  const toggleLanguage = useCallback(() => {
    setLanguageState((current) => {
      const next = LANGUAGES[(LANGUAGES.indexOf(current) + 1) % LANGUAGES.length]
      document.documentElement.lang = next === 'pt' ? 'pt-BR' : 'en'
      localStorage.setItem('bv-language', next)
      return next
    })
  }, [])

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage, t: COPY[language] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
