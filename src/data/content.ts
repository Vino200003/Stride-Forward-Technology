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
    { name: 'LinkedIn', href: 'https://www.linkedin.com/' },
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
}

export const services: Service[] = [
  {
    id: 'custom-software',
    title: 'Custom Software',
    icon: Braces,
    featured: true,
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

export const technologies = {
  eyebrow: 'Technologies',
  title: 'Modern, proven tools',
  subtitle: 'We pick reliable technology that is fast, secure, and easy to hire for later.',
  // `color` is the tile accent. Icons are generic lucide icons; swap for official logos if you like.
  items: [
    { name: 'React', icon: Atom, color: '#149eca', use: 'Web apps' },
    { name: 'Node.js', icon: Hexagon, color: '#3c873a', use: 'APIs & servers' },
    { name: 'Python', icon: Code, color: '#3776ab', use: 'Automation & data' },
    { name: 'Flutter', icon: Smartphone, color: '#0468d7', use: 'Mobile apps' },
    { name: 'Azure', icon: Cloud, color: '#0078d4', use: 'Cloud hosting' },
    { name: 'PostgreSQL', icon: Database, color: '#336791', use: 'Databases' },
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
  title: 'Software services that grow with you',
  subtitle:
    'Whether you need a website, an app, or a tool to run your business better, we build it for you and support it after launch.',
  detailsTitle: 'A closer look at what we do',
  includesLabel: "What's included",
  quoteLabel: 'Get a quote for this',
}

/* ---------------------------------------------------------------------------
 * PORTFOLIO PAGE
 * ------------------------------------------------------------------------- */
export type ProjectCategory = 'Web' | 'Mobile' | 'Design'

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  image: string // path inside /public - replace the SVG placeholders with real screenshots
  imageAlt: string
  problem: string
  solution: string
  result: string
  tags?: string[] // optional tech stack, shown over the image
}

export const portfolioPage = {
  eyebrow: 'Portfolio',
  title: "Software we've built",
  subtitle:
    'A selection of systems we have designed and developed, from online ordering and reservations to inventory and fleet management.',
  filters: ['All', 'Web', 'Mobile', 'Design'] as const,
  labels: {
    problem: 'The challenge',
    solution: 'What we built',
    result: 'Key features',
  },
  empty: 'No projects in this category yet.',
}

export const projects: Project[] = [
  {
    id: 'restaurant-system',
    title: 'Restaurant Food Delivery & Reservation System',
    category: 'Web',
    image: '/images/portfolio/food-delivery.svg',
    imageAlt: 'Illustration of a restaurant ordering screen and a delivery tracking map',
    problem:
      'Running orders, table bookings, the kitchen, and deliveries from separate tools made a busy restaurant hard to manage.',
    solution:
      'An end-to-end restaurant management platform with separate customer, admin, kitchen, and delivery portals.',
    result:
      'Food ordering, table reservations, menu management, delivery assignments, order tracking, analytics, and automated notifications.',
  },
  {
    id: 'shopease',
    title: 'ShopEase – E-Commerce Web Application',
    category: 'Web',
    image: '/images/portfolio/ecommerce-store.svg',
    imageAlt: 'Illustration of an online store product page with a cart button',
    problem: 'A store needed a simple way to sell online while keeping full control of its product catalog.',
    solution:
      'A role-based e-commerce platform where administrators manage products and customers browse and place orders.',
    result: 'Secure user access, session management, and automated order-confirmation notifications.',
  },
  {
    id: 'bus-reservation',
    title: 'Bus Reservation Web Application',
    category: 'Web',
    image: '/images/portfolio/bus-reservation.svg',
    imageAlt: 'Illustration of a bus route search form next to a seat selection map',
    problem:
      'Passengers needed to book seats without queuing, and operators needed one place to manage routes and schedules.',
    solution: 'An online bus booking system with an admin dashboard for managing routes, schedules, and bookings.',
    result: 'Route search, booking management, and automated email notifications.',
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management System',
    category: 'Web',
    image: '/images/portfolio/inventory-dashboard.svg',
    imageAlt: 'Illustration of an inventory dashboard with stock summary cards and charts',
    problem: 'Keeping track of products, stock levels, and suppliers by hand is slow and leads to mistakes.',
    solution: 'An inventory management system for products, stock levels, suppliers, and inventory transactions.',
    result: 'Stock monitoring, product management, and streamlined day-to-day inventory operations.',
  },
  {
    id: 'vehicle-tracker',
    title: 'Vehicle Tracker System',
    category: 'Web',
    image: '/images/portfolio/vehicle-tracker.svg',
    imageAlt: 'Illustration of a map with a vehicle route next to a list of vehicles and their status',
    problem:
      'Vehicle records and trip details spread across different places made it hard to see what each vehicle was doing.',
    solution: 'A vehicle tracking and management system that keeps vehicle records and trip information in one place.',
    result: 'Vehicle monitoring, vehicle records, trip tracking, and centralized tracking of vehicle activities.',
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
