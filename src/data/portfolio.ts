export type Locale = 'pt' | 'en';

export const portfolio = {
  name: 'Flaviano Astolfo Junior',
  role: {
    pt: 'Data Analytics · Business Intelligence · Automation',
    en: 'Data Analytics · Business Intelligence · Automation',
  },
  location: 'São Paulo, SP - Brasil',
  nav: {
    pt: ['Início', 'Sobre', 'Habilidades', 'Projetos', 'Experiência', 'Formação', 'Contato'],
    en: ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'],
  },
  hero: {
    pt: {
      eyebrow: 'Dados · Automação · Business Intelligence',
      title: 'Transformo dados complexos em clareza estratégica e decisões de alto impacto.',
      description:
        'Construo soluções de dados com SQL Server, Power BI, DAX e Python para estruturar pipelines, automatizar rotinas operacionais e desenvolver dashboards executivos para apoio à tomada de decisão.',
      primary: 'Conheça meu trabalho',
      secondary: 'Vamos conversar',
    },
    en: {
      eyebrow: 'Data · Automation · Business Intelligence',
      title: 'Transforming complex data into strategic clarity and high-impact decisions.',
      description:
        'I build data solutions with SQL Server, Power BI, DAX, and Python to structure pipelines, automate operational routines, and deliver executive dashboards that empower decision-making.',
      primary: 'Explore my work',
      secondary: "Let's talk",
    },
  },
  about: {
    pt: {
      label: 'Sobre',
      title: 'Conectando dados, processos e decisões.',
      intro:
        'Analista de Dados com formação em Gestão Financeira e Ciência de Dados (EBAC). Minha atuação combina rigor analítico e entendimento de negócio para transformar rotinas operacionais em fluxos automatizados e dados brutos em decisões estratégicas.',
      topics: [
        {
          title: 'Engenharia de Dados & SQL',
          desc: 'Construção de pipelines, validação de regras de negócio e otimização profunda de queries em SQL Server para bases volumosas (+2M linhas).',
        },
        {
          title: 'Automação com Python',
          desc: 'Desenvolvimento de scripts para ETL, integração de múltiplas fontes, tratamento de divergências e eliminação de tarefas manuais.',
        },
        {
          title: 'Business Intelligence & DAX',
          desc: 'Modelagem dimensional (Star Schema) e criação de dashboards gerenciais em Power BI com indicadores claros para líderes e gestores.',
        },
      ],
      facts: [
        'Bases com +2M de linhas analisadas',
        'Otimização de queries: dias → horas',
        'Inglês Avançado (B2-C1)',
      ],
    },
    en: {
      label: 'About',
      title: 'Connecting data, processes, and decisions.',
      intro:
        'Data Analyst with a background in Financial Management and Data Science (EBAC). My work combines analytical rigor and business understanding to turn operational routines into automated workflows and raw data into strategic decisions.',
      topics: [
        {
          title: 'Data Engineering & SQL',
          desc: 'Building pipelines, business rule validation, and deep SQL Server query optimization for large datasets (2M+ records).',
        },
        {
          title: 'Automation with Python',
          desc: 'Developing scripts for ETL, multi-source integration, discrepancy resolution, and elimination of manual spreadsheets.',
        },
        {
          title: 'Business Intelligence & DAX',
          desc: 'Dimensional modeling (Star Schema) and executive Power BI dashboards with clear, actionable KPIs for decision-makers.',
        },
      ],
      facts: [
        '2M+ record datasets analyzed',
        'Query optimization: days → hours',
        'Advanced English (B2-C1)',
      ],
    },
  },
  skills: {
    pt: {
      label: 'Habilidades',
      title: 'Stack técnica para o ciclo completo de dados.',
    },
    en: {
      label: 'Skills',
      title: 'Technical stack for the end-to-end data lifecycle.',
    },
  },
  skillsData: [
    {
      name: 'SQL Server & T-SQL',
      topics: {
        pt: [
          'Consultas e JOINs complexos',
          'Temp Tables, CTEs & Índices',
          'Otimização de Queries',
          'Auditoria e validação de bases',
        ],
        en: [
          'Complex queries & JOINs',
          'Temp Tables, CTEs & Indexes',
          'Query optimization & tuning',
          'Auditing & validation',
        ],
      },
    },
    {
      name: 'Power BI & DAX',
      topics: {
        pt: [
          'Modelagem Star Schema',
          'Fórmulas DAX avançadas',
          'Tratamento ETL no Power Query',
          'Dashboards gerenciais e executivos',
        ],
        en: [
          'Star Schema modeling',
          'Advanced DAX measures',
          'Power Query ETL pipelines',
          'Executive dashboards',
        ],
      },
    },
    {
      name: 'Python & Automação',
      topics: {
        pt: [
          'Manipulação com Pandas e NumPy',
          'Pipelines e cargas com pyodbc',
          'Automação de rotinas e relatórios',
          'Integração de APIs e arquivos',
        ],
        en: [
          'Pandas & NumPy data wrangling',
          'Pipelines & DB loads with pyodbc',
          'Routine & reporting automation',
          'API & flat file integrations',
        ],
      },
    },
    {
      name: 'Qualidade & Auditoria',
      topics: {
        pt: [
          'Reconciliação de bases (+2M)',
          'Identificação e correção de desvios',
          'Garantia de integridade operacional',
          'Validação de regras de negócio',
        ],
        en: [
          'Large datasets reconciliation (2M+)',
          'Discrepancy detection & fix',
          'Operational integrity assurance',
          'Business rules validation',
        ],
      },
    },
    {
      name: 'Excel Avançado & VBA',
      topics: {
        pt: [
          'Modelagem financeira e operacional',
          'Fórmulas complexas e dinâmicas',
          'Automação de rotinas via VBA',
          'Relatórios e análises ad-hoc',
        ],
        en: [
          'Financial & operational modeling',
          'Complex & dynamic formulas',
          'Routine automation via VBA',
          'Ad-hoc reports & analysis',
        ],
      },
    },
    {
      name: 'Ferramentas Modernas & IA',
      topics: {
        pt: [
          'Versionamento com Git & GitHub',
          'Engenharia de prompts com IA',
          'Model Context Protocol (MCP)',
          'Programação Agêntica (Antigravity, Claude Code & Codex)',
        ],
        en: [
          'Git & GitHub version control',
          'Prompt engineering with AI',
          'Model Context Protocol (MCP)',
          'Agentic Coding (Antigravity, Claude Code & Codex)',
        ],
      },
    },
  ],
  projects: {
    pt: {
      label: 'Projetos',
      title: 'Projetos e soluções em destaque.',
      intro: 'Projetos mockados estruturados para demonstrar arquitetura, pipelines de dados e visualização analítica (novos projetos reais serão adicionados em breve).',
    },
    en: {
      label: 'Projects',
      title: 'Featured projects and solutions.',
      intro: 'Mocked projects structured to demonstrate architecture, data pipelines, and analytical visualization (new real projects will be added soon).',
    },
  },
  projectsData: [
    {
      title: 'Hub Financeiro',
      category: 'Portal Analítico · Automação',
      problem: {
        pt: 'Dificuldade na consolidação manual de múltiplos extratos e faturas em formatos variados (CSV e PDF).',
        en: 'Difficulty in manual consolidation of multiple bank statements and invoices in varied formats (CSV & PDF).',
      },
      solution: {
        pt: 'Portal modular com importação automatizada, deduplicação de transações, regras de categorização e dashboards analíticos de gastos.',
        en: 'Modular portal with automated ingestion, transaction deduplication, categorization rules, and spending analytics dashboards.',
      },
      tech: ['Python', 'SQLite', 'Pandas', 'Dashboards'],
      result: {
        pt: 'Processamento automatizado de faturas em segundos',
        en: 'Automated invoice processing in seconds',
      },
      image: '/projects/sales-pulse.svg',
    },
    {
      title: 'Pipeline de Dados & BI',
      category: 'SQL Server · Business Intelligence',
      problem: {
        pt: 'Processamentos críticos de fechamento operacional demoravam dias e divergências dependiam de conferências manuais.',
        en: 'Critical operational closing processing took days and discrepancies relied on manual spreadsheet checks.',
      },
      solution: {
        pt: 'Otimização com tabelas temporárias, índices e criação de dashboard executivo com indicadores gerenciais e comparativos.',
        en: 'Query optimization with temp tables, indexes, and an executive dashboard with management KPIs and comparisons.',
      },
      tech: ['SQL Server', 'T-SQL', 'Power BI', 'DAX'],
      result: {
        pt: 'Processamentos reduzidos de dias para horas (+2M linhas)',
        en: 'Processing reduced from days to hours (2M+ records)',
      },
      image: '/projects/ops-flow.svg',
    },
    {
      title: 'Detecção de Fraudes em Cartão',
      category: 'Machine Learning · Data Science',
      problem: {
        pt: 'Identificação de transações fraudulentas em base com 284 mil registros e altíssimo desbalanceamento entre classes.',
        en: 'Identifying fraudulent transactions in a 284k transaction dataset with extreme class imbalance.',
      },
      solution: {
        pt: 'EDA completa, tratamento de dados desbalanceados (SMOTE), calibração de threshold e foco na maximização do Recall e PR AUC.',
        en: 'Complete EDA, imbalanced data handling (SMOTE), threshold calibration, focusing on Recall and PR AUC maximization.',
      },
      tech: ['Python', 'Scikit-Learn', 'EDA', 'Model Evaluation'],
      result: {
        pt: 'Minimização drástica de falsos negativos operacionais',
        en: 'Drastic minimization of operational false negatives',
      },
      image: '/projects/retention-lens.svg',
    },
  ],
  experience: {
    pt: {
      label: 'Experiência',
      title: 'Trajetória profissional orientada a resultados.',
    },
    en: {
      label: 'Experience',
      title: 'Professional track record driven by results.',
    },
  },
  experienceData: [
    {
      period: 'Dez/2025 — Atual',
      company: 'Banco Daycoval',
      location: 'São Paulo, SP',
      role: {
        pt: 'Analista de Dados Júnior',
        en: 'Junior Data Analyst',
      },
      highlights: {
        pt: [
          'Desenvolvimento, tratamento e validação de bases de dados volumosas para rotinas de fechamento e conferências operacionais.',
          'Criação de pipelines em SQL Server e Python para consolidação, padronização e enriquecimento de dados de múltiplos produtos.',
          'Otimização de rotinas e queries críticas em SQL Server, reduzindo processamentos que levavam dias para poucas horas.',
          'Construção de ferramentas de conferência para bases com mais de 2 milhões de linhas, identificando divergências e inconsistências.',
          'Desenvolvimento e reestruturação de dashboards em Power BI com DAX avançado e modelagem para apoio à tomada de decisão gerencial.',
        ],
        en: [
          'Development, cleaning, and validation of large-scale datasets for closing routines and operational audits.',
          'Creation of SQL Server and Python pipelines for data consolidation, standardization, and enrichment across multiple products.',
          'Optimization of critical SQL Server queries and routines, reducing processing times from days to hours.',
          'Built reconciliation tools for 2M+ record databases, detecting operational inconsistencies.',
          'Development and refactoring of executive Power BI dashboards with advanced DAX and data modeling for management decision-making.',
        ],
      },
    },
    {
      period: 'Ago/2021 — Nov/2025',
      company: 'TGA – Tobi Automotive Garage',
      location: 'São José do Rio Pardo, SP',
      role: {
        pt: 'Administrador / Analista',
        en: 'Administrator / Business Analyst',
      },
      highlights: {
        pt: [
          'Análise de dados comerciais, financeiros e operacionais para suporte à precificação, gestão de custos e planejamento de vendas.',
          'Desenvolvimento de controles, dashboards e indicadores em Excel e Power BI, contribuindo para crescimento de 30% no faturamento.',
        ],
        en: [
          'Analysis of commercial, financial, and operational data supporting pricing, cost management, and sales planning.',
          'Development of Excel and Power BI dashboards and KPIs, contributing to a 30% revenue growth.',
        ],
      },
    },
    {
      period: 'Jan/2015 — Nov/2015',
      company: 'Mediappeal (Marketing Digital)',
      location: 'São José do Rio Pardo, SP',
      role: {
        pt: 'Desenvolvedor Web',
        en: 'Web Developer',
      },
      highlights: {
        pt: [
          'Desenvolvimento e manutenção de aplicações web institucionais em PHP, MySQL, HTML, CSS e WordPress.',
        ],
        en: [
          'Development and maintenance of institutional web applications in PHP, MySQL, HTML, CSS, and WordPress.',
        ],
      },
    },
  ],
  education: {
    pt: {
      label: 'Formação',
      title: 'Base acadêmica sólida e aprendizado contínuo.',
    },
    en: {
      label: 'Education',
      title: 'Solid academic foundation and continuous learning.',
    },
  },
  educationData: [
    {
      institution: 'EBAC – Escola Britânica de Artes Criativas e Tecnologia',
      course: {
        pt: 'Curso Profissionalizante em Ciência de Dados',
        en: 'Professional Program in Data Science',
      },
      period: '2025 — 2026',
      status: { pt: 'Concluído', en: 'Completed' },
    },
    {
      institution: 'Estácio',
      course: {
        pt: 'Curso Superior de Tecnologia (CST) em Gestão Financeira',
        en: "Associate Degree in Financial Management",
      },
      period: '2021 — 2022',
      status: { pt: 'Graduado', en: 'Graduated' },
    },
    {
      institution: 'ETEC',
      course: {
        pt: 'Técnico Integrado ao Ensino Médio em Informática/Software',
        en: 'Technical High School in Computer Science/Software',
      },
      period: '2012 — 2014',
      status: { pt: 'Concluído', en: 'Completed' },
    },
  ],
  contact: {
    pt: {
      label: 'Contato',
      title: 'Tem um desafio com dados ou oportunidade interessante?',
      text: 'Estou disponível para novas conexões, projetos e oportunidades na área de dados, analytics e business intelligence. Minha caixa de entrada está sempre aberta.',
      cta: 'Enviar E-mail Direto',
    },
    en: {
      label: 'Contact',
      title: 'Have a data challenge or an interesting opportunity?',
      text: "I'm open to new connections, projects, and opportunities in data analytics and business intelligence. Feel free to reach out anytime.",
      cta: 'Send Direct Email',
    },
  },
  links: {
    github: 'https://github.com/flavianojr1',
    linkedin: 'https://www.linkedin.com/',
    email: 'mailto:flavianoastolfojunior@gmail.com',
    emailText: 'flavianoastolfojunior@gmail.com',
  },
} as const;