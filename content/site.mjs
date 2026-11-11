// ─────────────────────────────────────────────────────────────────────────────
// ALL PORTFOLIO CONTENT LIVES HERE.
// Edit this file, then run `npm run build`. No other file needs to change for
// new projects, roles, skills or achievements.
//
// Source key used in comments:
//   [site:<page>]  https://sites.google.com/view/rafsanul-rusaf/<page>
//   [cv]           Resume PDF (public/assets/docs/rafsanul-haque-rusaf-resume.pdf)
//   [doc]          Cover page of the linked Google Drive document
// ─────────────────────────────────────────────────────────────────────────────

const drive = (id) => `https://drive.google.com/file/d/${id}/view`;

export const site = {
  // Set this to the final domain before deploying (used for canonical, OG, sitemap).
  url: 'https://rrusaf.github.io',
  base: '/Rusaf.github.io/', // repo is a project site under rrusaf.github.io
  lang: 'en',
  name: 'Rafsanul Haque Rusaf',
  shortName: 'Rusaf',
  title: 'Rafsanul Haque Rusaf: business, data and information systems',
  description:
    'Portfolio of Rafsanul Haque Rusaf, a BBA student at North South University working at the intersection of business strategy, data analytics and information systems.',
  location: 'Dhaka, Bangladesh', // [cv] Bashundhara R/A, Dhaka
  timezone: 'Asia/Dhaka',
  email: 'rrusaf04@gmail.com', // [site:home] [cv]
  socials: [
    // [site:home] link. NOTE: the resume uses /in/rafsanulhaque-rusaf; confirm which is live.
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rafsanul-haque-rusaf' },
  ],
  resume: {
    file: '/assets/docs/rafsanul-haque-rusaf-resume.pdf',
    drive: drive('1CyPM7LFr2Jlq-7hxGmw5YPKnYvxiw8YA'), // [site:resume]
    updated: '2026',
    // One image per PDF page so the preview works on phones (most mobile browsers can't embed PDFs).
    // Regenerate them whenever the PDF changes (see README → Replace the resume).
    previews: [
      { src: '/assets/img/resume-page.webp', w: 1024, h: 1449, alt: 'Resume of Rafsanul Haque Rusaf, page 1: contact, skills, education and achievements' },
      { src: '/assets/img/resume-page-2.webp', w: 1024, h: 1449, alt: 'Resume of Rafsanul Haque Rusaf, page 2: extracurricular roles and projects' },
    ],
  },
};

// ── Hero & about ────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: 'BBA student · North South University',
  // Display headline; each array item is one line.
  headline: ['Create Strategy', 'backed by data.'],
  intro:
    'I study business at North South University and aspire to lead at the intersection of business, technology, and innovation, turning data into decisions and ideas into impact.',
  photo: { src: '/assets/img/portrait-hero.webp', small: ['/assets/img/portrait-hero-720.webp', 720], w: 1400, h: 1868, alt: 'Rafsanul Haque Rusaf in a black suit, walking through a covered walkway' },
};

export const about = {
  // Rendered with a scroll-driven word highlight. Wrap emphasised words in *asterisks*.
  statement:
    "I'm a BBA student at *North* *South* *University*, asking business questions, crunching *big* *data*, experimenting with fancy *SaaS* *&* *Coding* tools, and occasionally let a pocket calculator do its job.",
  // [site:home] career objective, lightly edited for flow; meaning unchanged.
  objective:
    'I aspire to become a business and technology leader who drives innovation, uses data-driven decision-making, and bridges emerging technologies and strategic business solutions to create sustainable growth.',
  paragraphs: [
    'I learn by building. Each project on this site starts from a concrete problem, works through a recognised framework or tool, and ends with findings or a recommendation I can defend.',
  ],
  portrait: { src: '/assets/img/portrait-formal.webp', small: ['/assets/img/portrait-formal-520.webp', 520], w: 900, h: 1304, alt: 'Rafsanul Haque Rusaf in a suit and volunteer sash, standing outdoors' },
  interests: ['Photography', 'Travelling', 'Technology', 'Socialising'], // [site:about]
  gallery: [
    { src: '/assets/img/life-sunset.webp', w: 1100, h: 825, alt: 'Orange and violet clouds at sunset over a city skyline' },
    { src: '/assets/img/life-trophy.webp', w: 900, h: 1200, alt: 'Rusaf holding a trophy and wearing a medal on campus' },
    { src: '/assets/img/life-coast.webp', w: 900, h: 1200, alt: 'Rusaf sitting on coastal rocks by the sea' },
    { src: '/assets/img/life-group.webp', w: 1100, h: 825, alt: 'A large group of students posing together at an event' },
    { src: '/assets/img/life-river.webp', w: 1100, h: 825, alt: 'Hazy morning light over a river with boats' },
    { src: '/assets/img/life-sashes.webp', w: 1100, h: 1081, alt: 'Students in formal wear and sashes standing outside a building' },
    { src: '/assets/img/life-trees.webp', w: 900, h: 1200, alt: 'A road under a large tree canopy at golden hour' },
    { src: '/assets/img/life-school.webp', w: 1100, h: 825, alt: 'A group of school children and volunteers outside a school building' },
  ],
};

