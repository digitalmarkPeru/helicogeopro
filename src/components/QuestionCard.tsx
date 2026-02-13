import type { Question } from '@/types/game';
import { HelpCircle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (index: number) => void;
  disabled?: boolean;
  selectedAnswer?: number | null;
}

export function QuestionCard({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onAnswer, 
  disabled,
  selectedAnswer 
}: QuestionCardProps) {
  const difficultyColors = {
    easy: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
    medium: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30',
    hard: 'from-red-500/20 to-pink-500/20 border-red-500/30'
  };

  const difficultyLabels = {
    easy: 'Fácil',
    medium: 'Medio',
    hard: 'Difícil'
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-sm">
            Pregunta {questionNumber} de {totalQuestions}
          </span>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${difficultyColors[question.difficulty]} text-white border`}>
          {difficultyLabels[question.difficulty]}
        </div>
      </div>

      {/* Pregunta */}
      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-slate-700/50 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl shrink-0">
            <HelpCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
            {question.question}
          </h2>
        </div>
      </div>

      {/* Opciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const letter = ['A', 'B', 'C', 'D'][index];
          
          return (
            <button
              key={index}
              onClick={() => !disabled && onAnswer(index)}
              disabled={disabled}
              className={`
                relative group p-5 rounded-2xl border-2 transition-all duration-300 text-left
                ${isSelected 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 border-indigo-400 shadow-lg shadow-indigo-500/25' 
                  : 'bg-slate-800/60 border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800 hover:shadow-lg hover:shadow-indigo-500/10'
                }
                ${disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}
              `}
            >
              <div className="flex items-center gap-4">
                <span className={`
                  w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-all
                  ${isSelected 
                    ? 'bg-white text-indigo-600' 
                    : 'bg-slate-700 text-slate-400 group-hover:bg-slate-600 group-hover:text-white'
                  }
                `}>
                  {letter}
                </span>
                <span className={`text-lg font-medium ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                  {option}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Recompensas */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="flex items-center gap-2 text-yellow-400">
          <span className="text-2xl">⭐</span>
          <span className="font-bold">+{question.xpReward} XP</span>
        </div>
        <div className="flex items-center gap-2 text-amber-400">
          <span className="text-2xl">🪙</span>
          <span className="font-bold">+{question.coinReward} monedas</span>
        </div>
      </div>
    </div>
  );
}
