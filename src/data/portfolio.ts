export const profile = {
  name: 'Aphiwe Andrew Ncayiyane',
  handle: 'APH1WE',
  systemName: 'APH1WE // DIGITAL SYSTEM',
  roles: ['Software Developer','Full Stack Developer', 'Data Engineering', 'AI & Machine Learning'],
  githubUrl: 'https://github.com/ncayiyane',
  githubUsername: 'ncayiyane',
  portfolioUrl: 'https://aphiweportfolio.netlify.app/',
  bio: 'Hi, I\'m Aphiwe Ncayiyane, a Junior Full Stack Developer passionate about building clean, user-friendly web apps. Always learning, always coding.',
  intro: 'I build software across full-stack development, data, and artificial intelligence. My work spans web applications, APIs, databases, data-driven systems, and practical AI/ML solutions allowing me to build the system and work with the intelligence behind it.',
  location: 'Cape Town, South Africa',
  education: [
    {
      institution: 'Cape Peninsula University of Technology (CPUT)',
      degree: 'Postgraduate Diploma in Information and Communication Technology',
      dates: '2025 – Present',
      status: 'In Progress',
      focus: 'AI, Data Science & Software Engineering',
      description: 'Advanced postgraduate study focused on artificial intelligence, data science, software engineering, databases, information systems, computational methods, and research.',
      keyAreas: ['Data Science', 'Artificial Intelligence', 'Computational Mathematics', 'Database Management', 'Information Systems Theories', 'Software Engineering', 'Research Methods', 'Capstone Project'],
    },
    {
      institution: 'Walter Sisulu University (WSU)',
      degree: 'Advanced Diploma in Information and Communications Technology in Communication Networks',
      dates: '2022 – 2023',
      status: 'Completed',
      description: 'Advanced study in communication networks and ICT, building deeper knowledge of network infrastructure, computer security, operating systems, network management, research, and IT management.',
      keyAreas: ['Communication Networks IV', 'Advanced Communication Networks IV', 'Computer Security IV', 'Operating Systems IV', 'Network Project Management IV', 'IT Management IV', 'Research Methodology IV'],
    },
    {
      institution: 'Walter Sisulu University (WSU)',
      degree: 'National Diploma in Information Technology',
      dates: '2018 – 2021',
      status: 'Completed',
      description: 'Built a broad foundation in information technology covering software development, information systems, computer networks, systems software, technical support, and user interface development.',
      keyAreas: ['Software Development', 'Information Systems', 'Communication Networks', 'Support Services', 'Systems Software', 'GUI Design', 'IT Skills'],
    },
  ],
  publicRepos: 51,
  email: 'andrewncama@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aphiwe-ncayiyane',
};

export const aboutSections = [
  {
    title: 'WHO I AM',
    icon: 'User',
    content:
      "I am Aphiwe Andrew Ncayiyane, a Software and Full Stack Developer with a technical background that spans Information Technology, computer networking, software development, data, and artificial intelligence. My foundation was built at Walter Sisulu University, where I completed a National Diploma in Information Technology and later an Advanced Diploma in Information and Communications Technology in Communication Networks. This gave me exposure to software development, information systems, systems software, computer networks, computer security, operating systems, and technical support. I've since expanded that foundation into software engineering, full-stack development, data engineering, and AI/ML.",
  },
  {
    title: 'WHAT I BUILD',
    icon: 'Code2',
    content:
      'I build full-stack applications and data-driven systems using technologies such as React, JavaScript, TypeScript, Python, C#, SQL, Node.js, and FastAPI. My work includes frontend applications, REST APIs, databases, data processing, AI-powered systems, and integrations between different parts of a software system. My networking background also gives me a broader understanding of how systems communicate and operate beyond the application layer.',
  },
  {
    title: "WHAT I'M LEARNING",
    icon: 'Brain',
    content:
      "I am continuing to develop my capabilities in Data Science, Machine Learning, and Artificial Intelligence while completing my postgraduate studies at Cape Peninsula University of Technology. I'm particularly interested in applying AI and data technologies to practical software problems rather than treating AI as a standalone technology.",
  },
  {
    title: 'CAREER DIRECTION',
    icon: 'Compass',
    content:
      'My career has developed across several connected areas of technology: IT & Networking → Software Development → Full Stack Development → Data → AI/ML. My primary career direction is Software and Full Stack Development, while continuing to grow in Data Engineering and AI/ML. I am particularly interested in opportunities where software engineering, data, and intelligent systems intersect.',
  },
  {
    title: 'TECHNICAL INTERESTS',
    icon: 'Cpu',
    content:
      'I am particularly interested in Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), AI Agents, Vector Databases, Machine Learning, Computer Vision, Data Engineering, REST APIs, Databases, Cloud Technologies, Distributed and connected systems, Evidence-grounded AI. My interest in technology comes from understanding the full picture how systems connect, how applications are built, how data moves through them, and how intelligence can be added to make those systems more useful.',
  },
];

export interface Education {
  institution: string;
  degree: string;
  dates?: string;
  status: string;
  focus?: string;
  description?: string;
  keyAreas?: string[];
}

export interface Experience {
  company: string;
  role: string;
  dates: string;
  location?: string;
  description: string;
  highlights?: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    company: 'Appmaniazar',
    role: 'Junior Software Engineer',
    dates: 'March 2025 – March 2026',
    location: 'Cape Town',
    description:
      'Worked across the software development lifecycle, contributing to full-stack application development, backend services, cloud infrastructure, production support, and system improvements. Built and maintained software used in real-world production environments while working with modern development, cloud, and CI/CD practices.',
    highlights: [
      'Developed end-to-end application features across frontend and backend components, integrating RESTful APIs, data validation, database workflows, and user-facing functionality.',
      'Integrated external providers into core application systems and supported reliable communication between services.',
      'Built and maintained REST APIs and backend services with structured data handling, validation, error management, and reliable frontend-backend communication.',
      'Contributed to migrating services from AWS EC2 to ECS, improving scalability and resource efficiency.',
      'Converted manually managed AWS Lambda infrastructure into Terraform-managed infrastructure, improving consistency and maintainability.',
      'Contributed to the re-architecture of a core product, moving from a Lambda-heavy asynchronous design toward task-based parallel processing to improve transaction throughput and infrastructure resilience.',
      'Optimized Kafka messaging by moving from the embedded AWS client to NuGet packages, providing greater control over message handling and duplication management.',
      'Designed and maintained database queries and data relationships supporting core application functionality.',
      'Diagnosed and resolved production issues across frontend, backend, database, and infrastructure layers, identifying root causes and implementing fixes to improve system stability and user experience.',
      'Used Git and CI/CD workflows to support code integration, testing, builds, and deployments across development and production environments.',
    ],
    technologies: ['React', 'JavaScript', 'REST APIs', 'SQL', 'AWS', 'EC2', 'ECS', 'Lambda', 'Terraform', 'Kafka', 'CI/CD', 'Git'],
  },
  {
    company: 'CAPACITI',
    role: 'Software Developer',
    dates: 'August 2024 – February 2025',
    location: 'Cape Town',
    description:
      'Worked in a software development environment with exposure to engineering, DevOps, quality assurance, support, product, and data. Contributed to end-to-end software projects while developing practical experience across frontend, backend, APIs, testing, and collaborative development workflows.',
    highlights: [
      'Developed and enhanced software features using Python and JavaScript, applying software engineering principles, data structures, and problem-solving techniques to build maintainable solutions.',
      'Built and integrated RESTful APIs, working with request/response handling, input validation, structured error handling, and data exchange between application components.',
      'Translated user and business requirements into functional software features while considering usability, reliability, and code quality.',
      'Debugged, tested, and improved applications by identifying defects, edge cases, and performance issues and implementing appropriate fixes.',
      'Collaborated within development teams using Git-based workflows, code reviews, technical discussions, and Agile development practices.',
      'Gained cross-functional exposure across Engineering, DevOps, Quality Assurance, Product, Support, and Data, strengthening my understanding of the wider software development lifecycle.',
      'Collaborated in a three-member team to develop a cryptocurrency payment feature as a Value-Added Service (VAS) within a fintech payments application.',
      'Contributed to a trading experience supporting cryptocurrency buying, holding, and selling functionality.',
      'Worked across UI/UX design in Figma, frontend development with React Native, and backend architecture using C#.',
      'Contributed to delivering a Minimum Viable Product (MVP) and Proof of Concept (POC) within a three-month development period.',
      'Applied rapid prototyping and Agile development practices to iteratively develop and improve the solution.',
    ],
    technologies: ['Python', 'JavaScript', 'React Native', 'C#', 'REST APIs', 'Figma', 'Git', 'Agile'],
  },
  {
    company: 'Road Traffic Management Corporation (RTMC)',
    role: 'IT Infrastructure',
    dates: 'September 2023 – July 2024',
    location: 'Gauteng',
    description:
      'Supported IT infrastructure, systems, and network operations in an enterprise environment. Worked across technical support, system monitoring, troubleshooting, incident management, and infrastructure maintenance to help maintain reliable technology services for users.',
    highlights: [
      'Monitored IT systems, infrastructure, and network performance, identifying potential issues and escalating incidents to support system availability and operational reliability.',
      'Performed technical troubleshooting and root cause analysis across hardware, software, connectivity, and system-related issues.',
      'Supported the installation, configuration, maintenance, and troubleshooting of IT systems and infrastructure.',
      'Responded to technical incidents and service requests, prioritising issues based on impact and urgency while following established support and escalation procedures.',
      'Maintained technical documentation, troubleshooting procedures, and incident records to improve knowledge sharing, issue traceability, and consistency of support activities.',
      'Collaborated with technical teams and end users to identify requirements, communicate technical issues, and implement practical solutions to operational problems.',
    ],
    technologies: ['IT Infrastructure', 'Networking', 'System Monitoring', 'Troubleshooting', 'Technical Support', 'Incident Management', 'Root Cause Analysis', 'System Configuration'],
  },
];

