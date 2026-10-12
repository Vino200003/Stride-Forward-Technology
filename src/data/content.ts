/**
 * ============================================================================
 *  SITE CONTENT
 * ----------------------------------------------------------------------------
 *  All text on the website lives in this file. Edit it here and every page
 *  updates. Icons come from lucide-react (https://lucide.dev/icons) - swap any
 *  icon by changing its import name.
 *
 *  Search this file for "PLACEHOLDER" to find everything that still needs
 *  real information.
 * ============================================================================
 */
import {
  Atom,
  Award,
  Braces,
  CircleCheck,
  Cloud,
  Code,
  Database,
  Eye,
  Gauge,
  Heart,
  Hexagon,
  Layers,
  LifeBuoy,
  Monitor,
  Palette,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wallet,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react'

/* ---------------------------------------------------------------------------
 * Company details - used in the navbar, footer, contact page and SEO tags
 * ------------------------------------------------------------------------- */
export const siteConfig = {
  name: 'Stride Forward Technology',
  shortName: 'SFT',
  tagline: 'Custom software built around your business',
  description:
    'Stride Forward Technology designs and builds custom web apps, mobile apps, and software solutions for small and medium businesses.',
  // PLACEHOLDER: replace with your real domain once the site is live (used for SEO / social sharing)
  url: 'https://www.strideforwardtech.com',
  email: 'Info@strideforwardtech.com',
  phone: '+94 (072) 283 5912',
  phoneHref: 'tel:+940722835912',
  whatsappNumber: '940722835912', // digits only, with country code, no "+" or spaces
  whatsappMessage: "Hi Stride Forward! I'd like to talk about a project.",
  address: 'Jaffna, Sri Lanka',
  workingHours: [
    { days: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { days: 'Saturday', hours: '10:00 AM - 2:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  // PLACEHOLDER: replace with your real social profile URLs (remove any you don't use)
  socials: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/stride-forward-technology' },
    { name: 'GitHub', href: 'https://github.com/' },
    { name: 'X', href: 'https://x.com/' },
    { name: 'Instagram', href: 'https://www.instagram.com/' },
    { name: 'Facebook', href: 'https://www.facebook.com/' },
  ] as const,
  year: 2026,
}

export type SocialName = (typeof siteConfig.socials)[number]['name']

/* ---------------------------------------------------------------------------
 * Navigation
 * ------------------------------------------------------------------------- */
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const ctaLabel = 'Get a Free Quote'

/* ---------------------------------------------------------------------------
 * SEO - one title and description per page
 * ------------------------------------------------------------------------- */
export const seo = {
  home: {
    title: 'Custom Web & Mobile App Development for Small Businesses',
    description:
      'We design and build custom web apps, mobile apps, and software that save small and medium businesses time and help them grow. Get a free quote today.',
  },
  services: {
    title: 'Services: Web, Mobile, Custom Software & Cloud',
    description:
      'Web development, mobile apps, custom software, UI/UX design, cloud & DevOps, and ongoing maintenance, built for small and medium businesses.',
  },
  portfolio: {
    title: 'Portfolio: Our Projects',
    description:
      'Projects we have built: restaurant ordering and reservations, e-commerce, bus reservations, inventory management, and vehicle tracking systems.',
  },
  about: {
    title: 'About Us: Our Story, Mission & Team',
    description:
      'Meet the team behind Stride Forward Technology and learn why we build honest, high-quality software for growing businesses.',
  },
  contact: {
    title: "Contact Us: Let's Talk About Your Project",
    description:
      'Tell us about your idea and get a free, no-obligation quote. Reach us by form, email, phone, or WhatsApp.',
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'How Stride Forward Technology collects, uses, and protects your information.',
  },
  terms: {
    title: 'Terms of Service',
    description: 'The terms that apply when you use the Stride Forward Technology website and services.',
  },
  notFound: {
    title: 'Page Not Found',
    description: "The page you're looking for doesn't exist or has moved.",
  },
}

/* ---------------------------------------------------------------------------
 * Services - shown on the Services page; `featured` ones also appear on Home
 * ------------------------------------------------------------------------- */
export type Service = {
  id: string // used in URLs (/services#id) and the contact form dropdown
  title: string
  icon: LucideIcon
  short: string
  description: string
  includes: string[]
  featured?: boolean
  image?: string // optional illustration in /public/images/services (base name, without the -900/-1536.webp suffix)
  imageAlt?: string
}

export const services: Service[] = [
  {
    id: 'custom-software',
    title: 'Custom Software',
    icon: Braces,
    featured: true,
    image: '/images/services/custom-software',
    imageAlt: 'Team working with custom software dashboards, analytics, and code on connected screens',
    short: 'Tools built around the way your business works, not the other way around.',
    description:
      'Spreadsheets and off-the-shelf tools only go so far. We build software that automates your repetitive work, connects your systems, and gives you clear numbers to make decisions.',
    includes: [
      'Internal tools and admin panels',
      'Workflow automation',
      'Integrations with the tools you already use',
      'Reports and real-time dashboards',
    ],
  },
  {
    id: 'ai-intelligent-solutions',
    title: 'AI and Intelligent Solutions',
    icon: Sparkles,
    featured: true,
    image: '/images/services/ai-intelligent-solutions',
    imageAlt: 'Glowing AI processor connected to dashboards, automation, and cloud services',
    short: 'Practical AI that helps teams work faster, smarter, and more consistently.',
    description:
      'We design and build AI-powered experiences and automation that reduce repetitive work, improve decision-making, and make business processes more intelligent.',
    includes: [
      'AI-powered workflows and assistants',
      'Smart automation and recommendations',
      'Data-informed decision support',
      'Custom AI integrations for real business use',
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: Palette,
    featured: true,
    image: '/images/services/ui-ux-design',
    imageAlt: 'Wireframes and interface layouts designed across laptop and mobile screens',
    short: 'Clean, intuitive designs that make your product easy to use.',
    description:
      'Good design is not just about looks. We research your users, map out how they move through your product, and design interfaces that feel simple and get results.',
    includes: [
      'User research and journey mapping',
      'Wireframes and clickable prototypes',
      'Visual design and design systems',
      'Usability testing',
    ],
  },
  {
    id: 'web-mobile-application',
    title: 'Web and Mobile Application',
    icon: Monitor,
    featured: true,
    image: '/images/services/web-mobile-application',
    imageAlt: 'Laptop and phones displaying a responsive web and mobile application',
    short: 'Fast, secure websites and apps that turn visitors into customers and keep users engaged.',
    description:
      'We build responsive web and mobile experiences that feel polished, work smoothly across devices, and support your business goals from discovery to launch.',
    includes: [
      'Responsive web applications',
      'Mobile-first experiences',
      'Cross-platform product development',
      'Launch-ready front-end experiences',
    ],
  },
  {
    id: 'data-digital-solutions',
    title: 'Data and Digital Solutions',
    icon: Database,
    image: '/images/services/data-digital-solutions',
    imageAlt: 'Central database feeding data pipelines into analytics dashboards and charts',
    short: 'Smart digital systems and data-driven tools that turn information into action.',
    description:
      'We build connected digital platforms, dashboards, and data workflows that help teams understand performance, manage operations, and improve outcomes.',
    includes: [
      'Dashboards and analytics platforms',
      'Data workflows and integrations',
      'Digital platform modernization',
      'Cloud-ready architecture on Azure',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: Cloud,
    image: '/images/services/cloud-devops',
    imageAlt: 'Cloud infrastructure with an automated build, test, and deploy pipeline',
    short: 'Reliable hosting and automated deployments that scale as you grow.',
    description:
      'We set up and manage your cloud infrastructure so your software stays fast, secure, and online, without surprise bills or late-night emergencies.',
    includes: [
      'Cloud setup on Azure and similar providers',
      'Automated testing and deployments',
      'Backups, monitoring, and alerts',
      'Cost optimization',
    ],
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    icon: Wrench,
    image: '/images/services/maintenance-support',
    imageAlt: 'Monitoring dashboards, security shield, and tools for ongoing software maintenance',
    short: 'Ongoing updates, fixes, and improvements after launch.',
    description:
      "Software needs care after it goes live. Our support plans keep everything secure and up to date, and give you a team to call when you need a change or something isn't working.",
    includes: [
      'Security updates and bug fixes',
      'Performance monitoring',
      'Small feature updates every month',
      'Priority response times',
    ],
  },
]

/* ---------------------------------------------------------------------------
 * HOME PAGE
 * ------------------------------------------------------------------------- */
export const hero = {
  eyebrow: 'Custom software for small & medium businesses',
  headlineStart: 'Custom Software Built',
  headlineHighlight: 'Around Your Business',
  subheading:
    'We design and build custom web apps, mobile apps, and software solutions that save you time and help you grow.',
  primaryCta: { label: 'Get a Free Quote', to: '/contact' },
  secondaryCta: { label: 'View Our Work', to: '/portfolio' },
  trustPoints: ['Free consultation', 'Fixed-price quotes', 'You own the code'],
}

// Animated stats strip under the hero. Keep these true: as you deliver projects,
// you can swap in numbers like "Projects delivered".
export const stats = [
  { value: 6, suffix: '', label: 'Core services under one roof' },
  { value: 5, suffix: '-step', label: 'Clear process, idea to launch' },
  { value: 1, suffix: ' day', label: 'Reply time on every inquiry' },
  { value: 100, suffix: '%', label: 'Code ownership for clients' },
]

export const whatWeDo = {
  eyebrow: 'What we do',
  title: 'Everything you need to go digital',
  subtitle: 'From the first sketch to launch day and beyond, one team handles it all.',
}

export const whyChooseUs = {
  eyebrow: 'Why choose us',
  title: 'A partner that keeps things simple',
  subtitle: 'We speak plain English, keep you in the loop, and deliver what we promise.',
  items: [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Short, focused sprints keep your project moving, so you see working software early and often.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality Code',
      description: 'Clean, tested, well-documented code that is easy to maintain and build on.',
    },
    {
      icon: Wallet,
      title: 'Affordable Pricing',
      description: 'Clear, fixed-price quotes sized for small business budgets. No hidden fees.',
    },
    {
      icon: LifeBuoy,
      title: 'Ongoing Support',
      description: "We don't disappear after launch. We are here for updates, fixes, and growth.",
    },
  ],
}

export const process = {
  eyebrow: 'Our process',
  title: 'From idea to launch in 5 clear steps',
  subtitle: "You'll always know what's happening, what's next, and what it costs.",
  steps: [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We learn about your business, goals, and users, then agree on scope, timeline, and price.',
    },
    {
      icon: PenTool,
      title: 'Design',
      description: 'We sketch wireframes and design screens you can click through before any code is written.',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'We build in short sprints and share progress every week so you can give feedback early.',
    },
    {
      icon: CircleCheck,
      title: 'Testing',
      description: 'We test on real devices and browsers to catch bugs before your customers do.',
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We launch, train your team, and stay on hand to keep everything running smoothly.',
    },
  ],
}

export type TechCategory = 'frontend' | 'backend' | 'cloud' | 'data'

export type TechItem = {
  name: string
  category: TechCategory
  icon: LucideIcon
  color: string
  use: string
  description: string
  badge: string
}

export const technologies = {
  eyebrow: 'Engineered For Performance',
  title: 'Our Production Tech Stack',
  subtitle:
    'We deliberately choose proven, modern architectures that scale reliably, maintain high testability, and avoid technical debt.',
  categories: [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & Mobile' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'data', label: 'Databases & AI' },
  ],
  items: [
    {
      name: 'React & Next.js',
      category: 'frontend' as TechCategory,
      icon: Atom,
      color: '#149eca',
      use: 'Web Applications',
      description: 'SSR, App Router, responsive component architecture, and fluid client interactions.',
      badge: 'High Performance',
    },
    {
      name: 'Flutter',
      category: 'frontend' as TechCategory,
      icon: Smartphone,
      color: '#0468d7',
      use: 'iOS & Android Apps',
      description: 'Single codebase native compilation with 60fps fluid cross-platform performance.',
      badge: 'Cross-Platform',
    },
    {
      name: 'Node.js & TypeScript',
      category: 'backend' as TechCategory,
      icon: Hexagon,
      color: '#3c873a',
      use: 'Microservices & APIs',
      description: 'Type-safe asynchronous server engines with robust concurrency and low latency.',
      badge: 'Type-Safe',
    },
    {
      name: 'Python & FastAPI',
      category: 'backend' as TechCategory,
      icon: Code,
      color: '#3776ab',
      use: 'Data & Automation',
      description: 'High-speed asynchronous endpoints, automated background workers, and ML services.',
      badge: 'Automated',
    },
    {
      name: 'Microsoft Azure',
      category: 'cloud' as TechCategory,
      icon: Cloud,
      color: '#0078d4',
      use: 'Cloud Infrastructure',
      description: 'Resilient cloud compute, isolated container environments, and 99.99% uptime guarantees.',
      badge: '99.99% SLA',
    },
    {
      name: 'PostgreSQL',
      category: 'data' as TechCategory,
      icon: Database,
      color: '#336791',
      use: 'Relational Database',
      description: 'ACID transactional integrity, JSONB semi-structured indexing, and optimized queries.',
      badge: 'ACID Robust',
    },
    {
      name: 'Docker & CI/CD',
      category: 'cloud' as TechCategory,
      icon: Layers,
      color: '#2496ed',
      use: 'DevOps & Pipeline',
      description: 'Containerized reproducible micro-environments with automated lint, test, and release cycles.',
      badge: 'Zero-Downtime',
    },
    {
      name: 'AI & Smart Workflows',
      category: 'data' as TechCategory,
      icon: Sparkles,
      color: '#8b5cf6',
      use: 'Intelligent Systems',
      description: 'Custom LLM agents, semantic document indexing, and automated decision-support pipelines.',
      badge: 'AI Powered',
    },
  ],
}

export const faq = {
  eyebrow: 'FAQ',
  title: 'Frequently asked questions',
  subtitle: "Can't find your answer? Send us a message and we'll reply within one business day.",
  items: [
    {
      question: 'How long does a project take?',
      answer:
        'It depends on the size of the project. A business website usually takes 2 to 4 weeks. A web or mobile app typically takes 6 to 12 weeks. After our discovery call, we give you a clear timeline with milestones so you always know what to expect.',
    },
    {
      question: 'How much does it cost?',
      answer:
        'Every project is different, so we give you a fixed-price quote after understanding your needs, with no hidden fees. We can also split larger projects into phases so you can start small, launch sooner, and grow from there. The first consultation is always free.',
    },
    {
      question: 'Do you offer support after launch?',
      answer:
        'Yes. Every project includes a free support period after launch to fix any issues. After that, you can choose a monthly maintenance plan that covers security updates, monitoring, backups, and small improvements.',
    },
    {
      question: 'Who owns the code?',
      answer:
        'You do. Once the project is paid for, you own 100% of the code, designs, and content. We hand over everything, including source code, accounts, and documentation, so you are never locked in.',
    },
  ],
}

export const ctaBanner = {
  title: "Have an idea? Let's turn it into software.",
  subtitle: 'Book a free, no-pressure consultation. We will help you figure out the best next step.',
  primary: { label: 'Get a Free Quote', to: '/contact' },
  secondary: { label: 'See our services', to: '/services' },
}

/* ---------------------------------------------------------------------------
 * SERVICES PAGE
 * ------------------------------------------------------------------------- */
export const servicesPage = {
  eyebrow: 'Services',
  titleLead: 'Software services that',
  titleHighlight: 'grow with you',
  subtitle:
    'Whether you need a website, an app, or a tool to run your business better, we build it for you and support it after launch.',
  exploreLabel: 'Explore services',
  overviewTitle: 'Our services',
  overviewSubtitle: 'Pick a service to jump to the details, or talk to us and we will point you in the right direction.',
  detailsTitle: 'A closer look at what we do',
  includesLabel: "What's included",
  quoteLabel: 'Get a quote for this',
  contactEyebrow: 'Start a project',
  contactFormTitle: 'Tell us about your project',
}

/* ---------------------------------------------------------------------------
 * PORTFOLIO PAGE
 * ------------------------------------------------------------------------- */
export type ProjectCategory = 'Web' | 'Mobile' | 'Design'

export type ProjectMetric = {
  label: string
  value: string
}

export type Project = {
  id: string
  title: string
  subtitle: string
  category: ProjectCategory
  image: string
  imageAlt: string
  problem: string
  solution: string
  result: string
  tags: string[]
  metrics: ProjectMetric[]
  status: string
  featured?: boolean
}

export const portfolioPage = {
  eyebrow: 'Portfolio',
  title: "Software we've built",
  subtitle:
    'Real systems engineered for growing operations, with full source code ownership, enterprise security, and verified business results.',
  filters: ['All', 'Web', 'Mobile'] as const,
  labels: {
    problem: 'The Challenge',
    solution: 'Engineered Solution',
    result: 'Business Impact',
  },
  empty: 'No projects in this category yet.',
}

export const projects: Project[] = [
  {
    id: 'restaurant-system',
    title: 'DineFlow',
    subtitle: 'Restaurant Food Delivery & Table Reservation Ecosystem',
    category: 'Web',
    image: '/images/portfolio/dineflow.jpg',
    imageAlt: 'DineFlow digital restaurant ordering interface and live kitchen dispatch',
    problem:
      'Handling telephone orders, dining table bookings, kitchen preparation, and courier assignments across disparate tools created costly delays and order discrepancies.',
    solution:
      'An integrated multi-portal ecosystem with customer web ordering, kitchen display system (KDS), waiter booking tablet, and live driver routing.',
    result:
      'Reduced average order cycle from 28 to 14 minutes, consolidated order logging into a single screen, and grew direct table bookings by 65%.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'TailwindCSS'],
    metrics: [
      { label: 'Order Processing', value: '3x Faster' },
      { label: 'Table Bookings', value: '+65%' },
      { label: 'Dispatch Latency', value: '< 2s Sync' },
    ],
    status: 'Live Production',
    featured: true,
  },
  {
    id: 'cartify',
    title: 'Cartify',
    subtitle: 'High-Converting E-Commerce Web Platform',
    category: 'Web',
    image: '/images/portfolio/cartify.jpg',
    imageAlt: 'Cartify retail storefront and real-time inventory management console',
    problem:
      'A multi-branch retailer needed to expand online while synchronizing stock levels with existing physical locations without vendor lock-in fees.',
    solution:
      'A bespoke headless storefront with role-based admin controls, dynamic promo engine, instant search index, and Stripe payment gateway.',
    result:
      'Sub-second page speeds, seamless mobile checkout flow, zero transaction commissions to third parties, and a 38% bump in digital conversions.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redis'],
    metrics: [
      { label: 'Checkout Speed', value: '1.2s' },
      { label: 'Conversion Lift', value: '+38%' },
      { label: 'Catalog Capacity', value: '10K+ SKUs' },
    ],
    status: 'Active Merchant',
    featured: true,
  },
  {
    id: 'inventory-management',
    title: 'StockMate',
    subtitle: 'Intelligent Real-Time Inventory & Warehouse System',
    category: 'Web',
    image: '/images/portfolio/stockmate.jpg',
    imageAlt: 'StockMate inventory analytics dashboard with automated reorder levels',
    problem:
      'Tracking fast-moving SKU stock, supplier purchase orders, and multi-location warehouses via spreadsheets led to stock-outs and excess holding costs.',
    solution:
      'A centralized warehouse management portal with barcode scanning integration, automated purchase order triggers, and supplier performance tracking.',
    result:
      '99.9% inventory audit precision, automatic reordering before stock depletion, and 70% decrease in manual weekly auditing time.',
    tags: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    metrics: [
      { label: 'Stock Accuracy', value: '99.9%' },
      { label: 'Audit Time Saved', value: '-70%' },
      { label: 'Reorder Alerts', value: 'Real-Time' },
    ],
    status: 'Enterprise Deployed',
    featured: true,
  },
  {
    id: 'vehicle-tracker',
    title: 'FleetTrack',
    subtitle: 'GPS Telemetry & Logistics Vehicle Management System',
    category: 'Mobile',
    image: '/images/portfolio/fleettrack.jpg',
    imageAlt: 'FleetTrack live GPS route monitor and vehicle telemetry dashboard',
    problem:
      'Fleet managers lacked live visibility into vehicle transit status, fuel efficiency, driver duty hours, and unexpected breakdown alerts.',
    solution:
      'A real-time telemetry console and driver mobile application receiving continuous IoT GPS data, geofencing breaches, and maintenance schedules.',
    result:
      'Live sub-second vehicle telemetry across 500+ commercial units, 18% fuel cost reduction via smart routing, and instant SOS alerts.',
    tags: ['Flutter', 'Go APIs', 'Azure Maps', 'IoT Telemetry', 'MQTT'],
    metrics: [
      { label: 'Monitored Fleets', value: '500+ Units' },
      { label: 'GPS Ping Interval', value: '250ms' },
      { label: 'Fuel Saved', value: '18%' },
    ],
    status: 'Live Logistics',
    featured: true,
  },
]

/* ---------------------------------------------------------------------------
 * ABOUT PAGE
 * ------------------------------------------------------------------------- */
export const aboutPage = {
  eyebrow: 'About us',
  title: 'Building software that moves businesses forward',
  subtitle: "We're a small, focused team that believes great software should be within reach of every business.",
  storyTitle: 'Our story',
  // PLACEHOLDER: personalize your company story
  story: [
    'Stride Forward Technology was founded on a simple belief: every business deserves software that fits the way it actually works. Too many small and medium businesses make do with generic tools and workarounds, because custom software has a reputation for being expensive and hard to get right.',
    'We set out to change that. We combine modern technology with a clear, friendly process so business owners can get software made for the way they work, at a price that makes sense, from people who explain things in plain language.',
    "Every project, big or small, gets the same care: we listen first, build carefully, and stay around after launch. When your business grows, we're ready to grow your software with it.",
  ],
  missionTitle: 'Our mission',
  mission:
    'To help growing businesses save time, serve their customers better, and compete with bigger players through smart, affordable, well-built software.',
  stats: [
    { value: '100%', label: 'Code ownership for clients' },
    { value: '1 day', label: 'Response time on inquiries' },
    { value: '5 steps', label: 'From idea to launch' },
  ],
  valuesTitle: 'What we stand for',
  valuesSubtitle: 'These values guide every decision we make, from the first call to long after launch.',
  values: [
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear pricing, honest timelines, and regular updates. No jargon, no surprises.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We write clean, tested code and sweat the details, because your software is your reputation.',
    },
    {
      icon: Gauge,
      title: 'Speed',
      description: 'We work in focused sprints to get useful software into your hands quickly.',
    },
    {
      icon: Heart,
      title: 'Customer-first',
      description: 'Your goals come first. We build what helps your business, not what is trendy.',
    },
  ],
  teamTitle: 'Meet the team',
  teamSubtitle: 'The people who will design, build, and support your software.',
  // PLACEHOLDER: replace names, roles, bios, and photos (put photos in /public/images/team/)
  team: [
    {
      name: 'Team Member Name',
      role: 'Founder & Lead Developer',
      bio: 'Full-stack developer who loves turning messy business processes into simple, reliable software.',
      image: '/images/team/member-1.svg',
    },
    {
      name: 'Team Member Name',
      role: 'UI/UX Designer',
      bio: 'Designs clean, accessible interfaces and makes sure every screen feels easy to use.',
      image: '/images/team/member-2.svg',
    },
    {
      name: 'Team Member Name',
      role: 'Mobile Developer',
      bio: 'Builds smooth, fast iOS and Android apps with Flutter, from first prototype to app store launch.',
      image: '/images/team/member-3.svg',
    },
    {
      name: 'Team Member Name',
      role: 'Project Manager',
      bio: 'Keeps projects on time and on budget, and makes sure you always know what is happening next.',
      image: '/images/team/member-4.svg',
    },
  ],
}

