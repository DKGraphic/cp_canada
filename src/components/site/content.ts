/**
 * All page copy, verbatim from "CP - Canada Webpage v2.docx" (authoritative source).
 * Do not paraphrase. Bracketed strings are the document's own placeholders.
 */

export const LINKS = {
  services: "https://www.changepond.com/services",
  caseStudies: "https://www.changepond.com/resources/casestudy",
  blog: "https://www.changepond.com/resources/blog",
  privacy: "https://www.changepond.com/privacy-policy",
  cookies: "https://www.changepond.com/cookie-policy",
  terms: "https://www.changepond.com/terms-condition",
  global: "https://www.changepond.com/",
};

export const hero = {
  brand: "CHANGEPOND CANADA",
  title: "AI Services in Canada",
  subtitle: "From AI Opportunity to Business Execution.",
  cta: "Start a Conversation",
};

export const proof = {
  heading: "Global Experience Behind Our Canada Team",
  stats: [
    { value: 25, suffix: "+", label: "Years" },
    { value: 1500, suffix: "+", label: "Professionals" },
    { value: 200, suffix: "+", label: "Enterprises" },
  ],
  note: "Company-wide figures.",
};

export const intro = {
  heading: "Start With the Work You Want to Improve",
  paragraphs: [
    "A workflow with repeated handoffs. A software team exploring AI-enabled delivery. An application that needs to evolve. Data that is difficult to connect and use.",
    "Each requires a different starting point.",
    "Our Canada team connects your business priorities with Changepond’s global AI, data and engineering capabilities to assess the opportunity and move toward a working solution.",
  ],
};

export const startingPoint = {
  heading: "Find Your Starting Point",
  colA: "What Would You Like to Do?",
  colB: "Explore",
  rows: [
    { want: "Improve a business process with AI", explore: "AI for Business Workflows", target: "ai-business-workflows" },
    { want: "Apply AI across software delivery", explore: "AI for Software Engineering", target: "ai-software-engineering" },
    { want: "Prioritize AI investments and evolve applications", explore: "AI Strategy and Application Evolution", target: "ai-strategy" },
    { want: "Prepare enterprise data for analytics and AI", explore: "AI and Data Engineering", target: "ai-data-engineering" },
  ],
};

export type Capability = {
  id: string;
  name: string;
  heading: string;
  paragraphs: string[];
  cta: string;
  href: string;
  external: boolean;
};

export const capabilities = {
  heading: "Explore Our AI Capabilities",
  intro:
    "Four starting points connect your priorities with Changepond’s AI for Business proposition and specialist engineering capabilities.",
  items: [
    {
      id: "ai-business-workflows",
      name: "AI for Business Workflows",
      heading: "Improve How Work Gets Done",
      paragraphs: [
        "When a process involves repeated handoffs and information spread across systems, introducing AI starts with understanding the work.",
        "Together, we identify suitable workflows, define agent tasks and human responsibilities, and engineer the data and system connections required. Measures can include quality, turnaround time, manual effort and cost.",
      ],
      cta: "Explore AI for Business",
      href: LINKS.services,
      external: true,
    },
    {
      id: "ai-software-engineering",
      name: "AI for Software Engineering",
      heading: "Apply AI With Engineering Accountability",
      paragraphs: [
        "AI can contribute across software delivery, with engineering judgment, quality checks and clear responsibilities guiding its use.",
        "We help you assess suitable workflows, connect AI capabilities with existing engineering tools, and define review and validation requirements. Measures can include delivery performance, quality, engineering team capacity and cost.",
      ],
      cta: "Explore Agentic Development Life Cycle (ADLC)",
      href: LINKS.services,
      external: true,
    },
    {
      id: "ai-strategy",
      name: "AI Strategy and Application Evolution",
      heading: "Decide Where to Invest and What to Change",
      paragraphs: [
        "Multiple AI ideas can compete for attention. Existing applications may also need to evolve before they can support new business requirements.",
        "Together, we evaluate readiness, prioritize opportunities by value, feasibility and risk, and identify application, architecture and integration dependencies. These findings shape a phased approach to implementation and adoption.",
      ],
      cta: "Discuss Your AI Priorities",
      href: "#enquiry",
      external: false,
    },
    {
      id: "ai-data-engineering",
      name: "AI and Data Engineering",
      heading: "Prepare Your Data for AI",
      paragraphs: [
        "AI initiatives need information that is accessible, connected and fit for its intended use.",
        "Through Changepond’s Enterprise Data Services, we assess relevant sources, integration needs, data quality, access and governance requirements. We then define and engineer the data capabilities needed for the intended analytics or AI use.",
      ],
      cta: "Explore Enterprise Data Services",
      href: LINKS.services,
      external: true,
    },
  ] satisfies Capability[],
};

export const industries = {
  heading: "Industry Expertise",
  intro: "[Introduction describing the confirmed industries supported by the Canada offering.]",
  items: [
    { name: "[Industry Name]", body: "[Relevant business challenges and Changepond capabilities.]" },
    { name: "[Industry Name]", body: "[Relevant business challenges and Changepond capabilities.]" },
    { name: "[Industry Name]", body: "[Relevant business challenges and Changepond capabilities.]" },
  ],
};