// ── Education ──────────────────────────────────────────────────────────────
export const education = [
  {
    school: 'North South University',
    logo: '/assets/img/logo-nsu.webp',
    credential: 'Bachelor of Business Administration (BBA)',
    detail: '6th semester · School of Business and Economics', // [site:education] [cv]
    dates: 'Jan 2025 – Present', // [cv]
    // [site:education] Coursework by subject
    coursework: [
      { subject: 'Management Information Systems', topics: 'Application software (end-user applications), functional business systems, telecommunications and networks, security, ethical and societal challenges in IS, building information systems, Excel (basic to advanced), selling online to consumers and businesses, virtual communities, web hosting and e-business software, online payment systems, implementing e-business initiatives.' },
      { subject: 'Statistics', topics: 'Organising and graphing data, numerical descriptive measures, probability, discrete random variables, the normal and other continuous distributions, sampling distributions, confidence interval estimation, fundamentals of hypothesis testing.' },
      { subject: 'Financial Accounting', topics: 'Accounting fundamentals, financial statements, cost and management accounting, budgeting, cash flow, bad debts, ratio analysis, basic auditing.' },
      { subject: 'Managerial Accounting', topics: 'Cost classification and behaviour, job-order and process costing, CVP analysis, activity-based costing, variable and absorption costing, master budgeting, variance analysis, differential analysis for decision-making.' },
      { subject: 'Business Management', topics: 'Management principles, planning and strategy, organisational behaviour, leadership, operations management, HRM, marketing, business ethics, MIS, data-driven decision-making.' },
      { subject: 'Marketing', topics: 'Marketing environment, consumer buyer behaviour, consumer-driven strategy, new product development, channels, integrated marketing communication, advertising and PR, sales promotion, direct, online, social and mobile marketing, sustainable marketing.' },
      { subject: 'Microeconomics', topics: 'Scarcity and opportunity cost, demand, supply and equilibrium, market efficiency, market structures, elasticity, government intervention, deadweight loss, game theory.' },
      { subject: 'Macroeconomics', topics: 'GDP and real GDP, inflation and unemployment, aggregate demand and supply, classical and Keynesian economics, fiscal policy, money and banking, central banking, monetary policy, economic growth.' },
      { subject: 'Business Mathematics', topics: "Algebraic and quadratic equations, set theory, permutations and combinations, logarithms, Cartesian coordinates, matrices, trigonometry, geometry, Cramer's rule, financial mathematics." },
      { subject: 'Communicative English', topics: 'Summary writing, claims and argument analysis, data analysis, research processes and workflows, references and in-text citations, incorporating sources, research paper presentations.' },
      { subject: 'International Business', topics: 'Globalisation, political economy, cross-cultural differences, trade theory and policy, regional integration, IB strategy, market entry, strategic alliances, FDI.' },
      { subject: 'Business Law', topics: 'Commercial law, contract formation and breach, agency, ADR, sale of goods, negotiable instruments, company and partnership law, corporate governance, Bangladesh Labour Law.' },
    ],
  },
  {
    school: 'Green Gems School',
    logo: '/assets/img/logo-greengems.webp',
    credential: 'A Level',
    detail: 'Accounting · Business Studies',
    dates: '2023',
  },
  {
    school: 'Willes Little Flower School',
    logo: '/assets/img/logo-wlfs.webp',
    credential: 'O Level',
    detail: 'Accounting · Business · Bangla · English · Mathematics',
    dates: '2021',
  },
];

// ── Leadership & extracurricular ───────────────────────────────────────────
// [site:extra-curricular] is the source of truth for roles; dates as published there.
// NOTE: the resume words some roles differently (see docs/RESEARCH.md → Inconsistencies).
export const leadership = [
  {
    org: 'NSU HR Club',
    logo: '/assets/img/logo-hrclub.webp',
    role: 'General Member, Marketing & Sponsorship: PR',
    dates: '2026 – Present',
    kind: 'University club',
    points: [
      'Coordinated cross-functional marketing initiatives with the event, HR and corporate departments.',
      'Identified, approached, and secured sponsors to fund HR Club events, building external partnerships and supporting event operations.',
      'Supported stakeholder engagement, partnership development and external relations.',
      'Represented the club’s brand in PR across university and external platforms.',
    ],
  },
  {
    org: 'United Nations Millennium Fellowship',
    sub: 'United Nations Academic Impact × Millennium Campus Network',
    logo: '/assets/img/logo-un.webp',
    role: 'Millennium Fellow, Campus Ambassador',
    dates: 'Class of 2026',
    kind: 'Fellowship · SDGs',
    points: [
      'Represented the fellowship on campus as liaison between the programme and the university community.',
      'Developed a plan of action for fellowship sessions, exchanging best practices and refining project goals.',
      'Led “Literacy Bridge”, a time-bound project focused on two Sustainable Development Goals and one UNAI principle.',
      'Gave and received peer feedback to help fellows overcome obstacles in their individual projects.',
    ],
  },
  {
    org: 'Nishonkoch Foundation',
    logo: '/assets/img/logo-nishonkoch.webp',
    role: 'Campus Ambassador',
    dates: '2026 – 2027',
    kind: 'NGO · Social impact',
    points: [
      'Primary liaison between the NGO and the university community.',
      'Coordinated event management and built a student community to support planning and execution.',
      'Promoted fundraising campaigns and community outreach projects.',
      'Led student engagement and awareness initiatives for social impact programmes.',
    ],
  },
  {
    org: 'NSU Ethics & Diversity Club',
    logo: '/assets/img/logo-ethics.webp',
    role: 'Senior Member, Administration: Logistics & Sponsorship',
    dates: '2025 – 2026',
    kind: 'University club',
    points: [
      'Sponsor outreach, partnership development and stakeholder engagement.',
      'Inter-departmental collaboration on participant management and monitoring.',
      'Administrative and cross-functional coordination for campus events and seminars.',
      'Served as a student representative and usher for the NSU orientation programme.',
    ],
  },
  {
    org: 'NSU Marketing & IB Club',
    logo: '/assets/img/logo-mib.webp',
    role: 'General Member, Sponsorship: Multimedia & Logistics',
    dates: '2025 – 2026',
    kind: 'University club',
    points: [
      'Handled event logistics: setup, coordination and on-site operations.',
      'Developed and documented content while supporting promotional activities.',
      'Managed sponsor funding and crowdfunding for programme implementation.',
      'Coordinated production of danglers, banners and promotional materials.',
    ],
  },
  {
    org: 'WLFSC Scout Group',
    logo: '/assets/img/logo-scout.webp',
    role: 'Treasurer, Wolf Cub',
    dates: '2016 – 2018',
    kind: 'Scouting',
    points: [
      'Managed group funds, budgeting and expense tracking.',
      'Ran logistics and setup for the yearly group camp.',
      'Led and trained junior members in scout activities.',
    ],
  },
];

