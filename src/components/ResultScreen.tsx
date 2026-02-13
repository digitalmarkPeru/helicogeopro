import { CheckCircle, XCircle, ArrowRight, RotateCcw, Home, Sparkles } from 'lucide-react';
import type { Question } from '@/types/game';

interface ResultScreenProps {
  isCorrect: boolean;
  isGameOver?: boolean;
  isVictory?: boolean;
  question?: Question;
  onNext: () => void;
  onRestart: () => void;
  onMenu: () => void;
  stats?: {
    correctAnswers: number;
    totalQuestions: number;
    coins: number;
    level: number;
  };
}

export function ResultScreen({ 
  isCorrect, 
  isGameOver, 
  isVictory, 
  question, 
  onNext, 
  onRestart, 
  onMenu,
  stats 
}: ResultScreenProps) {
  if (isVictory) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 rounded-full mb-6 shadow-2xl shadow-yellow-500/40 animate-bounce">
              <Sparkles className="w-14 h-14 text-white" />
            </div>
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 mb-4">
              ¡Victoria!
            </h2>
            <p className="text-slate-400 text-lg">¡Has completado todas las preguntas!</p>
          </div>

          <div className="bg-slate-800/80 rounded-2xl p-6 mb-8 border border-slate-700/50">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-slate-700/50 rounded-xl">
                <div className="text-3xl font-bold text-green-400">{stats?.correctAnswers}</div>
                <div className="text-slate-400 text-sm">Correctas</div>
              </div>
              <div className="text-center p-4 bg-slate-700/50 rounded-xl">
                <div className="text-3xl font-bold text-yellow-400">{stats?.coins}</div>
                <div className="text-slate-400 text-sm">Monedas</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={onRestart}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-lg py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-indigo-500/25"
            >
              <div className="flex items-center justify-center gap-2">
                <RotateCcw className="w-5 h-5" />
                <span>Jugar de Nuevo</span>
              </div>
            </button>
            <button
              onClick={onMenu}
              className="w-full bg-slate-800/80 hover:bg-slate-700/80 border-2 border-slate-700 text-white font-bold text-lg py-4 px-8 rounded-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />
                <span>Menú Principal</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isGameOver) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-red-500 via-rose-600 to-pink-600 rounded-full mb-6 shadow-2xl shadow-red-500/40">
              <XCircle className="w-14 h-14 text-white" />
            </div>
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 mb-4">
              ¡Game Over!
            </h2>
            <p className="text-slate-400 text-lg">Te has quedado sin vida</p>
          </div>

          <div className="bg-slate-800/80 rounded-2xl p-6 mb-8 border border-slate-700/50">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-slate-700/50 rounded-xl">
                <div className="text-3xl font-bold text-green-400">{stats?.correctAnswers}</div>
                <div className="text-slate-400 text-sm">Correctas</div>
              </div>
              <div className="text-center p-4 bg-slate-700/50 rounded-xl">
                <div className="text-3xl font-bold text-yellow-400">{stats?.coins}</div>
                <div className="text-slate-400 text-sm">Monedas</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={onRestart}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-lg py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-indigo-500/25"
            >
              <div className="flex items-center justify-center gap-2">
                <RotateCcw className="w-5 h-5" />
                <span>Intentar de Nuevo</span>
              </div>
            </button>
            <button
              onClick={onMenu}
              className="w-full bg-slate-800/80 hover:bg-slate-700/80 border-2 border-slate-700 text-white font-bold text-lg py-4 px-8 rounded-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />
                <span>Menú Principal</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className={`text-center mb-8 ${isCorrect ? 'animate-bounce' : ''}`}>
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 shadow-2xl ${
            isCorrect 
              ? 'bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 shadow-green-500/40' 
              : 'bg-gradient-to-br from-red-500 via-rose-600 to-pink-600 shadow-red-500/40'
          }`}>
            {isCorrect ? (
              <CheckCircle className="w-12 h-12 text-white" />
            ) : (
              <XCircle className="w-12 h-12 text-white" />
            )}
          </div>
          <h2 className={`text-3xl font-black mb-2 ${
            isCorrect 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400' 
              : 'text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-pink-400'
          }`}>
            {isCorrect ? '¡Correcto!' : '¡Incorrecto!'}
          </h2>
          {isCorrect && (
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="flex items-center gap-1 text-yellow-400">
                <span>⭐</span>
                <span className="font-bold">+{question?.xpReward} XP</span>
              </div>
              <div className="flex items-center gap-1 text-amber-400">
                <span>🪙</span>
                <span className="font-bold">+{question?.coinReward}</span>
              </div>
            </div>
          )}
        </div>

        {!isCorrect && question && (
          <div className="bg-slate-800/80 rounded-2xl p-6 mb-6 border border-slate-700/50">
            <h3 className="text-white font-bold mb-2">La respuesta correcta era:</h3>
            <p className="text-green-400 font-bold text-lg mb-3">
              {question.options[question.correctAnswer]}
            </p>
            <div className="border-t border-slate-700 pt-3">
              <h4 className="text-slate-400 text-sm mb-1">Explicación:</h4>
              <p className="text-slate-300">{question.explanation}</p>
            </div>
          </div>
        )}

        <button
          onClick={onNext}
          className={`w-full font-bold text-lg py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl ${
            isCorrect 
              ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-green-500/25' 
              : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-indigo-500/25'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <span>Continuar</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </button>
      </div>
    </div>
  );
}