export const caseStudies = {
  heading: "Client Success Stories",
  items: [
    { title: "[Business Workflow Case Study]" },
    { title: "[Software Engineering or Application Evolution Case Study]" },
    { title: "[Enterprise Data Case Study]" },
  ].map((c) => ({
    ...c,
    meta: "[Industry | Geography]",
    body: "[Customer challenge, Changepond’s contribution and verified outcome.]",
    cta: "[Read the Case Study]",
  })),
};

export const approach = {
  heading: "From Business Priority to Working Solution",
  steps: [
    { title: "Identify", body: "Understand the challenge, evaluate readiness and agree on the outcomes that matter." },
    { title: "Design", body: "Define the workflow, data, systems, human responsibilities and controls." },
    {
      title: "Engineer and Validate",
      body: "Build and integrate the solution with appropriate engineering, quality and security checks.",
    },
    {
      title: "Operate and Improve",
      body: "Monitor performance, manage exceptions and improve through feedback where ongoing support is in scope.",
    },
  ],
  fdeBefore: "For workflow-focused AI initiatives, ",
  fdeStrong: "Forward Deployed Engineering (FDE)",
  fdeAfter:
    " brings business context and hands-on engineering together. Engineers work alongside your teams to develop and validate solutions in the operating environment.",
  cta: "Explore Forward Deployed Engineering",
};

export type DayPeriod = {
  time: string;
  label: string;
  body: string;
  start: number;
  end: number;
  kind: "india" | "shared" | "canada" | "evening";
};

export const deliveryDay = {
  heading: "A Delivery Day That Works Around Yours",
  intro: "Our Canada and India teams work as one. Here’s a typical day, shown in Eastern Time.",
  periods: [
    {
      time: "12 am–8 am ET",
      label: "Overnight Progress",
      body: "Our India team builds, tests and prepares a staging release while Canada sleeps.",
      start: 0,
      end: 8,
      kind: "india",
    },
    {
      time: "8 am–11 am ET",
      label: "Morning Handover and Overlap",
      body: "You start with a written update and a demo-ready build, followed by stand-ups, workshops and decisions with both teams live.",
      start: 8,
      end: 11,
      kind: "shared",
    },
    {
      time: "11 am–6 pm ET",
      label: "Canadian Day",
      body: "Your Canada team works with you—on site or remotely—for reviews, testing and stakeholder sessions.",
      start: 11,
      end: 18,
      kind: "canada",
    },
    {
      time: "Evening",
      label: "Clear Priorities for Tonight",
      body: "The day’s feedback shapes the next delivery cycle, keeping priorities connected across teams.",
      start: 18,
      end: 24,
      kind: "evening",
    },
  ] satisfies DayPeriod[],
  note: "India Standard Time is 9½ hours ahead of Eastern Time in summer and 10½ hours ahead in winter. Collaboration and overlap windows are agreed for each engagement.",
};

export const engagement = {
  heading: "Engagement Models",
  items: [
    {
      title: "Dedicated Team",
      body: "A stable, named team that works as an extension of yours, scaled up or down as priorities shift.",
    },
    {
      title: "Managed Services",
      body: "We run and improve your platforms against agreed service levels, with a Canadian lead accountable each month.",
    },
    {
      title: "Outcome-Based / Per-Deliverable",
      body: "Agreed scope and price, with payment linked to accepted deliverables.",
    },
  ],
};

export const trust = {
  heading: "Privacy, Security and Accessibility by Design",
  intro:
    "Privacy, consent, accessibility and data residency are part of how we design, build and test—from the outset.",
  items: [
    { key: "pipeda", title: "PIPEDA", body: "Privacy by design for personal information, from collection to retention." },
    {
      key: "law25",
      title: "Quebec Law 25",
      body: "Privacy impact assessments, consent and transparency for Québec residents.",
    },
    { key: "casl", title: "CASL", body: "Consent management and auditable records for commercial electronic messages." },
    {
      key: "aoda",
      title: "AODA / WCAG 2.1 AA",
      body: "Accessibility engineering and automated and manual testing against agreed AODA and WCAG 2.1 AA requirements.",
    },
    {
      key: "residency",
      title: "Canadian Data Residency",
      body: "Hosting and data kept in Canadian cloud regions when required.",
    },
    {
      key: "security",
      title: "Security Practices",
      body: "Secure development and least-privilege access.",
      placeholder: "[Security certifications and their applicable scope.]",
    },
  ] as { key: string; title: string; body: string; placeholder?: string }[],
};