// ── Achievements & certifications ([cv] "Training, Certifications & Achievements")
export const achievements = [
  { title: 'Semi-Finalist', org: 'Ad Maker Bangladesh 2026, inter-university marketing competition', type: 'Competition', note: 'Resume lists this as “Admaker Business Case Competition”.' },
  { title: 'Runner-Up, Content Creation', org: 'NSUEDC Championship 3.0', type: 'Competition' },
  { title: 'Runner-Up, Football', org: 'NSUEDC Championship 3.0', type: 'Sport' },
  { title: 'Automate Smarter: AI Workflows in Action', org: 'Ostad, onboard training certification', type: 'Certification' },
  { title: '16 Scout proficiency badges', org: 'WLFSC Scout Group', type: 'Scouting' },
  { title: 'Certificate of Appreciation, Group Scout Camp', org: 'WLFSC Scout Group', type: 'Scouting' },
];

// ── Testimonials ([site:home]; quoted verbatim) ─────────────────────────────
export const testimonials = [
  {
    name: 'Raguib Raihan',
    cred: 'MSc, Lancaster University, UK', // source reads "Middle Lancaster University", flagged as likely typo
    context: 'Taught two MIS courses',
    pull: 'He possesses the ability to generate unique ideas and approach problems from perspectives that distinguish him from his peers.',
    full: 'I have had the pleasure of teaching Rafsanul Haque Rusaf in two Management Information Systems courses, where he has consistently impressed me with his creativity, analytical thinking, and eagerness to learn. He possesses the ability to generate unique ideas and approach problems from perspectives that distinguish him from his peers. Throughout each course, he demonstrated strong academic commitment, intellectual curiosity, and a willingness to go beyond expectations. Rusaf is an excellent learner who quickly grasps new concepts and effectively applies them in practical situations. His consistency, originality, and problem-solving mindset make him a promising individual with significant potential for future academic and professional success. I confidently recommend him for any opportunity that values innovation, critical thinking, and dedication.',
    color: 'sky',
  },
  {
    name: 'Dr. Nadra Islam',
    cred: 'PhD, University of Kansas, USA',
    context: 'Course instructor',
    pull: 'He is able to engage his audience and convey his ideas fluently and persuasively.',
    full: 'Rafsanul is a punctual and diligent student who is mindful of deadlines. He comes to class well prepared and is ready to ask questions if a point is unclear. He has shown strict commitment to his studies not missing a single day of class during the semester. He completed a short research paper following the basics of doing research and was ready to incorporate comments given as feedback. Rafsanul likes to explore topics that are of current interest and to pursue a subject clearly and persuasively. He has good presentation skills. He is able to engage his audience and convey his ideas fluently and persuasively. I wish him every success in his future academic and professional endeavours.',
    color: 'lilac',
  },
  {
    name: 'Dr. Md Pervejur Rahaman',
    cred: 'PhD, Middle Tennessee State University, USA',
    context: 'Taught two courses',
    pull: 'Rafsanul is a sincere, dependable, and hardworking student who consistently approaches learning with enthusiasm and professionalism.',
    full: 'Rafsanul Haque Rusaf has been a student in two of my courses. Throughout this time, I have had the opportunity to witness his remarkable growth, both academically and personally. Rafsanul is a sincere, dependable, and hardworking student who consistently approaches learning with enthusiasm and professionalism. He actively participates in class discussions, completes his responsibilities diligently, and demonstrates a respectful and cooperative attitude toward both peers and instructors. Although he initially needed time to adjust to the pace of the courses, he adapted quickly and showed remarkable improvement within a short period. His dedication, perseverance, and positive mindset make him a promising individual, and I am confident he will continue to excel in his future academic and professional endeavors.',
    color: 'amber',
  },
  {
    name: 'Md Zahidul Islam Miaji',
    cred: 'M.A., EMGS, Ghent University, Belgium & Wroclaw University, Poland',
    context: 'Taught a political science course',
    pull: 'He approached complex political issues with intellectual curiosity, contributed meaningfully to class discussions.',
    full: 'I had the pleasure of teaching Rusaf in one of my political course. Throughout the semester, he consistently distinguished himself as an engaged student, a thoughtful discussant, and a critical thinker. He approached complex political issues with intellectual curiosity, contributed meaningfully to class discussions, and demonstrated the ability to analyze different perspectives with maturity and sound reasoning. I am confident that his analytical mindset, communication skills, and eagerness to learn will serve him well in both his academic and professional endeavors. I wish him every success in the future.',
    color: 'mint',
  },
];

