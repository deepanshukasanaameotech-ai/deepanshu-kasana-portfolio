
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
