export interface FaqItem {
  id: string
  question: string
  answer: string
  category: 'income-tax' | 'gst' | 'registration' | 'general'
}

export const faqs: FaqItem[] = [
  {
    id: 'q1',
    question: 'Is filing an Income Tax Return (ITR) mandatory for me?',
    answer: 'ITR filing is mandatory if your total annual income exceeds \u20B92.5 lakh (if you are under 60 years), \u20B93 lakh (if you are between 61 and 80 years), or \u20B95 lakh (if you are above 80 years). Even if your income is below these limits, filing an ITR is strongly recommended \u2014 it helps you claim refunds, prove your income, and build a financial record.',
    category: 'income-tax',
  },
  {
    id: 'q2',
    question: 'Can I avail your services if I am outside Tamil Nadu?',
    answer: 'Absolutely. All our services are delivered 100% online. We serve clients across India \u2014 no physical visit to our office is required at any stage of the process.',
    category: 'general',
  },
  {
    id: 'q3',
    question: 'What documents do I need to file my ITR?',
    answer: 'The documents required depend on your income type. Typically you will need: PAN card, Aadhaar card, Form 16 (for salaried individuals), bank statements, investment proofs for deductions, and the previous year\u2019s ITR (if applicable). Once you get in touch, we will guide you on the exact documents needed for your specific case.',
    category: 'income-tax',
  },
  {
    id: 'q4',
    question: 'How long does GST registration take?',
    answer: 'GST registration is typically completed within 7 to 10 working days. This timeline is subject to the government portal\u2019s processing speed and the accuracy of the documents submitted. We ensure your application is submitted correctly the first time to avoid unnecessary delays.',
    category: 'gst',
  },
  {
    id: 'q5',
    question: 'What are the benefits of MSME (Udyam) registration?',
    answer: 'MSME registration opens the door to a wide range of government benefits \u2014 including subsidies, priority sector bank lending, lower fees on trademark and patent filings, legal protection against delayed payments, and eligibility for various government schemes designed to support small businesses.',
    category: 'registration',
  },
  {
    id: 'q6',
    question: 'Do I need a Digital Signature Certificate (DSC) for company registration?',
    answer: 'Yes. A Class 3 Digital Signature Certificate is mandatory for all proposed directors and shareholders during the company incorporation process on the MCA portal. We can assist you with obtaining your DSC as part of the company registration package.',
    category: 'registration',
  },
  {
    id: 'q7',
    question: 'What is Trademark Registration and why is it important?',
    answer: 'Trademark registration gives your brand \u2014 its name, logo, or tagline \u2014 official legal protection in India. Once registered, no other business can legally use your brand identity. It is one of the most important steps any growing business can take to secure its reputation and commercial rights.',
    category: 'registration',
  },
  {
    id: 'q8',
    question: 'How do I get started?',
    answer: 'Getting started is simple. Call or WhatsApp us at +91 9080896994, or fill out the contact form on this page. We will get back to you promptly, understand your needs, and recommend the right service for you \u2014 no jargon, no pressure.',
    category: 'general',
  },
]

export const faqCategories = [
  { id: 'all', label: 'All Questions' },
  { id: 'income-tax', label: 'Income Tax' },
  { id: 'gst', label: 'GST' },
  { id: 'registration', label: 'Registrations' },
  { id: 'general', label: 'General' },
] as const

export function getFaqsByCategory(category: string): FaqItem[] {
  if (category === 'all') return faqs
  return faqs.filter((f) => f.category === category)
}
