
import { Skill, ExperienceItem, ElementData } from './types';

export const ORBIT_RADII = [0, 100, 180, 260, 340, 420];

export const ELEMENTS: ElementData[] = [
  // Orbit 1
  { atomicNumber: 1, symbol: 'H', name: 'Hydrogen', mass: 1.008, orbitIndex: 1, startAngle: 0, speed: 20 },
  { atomicNumber: 2, symbol: 'He', name: 'Helium', mass: 4.0026, orbitIndex: 1, startAngle: 180, speed: 20 },

  // Orbit 2
  { atomicNumber: 3, symbol: 'Li', name: 'Lithium', mass: 6.94, orbitIndex: 2, startAngle: 0, speed: 30 },
  { atomicNumber: 4, symbol: 'Be', name: 'Beryllium', mass: 9.0122, orbitIndex: 2, startAngle: 45, speed: 30 },
  { atomicNumber: 5, symbol: 'B', name: 'Boron', mass: 10.81, orbitIndex: 2, startAngle: 90, speed: 30 },
  { atomicNumber: 6, symbol: 'C', name: 'Carbon', mass: 12.011, orbitIndex: 2, startAngle: 135, speed: 30 },
  { atomicNumber: 7, symbol: 'N', name: 'Nitrogen', mass: 14.007, orbitIndex: 2, startAngle: 180, speed: 30 },
  { atomicNumber: 8, symbol: 'O', name: 'Oxygen', mass: 15.999, orbitIndex: 2, startAngle: 225, speed: 30 },
  { atomicNumber: 9, symbol: 'F', name: 'Fluorine', mass: 18.998, orbitIndex: 2, startAngle: 270, speed: 30 },
  { atomicNumber: 10, symbol: 'Ne', name: 'Neon', mass: 20.180, orbitIndex: 2, startAngle: 315, speed: 30 },

  // Orbit 3 (Selected elements)
  { atomicNumber: 11, symbol: 'Na', name: 'Sodium', mass: 22.990, orbitIndex: 3, startAngle: 0, speed: 40 },
  { atomicNumber: 12, symbol: 'Mg', name: 'Magnesium', mass: 24.305, orbitIndex: 3, startAngle: 60, speed: 40 },
  { atomicNumber: 13, symbol: 'Al', name: 'Aluminium', mass: 26.982, orbitIndex: 3, startAngle: 120, speed: 40 },
  { atomicNumber: 14, symbol: 'Si', name: 'Silicon', mass: 28.085, orbitIndex: 3, startAngle: 180, speed: 40 },
  { atomicNumber: 15, symbol: 'P', name: 'Phosphorus', mass: 30.974, orbitIndex: 3, startAngle: 240, speed: 40 },
  { atomicNumber: 16, symbol: 'S', name: 'Sulfur', mass: 32.06, orbitIndex: 3, startAngle: 300, speed: 40 },

  // Orbit 4 (Selected elements)
  { atomicNumber: 19, symbol: 'K', name: 'Potassium', mass: 39.098, orbitIndex: 4, startAngle: 0, speed: 50 },
  { atomicNumber: 20, symbol: 'Ca', name: 'Calcium', mass: 40.078, orbitIndex: 4, startAngle: 72, speed: 50 },
  { atomicNumber: 26, symbol: 'Fe', name: 'Iron', mass: 55.845, orbitIndex: 4, startAngle: 144, speed: 50 },
  { atomicNumber: 29, symbol: 'Cu', name: 'Copper', mass: 63.546, orbitIndex: 4, startAngle: 216, speed: 50 },
  { atomicNumber: 30, symbol: 'Zn', name: 'Zinc', mass: 65.38, orbitIndex: 4, startAngle: 288, speed: 50 },

  // Orbit 5 (Selected elements)
  { atomicNumber: 35, symbol: 'Br', name: 'Bromine', mass: 79.904, orbitIndex: 5, startAngle: 0, speed: 60 },
  { atomicNumber: 47, symbol: 'Ag', name: 'Silver', mass: 107.87, orbitIndex: 5, startAngle: 90, speed: 60 },
  { atomicNumber: 53, symbol: 'I', name: 'Iodine', mass: 126.90, orbitIndex: 5, startAngle: 180, speed: 60 },
  { atomicNumber: 56, symbol: 'Ba', name: 'Barium', mass: 137.33, orbitIndex: 5, startAngle: 270, speed: 60 },
];


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