/* ---------------------------------------------------------------------------
 * CONTACT PAGE
 * ------------------------------------------------------------------------- */
export const contactPage = {
  eyebrow: 'Contact',
  title: "Let's Talk About Your Project",
  subtitle: "Tell us a little about what you need. We'll get back to you within one business day with next steps.",
  formTitle: 'Send us a message',
  detailsTitle: 'Other ways to reach us',
  hoursTitle: 'Working hours',
  socialTitle: 'Follow us',
  mapTitle: 'Find us',
  mapNote: 'Map coming soon. Meetings are available in person or online.',
  form: {
    name: { label: 'Full name', placeholder: 'Jane Smith' },
    email: { label: 'Email address', placeholder: 'jane@company.com' },
    phone: {
      label: 'Phone number',
      placeholder: '+94 (072) 283 5912',
      optional: '(optional)',
    },
    service: {
      label: 'Service you are interested in',
      placeholder: 'Select a service',
    },
    message: {
      label: 'Tell us about your project',
      placeholder: 'What would you like to build? Any deadlines or budget in mind?',
    },
    otherService: 'Not sure yet / Other',
    submit: 'Send Message',
    sending: 'Sending...',
    privacyNote: 'We will only use your details to reply to your inquiry.',
    success: {
      title: 'Thank you! Your message has been sent.',
      body: "We'll review your project details and reply within one business day.",
      again: 'Send another message',
    },
    errors: {
      nameRequired: 'Please enter your name.',
      emailRequired: 'Please enter your email address.',
      emailInvalid: 'Please enter a valid email address, like name@company.com.',
      phoneInvalid: 'Please enter a valid phone number.',
      serviceRequired: 'Please choose a service, or select "Not sure yet".',
      messageRequired: 'Please tell us a little about your project.',
      messageShort: 'Please add a bit more detail (at least 20 characters).',
      summary: 'Please fix the highlighted fields and try again.',
    },
  },
}

