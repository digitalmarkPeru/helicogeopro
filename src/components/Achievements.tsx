import { ArrowLeft, Trophy, Lock, Star } from 'lucide-react';
import type { Achievement } from '@/types/game';

interface AchievementsProps {
  achievements: Achievement[];
  onBack: () => void;
}

export function Achievements({ achievements, onBack }: AchievementsProps) {
  const unlockedCount = achievements.filter(a => a.unlocked).length;

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
          <h1 className="text-2xl font-bold text-white">Logros</h1>
          <div className="w-16"></div>
        </div>

        {/* Progress */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-center gap-3">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <span className="text-3xl font-bold text-white">{unlockedCount}</span>
            <span className="text-slate-400">/ {achievements.length}</span>
          </div>
          <div className="mt-3 h-3 bg-slate-700/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full transition-all duration-500"
              style={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Achievements List */}
        <div className="space-y-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`
                relative overflow-hidden rounded-2xl p-5 transition-all duration-300
                ${achievement.unlocked
                  ? 'bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border-2 border-yellow-500/30'
                  : 'bg-slate-800/80 border-2 border-slate-700/50'
                }
              `}
            >
              <div className="flex items-start gap-4">
                <div className={`
                  p-4 rounded-xl shrink-0
                  ${achievement.unlocked
                    ? 'bg-gradient-to-br from-yellow-400 to-amber-500'
                    : 'bg-slate-700'
                  }
                `}>
                  <span className="text-3xl">{achievement.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-bold text-lg ${achievement.unlocked ? 'text-white' : 'text-slate-400'}`}>
                      {achievement.name}
                    </h3>
                    {!achievement.unlocked && (
                      <Lock className="w-4 h-4 text-slate-500" />
                    )}
                  </div>
                  <p className={`text-sm ${achievement.unlocked ? 'text-slate-300' : 'text-slate-500'}`}>
                    {achievement.description}
                  </p>
                </div>
              </div>
              
              {achievement.unlocked && (
                <div className="absolute top-2 right-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
