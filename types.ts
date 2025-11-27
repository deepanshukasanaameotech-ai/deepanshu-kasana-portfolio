
export type SkillCategory = 'Frontend' | 'Backend' | 'Tools' | 'AI';

export interface Skill {
  name: string;
  symbol: string;
  atomicNumber: string;
  category: SkillCategory;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface ElementData {
  atomicNumber: number;
  symbol: string;
  name: string;
  mass: number;
  orbitIndex: number; // Which shell/orbit line it belongs to
  startAngle: number; // Initial position in degrees
  speed: number; // Rotation speed duration in seconds
  color?: string;
}

export interface GeminiResponse {
  description: string;
  dangerLevel: string;
  uses: string;
}