export type ProjectCategory = 'AI/ML' | 'DATA' | 'WEB' | 'MOBILE' | 'PYTHON' | 'JAVASCRIPT' | 'TYPESCRIPT' | 'C#' | 'TRANSPORT' | 'JAVA';

export interface Project {
  name: string;
  description: string;
  language: string | null;
  url: string;
  homepage: string | null;
  updatedAt: string;
  stars: number;
  categories: ProjectCategory[];
  technologies: string[];
  featured: boolean;
  status?: string;
  detailedDescription?: string;
  problem?: string;
  howItWorks?: string[];
  architecture?: string;
  whatIBuilt?: string[];
  techStack?: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    ai?: string[];
    retrieval?: string[];
    development?: string[];
    testing?: string[];
    devops?: string[];
  };
  engineeringChallenges?: string;
  currentStatus?: string;
  limitations?: string;
  whatILearned?: string[];
}

export const projects: Project[] = [
  {
    name: 'AI-Powered Health Claim Verification System',
    description: 'Evidence-grounded AI system for verifying health claims using Retrieval-Augmented Generation (RAG), ChromaDB, Sentence Transformers, FastAPI, React, and Llama 3.1.',
    language: 'Python',
    url: 'https://github.com/ncayiyane/AI-Powered-Health-Claim-Verification-System',
    homepage: null,
    updatedAt: '2026-10-22',
    stars: 0,
    categories: ['AI/ML', 'PYTHON'],
    technologies: ['Python', 'FastAPI', 'React', 'RAG', 'ChromaDB', 'Sentence Transformers', 'Llama 3.1'],
    featured: true,
    status: 'ACTIVE DEVELOPMENT',
    detailedDescription: 'The AI-Powered Health Claim Verification System is an evidence-grounded AI application designed to verify health-related claims using retrieved information from a controlled knowledge base. The project explores how Retrieval-Augmented Generation (RAG) can be used to reduce unsupported AI responses by retrieving relevant evidence before asking a Large Language Model to evaluate a claim.',
    problem: 'Health information available online can contain misleading, exaggerated, incomplete, or unsupported claims. A conventional LLM can generate a confident-sounding response without necessarily providing reliable evidence for its conclusion. This project explores a different approach: Retrieve evidence first, then ask the AI to reason over that evidence.',
    howItWorks: [
      '01 — CLAIM SUBMISSION: The user enters a health-related claim through the React frontend, which sends the claim to the FastAPI backend through a REST API.',
      '02 — INPUT VALIDATION: The backend validates the request before processing it. Invalid or incomplete claims are rejected rather than being passed directly into the AI pipeline.',
      '03 — EMBEDDING GENERATION: The submitted claim is converted into a numerical vector representation using a Sentence Transformer embedding model.',
      '04 — SEMANTIC RETRIEVAL: The claim embedding is compared against the embeddings stored in ChromaDB. The system retrieves the most relevant pieces of evidence using semantic similarity.',
      '05 — EVIDENCE-GROUNDED LLM ANALYSIS: The original claim and retrieved evidence are passed to Llama 3.1 through Ollama. The LLM is instructed to evaluate the claim based on the retrieved evidence rather than relying only on its pretrained knowledge.',
      '06 — STRUCTURED VERIFICATION: The backend validates the generated response and returns a structured result containing: Verdict, Confidence score, Explanation, Supporting evidence.',
      '07 — FRONTEND RESULT: The React frontend displays the verification result and the evidence used during the analysis. Recent verification results are also maintained in browser history.',
    ],
    architecture: 'React Frontend → HTTP POST → FastAPI API → RAG Pipeline (Embeddings + Retrieval) → ChromaDB (Vector Knowledge Base) → Retrieved Evidence → Ollama + Llama 3.1 (Evidence-Based Analysis) → Structured Response (Verdict, Confidence, Explanation, Evidence)',
    whatIBuilt: [
      'Backend Engineering: Built the FastAPI REST API, implemented the claim verification endpoint, added request validation using Pydantic, implemented API error handling, designed structured verification responses.',
      'RAG & Retrieval: Implemented document loading and chunking, embedding generation, integrated ChromaDB as the vector store, implemented semantic similarity retrieval, connected retrieved evidence to the LLM verification process.',
      'AI / LLM: Integrated Llama 3.1, integrated local inference through Ollama, added configurable LLM provider support, designed prompts for structured claim verification, implemented validation of generated AI responses.',
      'Frontend: Built the React frontend, implemented claim submission, displayed verification results, displayed evidence and source information, added recent verification history.',
      'Testing: Current verification test suite covers supported health claims, clearly false claims, partially true claims, contradicted claims, and claims with insufficient evidence.',
    ],
    techStack: {
      frontend: ['React', 'Vite', 'JavaScript', 'CSS'],
      backend: ['Python', 'FastAPI', 'Pydantic', 'Uvicorn'],
      ai: ['Llama 3.1 8B', 'Ollama', 'Groq', 'Sentence Transformers', 'Hugging Face'],
      retrieval: ['ChromaDB', 'LangChain Chroma', 'Vector Embeddings', 'Semantic Search'],
      development: ['Git', 'GitHub', 'REST APIs', 'Python Virtual Environment', 'npm'],
    },
    engineeringChallenges: 'One of the biggest challenges is ensuring that the LLM does not simply generate a plausible answer. The system therefore separates RETRIEVAL from GENERATION. The LLM receives retrieved evidence before generating its verification result. This creates a more traceable workflow and allows retrieval quality to be evaluated separately from the language model\'s reasoning. Another challenge is handling insufficient evidence. A verification system should not force every claim into TRUE or FALSE when the knowledge base does not contain enough relevant information.',
    currentStatus: 'ACTIVE DEVELOPMENT - The project is not finished yet. The core RAG verification pipeline is currently operational, but I am continuing to improve the system before considering it production-ready. Current development areas include: expanding the trusted knowledge base, adding more authoritative sources, improving retrieval relevance, improving ranking of retrieved evidence, testing different retrieval strategies, improving AI response validation, expanding automated evaluation, measuring retrieval performance, improving application security, improving monitoring and logging, exploring production deployment architecture, adding human review for uncertain claims.',
    limitations: 'This system is currently an engineering and research project rather than a medical decision-making tool. Its results are affected by: the quality and coverage of the knowledge base, the relevance of retrieved evidence, embedding similarity, LLM reasoning accuracy, limitations of the local Llama model, the current dependency on local Ollama inference, the absence of unrestricted real-time medical literature retrieval. An UNVERIFIED result should not be interpreted as proof that a claim is false.',
    whatILearned: ['Generative AI', 'Large Language Models', 'Retrieval-Augmented Generation', 'Vector Databases', 'Semantic Search', 'Embeddings', 'Prompt Engineering', 'Structured LLM Outputs', 'AI Response Validation', 'REST API Development', 'FastAPI', 'React', 'Python', 'Full-Stack Development'],
  },
  {
    name: 'AIJobSearch',
    description: 'AI-powered job search and matching platform that uses semantic search and vector embeddings to match candidate skills and profiles with relevant job opportunities.',
    language: 'TypeScript',
    url: 'https://github.com/ncayiyane/AIJobSearch',
    homepage: 'https://ai-job-search-xi.vercel.app',
    updatedAt: '2026-09-29',
    stars: 0,
    categories: ['AI/ML', 'WEB', 'TYPESCRIPT'],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Sentence Transformers', 'TypeScript', 'React', 'Async SQLAlchemy', 'JWT', 'Docker'],
    featured: true,
    status: 'ACTIVE DEVELOPMENT',
    detailedDescription: 'AIJobSearch is an AI-powered job search platform designed to improve the way candidates discover relevant job opportunities. Instead of relying only on traditional keyword matching, the system uses semantic search and vector embeddings to compare a candidate\'s profile and skills with job descriptions. The goal is to move beyond "Does this job contain the exact keyword I searched for?" toward "How closely does this opportunity match my actual skills and experience?"',
    problem: 'Traditional job searches often depend heavily on keywords. For example, a candidate might search for "Junior Full Stack Developer" but a relevant job might use different terminology like "Software Engineer", "Application Developer", "Backend Developer", or "Web Developer". A keyword-based system can miss opportunities because the wording is different even when the underlying skills are similar. AIJobSearch explores how semantic similarity can be used to identify relationships between a candidate\'s capabilities and the requirements of a job.',
    howItWorks: [
      '01 — CANDIDATE PROFILE: The candidate\'s skills and profile information are represented as structured data (e.g., HTML/CSS, JavaScript, Python, SQL, React, REST APIs). These skills become part of the information used during matching.',
      '02 — JOB INFORMATION: Job opportunities contain information such as job title, description, required skills, responsibilities, and technical requirements. The system processes this information so it can be compared with candidate information.',
      '03 — TEXT EMBEDDINGS: Job and candidate information are transformed into numerical vector representations using Sentence Transformers. These embeddings allow the system to compare the semantic meaning of different pieces of text.',
      '04 — VECTOR SEARCH: The embeddings are stored and searched using PostgreSQL with pgvector. Instead of only checking whether two documents contain the same words, vector similarity allows the system to identify content with similar meaning.',
      '05 — MATCHING: The candidate profile is compared against available job information. The system calculates a similarity-based match and returns relevant opportunities. For example, during local testing, a search for "Junior Full Stack Developer" returned a 71% match against the tested candidate profile.',
    ],
    architecture: 'Frontend (Search / Jobs / Profile) → REST API → FastAPI Backend (Authentication, Job Search, Profile Management, Matching Logic) → Semantic Matching (Sentence Transformers, Vector Embeddings) → PostgreSQL + pgvector (Jobs / Profiles / Vectors) → Ranked Job Matches',
    whatIBuilt: [
      'Backend Engineering: Built the FastAPI backend, implemented REST API endpoints, job search, candidate profile handling, authentication, database operations, semantic matching, request validation, and structured API responses.',
      'Vector Search: Used PostgreSQL with pgvector not only as the application\'s relational database but also as the storage layer for vector representations, combining traditional relational data with vector similarity search.',
      'Machine Learning Component: Used Sentence Transformers to generate embeddings, converting job descriptions from raw text into numerical representations for semantic matching rather than depending entirely on exact keyword matches.',
      'Authentication: Implemented JWT-based authentication for managing protected API functionality, allowing the application to distinguish between authenticated and unauthenticated requests.',
      'Docker Development Environment: Developed using Docker to run the major components consistently (jobsearch_backend: FastAPI on :8000, jobsearch_frontend: Frontend on :8080, jobsearch_db: PostgreSQL + pgvector on :5432).',
    ],
    techStack: {
      backend: ['Python', 'FastAPI', 'Async SQLAlchemy', 'REST APIs', 'JWT Authentication'],
      database: ['PostgreSQL', 'pgvector'],
      ai: ['Sentence Transformers', 'Vector Embeddings', 'Semantic Similarity'],
      development: ['Docker', 'Git', 'GitHub'],
    },
    engineeringChallenges: 'One of the interesting challenges in this project is turning something subjective—"Is this job a good match for me?"—into a measurable technical problem. A candidate and a job description contain different types of information. For example, a candidate might list "Python, FastAPI, SQL, React, REST APIs" while a job might say "Develop scalable web services, work with relational databases, and build modern frontend applications." A useful matching system needs to recognise relationships between these descriptions even when the terminology is different. This is where semantic embeddings and vector similarity become useful.',
    currentStatus: 'ACTIVE DEVELOPMENT - The project is currently being developed and tested. The core application environment is operational, including the FastAPI backend, frontend, PostgreSQL/pgvector database, authentication, and semantic matching components. Further development can focus on improving matching accuracy, candidate/job ranking, profile enrichment, job-data quality, semantic retrieval, evaluation metrics, search relevance, user experience, and production deployment.',
    limitations: undefined,
    whatILearned: ['Building APIs with FastAPI', 'Working with asynchronous Python services', 'Designing relational database-backed applications', 'Using PostgreSQL with vector extensions', 'Generating and comparing embeddings', 'Implementing semantic search', 'Working with JWT authentication', 'Containerising multi-service applications with Docker', 'Connecting AI/ML techniques to a real software product'],
  },
  {
    name: 'Movie App',
    description: 'A cross-platform movie discovery application built with React Native and Expo, featuring structured navigation, reusable components, movie-focused services, image handling, and backend integration through Appwrite.',
    language: 'TypeScript',
    url: 'https://github.com/ncayiyane/MovieAppReactNative',
    homepage: null,
    updatedAt: '2025-12-12',
    stars: 0,
    categories: ['MOBILE', 'TYPESCRIPT'],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Appwrite', 'Expo Router', 'NativeWind', 'Tailwind CSS', 'React Navigation', 'React 19'],
    featured: true,
    status: 'MOBILE APPLICATION · CROSS-PLATFORM · DEVELOPMENT PROJECT',
    detailedDescription: 'Movie App is a cross-platform mobile application developed with React Native and Expo. The project provides a movie-focused user experience while demonstrating practical mobile application development, navigation, reusable components, application state, image handling, and backend integration. The application is structured using modern Expo architecture and supports Android, iOS, and web development through the Expo ecosystem.',
    problem: 'The goal of the project was to build a modern movie application that provides a structured and engaging mobile experience. The project focuses on movie discovery and presentation, mobile-first user experience, structured application navigation, reusable React Native components, movie-related service integration, backend connectivity, image handling, and cross-platform development.',
    howItWorks: [
      'Application Architecture: User Interface → React Native Components → Application Services / Context → Backend Services',
      'React Native: The core application is built using React Native, allowing the same application architecture to target multiple platforms.',
      'Expo: Expo provides the development and platform tooling. The repository uses Expo 54.',
      'Navigation: The application uses Expo Router together with React Navigation. Expo Router provides file-based routing while React Navigation packages support the application\'s navigation structure.',
      'Backend: The project integrates Appwrite through both the Appwrite JavaScript SDK and React Native Appwrite integration.',
      'Styling: The project uses NativeWind and Tailwind CSS for styling React Native interfaces.',
    ],
    architecture: 'User Interface → React Native Components → Application Services / Context → Backend Services. Modular structure with app/, assets/, components/, constants/, interfaces/, services/, src/context/, and types/ directories.',
    whatIBuilt: [
      'Mobile Development: Built the application using React Native, used TypeScript for strongly typed application development, structured the application using Expo Router, implemented reusable components, organized shared application types and interfaces.',
      'Navigation: Implemented application navigation using Expo Router, worked with React Navigation packages, structured the application around multiple navigation patterns.',
      'Backend Integration: Integrated Appwrite into the application, used application services to separate backend-related functionality from UI components, structured the application for backend-connected functionality.',
      'UI Development: Used NativeWind and Tailwind CSS, implemented responsive React Native interfaces, worked with Expo image functionality and image selection, used Expo\'s UI and device capabilities where required.',
    ],
    techStack: {
      frontend: ['React Native', 'React 19', 'TypeScript', 'Expo 54', 'React Native Web'],
      backend: ['Appwrite', 'React Native Appwrite'],
      development: ['Expo Router', 'React Navigation', 'NativeWind', 'Tailwind CSS', 'React Native SVG', 'Git', 'GitHub'],
    },
    engineeringChallenges: 'A mobile application introduces different engineering considerations from a conventional web application. The project required working with mobile navigation, cross-platform components, device-specific functionality, application state, image assets, backend services, TypeScript types, responsive layouts, and Expo\'s development ecosystem. The application architecture therefore needed to remain organized as functionality was distributed across screens, components, services, contexts, interfaces, and types.',
    currentStatus: 'MOBILE APPLICATION · CROSS-PLATFORM · DEVELOPMENT PROJECT - The project demonstrates a complete React Native application architecture using modern Expo tooling, TypeScript, structured navigation, reusable components, backend integration, and cross-platform support. It demonstrates the ability to work across the application layer while maintaining separation between UI → Navigation → State → Services → Backend.',
    limitations: undefined,
    whatILearned: ['React Native', 'Cross-Platform Development', 'TypeScript', 'Mobile UI Development', 'Application Navigation', 'Component-Based Architecture', 'Backend Integration', 'Application State / Context', 'Image Handling', 'Responsive Interfaces', 'Modern Expo Development'],
  },
  {
    name: 'SPAN Digital Coding Test',
    description: 'Python command-line application that processes historical football match data from CSV and reproduces the English First Division 1974/75 standings using the competition\'s original scoring and ranking rules.',
    language: 'Python',
    url: 'https://github.com/ncayiyane/SPAN-Digital-Coding-Test',
    homepage: null,
    updatedAt: '2026-09-29',
    stars: 0,
    categories: ['PYTHON', 'DATA'],
    technologies: ['Python', 'CLI', 'CSV', 'Algorithms', 'pytest'],
    featured: true,
    status: 'COMPLETED',
    detailedDescription: 'The SPAN Digital Coding Test is a Python command-line application developed as part of a software engineering coding assessment. The challenge was to process football match results stored in CSV format and reproduce the English First Division 1974/75 league standings after Week 10. The interesting part of the challenge was that the historical competition rules were different from modern football rules. The application therefore had to correctly implement the rules that were actually used during the 1974/75 season, rather than applying today\'s Premier League scoring system. The completed solution processes 107 historical matches and reproduces the expected Week 10 standings.',
    problem: 'The application receives football match results containing match date, home team, home goals, away team, and away goals. It then calculates each team\'s position, matches played, wins, draws, losses, goals scored, goals conceded, goal average, and points. The final output is a ranked league table in CSV format.',
    howItWorks: [
      '01 — READ INPUT: The CLI reads football match results from a CSV file. The application also supports reading from standard input, allowing the program to be used in Unix-style pipelines.',
      '02 — PARSE MATCH DATA: The CSV data is converted into structured match records. Each match contains Date, Home Team, Home Goals, Away Team, and Away Goals. The application also handles CSV parsing and associated error cases through its test suite.',
      '03 — CALCULATE TEAM RECORDS: For every match, the program updates the relevant team statistics. Wins add +1 Win, +1 Played, +2 Points. Draws add +1 Draw, +1 Played, +1 Point to both teams. Losses add +1 Loss, +1 Played, +0 Points. Goals scored and conceded are also accumulated.',
      '04 — CALCULATE RANKING: Once all matches have been processed, the application calculates the final ranking using Points, Historical goal average, and Goals scored. The ranking logic is separated from the CSV and CLI layers, making the core calculation easier to test and maintain.',
      '05 — GENERATE OUTPUT: The application produces a CSV standings table containing position, team, played, won, drawn, lost, goals_for, goals_against, goal_average, and points. The output is ranked from the best-performing team to the lowest-ranked team.',
    ],
    architecture: 'league_table/ ├── models.py (MatchResult, TeamRecord, TableRow) ├── rules.py (RuleSet, Points calculation, Tie-breaking configuration) ├── table.py (CSV processing, Team statistics, Ranking algorithm) └── cli.py (Command-line interface)',
    whatIBuilt: [
      'Data Processing: Reading, validating, transforming, and producing structured CSV data.',
      'Algorithms: Implementing points calculations, goal averages, and multi-level ranking logic.',
      'Domain Modelling: Representing matches, teams, and standings as structured Python data models.',
      'CLI Development: Building a command-line interface with file and stdin/stdout support.',
      'Testing: Using unit tests, integration tests, edge-case tests, and regression tests.',
      'Maintainability: Separating models, business rules, data processing, and CLI concerns into different modules.',
    ],
    techStack: {
      backend: ['Python 3.10+'],
      development: ['Git', 'GitHub', 'CLI', 'CSV', 'pytest'],
    },
    engineeringChallenges: 'One of the most important aspects of the assessment was correctly implementing the 1974/75 English First Division rules. Points: Win → 2 points, Draw → 1 point, Loss → 0 points (differs from modern football where a win is worth three points). Tie-Breaking: The 1974/75 competition used Goal Average = Goals For ÷ Goals Against, followed by goals scored where required. Modern football instead uses goal difference: Goal Difference = Goals For − Goals Against. The application deliberately supports both rule sets, but the historical 1974-75 rules are the default because using modern rules would produce an historically incorrect result.',
    currentStatus: 'COMPLETED - The completed application successfully processes the historical Week 10 dataset and reproduces the expected 1974/75 English First Division standings using the correct historical rules. The test suite covers the core calculations, ranking logic, CSV handling, CLI execution, and historical regression scenario. 26 tests passing.',
    limitations: undefined,
    whatILearned: ['Translating a written technical specification into working software', 'Identifying differences between historical and modern business rules', 'Implementing domain-specific algorithms', 'Processing structured data', 'Building command-line applications', 'Designing modular Python code', 'Handling invalid input and edge cases', 'Writing automated tests', 'Creating regression tests against real datasets', 'Documenting technical decisions', 'Using AI-assisted development responsibly while manually validating the resulting implementation'],
  },
  {
    name: 'A/B Test Simulation',
    description: 'A Python based experimentation system that simulates an A/B test, compares control and treatment conversion rates, applies statistical significance tests, estimates required sample size, and generates visual and report-based results.',
    language: 'Python',
    url: 'https://github.com/ncayiyane/Test_Simulation',
    homepage: null,
    updatedAt: '2026-08-17',
    stars: 0,
    categories: ['PYTHON', 'DATA'],
    technologies: ['Python', 'Pandas', 'NumPy', 'SciPy', 'Statsmodels', 'Matplotlib'],
    featured: true,
    status: 'COMPLETED · STATISTICAL ANALYSIS · REPORTING',
    detailedDescription: 'The A/B Test Simulation is a Python-based data analysis project that simulates an experiment comparing two versions of a product, website, or experience. The system generates simulated conversion data for a Control group and a Treatment group, calculates the difference between their conversion rates, and uses statistical methods to determine whether the observed improvement is statistically significant. The project combines data generation, statistical hypothesis testing, data visualization, power analysis, and automated reporting into a single workflow.',
    problem: 'When comparing two versions of a product or website, an observed improvement in conversion rate does not automatically mean that the treatment actually performs better. Random variation can produce apparent improvements even when there is no meaningful underlying difference. The purpose of an A/B test is therefore to determine whether the observed difference provides enough statistical evidence to reject the null hypothesis. This project simulates that process programmatically.',
    howItWorks: [
      '1. Generate Experiment Data: The system simulates user conversion results for two groups: Control and Treatment.',
      '2. Calculate Conversion Rates: The application calculates the conversion rate for each group, then determines absolute difference and relative uplift.',
      '3. Statistical Testing: The system applies multiple statistical methods to evaluate the observed difference, including Two-Proportion Z-Test and Chi-Square Test of Independence.',
      '4. Confidence Interval: A 95% confidence interval is calculated to estimate the likely range of the improvement.',
      '5. Power Analysis: The system estimates the required sample size per group needed to reliably detect the expected effect.',
      '6. Statistical Decision: The p-values from the statistical tests are evaluated against the significance threshold (0.05 for determining statistical significance).',
      '7. Generate Outputs: The analysis produces CSV results, conversion-rate visualization, and text-based analysis report.',
    ],
    architecture: 'Generate Data → Calculate Metrics → Statistical Tests → Confidence Interval → Power Analysis → Decision → Report',
    whatIBuilt: [
      'Generate and work with experimental data.',
      'Calculate conversion metrics.',
      'Compare treatment and control groups.',
      'Apply statistical hypothesis testing.',
      'Interpret p-values.',
      'Calculate confidence intervals.',
      'Perform sample-size estimation.',
      'Create data visualizations.',
      'Export analytical results.',
      'Generate automated reports.',
      'Structure Python code into reusable modules.',
    ],
    techStack: {
      backend: ['Python 3'],
      development: ['Pandas', 'NumPy', 'SciPy', 'Statsmodels', 'Matplotlib', 'Git', 'GitHub'],
    },
    engineeringChallenges: undefined,
    currentStatus: 'COMPLETED · STATISTICAL ANALYSIS · REPORTING - The project provides an end-to-end simulation of an A/B testing workflow, from generating experimental data through statistical analysis and final reporting. It demonstrates the ability to use Python not only to write software, but also to analyze data, apply statistical methods, interpret results, and translate those results into a business decision.',
    limitations: undefined,
    whatILearned: ['Data Analytics', 'Data Science', 'Business Intelligence', 'Experimentation', 'Product Analytics', 'Software Engineering with data components', 'Statistical hypothesis testing', 'Power analysis', 'Confidence intervals', 'Sample size estimation', 'Data visualization', 'Automated reporting'],
  },
  {
    name: "Augustina's Website",
    description: 'A modern client website built with React and TypeScript, using Supabase for backend services and Tailwind CSS for the user interface. The project demonstrates end-to-end web development, from frontend implementation and responsive UI to backend integration and deployment.',
    language: 'TypeScript',
    url: 'https://github.com/ncayiyane/Augustina-s-Website-',
    homepage: 'https://augustina.vercel.app',
    updatedAt: '2026-09-23',
    stars: 0,
    categories: ['WEB', 'TYPESCRIPT'],
    technologies: ['React', 'TypeScript', 'Vite', 'Supabase', 'Tailwind CSS', 'PostgreSQL'],
    featured: true,
    status: 'COMPLETED · DEPLOYED',
    detailedDescription: 'Augustina\'s Website is a client-focused web application developed to provide a modern, responsive online presence while demonstrating practical full-stack development skills. The project was built using React and TypeScript, with Vite as the development and build tool, Tailwind CSS for styling, and Supabase for backend services and data integration. The project represents my experience taking a website from development through to deployment, while working across both the user interface and backend-connected functionality.',
    problem: 'The goal was to build a modern website that could present the client\'s services and information clearly, provide a responsive experience across devices, maintain a clean and professional user interface, connect the frontend to backend services, store and retrieve application data through Supabase, provide a maintainable modern React/TypeScript codebase, and be deployable as a production web application.',
    howItWorks: [
      'Frontend: The user interacts with the website through a React-based interface.',
      'Application Logic: TypeScript provides structured application logic and improves maintainability by providing static typing across the application.',
      'Backend Services: Supabase provides the backend services required by the application, including database connectivity and application data management.',
      'Styling: Tailwind CSS is used to build the interface using reusable utility-based styling.',
      'Build & Deployment: Vite provides the development environment and production build process for the React application.',
    ],
    architecture: 'User → React Application → Supabase → Database / Backend Services',
    whatIBuilt: [
      'Frontend Development: Built the website using React and TypeScript, created reusable UI components, implemented responsive layouts, developed the site\'s user-facing pages and sections, implemented styling using Tailwind CSS, structured the application for maintainability.',
      'Backend Integration: Integrated the React frontend with Supabase, connected application functionality to backend data services, implemented frontend interactions with stored application data.',
      'Development & Deployment: Configured the Vite development environment, managed the project using Git and GitHub, prepared the application for deployment, deployed the completed website.',
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      database: ['Supabase', 'PostgreSQL'],
      development: ['Git', 'GitHub', 'VS Code'],
    },
    engineeringChallenges: undefined,
    currentStatus: 'COMPLETED · DEPLOYED - The project resulted in a deployed modern website that demonstrates my ability to take a web development project from implementation through to deployment. It also represents an important part of my transition toward Full Stack Development, because the project combines frontend development with backend services and database integration.',
    limitations: undefined,
    whatILearned: ['React application development', 'TypeScript', 'Component-based architecture', 'Responsive web development', 'REST/backend integration concepts', 'Database-backed applications', 'Supabase', 'PostgreSQL', 'Modern frontend tooling', 'Git/GitHub workflows', 'Deployment'],
  },
  {
    name: 'AI-Powered Smart Appointment Booking System',
    description: 'An intelligent appointment scheduling platform designed to recommend suitable time slots using user preferences, urgency, provider availability, and scheduling constraints, with separate user, provider, and administrator workflows.',
    language: 'Python',
    url: 'https://github.com/ncayiyane/AI-Powered-Smart-Appointment-Booking-System',
    homepage: null,
    updatedAt: '2026-01-27',
    stars: 30,
    categories: ['AI/ML', 'PYTHON'],
    technologies: ['Python', 'Flask', 'React', 'SQLAlchemy', 'PostgreSQL', 'Scikit-learn', 'TensorFlow', 'JWT', 'Docker', 'GitHub Actions'],
    featured: true,
    status: 'AI / FULL-STACK PROJECT · DEVELOPMENT',
    detailedDescription: 'The AI-Powered Smart Appointment Booking System is a full-stack web application designed to improve appointment scheduling by using intelligent scheduling logic to recommend suitable appointment slots. Instead of requiring users to manually search through available times, the system is designed to evaluate factors such as user preferences, appointment urgency, provider availability, provider specialization, workload, and schedule efficiency when recommending available slots. The repository combines a Python/Flask backend with a React frontend and includes authentication, appointment management, administrative functionality, testing, containerization, and CI/CD configuration.',
    problem: 'Traditional appointment systems can create several problems: users have to manually search for suitable appointment times, provider schedules can contain inefficient gaps, double-booking can occur without appropriate scheduling controls, urgent appointments may not receive appropriate priority, and administrators can spend significant time managing bookings manually. The project addresses these problems through an intelligent scheduling approach that evaluates available slots and recommends suitable options.',
    howItWorks: [
      'AI Scheduling Logic: The scheduler considers multiple factors when evaluating available appointments, including user preferences, appointment urgency, provider availability, provider specialization, workload, schedule efficiency, and potential gaps between appointments.',
      'User Preference Analysis: The system can analyze historical booking patterns and identify preferred days, times, and service providers.',
      'Urgency Classification: Appointments can be categorized according to urgency and prioritised accordingly.',
      'Availability Optimization: The system evaluates provider availability while attempting to prevent double bookings and reduce schedule gaps.',
      'Recommendation Engine: Available slots are scored according to multiple factors and the highest-ranked options can be recommended.',
      'Load Balancing: The scheduling logic considers provider specialization and workload when allocating appointments.',
      'Recommendation Flow: Collect user preferences and appointment information → Calculate an urgency score → Retrieve available slots from relevant providers → Score available slots according to preferences, availability, specialization, schedule efficiency, and urgency → Return the highest-ranked recommendations → Use user selections as feedback for future recommendations.',
    ],
    architecture: 'React Frontend → REST API → Flask Backend → SQLAlchemy → Database → AI Scheduling Services. The repository separates backend models, routes, services, utilities, configuration, and tests from the React frontend\'s components, pages, services, store, and utilities.',
    whatIBuilt: [
      'Software Engineering: Application architecture, APIs, validation and modular code.',
      'Full-Stack Development: React frontend connected to a Flask backend.',
      'Data & Databases: SQLAlchemy, relational models and PostgreSQL.',
      'AI / Machine Learning: Recommendation and scheduling logic using Scikit-learn and TensorFlow.',
      'Security: JWT authentication and role-based access control with three primary roles (Client, Service Provider, Administrator).',
      'Testing: Backend unit testing, API integration testing, database interaction testing, and frontend component tests using Cypress.',
      'DevOps: Docker configuration for backend, frontend, and Nginx with Docker Compose orchestration, plus GitHub Actions workflows for automated testing and CI/CD.',
    ],
    techStack: {
      backend: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'SQLite', 'JWT'],
      ai: ['Scikit-learn', 'TensorFlow', 'Recommendation Algorithms'],
      frontend: ['React', 'Redux', 'Material UI', 'Axios', 'Formik', 'Yup'],
      devops: ['Docker', 'Docker Compose', 'GitHub Actions', 'Git', 'GitHub'],
    },
    engineeringChallenges: 'The project addresses the challenge of incorporating intelligent algorithms into a real operational workflow. The AI component has a clear purpose: help users find better appointment times while improving schedule utilisation. The system must balance multiple competing factors including user preferences, urgency, provider availability, specialization, workload, and schedule efficiency while preventing double-booking and reducing schedule gaps.',
    currentStatus: 'AI / FULL-STACK PROJECT · DEVELOPMENT - The repository contains a broad system architecture and detailed implementation plan covering AI scheduling, authentication, appointment management, administration, testing, Docker, and CI/CD. The project demonstrates how intelligent algorithms can be incorporated into a real operational workflow rather than using AI as an isolated feature.',
    limitations: undefined,
    whatILearned: ['Software Engineering', 'Full-Stack Development', 'Data & Databases', 'AI / Machine Learning', 'Security', 'Testing', 'DevOps', 'Application architecture', 'APIs', 'Validation', 'Modular code', 'Recommendation algorithms', 'JWT authentication', 'Role-based access control', 'Docker', 'GitHub Actions'],
  },
  {
    name: 'Catsville',
    description: 'A cross-platform shuttle application built with React Native and Expo, designed to provide users with a digital interface for accessing shuttle information, routes, and transport-related functionality.',
    language: 'TypeScript',
    url: 'https://github.com/ncayiyane/Catsville',
    homepage: 'https://catsville.vercel.app',
    updatedAt: '2026-09-21',
    stars: 0,
    categories: ['WEB', 'TYPESCRIPT', 'MOBILE'],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'Supabase', 'React Native Web', 'React Navigation', 'React 19'],
    featured: true,
    status: 'ACTIVE DEVELOPMENT',
    detailedDescription: 'Catsville is a cross-platform shuttle application developed with React Native and Expo. The project is designed to provide a digital interface for shuttle and transport information, making it easier for users to access relevant shuttle services and information from a mobile or web-based application. The application is built using a shared React Native codebase and supports web deployment through React Native Web and Expo\'s web tooling.',
    problem: 'The project focuses on creating a modern digital shuttle experience that can present shuttle-related information through a dedicated application, provide users with a mobile-friendly interface, support web access alongside mobile development, organize application functionality using a structured navigation system, connect application functionality to backend services, and provide a foundation for future shuttle and transport features.',
    howItWorks: [
      'Application Layer: The user interface is built using React Native components, allowing the application to share UI and application logic across supported platforms.',
      'Navigation: Expo Router provides file-based application routing and navigation.',
      'Backend: The project includes the Supabase JavaScript client, providing connectivity to Supabase backend services.',
      'Web: The project includes React Native Web, allowing React Native components to be rendered for the web.',
      'Development Platform: Expo provides the development and platform tooling used by the application.',
    ],
    architecture: 'React Native (Shared UI/Logic) → Expo Router (Navigation) → Supabase (Backend Services) → React Native Web (Web Deployment)',
    whatIBuilt: [
      'Application Development: Built the application using React Native, used TypeScript for application development, structured navigation using Expo Router, implemented reusable application components, worked with Expo\'s cross-platform development ecosystem.',
      'Backend Integration: Integrated the Supabase JavaScript client, structured the application to communicate with backend services, created a foundation for data-driven shuttle functionality.',
      'Cross-Platform Development: The project is designed around a shared codebase rather than maintaining completely separate applications for different platforms, providing an opportunity to develop functionality once and target both mobile and web environments.',
    ],
    techStack: {
      frontend: ['React Native', 'React 19', 'TypeScript', 'Expo 54', 'React Native Web', 'React DOM'],
      backend: ['Supabase'],
      development: ['Git', 'GitHub', 'Vite/Expo tooling', 'TypeScript'],
    },
    engineeringChallenges: undefined,
    currentStatus: 'ACTIVE DEVELOPMENT - The repository currently represents an evolving cross-platform shuttle application rather than a finished large-scale transport platform. The architecture provides a foundation for expanding the application with additional shuttle functionality, data services, route information, schedules, and other transport-related features. Live application deployed at catsville.vercel.app.',
    limitations: undefined,
    whatILearned: ['Cross-platform application development', 'React Native', 'Expo', 'TypeScript', 'Mobile application architecture', 'File-based routing', 'Backend integration', 'Supabase', 'React Native Web', 'Responsive application development', 'Shared application codebases', 'Modern JavaScript/TypeScript tooling'],
  },
  {
    name: 'Healing Hand Network',
    description: 'A community and membership platform built for a Pan-African nursing network, providing information about programmes, community involvement, professional development, and structured membership registration.',
    language: 'JavaScript',
    url: 'https://github.com/ncayiyane/Healing-Hand-Network',
    homepage: 'https://nursingconnectafrica.co.za',
    updatedAt: '2026-08-21',
    stars: 0,
    categories: ['WEB'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Supabase', 'Netlify', 'PostgreSQL', 'Netlify Functions'],
    featured: true,
    status: 'CLIENT PROJECT · DEPLOYED · WEB PLATFORM',
    detailedDescription: 'Healing Hand Network is a web platform designed around a Pan-African nursing community where nurses can connect, access professional development opportunities, participate in programmes, and become members of the network. The platform combines a public-facing website with a structured membership registration workflow and backend integration. The repository contains dedicated pages for the home experience, About, Contact, Get Involved, Programmes, and Membership functionality. The site\'s stated vision is to create a united nursing community where nurses are supported, empowered, and visible.',
    problem: 'The project was designed to create a digital presence for a nursing community while providing functionality beyond a simple informational website. The platform needed to support community information, nursing programmes and initiatives, professional development, membership options, membership registration, collection of member information, backend data integration, and a responsive user-facing experience.',
    howItWorks: [
      'Platform Structure: The application is organized around several user-facing areas including Home (introduces the organization and its purpose), About (provides information about the network and its mission), Programmes (presents programmes and initiatives), Get Involved (provides pathways for users to participate), Membership (provides membership plans and allows prospective members to begin registration), and Contact (provides a way for visitors to communicate with the organization).',
      'Membership System: The membership page provides four membership levels: Student Member (R50/month), Basic Member (R100/month), Professional Member (R200/month), and Leadership Member (R500/month), each with specific benefits.',
      'Member Registration: The registration workflow collects structured information including membership type, full name, ID number, date of birth, gender, nursing category, SANC number where applicable, and employment status.',
      'Backend Integration: The project integrates Supabase through the Supabase JavaScript client with a dedicated supabase.js integration file, while the project also contains a netlify/functions directory for server-side functionality.',
      'Architecture: Frontend → JavaScript → Netlify Functions → Supabase',
    ],
    architecture: 'Frontend (HTML/CSS/JavaScript) → Netlify Functions → Supabase (PostgreSQL)',
    whatIBuilt: [
      'Frontend Development: Designed and implemented multiple website pages, built structured navigation between sections, created membership plan interfaces, developed structured registration forms, implemented responsive website styling, added client-side JavaScript functionality.',
      'Backend Integration: Integrated Supabase into the application, connected frontend functionality with backend services, structured membership information for backend processing, used Netlify Functions for server-side functionality.',
      'Deployment: Managed the project through Git/GitHub, configured the application for Netlify, worked with serverless functions as part of the deployment architecture.',
    ],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript'],
      backend: ['Supabase', 'PostgreSQL', 'Netlify Functions'],
      development: ['Git', 'GitHub', 'Netlify'],
    },
    engineeringChallenges: 'A key part of the project was connecting the public-facing experience with a structured membership workflow. The application needs to make membership selection understandable to users while collecting the information required for the organization to process prospective members. This required thinking about both sides of the system: User Experience (what does the visitor need to see and select?) and Data Structure (what information does the organization need to collect?). That connection between frontend experience and backend data requirements is an important part of full-stack development.',
    currentStatus: 'CLIENT PROJECT · DEPLOYED · WEB PLATFORM - The result is a multi-page nursing community and membership platform with Supabase integration and Netlify deployment infrastructure. It demonstrates the ability to build a complete web solution that combines UI → Application Logic → Backend Services → Database → Deployment.',
    limitations: undefined,
    whatILearned: ['Frontend Development', 'Backend Integration', 'Database-Backed Applications', 'Forms & Data Collection', 'Serverless Functions', 'Supabase', 'Netlify', 'Responsive Web Design', 'Client-Oriented Development', 'Building Applications for Real Users'],
  },
  {
    name: 'Avengers: Doomsday Countdown',
    description: 'A cinematic countdown web application built around a live release timer, combining a dark visual design, responsive layouts, animated UI elements, and modern React-based frontend architecture.',
    language: 'JavaScript',
    url: 'https://github.com/ncayiyane/avengers-doomsday-countdown',
    homepage: 'https://avengers-doomsday-countdown-two.vercel.app',
    updatedAt: '2026-07-30',
    stars: 0,
    categories: ['WEB', 'JAVASCRIPT'],
    technologies: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'PostCSS'],
    featured: true,
    status: 'COMPLETED · DEPLOYED · FRONTEND PROJECT',
    detailedDescription: 'Avengers: Doomsday Countdown is an interactive web experience built around a real-time countdown to the release of Avengers: Doomsday. The project combines a cinematic visual direction with a functional countdown interface, demonstrating how frontend development can be used to create an experience that goes beyond a conventional informational website. The application is deployed online through Vercel.',
    problem: 'The goal was to create an engaging countdown experience rather than a basic timer. The application focuses on real-time countdown functionality, cinematic visual presentation, responsive frontend design, modern component-based architecture, animated interface elements, strong visual hierarchy, and an immersive user experience.',
    howItWorks: [
      'Application Flow: Application Loads → Countdown Target Initialised → Time Calculated → Countdown Updated → Visual Interface Rendered',
      'The countdown continuously calculates the remaining time until the target release date and presents the remaining time through the user interface.',
      'The repository is structured as a modern React/Next.js application with dedicated application, component, context, hook, and library directories.',
    ],
    architecture: 'Component-oriented structure with app/, components/, contexts/, hooks/, lib/, and public/ directories for organized application logic, reusable UI components, shared state/context, hooks, and supporting functionality.',
    whatIBuilt: [
      'Interactive UI: Built the countdown interface, created a visually focused application layout, implemented dynamic countdown behaviour, structured the interface around reusable React components.',
      'Visual Design: Created a dark cinematic visual direction, used Tailwind CSS for styling, designed visual hierarchy around the countdown, incorporated responsive layouts for different screen sizes.',
      'Application Architecture: Structured the application using Next.js, separated reusable components from application pages, used hooks and contexts where appropriate, organized supporting application logic into dedicated directories.',
    ],
    techStack: {
      frontend: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'PostCSS'],
      development: ['Git', 'GitHub', 'Vercel'],
    },
    engineeringChallenges: 'The main challenge is balancing visual presentation with functional behaviour. A countdown application needs to continuously update time while maintaining a smooth and visually consistent interface. The project therefore combines time calculations, dynamic rendering, component organization, responsive layouts, visual styling, and performance considerations.',
    currentStatus: 'COMPLETED · DEPLOYED · FRONTEND PROJECT - The result is a deployed interactive countdown experience that combines modern frontend technologies with a cinematic visual direction. The application is available through the project\'s Vercel deployment.',
    limitations: undefined,
    whatILearned: ['React Development', 'Next.js', 'Component-Based Architecture', 'Responsive Web Design', 'Tailwind CSS', 'Interactive UI', 'Dynamic Time-Based Logic', 'Frontend State & Hooks', 'Modern Web Application Structure', 'Deployment'],
  },
  {
    name: 'React E-Commerce',
    description: 'A React-based e-commerce frontend focused on building a structured online shopping experience with client-side routing, reusable UI components, responsive presentation, and interactive interface elements.',
    language: 'JavaScript',
    url: 'https://github.com/ncayiyane/react-ecommerce',
    homepage: null,
    updatedAt: '2024-11-14',
    stars: 0,
    categories: ['WEB', 'JAVASCRIPT'],
    technologies: ['React', 'React Router', 'JavaScript', 'Glide.js', 'Boxicons', 'React Testing Library'],
    featured: true,
    status: 'FRONTEND PROJECT · REACT · E-COMMERCE UI',
    detailedDescription: 'React E-Commerce is a frontend web application built with React to explore the structure and user experience of an online shopping platform. The project uses React 18 and React Router for client-side navigation, with additional frontend libraries for interactive UI elements and styling. The project demonstrates practical experience building a structured React application around an e-commerce use case.',
    problem: 'The project focuses on creating an e-commerce-style frontend experience with product-oriented user interfaces, client-side navigation, reusable React components, interactive frontend elements, responsive web presentation, and a structure that can be extended into a larger e-commerce application.',
    howItWorks: [
      'Frontend Architecture: React Application → Components → User Interface. React provides the core application framework, while React Router handles navigation between application views.',
      'Navigation: The project uses React Router DOM 6 for client-side routing, allowing the application to move between different views without relying on traditional full-page navigation.',
      'Interactive UI: The project includes Glide.js, a JavaScript slider/carousel library, providing the foundation for interactive visual elements such as product/image sliders, carousel-style content, and interactive presentation of products or categories.',
      'Icons: The project uses Boxicons for interface icons.',
    ],
    architecture: 'React Application → Components → User Interface with client-side routing through React Router DOM 6',
    whatIBuilt: [
      'React Development: Built the application using React, worked with React components, structured the application around reusable frontend functionality, used React 18.',
      'Routing: Implemented client-side navigation using React Router, structured different application views around route-based navigation.',
      'User Interface: Built an e-commerce-oriented interface, integrated interactive frontend elements, used iconography through Boxicons, incorporated slider/carousel functionality.',
    ],
    techStack: {
      frontend: ['React 18', 'JavaScript', 'React DOM', 'React Router DOM 6', 'Glide.js', 'Boxicons'],
      testing: ['React Testing Library', 'Jest DOM', 'User Event'],
      development: ['Create React App', 'Git', 'GitHub'],
    },
    engineeringChallenges: undefined,
    currentStatus: 'FRONTEND PROJECT · REACT · E-COMMERCE UI - The project demonstrates the ability to create a React-based e-commerce interface using component-based development, client-side routing, interactive UI libraries, and frontend testing tools. It represents a foundational frontend project within my broader development journey. Note: This is a frontend-focused project and does not include payment processing, user authentication, backend APIs, database integration, order processing, inventory management, or production checkout.',
    limitations: 'This repository should not be presented as a complete production e-commerce platform. The repository evidence supports a React frontend application, but does not include payment processing, user authentication, backend APIs, database integration, order processing, inventory management, or production checkout.',
    whatILearned: ['React', 'Component-Based Development', 'Client-Side Routing', 'E-Commerce UI', 'Interactive Frontend Components', 'Responsive Web Interfaces', 'Frontend Testing', 'Modern JavaScript Development'],
  },
  {
    name: 'Game Rental App',
    description: 'A console-based Java game rental system demonstrating object-oriented programming, inheritance, user roles, game management, rental workflows, and custom exception handling.',
    language: 'Java',
    url: 'https://github.com/ncayiyane/JavaApp',
    homepage: null,
    updatedAt: '2024-10-10',
    stars: 0,
    categories: ['JAVA'],
    technologies: ['Java', 'OOP', 'Inheritance', 'Exception Handling'],
    featured: true,
    status: 'COMPLETED ACADEMIC / PRACTICE PROJECT',
    detailedDescription: 'The Game Rental App is a console-based Java application designed to manage video game rentals. The application supports different types of users, game browsing, renting and returning games, and viewing a user\'s current rentals. It was built as a practical exercise in object-oriented programming and application logic.',
    problem: 'A game rental service needs to manage a collection of games, different types of users, game availability, rental and return operations, user rental records, and different privileges for different user types. The project models these requirements using Java classes and object-oriented design.',
    howItWorks: [
      'The application starts with sample games and users and presents the user with a menu-driven console interface.',
      'Users can browse games by genre, view new releases, view best games of all time, view editor\'s picks, rent a game, return a game, view rented games, and exit the application.',
      'Users can also be registered as either Regular Users or Premium Users.',
    ],
    architecture: 'Object-oriented design with User (abstract base class), RegularUser, PremiumUser, Game, GameRentalService (manages core rental and game operations), GameRentalApp (application entry point), and GameNotAvailableException (custom exception). The inheritance structure allows different user types to share common behaviour while implementing their own rental privileges.',
    whatIBuilt: [
      'Game Browsing: Games can be filtered and displayed based on different categories, including genre, new releases, best games of all time, and editor\'s picks.',
      'Game Rental: A user can select a game and attempt to rent it. The system checks whether the game is available before completing the rental.',
      'Game Returns: Users can return games that they currently have rented.',
      'User Management: The application supports registering both Regular and Premium users using a name and user ID.',
      'Exception Handling: The project includes a custom GameNotAvailableException to handle situations where a game cannot be rented. Premium users can also receive priority access when a game is already rented.',
    ],
    techStack: {
      backend: ['Java'],
      development: ['Git', 'GitHub'],
    },
    engineeringChallenges: 'The main engineering focus was translating business rules into application logic — particularly the relationships between users, games, availability, and rental operations. The inheritance structure allows different user types to share common behaviour while implementing their own rental privileges.',
    currentStatus: 'COMPLETED ACADEMIC / PRACTICE PROJECT - This project is best presented as an example of Java and object-oriented programming foundation rather than as a production rental platform.',
    limitations: 'This is a console-based academic/practice project and should not be presented as a production rental platform.',
    whatILearned: ['Object-oriented programming', 'Abstraction', 'Inheritance', 'Encapsulation', 'Classes and objects', 'Method design', 'Exception handling', 'Collections/application logic', 'Menu-driven console interactions', 'Business rules in application logic'],
  },
  {
    name: 'Marvel Movies Revenue Analysis',
    description: 'A Python data-analysis project exploring Marvel movie budgets, worldwide revenue, audience scores, critic scores, and budget recovery through data cleaning, exploratory analysis, statistical summaries, and visualizations.',
    language: 'Python',
    url: 'https://github.com/ncayiyane/PythonData',
    homepage: null,
    updatedAt: '2024-10-23',
    stars: 0,
    categories: ['PYTHON', 'DATA'],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    featured: true,
    status: 'COMPLETED DATA ANALYTICS PROJECT',
    detailedDescription: 'Marvel Movies Revenue Analysis is a Python-based data analytics project examining the financial performance and critical reception of Marvel movies. The analysis works with a dataset containing movie budgets, worldwide gross revenue, budget recovery percentages, critic scores, audience scores, and the difference between audience and critic ratings. The goal was to transform raw movie data into useful insights through data cleaning, exploratory analysis, statistical summaries, and visualization.',
    problem: 'The project investigates questions such as: Which movies generated the highest worldwide revenue? How does movie budget relate to worldwide gross? How effectively did movies recover their production budgets? How closely do audience scores align with critic scores? What differences exist between audience and critic reception?',
    howItWorks: [
      '01 — Data Loading: The dataset is loaded into a Pandas DataFrame for analysis.',
      '02 — Data Exploration: The project explores the first rows of the dataset, summary statistics, missing values, data types, and dataset structure to provide an initial understanding of the data before analysis.',
      '03 — Data Cleaning: The analysis removes duplicate rows and converts percentage-based columns into numeric values so they can be analysed correctly.',
      '04 — Exploratory Data Analysis: The project investigates relationships between different variables, particularly Budget → Worldwide Revenue to explore whether larger production budgets are associated with higher worldwide gross revenue.',
      '05 — Visualization: The project uses several visualizations including a histogram for worldwide revenue distribution, a scatter plot for budget vs. worldwide gross, and a bar plot comparing audience and critic scores.',
      '06 — Revenue Analysis: Movies are sorted according to worldwide gross revenue to identify the highest-grossing films in the dataset.',
    ],
    architecture: 'Raw Dataset → Data Exploration → Data Cleaning → Analysis → Visualization → Insights',
    whatIBuilt: [
      'Data loading and exploration using Pandas DataFrames.',
      'Data cleaning including removing duplicate records and converting percentage-based columns to numeric values.',
      'Exploratory data analysis with statistical summaries and relationship analysis between variables.',
      'Data visualization using Matplotlib and Seaborn for histograms, scatter plots, and bar plots.',
      'Revenue analysis by sorting movies according to worldwide gross revenue.',
    ],
    techStack: {
      backend: ['Python'],
      development: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Git', 'GitHub'],
    },
    engineeringChallenges: undefined,
    currentStatus: 'COMPLETED DATA ANALYTICS PROJECT - This is an exploratory data-analysis project rather than a production data platform. It represents part of the progression into data engineering and AI/ML.',
    limitations: 'This is an exploratory data-analysis project and should not be presented as a production data platform.',
    whatILearned: ['Python data manipulation', 'Pandas DataFrames', 'NumPy', 'Data cleaning', 'Handling duplicate records', 'Numeric data conversion', 'Exploratory data analysis', 'Statistical summaries', 'Data visualization', 'Interpreting relationships between variables', 'Communicating analytical findings'],
  },
  {
    name: 'Movie App',
    description: 'An early React application that marked my transition into modern frontend development, built with Create React App and used to develop my foundation in React-based application structure and client-side development.',
    language: 'JavaScript',
    url: 'https://github.com/ncayiyane/movieapp',
    homepage: 'https://favmoviesapp.netlify.app',
    updatedAt: '2024-10-10',
    stars: 0,
    categories: ['WEB', 'JAVASCRIPT'],
    technologies: ['React', 'JavaScript', 'Create React App'],
    featured: false,
    status: 'COMPLETED EARLY LEARNING PROJECT',
    detailedDescription: 'Movie App is an early React project that represents part of my transition into modern frontend development. The application was bootstrapped using Create React App and provided a practical environment for learning how to structure and develop a React application.',
    problem: 'The project was created as an early hands-on React application, giving practical experience moving beyond traditional HTML, CSS, and JavaScript development into component-based frontend development.',
    howItWorks: [
      'The repository uses React, JavaScript, Create React App, npm, and HTML/CSS through the React application structure.',
      'The project includes the standard React application structure with public and src directories and the npm scripts required to run, test, and build the application.',
      'The application can be run in development mode using npm start, with standard React testing and production build commands (npm test, npm run build).',
    ],
    architecture: 'Standard React application structure with public and src directories, bootstrapped using Create React App',
    whatIBuilt: [
      'Established understanding of React application structure.',
      'Component-based development.',
      'JavaScript frontend development.',
      'npm-based development workflows.',
      'Running React applications locally.',
      'Testing React applications.',
      'Creating production builds.',
    ],
    techStack: {
      frontend: ['React', 'JavaScript'],
      development: ['Create React App', 'npm', 'Git', 'GitHub'],
    },
    engineeringChallenges: undefined,
    currentStatus: 'COMPLETED EARLY LEARNING PROJECT - This project is best presented as an early React application rather than as a production-grade movie platform. It represents an important stage in frontend-development progression before advancing into more complex frontend and full-stack applications.',
    limitations: 'This is an early learning project and should not be presented as a production-grade movie platform.',
    whatILearned: ['React application structure', 'Component-based development', 'JavaScript frontend development', 'npm-based development workflows', 'Running React applications locally', 'Testing React applications', 'Creating production builds'],
  },
];

