
import { Skill, ExperienceItem } from './types';

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React', symbol: 'Re', atomicNumber: '11', category: 'Frontend', description: 'Component Architecture' },
  { name: 'TypeScript', symbol: 'Ts', atomicNumber: '22', category: 'Frontend', description: 'Type Safety' },
  { name: 'Tailwind', symbol: 'Tw', atomicNumber: '44', category: 'Frontend', description: 'Utility Engine' },
  { name: 'Framer Motion', symbol: 'Fm', atomicNumber: '55', category: 'Frontend', description: 'Kinetic UI' },
  { name: 'HTML5', symbol: 'H', atomicNumber: '1', category: 'Frontend', description: 'Structural Semantics' },
  { name: 'CSS3', symbol: 'Cs', atomicNumber: '6', category: 'Frontend', description: 'Style Sheets' },
  { name: 'Redux', symbol: 'Rx', atomicNumber: '7', category: 'Frontend', description: 'State Management' },
  { name: 'Three.js', symbol: 'Th', atomicNumber: '81', category: 'Frontend', description: '3D Graphics' },
  
  // Backend
  { name: 'Node.js', symbol: 'No', atomicNumber: '12', category: 'Backend', description: 'Event Runtime' },
  { name: 'Express', symbol: 'Ex', atomicNumber: '24', category: 'Backend', description: 'API Framework' },
  { name: 'Python', symbol: 'Py', atomicNumber: '36', category: 'Backend', description: 'Data Processing' },
  { name: 'PostgreSQL', symbol: 'Pg', atomicNumber: '48', category: 'Backend', description: 'Relational Data' },
  { name: 'Supabase', symbol: 'Sb', atomicNumber: '60', category: 'Backend', description: 'Baas Platform' },
  { name: 'MongoDB', symbol: 'Mg', atomicNumber: '25', category: 'Backend', description: 'NoSQL Database' },
  { name: 'GraphQL', symbol: 'Gq', atomicNumber: '31', category: 'Backend', description: 'Query Language' },
  { name: 'Redis', symbol: 'Rd', atomicNumber: '37', category: 'Backend', description: 'In-Memory Store' },

  // Tools
  { name: 'Git', symbol: 'Gi', atomicNumber: '13', category: 'Tools', description: 'Version Control' },
  { name: 'Vite', symbol: 'Vi', atomicNumber: '39', category: 'Tools', description: 'Next Gen Build' },
  { name: 'Linux', symbol: 'Lx', atomicNumber: '65', category: 'Tools', description: 'System Ops' },
  { name: 'Postman', symbol: 'Pm', atomicNumber: '43', category: 'Tools', description: 'API Testing' },
  { name: 'Webpack', symbol: 'Wp', atomicNumber: '74', category: 'Tools', description: 'Module Bundler' },
  { name: 'Vercel', symbol: 'Vc', atomicNumber: '23', category: 'Tools', description: 'Deployment' },

  // AI
  { name: 'Gemini API', symbol: 'Ge', atomicNumber: '14', category: 'AI', description: 'Multimodal AI' },
  { name: 'OpenAI', symbol: 'Oi', atomicNumber: '28', category: 'AI', description: 'LLM Integration' },
  { name: 'Anthropic', symbol: 'An', atomicNumber: '51', category: 'AI', description: 'Claude AI' },
  { name: 'Hugging Face', symbol: 'Hf', atomicNumber: '72', category: 'AI', description: 'Model Hub' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Ameotech Informatics',
    role: 'Frontend Intern',
    period: 'Present',
    description: [
      'Developing responsive web applications using React and TypeScript.',
      'Collaborating with senior developers to implement UI/UX best practices.',
      'Integrating RESTful APIs and optimizing frontend performance.',
      'Working on real-world client projects involving complex state management.'
    ]
  }
];
