import { ArrowLeft, Heart, Coins, Sparkles, Shield } from 'lucide-react';
import type { PlayerStats } from '@/types/game';

interface ShopProps {
  stats: PlayerStats;
  onBuyHealth: () => boolean;
  onBack: () => void;
}

export function Shop({ stats, onBuyHealth, onBack }: ShopProps) {
  const handleBuyHealth = () => {
    const success = onBuyHealth();
    if (success) {
      // Visual feedback could be added here
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver</span>
          </button>
          <h1 className="text-2xl font-bold text-white">Tienda</h1>
          <div className="w-16"></div>
        </div>

        {/* Balance */}
        <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-center gap-3">
            <Coins className="w-8 h-8 text-amber-400" />
            <span className="text-3xl font-bold text-white">{stats.coins}</span>
            <span className="text-amber-400">monedas</span>
          </div>
        </div>

        {/* Items */}
        <div className="space-y-4">
          <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-5">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-red-500 to-pink-600 p-4 rounded-xl shrink-0">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-1">Poción de Vida</h3>
                <p className="text-slate-400 text-sm mb-3">Restaura 30 puntos de vida</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Coins className="w-4 h-4" />
                    <span className="font-bold">20</span>
                  </div>
                  <button
                    onClick={handleBuyHealth}
                    disabled={stats.coins < 20 || stats.health >= stats.maxHealth}
                    className={`
                      px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300
                      ${stats.coins >= 20 && stats.health < stats.maxHealth
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white'
                        : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                      }
                    `}
                  >
                    {stats.health >= stats.maxHealth ? 'Vida Completa' : 'Comprar'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-5 opacity-60">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-4 rounded-xl shrink-0">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-bold text-lg">Doble XP</h3>
                  <span className="px-2 py-0.5 bg-slate-700 text-slate-400 text-xs rounded-full">Próximamente</span>
                </div>
                <p className="text-slate-400 text-sm mb-3">Duplica la experiencia ganada</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Coins className="w-4 h-4" />
                    <span className="font-bold">100</span>
                  </div>
                  <button
                    disabled
                    className="px-4 py-2 rounded-xl font-bold text-sm bg-slate-700 text-slate-500 cursor-not-allowed"
                  >
                    Próximamente
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-5 opacity-60">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-4 rounded-xl shrink-0">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-bold text-lg">Escudo</h3>
                  <span className="px-2 py-0.5 bg-slate-700 text-slate-400 text-xs rounded-full">Próximamente</span>
                </div>
                <p className="text-slate-400 text-sm mb-3">Protege de un error</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Coins className="w-4 h-4" />
                    <span className="font-bold">50</span>
                  </div>
                  <button
                    disabled
                    className="px-4 py-2 rounded-xl font-bold text-sm bg-slate-700 text-slate-500 cursor-not-allowed"
                  >
                    Próximamente
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Health */}
        <div className="mt-8 bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Vida actual</span>
            <span className="text-white font-bold">{stats.health}/{stats.maxHealth}</span>
          </div>
          <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full transition-all duration-500"
              style={{ width: `${(stats.health / stats.maxHealth) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
