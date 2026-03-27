export interface FaqItem {
  id: string
  question: string
  answer: string
  category: 'income-tax' | 'gst' | 'registration' | 'general'
}

export const faqs: FaqItem[] = [
  // --- General: entry-level questions people ask before engaging ---
  {
    id: 'q1',
    question: 'How do I get started?',
    answer: 'Getting started is simple. Call or WhatsApp us at +91 9080896994, or fill out the contact form on this page. We will get back to you promptly, understand your needs, and recommend the right service for you \u2014 no jargon, no pressure.',
    category: 'general',
  },
  {
    id: 'q2',
    question: 'How can I contact your consultancy?',
    answer: 'You can contact us through phone, email, or the contact form on our website, and our team will assist you promptly.',
    category: 'general',
  },
  {
    id: 'q3',
    question: 'Can I avail your services if I am outside Tamil Nadu?',
    answer: 'Absolutely. All our services are delivered 100% online. We serve clients across India \u2014 no physical visit to our office is required at any stage of the process.',
    category: 'general',
  },
  {
    id: 'q4',
    question: 'Is my financial information secure with you?',
    answer: 'Yes, we maintain strict confidentiality and ensure your financial data is handled securely. All information shared with us is used solely for the purpose of delivering your requested service.',
    category: 'general',
  },
  {
    id: 'q5',
    question: 'What are your service charges?',
    answer: 'Our pricing is competitive and transparent. The exact fee depends on the type of service required. Please contact us with your specific requirement and we will provide a clear quote upfront.',
    category: 'general',
  },
  // --- Income Tax: basic eligibility → documents → filing → post-filing → advanced ---
  {
    id: 'q6',
    question: 'Is filing an Income Tax Return (ITR) mandatory for me?',
    answer: 'ITR filing is mandatory if your total annual income exceeds \u20B92.5 lakh (if you are under 60 years), \u20B93 lakh (if you are between 61 and 80 years), or \u20B95 lakh (if you are above 80 years). Even if your income is below these limits, filing an ITR is strongly recommended \u2014 it helps you claim refunds, prove your income, and build a financial record.',
    category: 'income-tax',
  },
  {
    id: 'q7',
    question: 'What documents do I need to file my ITR?',
    answer: 'The documents required depend on your income type. Typically you will need: PAN card, Aadhaar card, Form 16 (for salaried individuals), bank statements, investment proofs for deductions, and the previous year\u2019s ITR (if applicable). Once you get in touch, we will guide you on the exact documents needed for your specific case.',
    category: 'income-tax',
  },
  {
    id: 'q8',
    question: 'How can I send my documents for tax filing?',
    answer: 'You can send your documents online through email, WhatsApp, or secure digital platforms. Our team will guide you on the preferred method once you get in touch.',
    category: 'income-tax',
  },
  {
    id: 'q9',
    question: 'Can you help if I missed filing my Income Tax Return in previous years?',
    answer: 'Yes, we can help you file pending returns and guide you through the process. Filing belated or updated returns can help you avoid penalties and maintain a clean tax record.',
    category: 'income-tax',
  },
  {
    id: 'q10',
    question: 'Do you provide support after filing tax returns?',
    answer: 'Yes, we provide post-filing support and assistance if any queries arise, including help with notices, refund tracking, or any follow-up required by the tax department.',
    category: 'income-tax',
  },
  {
    id: 'q11',
    question: 'Do you provide consultation for tax planning?',
    answer: 'Yes, we provide tax planning and financial guidance to help you manage taxes efficiently, make the most of available deductions, and plan your finances for the year ahead.',
    category: 'income-tax',
  },
  // --- GST: what it is → how long it takes ---
  {
    id: 'q12',
    question: 'What is GST registration and who needs it?',
    answer: 'GST registration is required for businesses whose turnover exceeds the prescribed limit or who sell goods or services online. It enables you to legally collect GST and claim input tax credits.',
    category: 'gst',
  },
  {
    id: 'q13',
    question: 'How long does GST registration take?',
    answer: 'GST registration is typically completed within 7 to 10 working days. This timeline is subject to the government portal\u2019s processing speed and the accuracy of the documents submitted. We ensure your application is submitted correctly the first time to avoid unnecessary delays.',
    category: 'gst',
  },
  // --- Registration: broad → specific → technical/specialist ---
  {
    id: 'q14',
    question: 'Can you help start a new business or register a firm?',
    answer: 'Yes. We provide business registration services including proprietorship registration, MSME registration, and other compliance services to help you get your business up and running smoothly.',
    category: 'registration',
  },
  {
    id: 'q15',
    question: 'Do you help with PAN or other financial registrations?',
    answer: 'Yes, we assist with PAN-related services and other financial registrations as required, ensuring the process is completed accurately and without delays.',
    category: 'registration',
  },
  {
    id: 'q16',
    question: 'What are the benefits of MSME (Udyam) registration?',
    answer: 'MSME registration opens the door to a wide range of government benefits \u2014 including subsidies, priority sector bank lending, lower fees on trademark and patent filings, legal protection against delayed payments, and eligibility for various government schemes designed to support small businesses.',
    category: 'registration',
  },
  {
    id: 'q17',
    question: 'Do you provide accounting services for businesses?',
    answer: 'Yes. We provide bookkeeping, accounting, and financial record management services for businesses and professionals to keep your finances organised and compliant.',
    category: 'general',
  },
  {
    id: 'q18',
    question: 'Do I need a Digital Signature Certificate (DSC) for company registration?',
    answer: 'Yes. A Class 3 Digital Signature Certificate is mandatory for all proposed directors and shareholders during the company incorporation process on the MCA portal. We can assist you with obtaining your DSC as part of the company registration package.',
    category: 'registration',
  },
  {
    id: 'q19',
    question: 'What is Trademark Registration and why is it important?',
    answer: 'Trademark registration gives your brand \u2014 its name, logo, or tagline \u2014 official legal protection in India. Once registered, no other business can legally use your brand identity. It is one of the most important steps any growing business can take to secure its reputation and commercial rights.',
    category: 'registration',
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
