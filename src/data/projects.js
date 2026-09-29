export const projects = [
  {
    slug: 'studylk',
    title: 'StudyLK',
    category: 'Learning Management System',
    description:
      'A full-stack learning management platform designed to provide students with structured educational content, past papers, MCQs, and learning resources through a modern web experience.',

    technologies: [
      'React',
      'Vite',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'JWT',
      'Supabase',
      'Render',
      'Vercel',
      'Resend'
    ],

    image: '/images/projects/studylk.png',

    status: 'Live',

    github: 'https://github.com/DSAN0/studylk',
    live: 'https://studylk-weld.vercel.app',

    featured: true,

    role: 'Full-Stack Developer',

    type: 'Personal / Product Project',

    timeline: '2025 – Present',

    overview:
      'StudyLK is designed as a scalable educational platform rather than a simple content website. The system separates the React frontend from a Django REST API and PostgreSQL database, allowing the platform to evolve into a larger LMS.',

    features: [
      'Structured learning content with Course → Main Topic → Sub-topic hierarchy',
      'Past paper discovery and filtering system',
      'MCQ and essay paper viewing interfaces',
      'Support for Sinhala, English and Tamil educational content',
      'Sinhala text and LaTeX mathematical expression rendering',
      'Grade and subject-based content exploration',
      'A/L and O/L educational content structure',
      'JWT-based student authentication',
      'Student account and profile functionality',
      'Email verification workflow',
      'Password reset workflow',
      'Admin-controlled educational content management',
      'REST API architecture for frontend-backend communication',
      'PostgreSQL relational data model',
      'Responsive interface for desktop and mobile users',
    ],

    technicalHighlights: [
      'Designed a multi-level educational content architecture',
      'Built REST APIs using Django REST Framework',
      'Implemented JWT authentication and protected API endpoints',
      'Designed PostgreSQL relationships for educational resources',
      'Created custom rendering for mixed Sinhala and LaTeX content',
      'Built dedicated interfaces for MCQ and essay-style papers',
      'Migrated production database infrastructure to Supabase',
      'Separated frontend and backend deployment architecture',
      'Deployed React frontend using Vercel',
      'Deployed Django backend using Render',
      'Used Supabase PostgreSQL for production database infrastructure',
      'Integrated Resend HTTP API for transactional email workflows',
    ],

    architecture: {
      frontend: 'React + Vite',
      backend: 'Django + Django REST Framework',
      database: 'PostgreSQL',
      authentication: 'JWT',
      frontendHosting: 'Vercel',
      backendHosting: 'Render',
      databaseHosting: 'Supabase',
      email: 'Resend',
    },

    challenges: [
      'Designing a flexible database structure for different educational content types',
      'Supporting multilingual educational content',
      'Rendering mathematical notation together with Sinhala text',
      'Designing paper viewers that work across different question formats',
      'Migrating production data between PostgreSQL environments',
      'Separating deployment responsibilities between frontend, backend and database services',
    ],

    achievements: [
      'Built and deployed a complete full-stack LMS',
      'Implemented a production PostgreSQL database architecture',
      'Created reusable educational content components',
      'Established independent frontend and backend deployment pipelines',
    ],

    points: [
      'Three-level content hierarchy: Course → Main Topic → Sub-topic',
      'Past Papers viewer with MCQ and essay layouts across multiple backend models',
      'Custom component for rendering mixed Sinhala / LaTeX content',
      'Multilingual educational resource architecture',
      'JWT-based authentication and student account system',
      'Production deployment using Vercel, Render and Supabase',
    ],
  },

  {
    slug: 'talentsphere',
    title: 'TalentSphere',
    category: 'Job Platform',
    description:
      'A large-scale job platform concept designed to connect job seekers and employers through job discovery, applications, employer workflows, and administrative management.',

    technologies: [
      'React',
      'Vite',
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'JWT',
      'Docker'
    ],

    image: '/images/projects/talentsphere.png',

    status: 'In Development',

    github: 'https://github.com/DSAN0/talentsphere',
    live: null,

    featured: true,

    role: 'Full-Stack Developer',

    type: 'Product / Platform Project',

    timeline: '2026 – Present',

    overview:
      'TalentSphere is being designed as a scalable recruitment ecosystem rather than a basic job listing website. The platform is intended to support job seekers, employers and administrators through separate workflows and role-based experiences.',

    userRoles: [
      'Job Seeker',
      'Employer',
      'Administrator',
    ],

    features: [
      'Job search and discovery',
      'Job category and specialization filtering',
      'Job detail pages',
      'Job application workflow',
      'Job seeker profiles',
      'Employer profiles',
      'Employer dashboards',
      'Job posting management',
      'Application management',
      'Administrative job management',
      'Role-based access control',
      'Dashboard analytics',
      'Search and filtering architecture',
      'Responsive user interface',
    ],

    technicalHighlights: [
      'Designed role-based architecture for job seekers, employers and administrators',
      'Built Django REST APIs for frontend communication',
      'Designed PostgreSQL models for jobs, applications and users',
      'Implemented authentication and authorization architecture',
      'Designed separate workflows for different platform roles',
      'Planned scalable job discovery and filtering functionality',
      'Designed an admin workflow for publishing and managing job vacancies',
      'Structured the application for future expansion into a larger recruitment platform',
    ],

    architecture: {
      frontend: 'React + Vite',
      backend: 'Django + Django REST Framework',
      database: 'PostgreSQL',
      authentication: 'JWT',
      containerization: 'Docker',
    },

    plannedFeatures: [
      'Advanced job search',
      'Saved jobs',
      'Application tracking',
      'Employer company pages',
      'Resume management',
      'Candidate profiles',
      'Recruiter dashboards',
      'Job recommendations',
      'Email notifications',
      'Application status notifications',
      'Analytics and reporting',
      'Government and private-sector vacancy publishing',
    ],

    challenges: [
      'Designing a platform architecture that supports multiple user roles',
      'Creating flexible job and category structures',
      'Designing employer and applicant workflows independently',
      'Planning the database for future platform growth',
      'Balancing a modern interface with a large amount of job-related information',
    ],

    points: [
      'Multi-role recruitment platform architecture',
      'Job seeker and employer workflows',
      'Admin-controlled job vacancy publishing',
      'Django REST API backend with PostgreSQL',
      'Role-based authentication and authorization',
      'Dashboard architecture with analytics',
      'Designed for future large-scale expansion',
    ],
  },

  {
    slug: 'ai-project',
    title: 'AI Project',
    category: 'AI Application',
    description:
      'An experimental AI software project exploring LLM-powered applications, retrieval-augmented generation, and intelligent developer assistance.',

    technologies: [
      'Python',
      'OpenAI',
      'LangChain',
      'RAG',
      'PostgreSQL',
      'Vector Search'
    ],

    image: '/images/projects/ai-project.png',

    status: 'Exploration',

    github: null,
    live: null,

    featured: false,

    role: 'AI / Software Developer',

    type: 'Experimental Project',

    overview:
      'This project explores how large language models can be integrated into practical software applications instead of being used only as a conversational interface.',

    features: [
      'LLM-powered interactions',
      'Knowledge-based responses',
      'Retrieval-Augmented Generation experiments',
      'Structured knowledge storage',
      'Developer-focused AI assistance',
      'Context-aware responses',
      'Extensible knowledge architecture',
    ],

    technicalHighlights: [
      'Experimenting with LLM application architecture',
      'Exploring Retrieval-Augmented Generation',
      'Working with structured knowledge sources',
      'Exploring vector-based information retrieval',
      'Designing AI functionality that can be extended with additional knowledge',
      'Evaluating practical AI workflows for software development',
    ],

    architecture: {
      language: 'Python',
      llm: 'OpenAI',
      orchestration: 'LangChain',
      database: 'PostgreSQL',
      retrieval: 'RAG / Vector Search',
    },

    futurePlans: [
      'Expandable knowledge base',
      'More developer tools',
      'Project-aware assistance',
      'Code and command recommendations',
      'Context-aware AI workflows',
      'Integration with software development workflows',
    ],

    points: [
      'LLM-powered application experiments',
      'Retrieval-Augmented Generation architecture',
      'Expandable knowledge system',
      'Developer-focused AI assistant concepts',
    ],
  },

  {
    slug: 'mobile-shop-pos',
    title: 'Mobile Shop POS',
    category: 'Business Management System',
    description:
      'A LAN-based point-of-sale and inventory management system designed for a mobile phone and accessories retail environment.',

    technologies: [
      'Python',
      'Odoo',
      'PostgreSQL',
      'Odoo POS',
      'Custom Odoo Modules',
      'Windows Server'
    ],

    image: '/images/projects/mobile-shop-pos.png',

    status: 'Development',

    github: null,
    live: null,

    featured: true,

    role: 'Odoo Developer',

    type: 'Business Software',

    overview:
      'A customized Odoo-based POS solution designed specifically for a small mobile phone and accessories retail environment, with a focus on simple LAN-based operation.',

    features: [
      'Point-of-sale operations',
      'Product and inventory management',
      'Barcode-based product lookup',
      'Stock quantity management',
      'Cashier-oriented POS workflow',
      'LAN-only deployment',
      'Custom Odoo configuration',
      'PostgreSQL database integration',
      'Role-based user access',
    ],

    technicalHighlights: [
      'Configured Odoo for a local retail environment',
      'Created custom Odoo addon architecture',
      'Configured PostgreSQL database integration',
      'Designed a LAN-only deployment model',
      'Configured POS workflows for cashier usage',
      'Explored resource-efficient deployment on Windows hardware',
    ],

    architecture: {
      platform: 'Odoo',
      database: 'PostgreSQL',
      deployment: 'Windows LAN',
      customization: 'Custom Odoo Modules',
    },

    challenges: [
      'Keeping the POS workflow simple for cashiers',
      'Configuring Odoo for local-network-only operation',
      'Optimizing the system for limited hardware resources',
      'Designing inventory workflows appropriate for a small retail environment',
    ],

    points: [
      'Customized Odoo POS for mobile retail',
      'LAN-based business application',
      'Barcode and inventory workflow',
      'Custom Odoo module development',
      'PostgreSQL-backed business system',
    ],
  },

  {
    slug: 'grocery-pos',
    title: 'Grocery POS',
    category: 'Retail Management System',
    description:
      'A customized retail management and POS concept for grocery stores, focused on sales, inventory and employee-oriented workflows.',

    technologies: [
      'Python',
      'Odoo',
      'PostgreSQL',
      'Odoo POS',
      'Custom Odoo Modules'
    ],

    image: '/images/projects/grocery-pos.png',

    status: 'Development',

    github: null,
    live: null,

    featured: false,

    role: 'Odoo Developer',

    type: 'Business Software',

    overview:
      'A grocery retail system exploring how Odoo can be customized beyond basic POS functionality to support store operations and employee management.',

    features: [
      'POS sales management',
      'Product management',
      'Inventory management',
      'Barcode workflows',
      'Employee management concepts',
      'Attendance tracking concepts',
      'Cashier workflows',
      'Custom retail configuration',
      'PostgreSQL database',
    ],

    technicalHighlights: [
      'Configured Odoo POS for grocery retail',
      'Created custom addon development workflow',
      'Configured PostgreSQL database integration',
      'Explored employee management functionality',
      'Explored attendance management integration',
      'Designed the system around real-world retail operations',
    ],

    architecture: {
      platform: 'Odoo',
      database: 'PostgreSQL',
      customization: 'Custom Odoo Modules',
      deployment: 'Windows / Local Network',
    },

    points: [
      'Grocery-focused POS workflow',
      'Inventory and barcode management',
      'Employee management exploration',
      'Attendance management concepts',
      'Custom Odoo module development',
    ],
  },

  {
    slug: 'influencerhub',
    title: 'InfluencerHUB',
    category: 'Social / Marketing Platform',
    description:
      'A web platform concept connecting influencers and brands through campaign and collaboration workflows.',

    technologies: [
      'Java',
      'Spring Boot',
      'REST API',
      'MySQL',
      'HTML',
      'CSS',
      'JavaScript'
    ],

    image: '/images/projects/influencerhub.png',

    status: 'Academic Project',

    github: 'https://github.com/NNRathnayake/InfluencerHUB',
    live: null,

    featured: false,

    role: 'Software Engineering Student',

    type: 'Academic Project',

    overview:
      'InfluencerHUB is an academic software project exploring backend development with Java and Spring Boot and the architecture of a platform connecting influencers with brands.',

    features: [
      'Influencer profiles',
      'Brand-side functionality',
      'Campaign management concepts',
      'REST API architecture',
      'Database-backed application',
      'Web-based user interface',
    ],

    technicalHighlights: [
      'Worked with Spring Boot architecture',
      'Explored REST API development',
      'Worked with relational database concepts',
      'Studied backend service architecture',
      'Explored multi-user platform design',
    ],

    points: [
      'Spring Boot REST API project',
      'Multi-user platform architecture',
      'Influencer and brand workflows',
      'Relational database integration',
    ],
  },

  {
    slug: 'hospital-idss',
    title: 'Hospital IDSS',
    category: 'Healthcare Information System',
    description:
      'An academic healthcare information system concept focused on hospital workflows, information management and cybersecurity considerations.',

    technologies: [
      'Python',
      'Flask',
      'SQLite',
      'HTML',
      'CSS',
      'JavaScript'
    ],

    image: '/images/projects/hospital-idss.png',

    status: 'Academic Project',

    github: null,
    live: null,

    featured: false,

    role: 'Software Engineering Student',

    type: 'Academic Project',

    overview:
      'An academic project used to explore web application development with Flask while considering cybersecurity principles within a healthcare information system context.',

    features: [
      'Hospital information management',
      'Web-based workflows',
      'Database-backed application',
      'User interaction and forms',
      'Security-focused development considerations',
    ],

    technicalHighlights: [
      'Built web functionality using Flask',
      'Worked with Python backend development',
      'Explored database integration',
      'Studied cybersecurity considerations for web applications',
      'Applied software engineering concepts to a healthcare scenario',
    ],

    points: [
      'Python Flask web application',
      'Healthcare information system concept',
      'Database-backed architecture',
      'Cybersecurity-focused academic project',
    ],
  },
];