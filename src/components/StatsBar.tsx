import { Heart, Star, Coins, Zap } from 'lucide-react';
import type { PlayerStats } from '@/types/game';

interface StatsBarProps {
  stats: PlayerStats;
}

export function StatsBar({ stats }: StatsBarProps) {
  const healthPercent = (stats.health / stats.maxHealth) * 100;
  const xpPercent = (stats.xp / stats.maxXp) * 100;

  return (
    <div className="w-full bg-slate-900/80 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-slate-700/50 shadow-xl">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold px-3 py-1 rounded-xl text-sm">
            Nivel {stats.level}
          </div>
          {stats.streak > 0 && (
            <div className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-xl text-sm animate-pulse">
              <Zap className="w-4 h-4" />
              <span>×{stats.streak}</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1 text-yellow-400 font-bold">
          <Coins className="w-5 h-5" />
          <span className="text-lg">{stats.coins}</span>
        </div>
      </div>

      {/* Barra de Vida */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-1 text-red-400 text-sm font-medium">
            <Heart className="w-4 h-4" />
            <span>Vida</span>
          </div>
          <span className="text-slate-400 text-xs">{stats.health}/{stats.maxHealth}</span>
        </div>
        <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ease-out rounded-full ${
              healthPercent > 50
                ? 'bg-gradient-to-r from-green-500 to-emerald-400'
                : healthPercent > 25
                ? 'bg-gradient-to-r from-yellow-500 to-orange-400'
                : 'bg-gradient-to-r from-red-500 to-red-600 animate-pulse'
            }`}
            style={{ width: `${healthPercent}%` }}
          />
        </div>
      </div>

      {/* Barra de XP */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-1 text-blue-400 text-sm font-medium">
            <Star className="w-4 h-4" />
            <span>Experiencia</span>
          </div>
          <span className="text-slate-400 text-xs">{stats.xp}/{stats.maxXp}</span>
        </div>
        <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${xpPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
