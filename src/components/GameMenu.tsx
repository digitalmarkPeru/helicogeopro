import { Play, Trophy, Store, Sparkles } from 'lucide-react';

interface GameMenuProps {
  onStart: () => void;
  onShop: () => void;
  onAchievements: () => void;
}

export function GameMenu({ onStart, onShop, onAchievements }: GameMenuProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl mb-6 shadow-2xl shadow-purple-500/30 animate-pulse">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-3">
            GeoQuest
          </h1>
          <p className="text-slate-400 text-lg">¡Domina la geometría y conviértete en un maestro!</p>
        </div>

        {/* Botones */}
        <div className="space-y-4">
          <button
            onClick={onStart}
            className="w-full group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xl py-5 px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02]"
          >
            <div className="flex items-center justify-center gap-3">
              <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Jugar Ahora</span>
            </div>
          </button>

          <button
            onClick={onShop}
            className="w-full group bg-slate-800/80 hover:bg-slate-700/80 border-2 border-slate-700 hover:border-amber-500/50 text-white font-bold text-lg py-4 px-8 rounded-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-3">
              <Store className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>Tienda</span>
            </div>
          </button>

          <button
            onClick={onAchievements}
            className="w-full group bg-slate-800/80 hover:bg-slate-700/80 border-2 border-slate-700 hover:border-yellow-500/50 text-white font-bold text-lg py-4 px-8 rounded-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-3">
              <Trophy className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
              <span>Logros</span>
            </div>
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mt-10">
          <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <div className="text-3xl mb-2">📐</div>
            <div className="text-slate-400 text-sm">15 Preguntas</div>
          </div>
          <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-slate-400 text-sm">6 Logros</div>
          </div>
          <div className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-slate-400 text-sm">Sistema XP</div>
          </div>
        </div>
      </div>
    </div>
  );
}