/* ---------------------------------------------------------------------------
 * FOOTER
 * ------------------------------------------------------------------------- */
export const footer = {
  description:
    'We design and build custom web apps, mobile apps, and software solutions that help small and medium businesses work smarter and grow faster.',
  quickLinksTitle: 'Quick links',
  servicesTitle: 'Services',
  contactTitle: 'Contact',
  legal: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms of Service', to: '/terms' },
  ],
}

/* ---------------------------------------------------------------------------
 * LEGAL PAGES
 * PLACEHOLDER: these are generic templates. Have them reviewed by a legal
 * professional for your country before going live.
 * ------------------------------------------------------------------------- */
export type LegalSection = { heading: string; body: string[] }

export const privacyPolicy = {
  title: 'Privacy Policy',
  updated: 'Last updated: October 4, 2026',
  intro:
    'This Privacy Policy explains how Stride Forward Technology ("we", "us", "our") collects, uses, and protects your information when you visit our website or contact us.',
  sections: [
    {
      heading: '1. Information we collect',
      body: [
        'Information you give us: when you fill in our contact form or email us, we collect your name, email address, phone number (if provided), and the details of your inquiry.',
        'Information collected automatically: like most websites, we may collect basic technical data such as browser type, device, and pages visited, to understand how the site is used.',
      ],
    },
    {
      heading: '2. How we use your information',
      body: [
        'We use your information to reply to your inquiry, prepare quotes, deliver our services, and improve our website. We do not sell your personal information.',
      ],
    },
    {
      heading: '3. Cookies and analytics',
      body: [
        'We may use cookies and privacy-friendly analytics tools to measure website traffic. You can disable cookies in your browser settings at any time.',
      ],
    },
    {
      heading: '4. Sharing your information',
      body: [
        'We only share information with trusted service providers who help us run our business (such as email or hosting providers), and only as needed to provide our services, or when required by law.',
      ],
    },
    {
      heading: '5. Data security and retention',
      body: [
        'We take reasonable technical and organizational measures to protect your information, and we keep it only as long as needed for the purposes described in this policy.',
      ],
    },
    {
      heading: '6. Your rights',
      body: [
        'You can ask us to access, correct, or delete your personal information at any time by contacting us at the email address below.',
      ],
    },
    {
      heading: '7. Contact us',
      body: ['If you have any questions about this policy, email us at Info@strideforwardtech.com.'],
    },
  ] as LegalSection[],
}

