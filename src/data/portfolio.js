// Portfolio data – edit this file to update your site

export const profile = {
  name: 'Menatalla Gomaa',
  tagline: 'Building performant, accessible web experiences.',
  location: 'Germany',
  email: 'minafathi98@gmail.com',
  phone: '+49 176 23423163',
  linkedin: 'https://www.linkedin.com/in/menatalla-gomaa-0703mg/',
  github: 'https://github.com/MenatallaGomaa',
  image: '/Linkedin Pic.jpeg',
  cvUrl: null, // optional: add URL to your CV PDF, e.g. '/cv.pdf'
}

export const about = {
  headline: 'About me',
  paragraphs: [
    'I’m a developer who loves turning ideas into clear, usable products. I focus on clean code, thoughtful UX, and shipping things that work.',
    'When I’m not coding, I enjoy learning new tools and approaches and contributing to projects that make a difference.',
  ],
}

export const experience = [
  {
    role: 'Frontend Engineer',
    company: 'Mercanis',
    period: 'Feb 2026 – Present',
    description: [
      'Building core product features with SvelteKit, TypeScript, and Tailwind.',
      'Improving and scaling a modular frontend architecture.',
      'Collaborating through code reviews, pairing, and technical discussions.',
      'Driving improvements in performance, accessibility, and developer experience.',
    ],
    tags: ['SvelteKit', 'TypeScript', 'Tailwind', 'Jira'],
  },
  {
    role: 'Frontend Developer',
    company: 'BudnBed',
    period: 'Nov 2025 – Jan 2026',
    description: [
      'Translating the vision of a student-owned economy into clear, intuitive user interfaces.',
      'Building trust-first UX for student-to-student stays and hangouts.',
      'Developing and iterating on core product features from early concepts to production.',
      'Collaborating closely with product and design in a fast-moving startup environment.',
      'Focusing on usability, performance, and simplicity across the frontend.',
      'Laying scalable foundations for growth while keeping the product human and accessible.',
    ],
    tags: ['Front-End Development', 'APIs', 'UX', 'Startup'],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'LEAP Digital Marketing GmbH',
    period: 'Apr 2025 – Nov 2025',
    description: [
      'Developed frontend features using JavaScript, HTML, and CSS for large-scale e-commerce websites.',
      'Built and executed A/B & multivariate tests using the Kameleoon experimentation platform.',
      'Analyzed test results to identify UX improvements and measurable business impact.',
      'Implemented tracking & personalization logic, improving user journeys and engagement.',
      'Collaborated closely with UX designers, analysts, and CRO managers in an agile team.',
      'Optimized performance and accessibility, ensuring fast and user-friendly experiences.',
      'Debugged client-side issues and delivered stable, clean and maintainable code.',
    ],
    tags: ['JavaScript', 'HTML & CSS', 'A/B Testing', 'Kameleoon', 'Agile'],
  },
  {
    role: 'Full-Stack Development Instructor',
    company: 'ReDI School of Digital Integration',
    period: 'Sep 2024 – Dec 2024',
    description: [
      'Taught Full-Stack Web Development with a focus on frontend technologies (HTML, CSS, JavaScript, React) to women with forced migration backgrounds.',
      'Empowered students by fostering technical skills and confidence to help them transition into the tech industry.',
      'Leveraged my personal journey from Sales to Full-Stack Development to mentor and inspire students navigating their own career changes.',
      'Collaborated with a diverse community of volunteers to create a supportive and inclusive learning environment.',
      'Contributed to bridging the digital skills gap and supporting refugee women\'s integration into the tech workforce.',
    ],
    tags: ['Teaching', 'React', 'JavaScript', 'Mentoring'],
  },
  {
    role: 'Software Developer',
    company: 'COLNEO GmbH',
    period: 'Aug 2024 – Oct 2024',
    description: [
      'Translated Figma designs into responsive, pixel-perfect interfaces.',
      'Integrated REST APIs and ensured stable, efficient data flow.',
      'Applied modern JavaScript best practices for cleaner, more maintainable code.',
    ],
    tags: ['JavaScript', 'Figma', 'REST APIs'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Freelance',
    period: 'Jan 2024 – Jul 2024',
    description: 'Freelance full-stack development projects across the stack.',
    tags: ['Full-Stack', 'JavaScript', 'React'],
  },
  {
    role: 'Sales Support Associate',
    company: 'SoftwareOne',
    period: 'Apr 2023 – Sep 2023',
    description: 'Sales coordination with the sales team: order processing, quote generation, and documentation management. Used Microsoft Dynamics NAV (ERP) and ServiceNow for workflows and ticket management. Primary point of contact for customer inquiries, data management, and administrative support including calendar management, meeting coordination, and sales reports. Collaborated with marketing and logistics to meet customer needs.',
    tags: ['Sales Coordination', 'CRM', 'ServiceNow', 'Microsoft Dynamics', 'B2B'],
  },
  {
    role: 'Sales Representative',
    company: 'Pathus Beteiligungsgesellschaft GmbH',
    period: 'Aug 2019 – Mar 2023',
    description: 'Customer engagement, product information, and positive in-store experience. Met and exceeded sales targets through effective sales techniques and upselling. Contributed to visual merchandising, inventory management, and stock checks. Handled customer concerns and collaborated with team and management to achieve store goals.',
    tags: ['Customer Service', 'Sales', 'Team Collaboration', 'Problem Solving'],
  },
]

export const projects = [
  {
    title: 'Bella Biladi Pizzeria',
    description: 'Fully responsive website for Bella Biladi Pizzeria with UI/UX from Figma, Node.js/Express backend for reservation inquiries, Google Maps API integration, and mobile optimization.',
    link: 'https://github.com/MenatallaGomaa',
    liveUrl: 'https://bellabiladipizzeria.com/',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Figma', 'Google Maps API'],
  },
  {
    title: 'DriveEase',
    description: 'Car rental web application with an intuitive UI and seamless booking experience. Implemented JWT authentication for secure user accounts.',
    link: 'https://github.com/MenatallaGomaa',
    liveUrl: 'https://main--driveease.netlify.app/',
    tags: ['React.js', 'Tailwind CSS', 'JWT'],
  },
  {
    title: 'Homyz Real Estate',
    description: 'Real estate site with an intuitive search to filter by location, price, and features. Detailed property listings with comprehensive info and images, increasing user interaction by 30%.',
    link: 'https://github.com/MenatallaGomaa',
    liveUrl: 'https://main--homyzrealestatewebsie.netlify.app/',
    tags: ['React.js', 'JavaScript'],
  },
  {
    title: 'EvoGym',
    description: 'Fitness web application with a component-based architecture. TypeScript for static typing and reliability, responsive UI with Tailwind CSS, increasing mobile usage by 25%.',
    link: 'https://github.com/MenatallaGomaa',
    liveUrl: 'https://evogymproject.netlify.app/',
    tags: ['TypeScript', 'React.js', 'Tailwind CSS'],
  },
]

export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'SvelteKit',
  'Vue.js',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Git',
  'REST APIs',
  'Figma',
  'A/B Testing',
  'Agile',
  'Node.js',
  'Responsive Design',
  'Accessibility',
  'Performance',
  'UX Design',
  'Code Review',
  'Jira',
]
