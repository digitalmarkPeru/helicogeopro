export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  xpReward: number;
  coinReward: number;
}

export interface PlayerStats {
  level: number;
  xp: number;
  maxXp: number;
  health: number;
  maxHealth: number;
  coins: number;
  streak: number;
  correctAnswers: number;
  totalQuestions: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  requirement: number;
}

export type GameState = 'menu' | 'playing' | 'correct' | 'incorrect' | 'gameOver' | 'victory' | 'shop' | 'achievements';