export const why = {
  heading: "Why Changepond?",
  items: [
    {
      title: "Business Context and Engineering Depth",
      body: "Connect your priorities with the AI, data, application and software engineering capabilities needed to address them.",
    },
    {
      title: "Strategy Through Execution",
      body: "Move from assessing opportunities and setting priorities to engineering, integrating and supporting solutions within the agreed scope.",
    },
    {
      title: "Human Oversight and Accountability",
      body: "Define who reviews, approves, monitors and handles exceptions as part of solution design.",
    },
    {
      title: "A Canada Team, Global Capabilities",
      body: "Discuss your priorities with a Canada team connected to Changepond’s global specialists.",
    },
  ],
};

export const perspectives = {
  heading: "Client Perspectives",
  logos: ["[Client Logo]", "[Client Logo]", "[Client Logo]", "[Client Logo]"],
  quote: "“[Client testimonial describing the engagement and its value.]”",
  name: "[Client Name]",
  role: "[Designation, Organization]",
};

export const insights = {
  heading: "Insights for Your AI Journey",
  title: "ADLC vs SDLC: What Changes Beyond AI-Assisted Coding?",
  body: "Explore how agent participation, engineering review and human oversight change the way software delivery is organized.",
  cta: "Read the Article",
};

export const faqs = {
  heading: "Frequently Asked Questions",
  items: [
    {
      q: "What AI Services Does Changepond Offer in Canada?",
      a: "Changepond supports AI-enabled business workflows, AI for software engineering, AI strategy and application evolution, and enterprise data readiness and engineering. These starting points connect to AI for Business and relevant specialist capabilities.",
    },
    {
      q: "How Can We Identify the Right Starting Point?",
      a: "Begin with a business challenge, workflow or delivery goal. We assess potential value, data and system dependencies, risks and the capabilities needed to recommend practical next steps.",
    },
    {
      q: "Can Changepond Work with Our Existing Applications and Data Platforms?",
      a: "Yes. We begin by understanding your existing environment and objectives. Relevant application, integration, quality engineering and enterprise data specialists can then help define the required work.",
    },
    {
      q: "How Does ADLC Fit Within AI for Business?",
      a: "Within AI for Business, Agentic-Native Software Engineering provides the broader model for applying agents across engineering work. Agentic Development Life Cycle operationalizes that model through an agent-first, human-governed approach to software delivery.",
    },
    {
      q: "How Do FDE and ADLC Work Together?",
      a: "FDE brings business context and hands-on engineering together to develop and validate solutions in the operating environment. Where an engagement requires software delivery, ADLC can support how AI agents and engineers carry out that work.",
    },
    {
      q: "How Are Quality, Security and Human Oversight Addressed?",
      a: "Requirements depend on the solution and its risk. During design, we define responsibilities for review, approval, monitoring and exception handling, together with appropriate quality checks, access controls, execution records and escalation paths. Relevant quality engineering and security specialists are involved according to scope.",
    },
  ],
};

export const contact = {
  heading: "Connect With Our Canada Team",
  subheading: "Your Priorities. A Practical Way Forward.",
  intro:
    "Share what you want to achieve. Our Canada team will connect you with the relevant Changepond expertise to discuss your next steps.",
  people: [
    {
      name: "Subir Nag",
      role: "Director, Business Development & Customer Success – Canada",
      body: "Discuss your business priorities and explore how Changepond can support your AI, data and engineering initiatives.",
      initials: "SN",
      linkedin: null as string | null,
    },
    {
      name: "Faramarz Farahani",
      role: "CIO Advisor, Canada",
      body: "Discuss technology strategy, AI adoption and the capabilities needed to support your business objectives.",
      initials: "FF",
      linkedin: "https://www.linkedin.com/in/faramarzfarahani/" as string | null,
    },
  ],
  photo: "[Photograph]",
  location: "[City, Province]",
  linkedinLabel: "View LinkedIn Profile",
};

export const enquiry = {
  heading: "Tell Us What You’re Working On",
  fields: { name: "Name", email: "Work Email", org: "Organization", goals: "What Would You Like to Achieve?" },
  goals: [
    "Improve a business workflow",
    "Apply AI across software delivery",
    "Prioritize AI investments",
    "Evolve an existing application",
    "Prepare data for analytics or AI",
    "Discuss another challenge",
  ],
  privacyPlaceholder: "[Privacy Policy link]",
  privacyText: "for details on how we handle personal information.",
  submit: "Start a Conversation",
};

export const footer = {
  contactHeading: "Canada Contact Details",
  brand: "CHANGEPOND CANADA",
  tagline: "PEOPLE | TECHNOLOGY | PROGRESS",
};

export const seo = {
  title: "AI Services in Canada — AI, Data & Engineering | Changepond",
  description:
    "Explore Changepond's AI services in Canada for business workflows, software delivery, application evolution and enterprise data. Talk to our Canada team.",
};

export const NAV = [
  { label: "Capabilities", href: "#capabilities", mega: true },
  { label: "Approach", href: "#approach" },
  { label: "Delivery", href: "#delivery" },
  { label: "Engagement", href: "#engagement" },
  { label: "Trust", href: "#trust" },
  { label: "Insights", href: "#insights" },
  { label: "FAQ", href: "#faq" },
] as const;