// ── Skills ─────────────────────────────────────────────────────────────────
// `tags` link a group to projects that use it (matched against project.tools).
// No proficiency percentages: none have been formally assessed.
export const skills = [
  { group: 'Business intelligence', items: ['Power BI', 'Power Query', 'DAX measures', 'Data modelling', 'Interactive dashboards', 'Microsoft Fabric'], tags: ['Power BI'] }, // [site:skill-sets] [cv]
  { group: 'Spreadsheets & modelling', items: ['Excel', 'XLOOKUP / VLOOKUP / HLOOKUP', 'INDEX functions', 'Pivot tables & charts', 'Data validation & cleaning', 'Financial modelling'], tags: ['Excel'] },
  { group: 'Programming & data', items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib / Seaborn', 'KNIME workflows', 'Exploratory data analysis'], tags: ['Python', 'KNIME', 'SQL'] },
  { group: 'Research & analysis', items: ['Survey design', 'Semi-structured interviews', 'Hypothesis testing', 'Literature review', 'Secondary data analysis'], tags: ['Survey research', 'Hypothesis testing', 'Interviews'] },
  { group: 'Strategy frameworks', items: ['PESTEL', 'SWOT', 'BCG matrix', "Porter's Five Forces", 'STP & 4Ps', 'Customer journey & funnel design'], tags: ['PESTEL', 'SWOT', 'STP & 4Ps', 'Funnel design'] },
  { group: 'Information systems & e-business', items: ['Process mapping', 'Low-fidelity wireframing', 'WordPress & WooCommerce', 'XAMPP (local hosting)', 'AI chatbot integration'], tags: ['WooCommerce', 'Wireframing', 'Process mapping'] },
  { group: 'AI, creative & productivity', items: ['Prompt engineering', 'LLM Studio', 'Adobe Illustrator', 'Filmora', 'PowerPoint (Slide Master, Morph)', 'Word (mail merge, track changes)', 'Outlook automation'], tags: ['Prompt engineering'] },
  { group: 'Leadership & communication', items: ['Sponsorship outreach', 'Event logistics', 'Public relations', 'Stakeholder engagement', 'Fund management', 'Presenting'], tags: [] },
];

// ── Projects ───────────────────────────────────────────────────────────────
// category: research | prototype | case | analytics   (drives filters & colours)
// context: how the work came about. Only stated where the source documents show it.
// Never add outcomes that are not in the source material.
export const categories = {
  research: { label: 'Research', color: 'lilac' },
  prototype: { label: 'Prototype', color: 'mint' },
  case: { label: 'Business case', color: 'amber' },
  analytics: { label: 'Analytics', color: 'sky' },
};

export const projects = [
  {
    slug: 'credit-card-usage-bangladesh',
    title: 'Credit Card Usage Patterns in Bangladesh',
    category: 'research',
    featured: true,
    context: 'Academic research paper · ENG105 Advanced Composition, NSU', // [doc]
    date: 'Dec 2025', // [doc] submitted 3 December 2025
    summary: 'Survey-based study of why Bangladeshis choose credit cards, who uses them, and what holds adoption back.',
    cover: { src: '/assets/img/cc-motivation.webp', w: 572, h: 417, alt: 'Donut chart of respondents’ primary motivation for getting a credit card' },
    tools: ['Survey research', 'Interviews', 'Hypothesis testing', 'Data visualisation'],
    problem: 'Credit cards are central to a growing digital economy, but usage in Bangladesh is uneven. The study asks who uses them, why, and what limits wider adoption.',
    process: ['Submitted a research proposal and research design.', 'Collected primary data through a survey and interviews.', 'Analysed and visualised the data.', 'Tested hypotheses and evaluated the results.', 'Drew out key findings and recommendations.'],
    findingsLabel: 'Findings',
    findings: [
      ['Essential for the digital economy', '100% of respondents see credit cards as vital, with 84% strongly agreeing.'],
      ['Skewed demographics', 'Usage is concentrated among young, urban males, mainly in Service (50%) and Business (34%) sectors.'],
      ['Key drivers', 'Rewards (34%) and financial flexibility (28%) are the main reasons for choosing credit over cash.'],
      ['Primary barrier', 'High interest rates and fees limit adoption; nearly 47% cite lower rates and fees as the most effective growth strategy.'],
      ['Sector impact & limitation', 'Hospitality and e-commerce benefit most; findings may not reflect rural or lower-income populations.'],
    ],
    gallery: [
      { src: '/assets/img/cc-income.webp', w: 485, h: 251, alt: 'Funnel-style bar chart of respondent income distribution', caption: 'Income distribution' },
      { src: '/assets/img/cc-motivation.webp', w: 572, h: 417, alt: 'Donut chart of primary motivation for getting a credit card', caption: 'Primary motivation for getting a credit card' },
      { src: '/assets/img/cc-limit-ratio.webp', w: 585, h: 485, alt: 'Scatter plot of monthly income against credit card limit', caption: 'Income to limit ratio' },
      { src: '/assets/img/cc-age.webp', w: 624, h: 375, alt: 'Bar chart of respondent age distribution', caption: 'Age distribution' },
    ],
    links: [{ label: 'Read the paper', href: drive('1QT-VAjo7vjhk6Y5n2Ui9oZbx_qKK9Qyn') }],
  },
  {
    slug: 'ebl-csr-analysis',
    title: 'Eastern Bank CSR Report Analysis',
    category: 'research',
    featured: true,
    context: 'Group project · MGT-212 Organizational Management, NSU', // [doc]
    date: 'Spring 2026',
    summary: 'Strategic review of Eastern Bank PLC’s CSR and sustainability reporting using four analytical frameworks.',
    cover: { src: '/assets/img/ebl-swot.webp', w: 675, h: 495, alt: 'SWOT analysis board for Eastern Bank Limited' },
    tools: ['PESTEL', 'SWOT', 'BCG matrix', "Porter's Five Forces", 'Interviews'],
    problem: 'How strategic is a private commercial bank’s corporate social responsibility, and how does it relate to its core business, workforce and stated vision?',
    process: ['Defined research objectives and reviewed the literature.', 'Collected secondary data from the EBL Annual Report 2024.', 'Conducted a semi-structured interview.', 'Applied PESTEL, SWOT, BCG and Porter’s Five Forces.', 'Synthesised findings and formulated recommendations.'],
    findingsLabel: 'Findings',
    findings: [
      ['CSR budget volatility', 'CSR expenditure fell 66%, from BDT 280M (2023) to BDT 94.09M (2024), amid macroeconomic constraints, suggesting philanthropy is a residual allocation rather than a strategic floor.'],
      ['Strategic sustainability shift', 'Sustainable finance disbursements reached BDT 216,495M in 2024 (89.48% of term loans), indicating ESG is being embedded in the core business model.'],
      ['Urban/rural imbalance', 'High-value CSR interventions concentrate in urban areas, while rural Bangladesh receives disproportionately little direct investment relative to need.'],
      ['Gender diversity gap', 'Despite strong women’s empowerment programmes, women are 17.19% of EBL’s 4,428-person workforce.'],
      ['Stakeholder hierarchy', 'EBL’s vision places “the community we operate in” above shareholders, an unusual positioning for a private commercial bank.'],
    ],
    gallery: [
      { src: '/assets/img/ebl-pestel.webp', w: 628, h: 361, alt: 'PESTEL analysis diagram for Eastern Bank Limited, 2024', caption: 'PESTEL analysis' },
      { src: '/assets/img/ebl-swot.webp', w: 675, h: 495, alt: 'SWOT analysis board for Eastern Bank Limited', caption: 'SWOT analysis' },
      { src: '/assets/img/ebl-bcg.webp', w: 596, h: 345, alt: 'BCG matrix of EBL’s CSR portfolio', caption: 'BCG matrix of the CSR portfolio' },
      { src: '/assets/img/ebl-porter.webp', w: 618, h: 358, alt: 'Porter’s Five Forces analysis for EBL CSR', caption: "Porter's Five Forces" },
    ],
    links: [{ label: 'Read the report', href: drive('1o6yUisROWkJ1T12B32BRySebTU1TYsMW') }],
  },
  {
    slug: 'rannabox',
    title: 'RannaBox: Meal-Kit Go-to-Market Plan',
    category: 'research',
    featured: false,
    context: 'Marketing plan · MKT-202 Introduction to Marketing, NSU', // [doc]
    date: 'Summer 2026',
    summary: 'A one-year go-to-market plan for an app-based Deshi meal-kit service aimed at busy Dhaka professionals.',
    cover: { src: '/assets/img/rb-budget.webp', w: 436, h: 331, alt: 'Donut chart of RannaBox year-one marketing budget allocation' },
    tools: ['STP & 4Ps', 'Funnel design', 'Secondary research'],
    problem: 'Busy urban professionals in Dhaka face a gap between time-heavy scratch cooking and costly, repetitive restaurant delivery.',
    process: ['Defined purpose and scope; reviewed secondary data on Bangladesh’s food-delivery and e-commerce market.', 'Identified the core opportunity gap for busy urban professionals.', 'Applied STP, the 4Ps, SMART objectives and quarterly tactical planning.', 'Synthesised a one-year roadmap with personas, KPIs and budget allocation.'],
    findingsLabel: 'Plan highlights (projections, not results)',
    findings: [
      ['Market gap', 'An unfilled middle path between scratch cooking and restaurant delivery creates a first-mover opening for pre-portioned Deshi meal kits.'],
      ['Positioning', 'Proposed as the only app-based raw meal-kit service in Dhaka, priced at 125 BDT per serving with about 15 minutes of prep.'],
      ['Targeting', '20–37-year-old students and young professionals in Gulshan, Banani and Dhanmondi, for disposable income, digital adoption and low-cost last-mile delivery.'],
      ['Growth path', 'Organic, content-first launch, then paid scale and late-stage loyalty. Year-one targets: 5,000 active subscribers, 25% trial-to-paid conversion, 60%+ monthly retention.'],
    ],
    gallery: [
      { src: '/assets/img/rb-tactical.webp', w: 958, h: 371, alt: 'Quarterly tactical plan timeline for year one', caption: 'One-year tactical plan (quarterly)' },
      { src: '/assets/img/rb-budget.webp', w: 436, h: 331, alt: 'Donut chart of year-one marketing budget allocation', caption: 'Budget allocation' },
      { src: '/assets/img/rb-funnel.webp', w: 508, h: 279, alt: 'Horizontal bar chart of the awareness-to-loyalty funnel', caption: 'Funnel and growth projections' },
      { src: '/assets/img/rb-gantt.webp', w: 567, h: 273, alt: 'Gantt chart of the year-one campaign schedule', caption: 'Campaign Gantt chart' },
    ],
    links: [{ label: 'Read the plan', href: drive('1pSUo-lXwebWFxXgBf8b7XtfjcDtvHIby') }],
  },
  {
    slug: 'clear-ai',
    title: 'Clear AI: Trade Document Automation',
    category: 'prototype',
    featured: true,
    context: 'Digital product prototype', // [cv] "Clear AI – A Digital Transformation In Local Reality"
    date: '',
    summary: 'A concept for OCR-driven validation of import/export documents that autofills Bangladesh’s ASYCUDA customs system.',
    cover: { src: '/assets/img/clear-ui.webp', w: 623, h: 808, alt: 'Low-fidelity wireframes of the Clear AI dashboard, upload and validation screens' },
    tools: ['Process mapping', 'Wireframing', 'OCR concept'],
    problem: 'Clearing goods means re-keying data from invoices, packing lists, LC documents, certificates of origin, tax documents and shipping bills into ASYCUDA, which is slow and error-prone.',
    process: ['Mapped the target process: upload or scan → AI extracts and validates → autofill ASYCUDA and generate documents → alert on discrepancies → offline storage and sync → automated submission.', 'Designed low-fidelity wireframes for the home dashboard, document upload and validation screens.', 'Specified interface actions: upload, search, capture, extract, verify and auto-fill.'],
    findingsLabel: 'Design highlights',
    findings: [
      ['Home dashboard', 'Shipment overview (e.g. “Pending: 5 shipments”), upload button and document search.'],
      ['Upload & extract', 'Camera or file upload, then an “Extract Data” step that reads fields such as shipper name for the user to verify.'],
      ['Validation', 'Extracted data shown side by side with the original, with mismatch alerts and an “Auto-Fill ASYCUDA” action.'],
      ['Resilience', 'Offline storage with sync when online, so work continues on unreliable connections.'],
    ],
    gallery: [
      { src: '/assets/img/clear-flow.webp', w: 697, h: 591, alt: 'Flowchart of the document upload, extraction and validation process', caption: 'Process flow' },
      { src: '/assets/img/clear-ui.webp', w: 623, h: 808, alt: 'Low-fidelity wireframes of three app screens', caption: 'Interface wireframes' },
    ],
    links: [],
  },
  {
    slug: 'voltlaptops',
    title: 'VoltLaptops: WooCommerce Storefront',
    category: 'prototype',
    featured: true,
    context: 'Term project · MIS-207 E-Business, NSU', // [doc]
    date: 'Summer 2026',
    summary: 'A working gaming-laptop store for Bangladesh, built on WordPress and WooCommerce with an AI pre-sales chatbot.',
    cover: { src: '/assets/img/volt-site-type.webp', w: 1229, h: 957, alt: 'Site type diagram for VoltLaptops showing the transactional e-commerce purchase funnel' },
    tools: ['WooCommerce', 'WordPress', 'XAMPP', 'AI chatbot', 'Process mapping'],
    problem: 'Buyers of high-ticket gaming laptops in Bangladesh need trust cues, comparison help and local payment and shipping options before they commit.',
    process: ['Defined the business model, vision, mission and online value proposition using Timmers’ canvas and the 6Cs framework.', 'Built a transactional WooCommerce storefront (Astra theme) with a five-product catalogue, BDT pricing and cash on delivery.', 'Mapped UX/UI, trust cues and magnetic, sticky and elastic features to acquisition and retention goals.', 'Documented KPIs, limitations and future scope, disclosing AI use in the report and in the live chatbot.'],
    findingsLabel: 'What was built',
    findings: [
      ['Purchase path', 'Homepage grid → shop → product page with Verified Stock badge and comparison table → side-cart → cash-on-delivery checkout → My Account.'],
      ['Catalogue', 'Five curated gaming laptops (Asus, Lenovo, MSI, HP) priced 174,900–399,900 BDT, on a mobile-responsive store running locally on XAMPP.'],
      ['Support layer', 'An AI chatbot (Buzzspot) trained on product and shipping data answers pre-sale questions; free Dhaka shipping and a flat 120 BDT fee elsewhere.'],
      ['Features', 'Live “Verified Stock” badges, a comparison table and side-cart quick view.'],
    ],
    gallery: [
      { src: '/assets/img/volt-site-type.webp', w: 1229, h: 957, alt: 'Site type diagram and purchase funnel for VoltLaptops', caption: 'Site type and purchase funnel' },
      { src: '/assets/img/volt-architecture.webp', w: 620, h: 447, alt: 'Site architecture tree for VoltLaptops', caption: 'Site architecture' },
      { src: '/assets/img/volt-chatbot.webp', w: 1188, h: 856, alt: 'Rationale diagram for the Buzzspot AI chatbot', caption: 'AI chatbot rationale' },
    ],
    links: [{ label: 'Read the term report', href: drive('1u-9vZF3noogAei2ts9vt3yd23qq43yrx') }],
  },
  {
    slug: 'ebl-sohojatri',
    title: 'EBL Sohojatri: SME Banking Companion',
    category: 'case',
    featured: true,
    context: 'Team Trikonn · Ad Maker Bangladesh 2026, Round 2 “Campaign Craft”', // [doc]
    date: '2026',
    summary: 'A digital companion strategy that moves Eastern Bank’s SME lending from branch paperwork to an app-led journey.',
    cover: { src: '/assets/img/cover-ebl-sohojatri.webp', w: 1024, h: 576, alt: 'Title slide: EBL Sohojatri, Ad Maker Bangladesh 2026 Round 2, Team Trikonn' },
    tools: ['Campaign strategy', 'Customer journey design', 'Digital banking'],
    problem: 'SMEs face weeks of paperwork and branch-locked lending, while field-staff-heavy models are costly under tight margins.',
    process: [],
    findingsLabel: 'Strategy highlights (team proposal)',
    findings: [
      ['Phygital pivot', 'Consolidate 15+ products into the Skybanking app as a stage-based digital companion for SMEs.'],
      ['Frictionless onboarding', 'Replace weeks of paperwork with minutes of e-KYC, using transaction data to build credit eligibility and a ladder from micro to medium.'],
      ['Cost-disruptive model', 'Replace expensive field staff (65% of cost) with a hybrid app and tele-support model.'],
      ['Community as channel', 'Build trust through authentic success stories and referrals rather than ads.'],
      ['Credibility advantage', 'Lean on EBL’s low NPL ratio (2.42% vs. 35.73%) to win on trust, not just interest rates.'],
    ],
    gallery: [],
    links: [
      { label: 'Team deck (PDF)', href: drive('1aWMxeNTxgE3a7WbgmCVx5Rhj3ovr9A0g') },
      { label: 'Case brief', href: drive('1Jat7g52kjxq2cLPxEW-LRhN7xhIdHg_-') },
    ],
  },
  {
    slug: 'maya-rosehip-oil',
    title: 'MAYA: Creating the Ultralight Facial Oil Category',
    category: 'case',
    featured: true,
    context: 'Team Trikonn · Ad Maker Bangladesh 2026, Round 3 “Market Architect”', // [doc]
    date: 'Jul 2026',
    summary: 'A launch strategy that turns “oil fear” into a nightly ritual for an organic rosehip seed oil.',
    cover: { src: '/assets/img/cover-maya.webp', w: 1024, h: 576, alt: 'Title slide: MAYA ultralight face oil, Ad Maker Bangladesh 2026 Round 3, Team Trikonn' },
    tools: ['Category design', 'Customer journey design', 'Funnel design'],
    problem: 'Facial oils fight a crowded cream and serum market and a widespread belief in Bangladesh that oil is bad for skin.',
    process: [],
    findingsLabel: 'Strategy highlights (team proposal)',
    findings: [
      ['Category creation', 'Define a new “Ultralight Facial Oil” segment instead of fighting for share in creams and serums.'],
      ['Fear-to-love journey', 'A four-phase journey (Fear → Curiosity → First Touch → Ritual) anchored by a 14-Day Glow Challenge.'],
      ['Phygital education', 'The MAYA Skin Guide, a free web app with Dhaka weather-based advice, myth-busting content and chat.'],
      ['Supply-chain readiness', 'A launch “lean but built to scale” on Square’s existing infrastructure, so demand can be met without stockouts.'],
    ],
    gallery: [],
    links: [
      { label: 'Team deck (PDF)', href: drive('1hUP2MPIS1-35Sy3VnCu5M5jGx-VeQ8_v') },
      { label: 'Case brief', href: drive('1xAjfXLlVxVbpE507Qy5sAsRn6qXeG8m_') },
    ],
  },
  {
    slug: 'dutch-agrosil',
    title: 'Dutch Agrosil: Reaching Farmers Through Dealers',
    category: 'case',
    featured: false,
    context: 'Team Trikonn · Ad Maker Bangladesh 2026, Round 1 “Pitch Perfect” (SQ Agriculture)', // [doc]
    date: '2026',
    summary: 'A B2B2C go-to-market for a premium crop input that targets 50K dealers instead of 15M farmers.',
    cover: { src: '/assets/img/cover-agrosil.webp', w: 1024, h: 576, alt: 'Title slide: Dutch Agrosil, Ad Maker Bangladesh 2026 Round 1, Team Trikonn' },
    tools: ['B2B2C strategy', 'Channel design', 'Value framing'],
    problem: 'A premium agricultural input competes with cheap fakes, and subsistence farmers face a price barrier.',
    process: [],
    findingsLabel: 'Strategy highlights (team proposal)',
    findings: [
      ['Strategic pivot', 'Shift from B2C (15M farmers) to B2B2C (50K dealers) to target the real decision-makers and cut acquisition waste.'],
      ['Trust architecture', 'A “Krishi Dakar” dealer certification giving dealers status and margin that fakes cannot replicate.'],
      ['Value reframing', 'Position the product as a 3-in-1 replacement (feeds, protects, prevents), cost as “investment per katha saved”.'],
      ['Financial inclusion', 'Integrate digital input-credit options (iFarmer / BRAC Bank) to remove the premium-price barrier.'],
      ['Pilot to nationwide', 'Start in the North and Southwest granary belts to validate conversion before scaling.'],
    ],
    gallery: [],
    links: [
      { label: 'Team deck (PDF)', href: drive('1Mb9Vk2Yv65LVo749tTNyj3e1HbmVFx9O') },
      { label: 'Case brief', href: drive('1BXymY2NjqwEtiRNizbcSWxSsEZ9z_nN4') },
    ],
  },
  {
    slug: 'dhaka-bank-erin',
    title: 'Dhaka Bank eRin: The 100K Loan Roadmap',
    category: 'case',
    featured: true,
    context: 'Team overclock · MarXcellence 2026, Round 1', // [doc]
    date: '2026',
    summary: 'An owned-data acquisition plan for a digital device loan, built on propensity scoring of 1.46M customer records.',
    cover: { src: '/assets/img/cover-erin.webp', w: 1024, h: 576, alt: 'Title slide: eRin Device, The 100K Loan Roadmap, MarXcellence 2026' },
    tools: ['Propensity modelling', 'Funnel design', 'Budget allocation'],
    problem: 'Hitting a 100,000-loan target through paid media alone would cost BDT 600–2,700 per loan.',
    process: [],
    findingsLabel: 'Strategy highlights (team proposal)',
    findings: [
      ['Strategic insight', 'Showed that relying on paid media (BDT 600–2,700 per loan) cannot efficiently reach the 100,000 target.'],
      ['Propensity modelling', 'A tiered scoring system (EPS) to segment 1.46M records and focus SMS/CRM budget on the top tiers.'],
      ['Funnel projection', 'Projected 25,714 loans from the owned base via a contact → response → application → disbursement funnel.'],
      ['Budget allocation', 'Allocated BDT 50,00,000 across retail activation, performance marketing and referral programmes.'],
      ['Risk mitigation', 'Addressed fraud, partner drop-out and data consent through compliance and pilot testing.'],
    ],
    gallery: [],
    links: [
      { label: 'Team deck (PDF)', href: drive('1QK9elhgM_3kwh9rvkmzW0PLTYW5cuyV3') },
      { label: 'Case brief', href: drive('1PlG7KqA_bw7Wh0tZf9Gl4zFCXJw2wgtY') },
    ],
  },
  {
    slug: 'josh-launch',
    title: 'JOSH: Launching a Natural Energy Drink',
    category: 'case',
    featured: false,
    context: 'BizCode 1.0 · NSU HR Club case competition', // [doc]
    date: '2026',
    summary: 'A launch strategy positioning JOSH as Bangladesh’s first natural hydration-energy drink.',
    cover: { src: '/assets/img/cover-josh.webp', w: 1024, h: 576, alt: 'Title slide: JOSH, BizCode 1.0, NSUHRC' },
    tools: ['Segmentation', 'Distribution strategy', 'Financial projection'],
    problem: 'A stagnant beverage market split between sugary sodas and synthetic energy drinks leaves a gap for clean energy without the crash.',
    process: [],
    findingsLabel: 'Strategy highlights (proposal)',
    findings: [
      ['White-space pivot', 'Target the “regret vs. boredom” gap with a natural hydration-energy drink instead of competing with sodas.'],
      ['Segmentation', 'A dual audience: Campus Grinder (60%) and 9-to-9 Professional (30%), with tailored messaging and channels.'],
      ['Distribution advantage', 'Plug into Fair Ltd.’s 15-year distribution network for nationwide shelf presence from day one.'],
      ['Financial scaling', 'A projected 3.1x ROI over three years with marketing spend tapering from 35% to 15%.'],
    ],
    gallery: [],
    links: [
      { label: 'Launch strategy deck', href: drive('1RgyKdCaD8oOmRq09oxgVeVMKFVgKFHXj') },
      { label: 'Case brief', href: drive('1A58kBAgYVDkc-Kw5ehJzqoR303EKHNKO') },
    ],
  },
  {
    slug: 'power-bi-dashboards',
    coverCarousel: true,
    title: 'Power BI Dashboards: Blinkit & Verse',
    category: 'analytics',
    featured: true,
    context: 'Dashboard project',
    date: '',
    summary: 'Two interactive Power BI dashboards: grocery sales by outlet and product mix, and a sales-vs-budget performance tracker.',
    cover: { src: '/assets/img/dash-blinkit.webp', w: 1139, h: 616, alt: 'Blinkit online grocery sales dashboard in Power BI' },
    tools: ['Power BI', 'Power Query', 'DAX', 'Data modelling'],
    problem: 'Decision-makers need to see trends, compare outlets and product mix, and track performance against budget without digging through raw tables.',
    process: ['Modelled the data and built measures in Power BI.', 'Designed interactive filters and metric toggles for drill-down.', 'Laid out KPI summaries and trend visuals for at-a-glance reading.'],
    findingsLabel: 'Dashboards',
    findings: [
      ['Blinkit online grocery', 'Sales performance across outlets, product categories and fat-content segments, with filters and metric toggles to switch KPIs and drill into dimensions.'],
      ['Verse performance tracker', 'Sales growth, budget performance and seasonal trends, comparing annual progress against historical data.'],
    ],
    gallery: [
      { src: '/assets/img/dash-blinkit.webp', w: 1139, h: 616, alt: 'Blinkit grocery sales dashboard with KPI cards, gauges and bar charts', caption: 'Blinkit online grocery' },
      { src: '/assets/img/dash-verse.webp', w: 1270, h: 712, alt: 'Verse performance tracker dashboard with growth KPIs and monthly bars', caption: 'Verse performance tracker' },
    ],
    links: [],
  },
  {
    slug: 'excel-dashboards',
    coverCarousel: true,
    title: 'Excel Dashboards: E-commerce & Road Safety',
    category: 'analytics',
    featured: false,
    context: 'Dashboard project',
    date: '',
    summary: 'Interactive Excel dashboards for e-commerce profitability and traffic incident severity, built with pivots and dynamic filters.',
    cover: { src: '/assets/img/dash-traffic.webp', w: 1178, h: 617, alt: 'Traffic incident dashboard in Excel' },
    tools: ['Excel', 'Pivot tables', 'Data cleaning'],
    problem: 'Turn raw transactional and incident data into a single view that shows year-over-year momentum and the factors that matter.',
    process: ['Cleaned and structured the source data.', 'Built pivot tables, pivot charts and KPI cards.', 'Added slicers and dynamic filters for interactive exploration.'],
    findingsLabel: 'Dashboards',
    findings: [
      ['E-commerce sales analysis', 'Profitability, volume and geographic distribution, with year-over-year momentum and the categories and regions driving value.'],
      ['Traffic incident analysis', 'Casualty severity, environmental conditions and vehicle types, with year-over-year safety trends for planners.'],
    ],
    gallery: [
      { src: '/assets/img/dash-ecommerce.webp', w: 1247, h: 619, alt: 'E-commerce sales dashboard with KPI tiles, map and bar charts', caption: 'E-commerce sales analysis' },
      { src: '/assets/img/dash-traffic.webp', w: 1178, h: 617, alt: 'Traffic incident dashboard with casualty KPIs and trend charts', caption: 'Traffic incident analysis' },
    ],
    links: [],
  },
];
