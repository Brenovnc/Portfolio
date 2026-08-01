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
    languageName: 'Portugues',
    nav: {
      home: 'home',
      about: 'sobre',
      experience: 'trajetoria',
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
      languagePt: 'Portugues',
      languageEn: 'Ingles',
    },
    hero: {
      eyebrow: 'Desenvolvedor Full Stack',
      typewriter: 'Desenvolvedor Full Stack',
      tags: ['C#', '.NET', 'Angular', 'TypeScript'],
      projectsCta: 'Ver Projetos',
      cvCta: 'Baixar CV',
      quote: 'Projetos, universo e codigo movem ideias.',
    },
    about: {
      tag: 'Sobre mim',
      title: 'Quem sou eu',
      bio: [
        'Desenvolvedor Full Stack focado em C# e .NET, construindo aplicacoes web escalaveis de ponta a ponta, com conhecimento em frameworks frontend modernos e praticas de desenvolvimento cloud-native.',
        'Construo meus proprios projetos aplicando esse conhecimento na pratica, com foco em codigo limpo e arquitetura bem estruturada.',
        'Tenho interesse por APIs REST, automacoes, bancos de dados e sistemas que resolvem problemas reais com simplicidade. Alem do ecossistema .NET, tambem tenho conhecimento em Python, FastAPI e Node.js.',
      ],
      timeline: [
        {
          title: 'Bacharel em Sistemas de Informacao',
          org: 'Universidade Federal de Itajuba (UNIFEI)',
          period: '01/2023 - Previsao 07/2027',
        },
        {
          title: 'Idiomas',
          org: 'Portugues (Nativo) - Ingles (Intermediario)',
          period: '',
        },
      ],
    },
    experience: {
      tag: 'Trajetoria',
      title: 'Linha do tempo',
      entries: [
        {
          period: '2025',
          title: 'Analista de Automacao de Processos',
          org: 'Aptiv · Paraisopolis, MG (Presencial)',
          description:
            'Desenvolvimento de scripts de automacao desktop com Python, Selenium e PyAutoGUI, alem de ferramentas internas com Electron e JavaScript, integrando sistemas e reduzindo o tempo de execucao de tarefas operacionais repetitivas.',
        },
        {
          period: '2026',
          title: 'Analista de Dados',
          org: 'INF8Vision · Remoto',
          description:
            'Construcao de pipelines de dados automatizados integrando APIs REST (Google Ads, Meta Ads), Python e Power BI, com ETL via Google Apps Script e Make, modelagem relacional e automacao de atualizacoes via GitHub Actions.',
        },
        {
          period: 'Futuro',
          title: 'Proximo capitulo',
          org: 'Em aberto para oportunidades',
          description:
            'Buscando minha primeira oportunidade profissional como desenvolvedor Full Stack, aplicando conhecimento em C#, .NET, Angular e TypeScript para agregar valor a um time e seguir evoluindo de forma continua.',
        },
      ],
    },
    projects: {
      tag: 'Projetos',
      title: 'Projetos',
      previous: 'Projeto anterior',
      next: 'Proximo projeto',
      goTo: 'Ir para',
      items: [
        {
          title: 'Node.js API',
          description:
            'API RESTful escalavel com autenticacao, rotas protegidas e integracao com banco de dados. Arquitetura orientada a servicos com foco em performance.',
          tags: ['Node.js', 'Express', 'JWT', 'Docker'],
        },
        {
          title: 'Schemas',
          description:
            'Modelagem de dados organizada com Prisma ORM, garantindo consistencia, performance e escalabilidade nas relacoes entre entidades.',
          tags: ['Prisma', 'PostgreSQL', 'Database'],
        },
        {
          title: 'Auth Service',
          description:
            'Servico de autenticacao com tokens JWT, refresh tokens e controle de acesso baseado em papeis. Sessoes seguras e expiracao automatica.',
          tags: ['Node.js', 'JWT', 'Redis', 'Security'],
        },
        {
          title: 'Event Pipeline',
          description:
            'Pipeline de eventos assincrono com filas e workers, processando milhoes de mensagens com idempotencia e reprocessamento automatico.',
          tags: ['Kafka', 'Workers', 'AWS', 'Queue'],
        },
      ],
    },
    skills: {
      tag: 'Tecnologias',
      title: 'Minhas habilidades',
      areas: [
        {
          title: 'Front-end',
          items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML/CSS'],
        },
        {
          title: 'Back-end',
          items: ['C#', '.NET / ASP.NET Core', 'Entity Framework Core', 'Python / FastAPI', 'Node.js'],
        },
        {
          title: 'Banco de Dados',
          items: ['SQL Server', 'PostgreSQL', 'Power BI'],
        },
        {
          title: 'Outras Tecnologias',
          items: ['Git & GitHub', 'Docker', 'Postman'],
        },
      ],
    },
    footer: {
      aria: 'Contato e redes',
      location: 'Localizacao: Minas Gerais, Brasil',
      copyright:
        '© 2026 Breno Vieira · Construido com codigo, curiosidade e cafe.',
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
        'Full Stack .NET Developer focused on building scalable web applications from end to end, with knowledge of modern frontend frameworks and cloud-native development practices.',
        'I build my own projects applying this knowledge in practice, with a focus on clean code and well-structured architecture.',
        'Beyond the .NET ecosystem, I also have knowledge of Python, FastAPI and Node.js, constantly expanding my technical skills and exploring new approaches to software development.',
      ],
      timeline: [
        {
          title: 'Bachelor in Information Systems',
          org: 'Federal University of Itajuba (UNIFEI)',
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
          org: 'Aptiv · Paraisopolis, MG (On-site)',
          description:
            'Built desktop automation scripts with Python, Selenium and PyAutoGUI, along with internal tools using Electron and JavaScript, integrating systems and reducing execution time of repetitive operational tasks.',
        },
        {
          period: '2026',
          title: 'Data Analyst',
          org: 'INF8Vision · Remote',
          description:
            'Built automated data pipelines integrating REST APIs (Google Ads, Meta Ads), Python and Power BI, with ETL workflows via Google Apps Script and Make, relational modeling, and automated refresh routines via GitHub Actions.',
        },
        {
          period: 'Future',
          title: 'Next chapter',
          org: 'Open to opportunities',
          description:
            'Looking for my first professional opportunity as a Full Stack Developer, applying knowledge in C#, .NET, Angular, and TypeScript to add value to a team and keep growing consistently.',
        },
      ],
    },
    projects: {
      tag: 'Projects',
      title: 'Projects',
      previous: 'Previous project',
      next: 'Next project',
      goTo: 'Go to',
      items: [
        {
          title: 'Node.js API',
          description:
            'Scalable RESTful API with authentication, protected routes, and database integration. Service-oriented architecture focused on performance.',
          tags: ['Node.js', 'Express', 'JWT', 'Docker'],
        },
        {
          title: 'Schemas',
          description:
            'Organized data modeling with Prisma ORM, ensuring consistency, performance, and scalability across entity relationships.',
          tags: ['Prisma', 'PostgreSQL', 'Database'],
        },
        {
          title: 'Auth Service',
          description:
            'Authentication service with JWT tokens, refresh tokens, and role-based access control. Secure sessions with automatic expiration.',
          tags: ['Node.js', 'JWT', 'Redis', 'Security'],
        },
        {
          title: 'Event Pipeline',
          description:
            'Asynchronous event pipeline with queues and workers, processing millions of messages with idempotency and automatic reprocessing.',
          tags: ['Kafka', 'Workers', 'AWS', 'Queue'],
        },
      ],
    },
    skills: {
      tag: 'Technologies',
      title: 'My skills',
      areas: [
        {
          title: 'Front-end',
          items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML/CSS'],
        },
        {
          title: 'Back-end',
          items: ['C#', '.NET / ASP.NET Core', 'Entity Framework Core', 'Python / FastAPI', 'Node.js'],
        },
        {
          title: 'Databases',
          items: ['SQL Server', 'PostgreSQL', 'Power BI'],
        },
        {
          title: 'Other Technologies',
          items: ['Git & GitHub', 'Docker', 'Postman'],
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