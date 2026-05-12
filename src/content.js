const content = {

  // ── Identity ───────────────────────────────────────────────────────────────
  name: {
    first: 'Perry',
    last: 'Spyropoulos',
    lastNameBreak: 3, // "Spy" italic amber, "ropoulos" plain
  },
  title:     'Technical Lead · Senior Software Engineer',
  status:    'Open to opportunities',
  location:  'Bethlehem, PA',
  email:     'perry.spy@gmail.com',
  phone:     '843.901.1168',
  linkedin:  'YOUR-LINKEDIN-HANDLE',
  resumePDF: 'Perry_Spyropoulos_Resume.pdf',

  // ── Bio ────────────────────────────────────────────────────────────────────
  bio: `Full-stack engineer with <strong>15+ years</strong> delivering production systems for federal and commercial clients — VA, FDA, NIH — at <strong>Booz Allen Hamilton</strong>. <strong>Active Secret clearance.</strong> Deep expertise in React ecosystems, GraphQL, OpenSearch, and agentic AI development.`,

  // ── Sidebar stack tags ─────────────────────────────────────────────────────
  stack: [
    { label: 'React',          hi: true  },
    { label: 'GraphQL',        hi: true  },
    { label: 'OpenSearch',     hi: true  },
    { label: 'TypeScript',     hi: false },
    { label: 'Node.js',        hi: false },
    { label: 'Apache Kafka',   hi: false },
    { label: 'single-spa',     hi: false },
    { label: 'Redux',          hi: false },
    { label: 'Apollo',         hi: false },
    { label: 'PostgreSQL',     hi: false },
    { label: 'AWS',            hi: false },
    { label: 'GitHub Copilot', hi: false },
    { label: 'Claude AI',      hi: false },
    { label: 'Python',         hi: false },
    { label: 'Java Spring',    hi: false },
    { label: 'Swift',          hi: false },
    { label: 'Docker',         hi: false },
    { label: 'Kubernetes',     hi: false },
    { label: '508/ADA',        hi: false },
    { label: 'SAFe',           hi: false },
  ],

  // ── Experience ─────────────────────────────────────────────────────────────
  experience: [
    {
      dates:    'Nov 2016 – Present',
      title:    'Lead Associate',
      company:  'Booz Allen Hamilton',
      location: 'Bethlehem, PA',
      roles: [
        {
          label: 'VA Work Queue Modernization (2021–Present)',
          bullets: [
            'Technical lead for a large-scale VA initiative to replace legacy claims processing systems and streamline how VA staff manage and route veteran service requests, directly overseeing three developers across architecture, code review, sprint planning, and production deployments.',
            'Designed and built a React micro-frontend from the ground up using single-spa architecture, Redux, Apollo Client, and the VA\'s Benefits Integration Platform (BIP) UI component library.',
            'Designed and built a GraphQL interface API backed by OpenSearch, enabling complex query execution against large-scale VA work queue data — improving routing efficiency and claims processing visibility for VA staff nationwide.',
            'Championed team-wide adoption of agentic AI-assisted development, integrating GitHub Copilot to measurably improve developer velocity and code quality.',
            'Career Manager for four direct reports: conducting performance reviews, setting development goals, and guiding long-term growth.',
          ],
          stack: ['React', 'single-spa', 'Redux', 'Apollo Client', 'GraphQL', 'OpenSearch', 'Apache Kafka', 'Node.js', 'GitHub Copilot'],
        },
        {
          label: 'Opioids Data Warehouse | FDA (2019–2021)',
          bullets: [
            'UI Team Lead working with data scientists and engineers to build a custom data warehouse web app for FDA opioid research. Designed UI features for complex cross-source queries, result visualization, and long-running multi-day analyses.',
          ],
          stack: ['React', 'Java Spring', 'Microservices', 'PostgreSQL', 'Elasticsearch'],
        },
        {
          label: 'Dark Labs | Red/Blue Team Intelligence Hub (2018–2019)',
          bullets: [
            'Frontend engineer building a React webapp serving as a centralized information and collaboration hub between Red and Blue cybersecurity teams.',
          ],
          stack: ['React', 'Redux', 'Thunk', 'Axios', 'ES6+'],
        },
        {
          label: 'NIH Insights | Patient Survey & Video Submission App (2017–2018)',
          bullets: [
            'Swift iOS developer for an iPhone app enabling patients to complete surveys and upload videos to NIH for health outcome analysis.',
          ],
          stack: ['Swift', 'PromiseKit', 'Alamofire', 'AVFoundation'],
        },
        {
          label: 'SecureGive | Multi-Platform Donation Platform (2016–2018)',
          bullets: [
            'Started as full-stack developer, promoted to Tech Lead mid-2018. Built a secure donation platform for churches and nonprofits across web, iOS, Android, and kiosk — delivering RESTful API, Admin CMS, customer donation webapp, Windows kiosk, iPad kiosk, Android app, and iPhone app.',
          ],
          stack: ['React', 'Redux', 'React Native', 'Scala / Akka HTTP', 'Postgres', 'AWS (EC2/RDS/S3)', 'Swift', 'CircleCI'],
        },
      ],
    },
    {
      dates:    'Mar 2016 – Nov 2016',
      title:    'Frontend Developer',
      company:  'Qonceptual LLC',
      location: 'Charleston, SC',
      bullets: [
        'Frontend engineer on multiple commercial products: PinScout, BATO Dashboard, Strongforce Dashboard, Evervest, and MobilePBX.',
      ],
      stack: ['Angular 1.5 & 2', 'Ruby on Rails', 'SailsJS', 'GoJS', 'ES6', 'SASS / LESS'],
    },
    {
      dates:    'Jun 2011 – Mar 2016',
      title:    'Software Developer',
      company:  'SPARC LLC',
      location: 'Charleston, SC',
      bullets: [
        'Full-stack engineer on VA NWQ (National Work Queue), an early VA claims routing and workload management system — the original chapter of the same VA mission carried forward to the present day at Booz Allen.',
        'Full-stack engineer on VA VBMS Core 2, a benefits management system, and commercial projects including STEM Premier and SuitedTo/Prepado.',
        'Led UX design and client interaction: user workflow design, wireframing, and prototyping.',
      ],
      stack: ['Java Spring MVC', 'Oracle DB', 'AngularJS', 'jQuery', 'Java Play', 'MongoDB', 'Node.js', 'Bootstrap'],
    },
    {
      dates:    'May 2010 – Aug 2010',
      title:    'Trader / Modeler Intern',
      company:  'ATD',
      location: 'Charleston, SC',
      bullets: [
        'Analyzed emerging trends for high-throughput automated trading; built a Perl-based stock similarity tool using adjustable metric weighting.',
      ],
      stack: ['Perl', 'Quantitative Analysis'],
    },
    {
      dates:    '2009 – 2010',
      title:    'Teaching Assistant & Research Intern',
      company:  'College of Charleston / MUSC',
      location: 'Charleston, SC',
      bullets: [
        'TA for introductory programming (Python, Java) over three semesters; led lab sessions, graded assignments, and tutored students.',
        'Bioinformatics intern at MUSC studying gene regulation in hematopoietic stem cells via genechip microarray analysis. Data mining and statistical calculations using R.',
      ],
      stack: ['Python', 'Java', 'R', 'Bioinformatics'],
    },
  ],

  // ── Education ──────────────────────────────────────────────────────────────
  education: [
    {
      dates:    'Aug 2008 – May 2011',
      degree:   'B.S. in Computer Science',
      school:   'College of Charleston',
      location: 'Charleston, SC',
      honors:   'Magna Cum Laude',
      notes: [
        'Coursera / Stanford — Machine Learning (Nov 2013)',
        'Coursera / Stanford — Game Theory (Mar 2013)',
      ],
    },
  ],

  // ── Skills ─────────────────────────────────────────────────────────────────
  skills: [
    {
      category: 'Frontend',
      items: ['React', 'single-spa', 'Redux', 'Apollo Client', 'React Native', 'AngularJS', 'Angular 2', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3 / LESS / SASS'],
    },
    {
      category: 'Backend & APIs',
      items: ['GraphQL', 'REST APIs', 'Node.js', 'Java Spring MVC', 'Java Play', 'Scala / Akka HTTP', 'Python', 'R'],
    },
    {
      category: 'Data & Infrastructure',
      items: ['OpenSearch', 'Elasticsearch', 'Apache Kafka', 'PostgreSQL', 'Oracle DB', 'MongoDB', 'AWS (EC2/RDS/S3/Lambda)', 'Microservices', 'Docker', 'Kubernetes'],
    },
    {
      category: 'AI & Tooling',
      items: ['GitHub Copilot', 'Agentic AI Development', 'Claude Code', 'Machine Learning', 'Git', 'JIRA', 'CircleCI'],
    },
    {
      category: 'Mobile',
      items: ['Swift / iOS', 'React Native', 'AVFoundation', 'Alamofire'],
    },
    {
      category: 'Leadership & Process',
      items: ['Technical Leadership', 'People Management', 'Agile / SAFe / SDLC', '508 / ADA', 'Mentorship', 'UX / UI Design'],
    },
  ],

  // ── Clearance ──────────────────────────────────────────────────────────────
  clearance: 'Active Secret Clearance',

};

export default content;
