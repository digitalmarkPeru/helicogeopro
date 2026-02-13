import { useGame } from '@/hooks/useGame';
import { GameMenu } from '@/components/GameMenu';
import { StatsBar } from '@/components/StatsBar';
import { QuestionCard } from '@/components/QuestionCard';
import { ResultScreen } from '@/components/ResultScreen';
import { Shop } from '@/components/Shop';
import { Achievements } from '@/components/Achievements';
import { Sparkles } from 'lucide-react';

function App() {
  const {
    stats,
    gameState,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    achievements,
    selectedAnswer,
    startGame,
    answerQuestion,
    nextQuestion,
    buyHealth,
    goToShop,
    goToAchievements,
    goToMenu,
    // continueGame
  } = useGame();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {gameState === 'menu' && (
          <GameMenu 
            onStart={startGame} 
            onShop={goToShop} 
            onAchievements={goToAchievements} 
          />
        )}

        {gameState === 'shop' && (
          <Shop stats={stats} onBuyHealth={buyHealth} onBack={goToMenu} />
        )}

        {gameState === 'achievements' && (
          <Achievements achievements={achievements} onBack={goToMenu} />
        )}

        {gameState === 'playing' && (
          <div className="min-h-screen p-4 flex items-center justify-center">
            <div className="w-full max-w-2xl">
              <StatsBar stats={stats} />
              {currentQuestion && (
                <QuestionCard
                  question={currentQuestion}
                  questionNumber={currentQuestionIndex + 1}
                  totalQuestions={totalQuestions}
                  onAnswer={answerQuestion}
                  selectedAnswer={selectedAnswer}
                />
              )}
            </div>
          </div>
        )}

        {gameState === 'correct' && (
          <ResultScreen 
            isCorrect={true} 
            question={currentQuestion}
            onNext={nextQuestion}
            onRestart={startGame}
            onMenu={goToMenu}
          />
        )}

        {gameState === 'incorrect' && (
          <ResultScreen 
            isCorrect={false} 
            question={currentQuestion}
            onNext={nextQuestion}
            onRestart={startGame}
            onMenu={goToMenu}
          />
        )}

        {gameState === 'gameOver' && (
          <ResultScreen 
            isCorrect={false}
            isGameOver={true}
            onNext={() => {}}
            onRestart={startGame}
            onMenu={goToMenu}
            stats={{
              correctAnswers: stats.correctAnswers,
              totalQuestions: stats.totalQuestions,
              coins: stats.coins,
              level: stats.level
            }}
          />
        )}

        {gameState === 'victory' && (
          <ResultScreen 
            isCorrect={true}
            isVictory={true}
            onNext={() => {}}
            onRestart={startGame}
            onMenu={goToMenu}
            stats={{
              correctAnswers: stats.correctAnswers,
              totalQuestions: stats.totalQuestions,
              coins: stats.coins,
              level: stats.level
            }}
          />
        )}
      </div>

      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-white/5 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `scale(${0.5 + Math.random()})`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
