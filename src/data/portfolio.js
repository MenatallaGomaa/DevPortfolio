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
  lead: "I'm Mena — a frontend-leaning engineer who loves turning messy, real-world problems into clear, usable web experiences.",
  paragraphs: [
    "The web never stands still: problems evolve, tools improve, and there's always room to build something that actually helps. What drives me is solving real problems and seeing my work create impact beyond the screen.",
    "I moved into tech from sales, and that background still shapes how I work — strong product sense, clear communication, and a user-first lens on everything I build. I thrive in teams where ideas get challenged, refined, and turned into thoughtful, scalable solutions.",
    "I'm fluent in German and English and at ease in diverse, international teams. Curiosity, adaptability, and a habit of continuous learning sit at the heart of how I grow as an engineer.",
    "Right now I'm focused on building modern web applications with clean architecture, strong UX, and maintainable code — and I'm always curious about what's next.",
  ],
  skillsFocusTitle: 'Skills & Focus',
  skillsFocus: [
    { icon: '⚡', label: 'Frontend & Full-Stack Web Development' },
    { icon: '🧪', label: 'Testing, Debugging & Code Quality' },
    { icon: '🚀', label: 'Deployment, Tooling & Version Control (Git)' },
    { icon: '🧠', label: 'Problem Solving & Analytical Thinking' },
    { icon: '🤝', label: 'Collaboration, Communication & Teamwork' },
    { icon: '🎨', label: 'UX Awareness & Creative Thinking' },
    { icon: '📈', label: 'Ownership, Proactivity & Continuous Learning' },
    { icon: '♿', label: 'Accessibility & Inclusive Design' },
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

export const education = [
  {
    institution: 'Ironhack',
    program: 'Remote Bootcamp, Full Stack Web Development Program',
    period: 'Oct 2023 – Dec 2023',
    description: [
      'Honed skills in frontend technologies (HTML, CSS, JavaScript ES6) and React for dynamic, responsive UIs. On the backend, mastered Express.js, Node.js, and MongoDB; used Axios for data communication.',
      'Used Git and GitHub for version control. Gained expertise in TypeScript, JSON, JWT, OOP, and the MERN stack. Ensured responsive design, worked with APIs, tested with Postman. Used Bootstrap and Mongoose ODM.',
      'Demonstrated strong problem-solving and collaborated effectively in a team with clear communication.',
    ],
    tags: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Express', 'MERN', 'Git', 'REST APIs'],
  },
  {
    institution: 'Susanna-Eger-Schule Leipzig',
    program: 'Rechnungswesen und Business Management',
    period: 'Sep 2019 – Jun 2022',
    description: 'Acquired expertise in strategic management, corporate leadership, and organisational development. Developed skills to manage corporate finances and make informed, data-driven business decisions.',
    tags: ['Microsoft Office', 'Business Management', 'Strategic Management'],
  },
]

export const projects = [
  {
    title: 'Bella Biladi Delivery Platform',
    description: 'Full-stack food delivery platform for Bella Biladi restaurant in Leipzig. Real-time driver GPS tracking with WebSocket, interactive menu with cart, admin dashboard for order management and PDF tickets, driver portal with location sharing and route optimization, secure checkout with address validation and dynamic delivery fees.',
    link: 'https://github.com/MenatallaGomaa/Bella-Biladi-Delivery',
    liveUrl: 'https://bellabiladi-lieferservice.netlify.app/home',
    image: '/projects/bella-biladi-delivery.png',
    tags: ['React 19', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Leaflet.js', 'Tailwind CSS'],
  },
  {
    title: 'Bella Biladi Pizzeria',
    description: 'Fully responsive website for Bella Biladi Pizzeria with UI/UX from Figma, Node.js/Express backend for reservation inquiries, Google Maps API integration, and mobile optimization.',
    link: 'https://github.com/MenatallaGomaa/Bella',
    liveUrl: 'https://bellabiladipizzeria.com/',
    image: '/projects/bella-biladi-pizzeria.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Figma', 'Google Maps API'],
  },
  {
    title: 'DriveEase',
    description: 'Car rental web application with an intuitive UI and seamless booking experience. Implemented JWT authentication for secure user accounts.',
    link: 'https://github.com/MenatallaGomaa/DriveEase',
    liveUrl: 'https://main--driveease.netlify.app/',
    image: '/projects/driveease.png',
    tags: ['React.js', 'Tailwind CSS', 'JWT'],
  },
  {
    title: 'Homyz Real Estate',
    description: 'Real estate site with an intuitive search to filter by location, price, and features. Detailed property listings with comprehensive info and images, increasing user interaction by 30%.',
    link: 'https://github.com/MenatallaGomaa/RealEstateWebsite',
    liveUrl: 'https://main--homyzrealestatewebsie.netlify.app/',
    image: '/projects/homyz.png',
    tags: ['React.js', 'JavaScript'],
  },
  {
    title: 'EvoGym',
    description: 'Fitness web application with a component-based architecture. TypeScript for static typing and reliability, responsive UI with Tailwind CSS, increasing mobile usage by 25%.',
    link: 'https://github.com/MenatallaGomaa/EvoGym',
    liveUrl: 'https://evogymproject.netlify.app/',
    image: '/projects/evogym.png',
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
