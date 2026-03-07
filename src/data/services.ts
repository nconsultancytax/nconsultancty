export interface Service {
  id: number
  name: string
  slug: string
  category: 'tax' | 'registration' | 'accounting'
  icon: string // Lucide icon name
  shortDesc: string
  fullDesc: string
  inclusions: string[]
}

export const services: Service[] = [
  {
    id: 1,
    name: 'GST Registration & Filing',
    slug: 'gst-registration-filing',
    category: 'tax',
    icon: 'FileText',
    shortDesc: 'GST registration and accurate monthly/quarterly return filings.',
    fullDesc: 'Goods and Services Tax (GST) compliance is mandatory for most businesses in India. We manage the complete process — from initial GST registration to ongoing return filings — so your business stays compliant without the stress.',
    inclusions: [
      'New GST registration',
      'GST return filing',
      'GST Compliances and advisory',
      'GST Assessment support',
    ],
  },
  {
    id: 2,
    name: 'Income Tax Return (ITR)',
    slug: 'income-tax-return',
    category: 'tax',
    icon: 'Calculator',
    shortDesc: 'ITR filing for salaried individuals, professionals, and businesses.',
    fullDesc: 'Comprehensive Income Tax Return (ITR) services for individuals, self-employed professionals, and businesses. Services include accurate preparation and timely filing of tax returns, review and rectification of previous filings, tax planning and advisory, assistance with notices and audits, and guidance on exemptions, deductions, and compliance with current income tax regulations. Designed to ensure accuracy, confidentiality, and optimized tax outcomes.',
    inclusions: [
      'Income Tax Return (ITR) filing',
      'Tax planning and advisory',
      'TDS and compliance',
      'Business and professional taxation',
      'Notice handling and response support',
    ],
  },
  {
    id: 3,
    name: 'TDS / TCS Filing',
    slug: 'tds-tcs-filing',
    category: 'tax',
    icon: 'FileCheck',
    shortDesc: 'TDS/TCS computation and on-time quarterly return filing.',
    fullDesc: 'Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) compliance is mandatory for businesses and employers who make specified payments. We handle all computations, quarterly return filings, and the issuance of Form 16 and 16A — keeping your business fully compliant.',
    inclusions: [
      'TDS computation and deduction advisory',
      'Quarterly TDS return filing (Form 24Q, 26Q, 27Q)',
      'TCS return filing (Form 27EQ)',
      'Form 16 / 16A generation and issuance',
    ],
  },
  {
    id: 4,
    name: 'Financial Reports',
    slug: 'financial-reports',
    category: 'accounting',
    icon: 'BarChart3',
    shortDesc: 'Financial statements for banks, investors, and compliance.',
    fullDesc: 'Accurate financial reports are the cornerstone of any credible business. Whether you need them to secure a bank loan, present to investors, or meet regulatory requirements, we prepare professional financial statements that are thorough, compliant, and ready to present.',
    inclusions: [
      'Balance Sheet',
      'Profit & Loss Statement',
      'Cash Flow Statement',
      'Audited financials for bank loan applications',
    ],
  },
  {
    id: 5,
    name: 'Accounting & Bookkeeping',
    slug: 'accounting-bookkeeping',
    category: 'accounting',
    icon: 'BookOpen',
    shortDesc: 'Organised, accurate books of accounts for your business.',
    fullDesc: 'Proper bookkeeping is the foundation of every financially healthy business. We maintain organised, accurate, and up-to-date books of accounts — giving you a clear picture of your business finances at any point in time, and keeping you audit-ready.',
    inclusions: [
      'Day-to-day transaction recording',
      'Ledger maintenance',
      'Bank reconciliation',
      'Monthly and quarterly financial summaries',
    ],
  },
  {
    id: 6,
    name: 'Company Registration',
    slug: 'company-registration',
    category: 'registration',
    icon: 'Building2',
    shortDesc: 'Private Limited, OPC, or other company incorporation with MCA.',
    fullDesc: 'Starting a company is an exciting step — and it begins with getting the paperwork right. We manage the complete MCA (Ministry of Corporate Affairs) incorporation process, from name reservation to your Certificate of Incorporation, so you can focus on building your business.',
    inclusions: [
      'Private Limited Company registration',
      'One Person Company (OPC) registration',
      'Section 8 (NGO) company registration',
      'DIN, DSC, and MOA/AOA drafting',
    ],
  },
  {
    id: 7,
    name: 'Firm Registration',
    slug: 'firm-registration',
    category: 'registration',
    icon: 'Handshake',
    shortDesc: 'Partnership or Proprietorship firm registration.',
    fullDesc: 'Whether you are starting a partnership firm or setting up a sole proprietorship, we handle the complete registration process and provide all the documentation you need — from partnership deed drafting to bank account opening requirements.',
    inclusions: [
      'Partnership firm registration',
      'Proprietorship firm setup',
      'Partnership deed drafting',
    ],
  },
  {
    id: 8,
    name: 'IE Code Registration',
    slug: 'ie-code-registration',
    category: 'registration',
    icon: 'Globe',
    shortDesc: 'Import Export Code (IEC) for international trade.',
    fullDesc: 'An Import Export Code (IEC) is a mandatory 10-digit code required for any business or individual importing or exporting goods and services from India. We handle the DGFT portal application and documentation on your behalf — so your global trade ambitions are never delayed by paperwork.',
    inclusions: [
      'IEC application filing with DGFT',
      'Document preparation and submission',
      'IEC modification or update (if needed)',
    ],
  },
  {
    id: 9,
    name: 'MSME (Udyam) Registration',
    slug: 'msme-udyam-registration',
    category: 'registration',
    icon: 'Award',
    shortDesc: 'Udyam Registration for government schemes and subsidies.',
    fullDesc: 'Udyam Registration (formerly Udyog Aadhaar) officially classifies your business as a Micro, Small, or Medium Enterprise — unlocking a wide range of government subsidies, priority sector lending, lower trademark fees, and protection against delayed payments.',
    inclusions: [
      'Udyam Registration filing',
      'MSME certificate',
      'Update or amendment of existing registration',
    ],
  },
  {
    id: 10,
    name: 'DSC (Digital Signature Certificate)',
    slug: 'dsc-digital-signature',
    category: 'registration',
    icon: 'KeyRound',
    shortDesc: 'Digital Signature Certificate for e-filings and portals.',
    fullDesc: 'A Digital Signature Certificate (DSC) is required for MCA filings, GST registration, income tax return submissions, and numerous other government portals. We help you obtain your Class 2 or Class 3 DSC quickly and hassle-free.',
    inclusions: [
      'Class 2 DSC (for income tax and GST filings)',
      'Class 3 DSC (for MCA and company-related filings)',
      'DSC for individuals and organisations',
    ],
  },
  {
    id: 11,
    name: 'PAN & TAN Registration',
    slug: 'pan-tan-registration',
    category: 'registration',
    icon: 'CreditCard',
    shortDesc: 'PAN or TAN application for individuals or businesses.',
    fullDesc: 'A Permanent Account Number (PAN) is essential for all financial transactions in India. A Tax Deduction Account Number (TAN) is required for any business that deducts TDS. We handle both applications — and related corrections or updates — efficiently on your behalf.',
    inclusions: [
      'New PAN application (Form 49A / 49AA)',
      'PAN correction or update',
      'TAN application (Form 49B)',
      'Aadhaar-PAN linking assistance',
    ],
  },
  {
    id: 12,
    name: 'Trademark Registration',
    slug: 'trademark-registration',
    category: 'registration',
    icon: 'Shield',
    shortDesc: 'Protect your brand with official trademark registration.',
    fullDesc: 'Your brand is your identity — and it deserves legal protection. Trademark registration with Intellectual Property India gives you exclusive rights over your business name, logo, and tagline, protecting them from unauthorised use by competitors.',
    inclusions: [
      'Trademark availability search',
      'Trademark application filing',
      'Response to examination reports',
      'Trademark renewal',
    ],
  },
]

export const serviceCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'tax', label: 'Tax & Compliance' },
  { id: 'registration', label: 'Registrations' },
  { id: 'accounting', label: 'Accounting' },
] as const

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getServicesByCategory(category: string): Service[] {
  if (category === 'all') return services
  return services.filter((s) => s.category === category)
}

export function getRelatedServices(currentSlug: string, limit = 3): Service[] {
  const current = getServiceBySlug(currentSlug)
  if (!current) return services.slice(0, limit)
  return services
    .filter((s) => s.slug !== currentSlug && s.category === current.category)
    .slice(0, limit)
}
