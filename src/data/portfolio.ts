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
      intro: 'Soluções desenvolvidas para resolver desafios reais de engenharia, automação, modelagem e visualização estratégica de dados.',
    },
    en: {
      label: 'Projects',
      title: 'Featured projects and solutions.',
      intro: 'Solutions built to solve real-world challenges in data engineering, automation, modeling, and strategic visualization.',
    },
  },
  projectsData: [
    {
      title: 'JobTrackr · Portal de Vagas & Analytics',
      category: 'Python · Django · HTMX · Web Scraping & Playwright',
      problem: {
        pt: 'Dificuldade no gerenciamento de múltiplas candidaturas a vagas, preenchimento manual repetitivo e falta de visibilidade sobre o andamento e conversão dos processos seletivos.',
        en: 'Friction managing multiple job applications, repetitive manual data entry, and lack of visibility into recruitment pipeline progression and conversion metrics.',
      },
      solution: {
        pt: 'Aplicação web com motor inteligente de autofill (LinkedIn & Gupy) via Beautiful Soup e Playwright, prevenção de duplicadas, Kanban por status e dashboard com KPIs em tempo real.',
        en: 'Web application featuring intelligent autofill (LinkedIn & Gupy) with Beautiful Soup and Playwright, duplicate prevention engine, status Kanban, and real-time KPI dashboard.',
      },
      tech: ['Python', 'Django', 'HTMX', 'Tailwind CSS', 'Playwright', 'PostgreSQL', 'Supabase'],
      result: {
        pt: 'Automação de cadastro de vagas, rastreabilidade e visão executiva de recolocação',
        en: 'Automated application entry, pipeline traceability, and executive job search insights',
      },
      image: '/images/projects/jobtrackr.png',
      liveUrl: 'https://jobtrackr-pmsr.onrender.com/',
    },
    {
      title: 'Portal Hub Financeiro',
      category: 'Python · Django · Pipelines ETL · Analytics',
      problem: {
        pt: 'Consolidação manual de extratos e faturas em múltiplos formatos (CSV e PDF), além da dificuldade em projetar compras parceladas futuras sem duplicações.',
        en: 'Manual consolidation of statements and invoices across formats (CSV & PDF), alongside the challenge of tracking future installments without duplicates.',
      },
      solution: {
        pt: 'Plataforma modular em Python/Django com ingestão automatizada de arquivos, motor de deduplicação ativa, projeção de parcelas e categorização de despesas.',
        en: 'Modular Python/Django platform with automated file ingestion, active deduplication engine, installment forecasting, and expense auto-categorization.',
      },
      tech: ['Python', 'Django', 'SQLite', 'ETL', 'Data Modeling', 'Analytics'],
      result: {
        pt: 'Automação completa do processamento de faturas e projeção preditiva de gastos',
        en: 'Full invoice processing automation with predictive expense forecasting',
      },
      image: '/images/projects/hub-financeiro.png',
      githubUrl: 'https://github.com/flavianojr1/hub-financeiro',
    },
    {
      title: 'Análise de Custos de Veículos · Oficina',
      category: 'Python · Pandas · Power BI · Analytics',
      problem: {
        pt: 'Dificuldade no acompanhamento de ordens de serviço automotivas, dispersão de custos operacionais e falta de indicadores para tomada de decisão em manutenção.',
        en: 'Friction tracking automotive work orders, dispersed operational repair costs, and lack of visual KPIs for fleet maintenance decisions.',
      },
      solution: {
        pt: 'Pipeline completo de tratamento e enriquecimento de dados em Python (Pandas), estruturação de métricas financeiras e dashboard interativo em Power BI com visão detalhada por veículo e categoria.',
        en: 'Data pipeline and cleaning with Python (Pandas), financial metric modeling, and interactive Power BI executive dashboard breakdown by vehicle and cost type.',
      },
      tech: ['Python', 'Pandas', 'Power BI', 'ETL', 'Analytics'],
      result: {
        pt: 'Visibilidade total sobre custos de manutenção e padrões operacionais por frota',
        en: 'End-to-end visibility into fleet maintenance costs and operational patterns',
      },
      image: '/images/projects/analise-custos-veiculos.png',
      githubUrl: 'https://github.com/flavianojr1/analise-custos-veiculos-oficina',
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
      image: '/images/projects/fraudes-cartao.jpg',
      githubUrl: 'https://github.com/flavianojr1/projeto-final-ebac-fraudes-em-transacoes-de-credito',
    },
    {
      title: 'Inadimplência por UF · Dados Bacen',
      category: 'Time Series · Python · Analytics Financeiro',
      problem: {
        pt: 'Necessidade de analisar a evolução histórica das taxas de inadimplência regional no Brasil e identificar correlações econômicas por Estado.',
        en: 'Need to analyze the historical evolution of regional default rates across Brazilian states and discover economic correlations.',
      },
      solution: {
        pt: 'Pipeline de extração automatizada de séries temporais via API do Sistema Gerenciador de Séries Temporais do Banco Central (SGS), tratamento de dados e visualização macroeconômica (2004 a 2024).',
        en: 'Automated time-series extraction pipeline via Central Bank API (SGS), data harmonization, and macroeconomic regional visualization spanning 2004-2024.',
      },
      tech: ['Python', 'Pandas', 'APIs Bacen / SGS', 'Matplotlib', 'Time Series'],
      result: {
        pt: 'Mapeamento de 20 anos de séries temporais financeiras e clusters regionais',
        en: '20-year financial time-series mapping and regional default clustering',
      },
      image: '/images/projects/inadimplencia-bacen.jpg',
      githubUrl: 'https://github.com/flavianojr1/semantix-inadimplencia-por-uf',
    },
    {
      title: 'Segmentação de Clientes · K-Means',
      category: 'Machine Learning · Clusterização & CRM',
      problem: {
        pt: 'Dificuldade em segmentar bases de consumidores sem rótulos prévios para direcionamento de campanhas e estratégias personalizadas de retenção.',
        en: 'Difficulty grouping unlabeled customer bases to target customized marketing campaigns and retention strategies.',
      },
      solution: {
        pt: 'Modelagem não supervisionada com K-Means Clustering, validação de clusters via Elbow Method (Método do Cotovelo) e Silhouette Score, combinando análise exploratória e perfilamento de personas.',
        en: 'Unsupervised modeling with K-Means Clustering, cluster validation via Elbow Method and Silhouette Score, combining EDA and customer persona profiling.',
      },
      tech: ['Python', 'Scikit-Learn', 'K-Means', 'Pandas', 'Seaborn', 'Clustering'],
      result: {
        pt: 'Identificação de clusters estratégicos de clientes por renda e gastos',
        en: 'Strategic customer cluster identification based on income and spend behavior',
      },
      image: '/images/projects/segmentacao-kmeans.jpg',
      githubUrl: 'https://github.com/flavianojr1/segmentacao-clientes-kmeans',
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
      ctaLinkedIn: 'Chamar no LinkedIn',
    },
    en: {
      label: 'Contact',
      title: 'Have a data challenge or an interesting opportunity?',
      text: "I'm open to new connections, projects, and opportunities in data analytics and business intelligence. Feel free to reach out anytime.",
      cta: 'Send Direct Email',
      ctaLinkedIn: 'Connect on LinkedIn',
    },
  },
  links: {
    github: 'https://github.com/flavianojr1',
    linkedin: 'https://www.linkedin.com/in/flaviano-junior',
    email: 'mailto:flavianoastolfojunior@gmail.com',
    emailText: 'flavianoastolfojunior@gmail.com',
  },
} as const;