export const termsOfService = {
  title: 'Terms of Service',
  updated: 'Last updated: October 4, 2026',
  intro:
    'These Terms of Service govern your use of the Stride Forward Technology website. By using this site, you agree to these terms.',
  sections: [
    {
      heading: '1. Use of this website',
      body: [
        'You may use this website for lawful purposes only. You agree not to misuse the site, attempt to gain unauthorized access, or interfere with its operation.',
      ],
    },
    {
      heading: '2. Our services',
      body: [
        'Information on this website describes our services in general terms. The scope, price, timeline, and ownership terms of any project are set out in a separate written agreement between you and us.',
      ],
    },
    {
      heading: '3. Intellectual property',
      body: [
        'The content of this website, including text, graphics, and logos, belongs to Stride Forward Technology unless stated otherwise, and may not be copied without permission.',
      ],
    },
    {
      heading: '4. Limitation of liability',
      body: [
        'This website is provided "as is". We do our best to keep information accurate, but we are not liable for any loss arising from your use of the website.',
      ],
    },
    {
      heading: '5. Changes to these terms',
      body: ['We may update these terms from time to time. The latest version will always be available on this page.'],
    },
    {
      heading: '6. Contact us',
      body: ['Questions about these terms? Email us at Info@strideforwardtech.com.'],
    },
  ] as LegalSection[],
}

export const notFoundPage = {
  title: 'Page not found',
  body: "Sorry, we couldn't find the page you were looking for. It may have moved or no longer exists.",
  cta: 'Back to home',
}
