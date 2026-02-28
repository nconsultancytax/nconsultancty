export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us/' },
  {
    label: 'Services',
    href: '/services/',
    children: [
      // Tax & Compliance
      { label: 'GST Registration & Filing', href: '/services/gst-registration-filing/' },
      { label: 'Income Tax Return (ITR)', href: '/services/income-tax-return/' },
      { label: 'TDS / TCS Filing', href: '/services/tds-tcs-filing/' },
      { label: 'Financial Reports', href: '/services/financial-reports/' },
      { label: 'Accounting & Bookkeeping', href: '/services/accounting-bookkeeping/' },
      // Registrations
      { label: 'Company Registration', href: '/services/company-registration/' },
      { label: 'Firm Registration', href: '/services/firm-registration/' },
      { label: 'IE Code Registration', href: '/services/ie-code-registration/' },
      { label: 'MSME (Udyam) Registration', href: '/services/msme-udyam-registration/' },
      { label: 'DSC (Digital Signature)', href: '/services/dsc-digital-signature/' },
      { label: 'PAN & TAN Registration', href: '/services/pan-tan-registration/' },
      { label: 'Trademark Registration', href: '/services/trademark-registration/' },
    ],
  },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
]

export const dropdownGroups = [
  {
    heading: 'Tax & Compliance',
    items: [
      { label: 'GST Registration & Filing', href: '/services/gst-registration-filing/' },
      { label: 'Income Tax Return (ITR)', href: '/services/income-tax-return/' },
      { label: 'TDS / TCS Filing', href: '/services/tds-tcs-filing/' },
      { label: 'Financial Reports', href: '/services/financial-reports/' },
      { label: 'Accounting & Bookkeeping', href: '/services/accounting-bookkeeping/' },
    ],
  },
  {
    heading: 'Registrations',
    items: [
      { label: 'Company Registration', href: '/services/company-registration/' },
      { label: 'Firm Registration', href: '/services/firm-registration/' },
      { label: 'IE Code Registration', href: '/services/ie-code-registration/' },
      { label: 'MSME (Udyam) Registration', href: '/services/msme-udyam-registration/' },
      { label: 'DSC (Digital Signature)', href: '/services/dsc-digital-signature/' },
      { label: 'PAN & TAN Registration', href: '/services/pan-tan-registration/' },
      { label: 'Trademark Registration', href: '/services/trademark-registration/' },
    ],
  },
]

export const footerQuickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Services', href: '/services/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact Us', href: '/contact/' },
]

export const footerServiceLinks = [
  { label: 'GST Registration & Filing', href: '/services/gst-registration-filing/' },
  { label: 'Income Tax Return', href: '/services/income-tax-return/' },
  { label: 'TDS / TCS Filing', href: '/services/tds-tcs-filing/' },
  { label: 'Company Registration', href: '/services/company-registration/' },
  { label: 'MSME Registration', href: '/services/msme-udyam-registration/' },
  { label: 'Trademark Registration', href: '/services/trademark-registration/' },
]

export const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms of Use', href: '/terms-of-use/' },
  { label: 'Disclaimer', href: '/disclaimer/' },
  { label: 'Refund & Cancellation', href: '/refund-cancellation-policy/' },
]

export const contactInfo = {
  phone: '+91 7502979296',
  phoneHref: 'tel:+917502979296',
  whatsappNumber: '917502979296',
  email: 'nconsultancy.tax@gmail.com',
  address: 'L-71, PCM Complex, Koottappalli Colony, Thiruchengodu, Namakkal \u2013 637214, Tamil Nadu',
  officeHours: {
    weekdays: 'Mon \u2013 Sat: 9:00 AM \u2013 6:00 PM',
    weekend: 'Sun: WhatsApp only',
  },
}
