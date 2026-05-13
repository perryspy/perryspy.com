const content = {

  // ── Identity ───────────────────────────────────────────────────────────────
  name: {
    first: 'Perry',
    last: 'Spyropoulos',
    lastNameBreak: 0, // Ex: If 3, "Spy" italic amber, "ropoulos" plain
  },
  title:     'Technical Lead · Senior Software Engineer',
  status:    'Open to opportunities',
  location:  'Bethlehem, PA',
  email:     'perry.spy@gmail.com',
  phone:     '843.901.1168',
  linkedin:  'perryspy',
  resumePDF: 'Perry_Spyropoulos_Resume.pdf',

  // ── Bio ────────────────────────────────────────────────────────────────────
  bio: `Full-stack engineer with <strong>15 years</strong> of experience building production systems for federal and commercial clients — VA, FDA, NIH — at <strong>Booz Allen Hamilton</strong>. <strong>Active Secret clearance.</strong> Deep expertise in React ecosystems, GraphQL, OpenSearch, and agentic AI development.`,

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
            'Led a three-engineer team replacing a legacy VA claims processing system — cutting routing bottlenecks and giving VA staff real-time visibility into veteran service requests across the country.',
            'Architected and built a React micro-frontend using single-spa, Redux, and Apollo Client, enabling independent deployability and faster iteration across a large-scale federal codebase.',
            'Built a GraphQL API over OpenSearch that replaced slow, ad-hoc queries with flexible real-time data access — reducing the time claims processors spend finding and acting on work queue information.',
            'Drove team-wide adoption of GitHub Copilot, measurably accelerating feature delivery and reducing time spent on repetitive implementation tasks.',
            'Career Manager for four direct reports: setting development goals, running performance reviews, and helping each person grow toward their next role.',
          ],
          stack: ['React', 'single-spa', 'Redux', 'Apollo Client', 'GraphQL', 'OpenSearch', 'Apache Kafka', 'Node.js', 'GitHub Copilot'],
        },
        {
          label: 'Opioids Data Warehouse | FDA (2019–2021)',
          bullets: [
            'Led UI development for a custom FDA research platform that consolidated disparate opioid datasets into a single queryable interface — replacing manual data wrangling across siloed systems and giving researchers the ability to run complex cross-source analyses for the first time.',
          ],
          stack: ['React', 'Java Spring', 'Microservices', 'PostgreSQL', 'Elasticsearch'],
        },
        {
          label: 'Dark Labs | Red/Blue Team Intelligence Hub (2018–2019)',
          bullets: [
            'Built a React intelligence hub for Red and Blue cybersecurity teams, centralizing threat information and eliminating the coordination overhead that comes with fragmented tooling during active engagements.',
          ],
          stack: ['React', 'Redux', 'Thunk', 'Axios', 'ES6+'],
        },
        {
          label: 'NIH Insights | Patient Survey & Video Submission App (2017–2018)',
          bullets: [
            'Built a Swift iOS app that let patients submit surveys and video responses directly to NIH researchers — replacing a fragmented manual intake process and giving researchers structured, analyzable data they could act on immediately.',
          ],
          stack: ['Swift', 'PromiseKit', 'Alamofire', 'AVFoundation'],
        },
        {
          label: 'SecureGive | Multi-Platform Donation Platform (2016–2018)',
          bullets: [
            'Promoted to Tech Lead mid-2018. Delivered a secure donation platform for churches and nonprofits across web, iOS, Android, and kiosk — shipping a RESTful API, Admin CMS, customer webapp, Windows kiosk, iPad kiosk, Android app, and iPhone app on a single shared backend.',
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
        'Shipped frontend features across five commercial products — PinScout, BATO Dashboard, Strongforce Dashboard, Evervest, and MobilePBX — moving quickly across different codebases and product contexts.',
      ],
      stack: ['Angular 1.5 & 2', 'Ruby on Rails', 'SailsJS', 'GoJS', 'ES6', 'SASS / LESS'],
    },
    {
      dates:    'Jun 2011 – Mar 2016',
      title:    'Software Developer',
      company:  'SPARC LLC',
      location: 'Charleston, SC',
      bullets: [
        'Full-stack engineer on VA NWQ (National Work Queue), the direct predecessor to the VA work queue system I now lead at Booz Allen — giving me end-to-end perspective on the problem that few engineers in this space have.',
        'Built VA VBMS Core 2, a veteran benefits management platform used by VA staff to process claims, alongside commercial products including STEM Premier and SuitedTo/Prepado.',
        'Owned UX design end to end: user research, workflow design, wireframing, and prototyping.',
      ],
      stack: ['Java Spring MVC', 'Oracle DB', 'AngularJS', 'jQuery', 'Java Play', 'MongoDB', 'Node.js', 'Bootstrap'],
    },
    {
      dates:    'May 2010 – Aug 2010',
      title:    'Trader / Modeler Intern',
      company:  'ATD',
      location: 'Charleston, SC',
      bullets: [
        'Built a Perl-based stock similarity tool with configurable metric weighting to surface trading candidates, supporting a high-throughput automated trading operation.',
      ],
      stack: ['Perl', 'Quantitative Analysis'],
    },
    {
      dates:    '2009 – 2010',
      title:    'Teaching Assistant & Research Intern',
      company:  'College of Charleston / MUSC',
      location: 'Charleston, SC',
      bullets: [
        'TA for introductory programming (Python, Java) over three semesters — led labs, graded work, and tutored students one-on-one.',
        'Bioinformatics intern at MUSC: analyzed gene regulation in hematopoietic stem cells via genechip microarray data, building statistical models in R to surface meaningful patterns.',
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
