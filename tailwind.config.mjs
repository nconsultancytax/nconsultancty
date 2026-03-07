/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:           '#0F172A',
        'navy-dark':    '#1E293B',
        amber:          '#CA8A04',
        'amber-dark':   '#A16207',
        'amber-darker': '#854D0E',
        'text-dark':    '#1F2937',
        'text-mid':     '#6B7280',
        'text-sub':     '#4B5563',
        'bg-light':     '#F9FAFB',
        'bg-grey':      '#F3F4F6',
        success:        '#10B981',
        error:          '#EF4444',
        info:           '#3B82F6',
        whatsapp:       '#25D366'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        tamil:   ['Noto Sans Tamil', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace']
      },
      spacing: {
        '18': '4.5rem',  // 72px — header height desktop
        '15': '3.75rem'  // 60px — header height mobile
      },
      maxWidth: {
        container: '1200px'
      },
      boxShadow: {
        sm:  '0 1px 3px rgba(0,0,0,0.08)',
        md:  '0 4px 12px rgba(0,0,0,0.10)',
        lg:  '0 8px 24px rgba(0,0,0,0.12)',
        xl:  '0 16px 40px rgba(0,0,0,0.15)',
        cta: '0 4px 16px rgba(202,138,4,0.35)',
        nav: '0 2px 8px rgba(0,0,0,0.08)',
        wa:  '0 4px 16px rgba(37,211,102,0.40)'
      },
      borderRadius: {
        DEFAULT:   '6px',
        card:      '12px',
        'card-lg': '16px',
        pill:      '9999px'
      },
      screens: {
        'xs':  '375px',  // Mobile M — primary mobile target
        'sm':  '414px',  // Mobile L
        'md':  '768px',  // Tablet
        'lg':  '1024px', // Desktop S
        'xl':  '1280px', // Desktop M — primary desktop target
        '2xl': '1440px', // Desktop L
        '3xl': '1920px'  // Desktop XL
      }
    }
  },
  plugins: []
}
