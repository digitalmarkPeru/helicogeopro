import { useState, useCallback } from 'react';
import type { PlayerStats, GameState, Achievement } from '@/types/game';
import { geometryQuestions } from '@/data/questions';

const initialStats: PlayerStats = {
  level: 1,
  xp: 0,
  maxXp: 100,
  health: 100,
  maxHealth: 100,
  coins: 0,
  streak: 0,
  correctAnswers: 0,
  totalQuestions: 0
};

const initialAchievements: Achievement[] = [
  { id: 'first_win', name: 'Primer Acerto', description: 'Responde correctamente tu primera pregunta', icon: '🎯', unlocked: false, requirement: 1 },
  { id: 'streak_3', name: 'Racha de Fuego', description: 'Acerta 3 preguntas seguidas', icon: '🔥', unlocked: false, requirement: 3 },
  { id: 'streak_5', name: 'Racha Imparable', description: 'Acerta 5 preguntas seguidas', icon: '⚡', unlocked: false, requirement: 5 },
  { id: 'rich', name: 'Coleccionista', description: 'Acumula 50 monedas', icon: '💰', unlocked: false, requirement: 50 },
  { id: 'master', name: 'Maestro de Geometría', description: 'Responde 10 preguntas correctamente', icon: '👑', unlocked: false, requirement: 10 },
  { id: 'survivor', name: 'Superviviente', description: 'Alcanza el nivel 5', icon: '🏆', unlocked: false, requirement: 5 }
];

export function useGame() {
  const [stats, setStats] = useState<PlayerStats>(initialStats);
  const [gameState, setGameState] = useState<GameState>('menu');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [achievements, setAchievements] = useState<Achievement[]>(initialAchievements);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const currentQuestion = geometryQuestions[currentQuestionIndex];

  const startGame = useCallback(() => {
    setStats(initialStats);
    setCurrentQuestionIndex(0);
    setGameState('playing');
    setSelectedAnswer(null);
  }, []);

  const checkAchievements = useCallback((newStats: PlayerStats) => {
    setAchievements(prev => prev.map(ach => {
      if (ach.unlocked) return ach;
      
      let shouldUnlock = false;
      if (ach.id === 'first_win' && newStats.correctAnswers >= 1) shouldUnlock = true;
      if (ach.id === 'streak_3' && newStats.streak >= 3) shouldUnlock = true;
      if (ach.id === 'streak_5' && newStats.streak >= 5) shouldUnlock = true;
      if (ach.id === 'rich' && newStats.coins >= 50) shouldUnlock = true;
      if (ach.id === 'master' && newStats.correctAnswers >= 10) shouldUnlock = true;
      if (ach.id === 'survivor' && newStats.level >= 5) shouldUnlock = true;
      
      return shouldUnlock ? { ...ach, unlocked: true } : ach;
    }));
  }, []);

  const answerQuestion = useCallback((answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    setStats(prev => {
      const newStats = { ...prev };
      newStats.totalQuestions++;
      
      if (isCorrect) {
        newStats.correctAnswers++;
        newStats.streak++;
        newStats.xp += currentQuestion.xpReward;
        newStats.coins += currentQuestion.coinReward;
        
        // Bonus por racha
        if (newStats.streak >= 3) {
          newStats.coins += Math.floor(currentQuestion.coinReward * 0.5);
        }
        
        // Subir de nivel
        if (newStats.xp >= newStats.maxXp) {
          newStats.level++;
          newStats.xp = newStats.xp - newStats.maxXp;
          newStats.maxXp = Math.floor(newStats.maxXp * 1.2);
          newStats.health = Math.min(newStats.maxHealth, newStats.health + 20);
        }
      } else {
        newStats.streak = 0;
        newStats.health -= 25;
      }
      
      checkAchievements(newStats);
      return newStats;
    });
    
    setGameState(isCorrect ? 'correct' : 'incorrect');
  }, [currentQuestion, checkAchievements]);

  const nextQuestion = useCallback(() => {
    if (stats.health <= 0) {
      setGameState('gameOver');
      return;
    }
    
    if (currentQuestionIndex >= geometryQuestions.length - 1) {
      setGameState('victory');
      return;
    }
    
    setCurrentQuestionIndex(prev => prev + 1);
    setGameState('playing');
    setSelectedAnswer(null);
  }, [stats.health, currentQuestionIndex]);

  const buyHealth = useCallback(() => {
    if (stats.coins >= 20 && stats.health < stats.maxHealth) {
      setStats(prev => ({
        ...prev,
        coins: prev.coins - 20,
        health: Math.min(prev.maxHealth, prev.health + 30)
      }));
      return true;
    }
    return false;
  }, [stats.coins, stats.health, stats.maxHealth]);

  const goToShop = useCallback(() => {
    setGameState('shop');
  }, []);

  const goToAchievements = useCallback(() => {
    setGameState('achievements');
  }, []);

  const goToMenu = useCallback(() => {
    setGameState('menu');
  }, []);

  const continueGame = useCallback(() => {
    setGameState('playing');
    setSelectedAnswer(null);
  }, []);

  return {
    stats,
    gameState,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: geometryQuestions.length,
    achievements,
    selectedAnswer,
    startGame,
    answerQuestion,
    nextQuestion,
    buyHealth,
    goToShop,
    goToAchievements,
    goToMenu,
    continueGame
  };
}
