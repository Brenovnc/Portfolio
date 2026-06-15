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
      eyebrow: 'Desenvolvedor Backend',
      typewriter: 'Desenvolvedor Backend e Engenheiro de Software',
      tags: ['Python', 'Node.js', 'Database', 'Cloud'],
      projectsCta: 'Ver Projetos',
      cvCta: 'Baixar CV',
      quote: 'Projetos, universo e codigo movem ideias.',
    },
    about: {
      tag: 'Sobre mim',
      title: 'Quem sou eu',
      bio: [
        'Desenvolvedor com foco em Linguagem 1 e Linguagem 2, construindo solucoes backend com atencao a arquitetura, clareza e evolucao continua.',
        'Tenho interesse por APIs, automacoes, bancos de dados e sistemas que resolvem problemas reais com simplicidade.',
        'Este portfolio esta organizado para crescer junto com meus projetos, estudos e proximas experiencias profissionais.',
      ],
      timeline: [
        {
          title: 'Bacharel em Sistemas de Informacao',
          org: 'Universidade Federal de Itajuba (UNIFEI)',
          period: '03/2023 - Previsao 06/2027',
        },
        {
          title: 'Outra coisa',
          org: 'Organizacao',
          period: '01/2027 - 12/2029',
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
          period: '2023 - 2027',
          title: 'Bacharelado em Sistemas de Informacao',
          org: 'Universidade Federal de Itajuba (UNIFEI)',
          description:
            'Formacao solida em algoritmos, estruturas de dados, engenharia de software e sistemas distribuidos, com foco em desenvolvimento backend.',
        },
        {
          period: '2024 - Atual',
          title: 'Projetos & Estudos em Backend',
          org: 'Desenvolvimento independente',
          description:
            'Construcao de APIs, automacoes e integracoes com Python e Node.js, explorando bancos de dados, cloud e boas praticas de arquitetura.',
        },
        {
          period: 'Futuro',
          title: 'Proximo capitulo',
          org: 'Em aberto para oportunidades',
          description:
            'Buscando desafios reais como desenvolvedor backend, onde possa somar valor a um time e seguir evoluindo de forma continua.',
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
          items: ['React1', 'React2', 'React3', 'React4', 'HTML/CSS'],
        },
        {
          title: 'Back-end',
          items: ['Python1', 'Python2', 'Python3', 'Python4'],
        },
        {
          title: 'Banco de Dados',
          items: ['PostgreSQL1', 'PostgreSQL2', 'PostgreSQL3'],
        },
        {
          title: 'Outras Tecnologias',
          items: ['Git/GitHub1', 'Git/GitHub2', 'Git/GitHub3'],
        },
      ],
    },
    footer: {
      aria: 'Contato e redes',
      location: 'Localizacao: Brasil',
      copyright:
        '© 2024 Breno Vieira · Construido com codigo, curiosidade e cafe.',
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
      eyebrow: 'Backend Developer',
      typewriter: 'Backend Developer and Software Engineer',
      tags: ['Python', 'Node.js', 'Database', 'Cloud'],
      projectsCta: 'View Projects',
      cvCta: 'Download CV',
      quote: 'Projects, the universe, and code move ideas forward.',
    },
    about: {
      tag: 'About me',
      title: 'Who I am',
      bio: [
        'Developer focused on Language 1 and Language 2, building backend solutions with care for architecture, clarity, and continuous growth.',
        'I am interested in APIs, automation, databases, and systems that solve real problems with simplicity.',
        'This portfolio is organized to grow alongside my projects, studies, and next professional experiences.',
      ],
      timeline: [
        {
          title: 'Bachelor in Information Systems',
          org: 'Federal University of Itajuba (UNIFEI)',
          period: '03/2023 - Expected 06/2027',
        },
        {
          title: 'Another thing',
          org: 'Organization',
          period: '01/2027 - 12/2029',
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
          period: '2023 - 2027',
          title: 'Bachelor in Information Systems',
          org: 'Federal University of Itajuba (UNIFEI)',
          description:
            'Solid foundation in algorithms, data structures, software engineering, and distributed systems, with a focus on backend development.',
        },
        {
          period: '2024 - Present',
          title: 'Backend Projects & Studies',
          org: 'Independent development',
          description:
            'Building APIs, automations, and integrations with Python and Node.js while exploring databases, cloud, and architecture best practices.',
        },
        {
          period: 'Future',
          title: 'Next chapter',
          org: 'Open to opportunities',
          description:
            'Looking for real backend challenges where I can add value to a team and keep growing consistently.',
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
          items: ['React1', 'React2', 'React3', 'React4', 'HTML/CSS'],
        },
        {
          title: 'Back-end',
          items: ['Python1', 'Python2', 'Python3', 'Python4'],
        },
        {
          title: 'Databases',
          items: ['PostgreSQL1', 'PostgreSQL2', 'PostgreSQL3'],
        },
        {
          title: 'Other Technologies',
          items: ['Git/GitHub1', 'Git/GitHub2', 'Git/GitHub3'],
        },
      ],
    },
    footer: {
      aria: 'Contact and social links',
      location: 'Location: Brazil',
      copyright: '© 2024 Breno Vieira · Built with code, curiosity, and coffee.',
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
