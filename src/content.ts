// All the editable copy for the page lives here.
export const content = {
  name: {
    first: 'MAVERICK',
    last: 'SMITH',
  },
  role: {
    line1: 'SOFTWARE',
    line2: 'ENGINEER',
  },
  blurb: [
    'Software engineer based in',
    'Linz, Austria, from Iran.',
    'I build with PHP, Java, JS —',
    'and lead as a Scrum Master',
  ],
  whatIDo:
    'I build reliable, well-tested software — from front-end interfaces to back-end systems',
  services: ['PHP', 'Java', 'JavaScript / TypeScript', 'MySQL', 'Angular', 'HTML & CSS'],
  navLinks: ['ABOUT', 'SKILLS', 'EXPERIENCE', 'CONTACT'],
  credentials: [
    {
      label: 'SCRUM MASTER',
      sublabel: 'Certified',
      className: 'font-bold text-xs sm:text-sm tracking-tight',
    },
    {
      label: 'FULL-STACK DEV',
      sublabel: 'WIFI Linz',
      className: 'font-bold text-[10px] sm:text-xs tracking-tight',
    },
    {
      label: 'FA / DE / EN',
      sublabel: 'Fluent',
      className: 'font-bold text-xs sm:text-sm tracking-tight',
    },
  ],
  footerStats: 'Linz, Austria  •  Fluent in Persian, German & English',
  scheduleCallHref: 'https://wa.me/436801417634',
  heroImageSrc: `${import.meta.env.BASE_URL}hero-photo.jpg`,
  resumeSrc: `${import.meta.env.BASE_URL}resume.pdf`,
}