export const projectFilters: ('ALL' | ProjectCategory)[] = [
  'ALL',
  'AI/ML',
  'DATA',
  'WEB',
  'MOBILE',
  'PYTHON',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'C#',
  'TRANSPORT',
  'JAVA',
];

export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Databases' | 'DevOps & Tools' | 'AI & ML' | 'Data Analysis' | 'Software Engineering';
  relatedProjects: string[];
}

export const skills: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages', relatedProjects: ['AI-Powered Health Claim Verification System', 'Hair Type Classifier', 'Marvel Movies Revenue Analysis', 'SPAN Digital Coding Test', 'A/B Test Simulation'] },
  { name: 'JavaScript', category: 'Languages', relatedProjects: ['React E-Commerce', 'MovieApp (React)', 'Avengers: Doomsday Countdown', 'Healing Hand Network'] },
  { name: 'TypeScript', category: 'Languages', relatedProjects: ["Augustina's Website", 'Movie App', 'Catsville', 'AIJobSearch'] },
  { name: 'C#', category: 'Languages', relatedProjects: [] },
  { name: 'Java', category: 'Languages', relatedProjects: ['Game Rental App'] },
  { name: 'SQL', category: 'Languages', relatedProjects: [] },
  { name: 'HTML', category: 'Languages', relatedProjects: ['Healing Hand Network'] },
  { name: 'CSS', category: 'Languages', relatedProjects: ['Healing Hand Network'] },
  // Frontend
  { name: 'React', category: 'Frontend', relatedProjects: ['AI-Powered Health Claim Verification System', 'React E-Commerce', 'MovieApp (React)', 'AIJobSearch', "Augustina's Website", 'Avengers: Doomsday Countdown'] },
  { name: 'React Native', category: 'Frontend', relatedProjects: ['Movie App', 'Catsville'] },
  { name: 'React Router', category: 'Frontend', relatedProjects: ['React E-Commerce', 'Movie App'] },
  { name: 'Tailwind CSS', category: 'Frontend', relatedProjects: ["Augustina's Website", 'Avengers: Doomsday Countdown'] },
  { name: 'NativeWind', category: 'Frontend', relatedProjects: ['Movie App'] },
  { name: 'Vite', category: 'Frontend', relatedProjects: ["Augustina's Website"] },
  // Backend
  { name: 'Node.js', category: 'Backend', relatedProjects: [] },
  { name: 'FastAPI', category: 'Backend', relatedProjects: ['AI-Powered Health Claim Verification System', 'AIJobSearch'] },
  { name: 'Flask', category: 'Backend', relatedProjects: ['AI-Powered Smart Appointment Booking System'] },
  { name: 'C# / .NET', category: 'Backend', relatedProjects: [] },
  { name: 'REST APIs', category: 'Backend', relatedProjects: ['AI-Powered Health Claim Verification System', 'AIJobSearch', 'AI-Powered Smart Appointment Booking System'] },
  { name: 'SQLAlchemy', category: 'Backend', relatedProjects: ['AI-Powered Smart Appointment Booking System'] },
  { name: 'JWT Authentication', category: 'Backend', relatedProjects: ['AIJobSearch', 'AI-Powered Smart Appointment Booking System'] },
  // Databases
  { name: 'MySQL', category: 'Databases', relatedProjects: [] },
  { name: 'PostgreSQL', category: 'Databases', relatedProjects: ["Augustina's Website", 'AIJobSearch', 'Healing Hand Network', 'AI-Powered Smart Appointment Booking System'] },
  { name: 'Supabase', category: 'Databases', relatedProjects: ["Augustina's Website", 'Catsville', 'Healing Hand Network'] },
  { name: 'MongoDB', category: 'Databases', relatedProjects: [] },
  { name: 'SQLite', category: 'Databases', relatedProjects: ['AI-Powered Smart Appointment Booking System'] },
  { name: 'ChromaDB', category: 'Databases', relatedProjects: ['AI-Powered Health Claim Verification System'] },
  { name: 'Vector Databases', category: 'Databases', relatedProjects: ['AI-Powered Health Claim Verification System'] },
  // DevOps & Tools
  { name: 'Git', category: 'DevOps & Tools', relatedProjects: [] },
  { name: 'GitHub', category: 'DevOps & Tools', relatedProjects: [] },
  { name: 'GitHub Actions', category: 'DevOps & Tools', relatedProjects: ['AI-Powered Smart Appointment Booking System'] },
  { name: 'Docker', category: 'DevOps & Tools', relatedProjects: ['AI-Powered Smart Appointment Booking System'] },
  { name: 'Docker Compose', category: 'DevOps & Tools', relatedProjects: ['AI-Powered Smart Appointment Booking System'] },
  { name: 'AWS', category: 'DevOps & Tools', relatedProjects: [] },
  { name: 'Terraform', category: 'DevOps & Tools', relatedProjects: [] },
  { name: 'Vercel', category: 'DevOps & Tools', relatedProjects: ["Augustina's Website", 'Avengers: Doomsday Countdown', 'Catsville'] },
  { name: 'Netlify', category: 'DevOps & Tools', relatedProjects: ['Healing Hand Network'] },
  { name: 'VS Code', category: 'DevOps & Tools', relatedProjects: [] },
  // AI & ML
  { name: 'Machine Learning', category: 'AI & ML', relatedProjects: ['Hair Type Classifier', 'AI-Powered Health Claim Verification System', 'A/B Test Simulation'] },
  { name: 'RAG', category: 'AI & ML', relatedProjects: ['AI-Powered Health Claim Verification System'] },
  { name: 'LLMs', category: 'AI & ML', relatedProjects: ['AI-Powered Health Claim Verification System', 'AIJobSearch'] },
  { name: 'AI Agents', category: 'AI & ML', relatedProjects: ['AIJobSearch'] },
  { name: 'Generative AI', category: 'AI & ML', relatedProjects: ['AI-Powered Health Claim Verification System'] },
  { name: 'Sentence Transformers', category: 'AI & ML', relatedProjects: ['AI-Powered Health Claim Verification System', 'AIJobSearch'] },
  { name: 'Vector Embeddings', category: 'AI & ML', relatedProjects: ['AI-Powered Health Claim Verification System', 'AIJobSearch'] },
  { name: 'ChromaDB', category: 'AI & ML', relatedProjects: ['AI-Powered Health Claim Verification System'] },
  { name: 'Ollama', category: 'AI & ML', relatedProjects: ['AI-Powered Health Claim Verification System'] },
  { name: 'Hugging Face', category: 'AI & ML', relatedProjects: ['AI-Powered Health Claim Verification System', 'AIJobSearch'] },
  // Data Analysis
  { name: 'Pandas', category: 'Data Analysis', relatedProjects: ['Marvel Movies Revenue Analysis', 'A/B Test Simulation'] },
  { name: 'NumPy', category: 'Data Analysis', relatedProjects: ['Marvel Movies Revenue Analysis', 'A/B Test Simulation'] },
  { name: 'Matplotlib', category: 'Data Analysis', relatedProjects: ['Marvel Movies Revenue Analysis', 'A/B Test Simulation'] },
  { name: 'Seaborn', category: 'Data Analysis', relatedProjects: ['Marvel Movies Revenue Analysis', 'A/B Test Simulation'] },
  { name: 'SciPy', category: 'Data Analysis', relatedProjects: ['A/B Test Simulation'] },
  { name: 'Statsmodels', category: 'Data Analysis', relatedProjects: ['A/B Test Simulation'] },
  { name: 'Exploratory Data Analysis', category: 'Data Analysis', relatedProjects: ['Marvel Movies Revenue Analysis', 'A/B Test Simulation'] },
  { name: 'Statistical Analysis', category: 'Data Analysis', relatedProjects: ['A/B Test Simulation'] },
  // Software Engineering
  { name: 'Object-Oriented Programming', category: 'Software Engineering', relatedProjects: ['Game Rental App'] },
  { name: 'Data Structures & Algorithms', category: 'Software Engineering', relatedProjects: ['SPAN Digital Coding Test'] },
  { name: 'API Development', category: 'Software Engineering', relatedProjects: ['AI-Powered Health Claim Verification System', 'AIJobSearch', 'AI-Powered Smart Appointment Booking System'] },
  { name: 'Database Design', category: 'Software Engineering', relatedProjects: ['AI-Powered Smart Appointment Booking System'] },
  { name: 'Authentication & Authorization', category: 'Software Engineering', relatedProjects: ['AIJobSearch', 'AI-Powered Smart Appointment Booking System'] },
  { name: 'Testing', category: 'Software Engineering', relatedProjects: ['SPAN Digital Coding Test', 'AI-Powered Smart Appointment Booking System'] },
  { name: 'CI/CD', category: 'Software Engineering', relatedProjects: ['AI-Powered Smart Appointment Booking System'] },
  { name: 'Agile Development', category: 'Software Engineering', relatedProjects: [] },
];

export const skillCategories: Skill['category'][] = [
  'Languages',
  'Frontend',
  'Backend',
  'Databases',
  'DevOps & Tools',
  'AI & ML',
  'Data Analysis',
  'Software Engineering',
];

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
}

export const navLinks: NavLink[] = [
  { label: 'HOME', href: 'home' },
  { label: 'ABOUT', href: 'about' },
  { label: 'EXPERIENCE', href: 'experience' },
  { label: 'PROJECTS', href: 'projects' },
  { label: 'SKILLS', href: 'skills' },
  { label: 'GITHUB', href: 'https://github.com/ncayiyane', external: true },
  { label: 'CONTACT', href: 'contact' },
  { label: 'CV', href: '/cv/Aphiwe Andrew Ncayiyane - Latest CV.pdf', download: true },
];
