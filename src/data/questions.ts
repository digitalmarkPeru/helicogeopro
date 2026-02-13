import type { Question } from '@/types/game';

export const geometryQuestions: Question[] = [
  // Nivel 1 - Fácil
  {
    id: 1,
    question: "¿Cuántos grados tiene un ángulo recto?",
    options: ["45°", "90°", "180°", "360°"],
    correctAnswer: 1,
    explanation: "Un ángulo recto mide exactamente 90 grados, como las esquinas de un cuadrado.",
    difficulty: 'easy',
    xpReward: 10,
    coinReward: 5
  },
  {
    id: 2,
    question: "¿Cuántos lados tiene un triángulo?",
    options: ["2", "3", "4", "5"],
    correctAnswer: 1,
    explanation: "Un triángulo tiene 3 lados, 3 vértices y 3 ángulos.",
    difficulty: 'easy',
    xpReward: 10,
    coinReward: 5
  },
  {
    id: 3,
    question: "¿Qué figura tiene 4 lados iguales y 4 ángulos rectos?",
    options: ["Rectángulo", "Rombo", "Cuadrado", "Trapecio"],
    correctAnswer: 2,
    explanation: "El cuadrado tiene 4 lados iguales y todos sus ángulos son de 90°.",
    difficulty: 'easy',
    xpReward: 10,
    coinReward: 5
  },
  {
    id: 4,
    question: "¿Cuántos grados suman los ángulos internos de un triángulo?",
    options: ["90°", "180°", "270°", "360°"],
    correctAnswer: 1,
    explanation: "La suma de los ángulos internos de cualquier triángulo siempre es 180°.",
    difficulty: 'easy',
    xpReward: 10,
    coinReward: 5
  },
  {
    id: 5,
    question: "¿Qué figura no tiene lados ni ángulos?",
    options: ["Círculo", "Elipse", "Triángulo", "Cuadrado"],
    correctAnswer: 0,
    explanation: "El círculo es una figura curva sin lados ni ángulos.",
    difficulty: 'easy',
    xpReward: 10,
    coinReward: 5
  },
  // Nivel 2 - Medio
  {
    id: 6,
    question: "¿Cuál es la fórmula del área de un triángulo?",
    options: ["b × h", "(b × h) ÷ 2", "l × l", "π × r²"],
    correctAnswer: 1,
    explanation: "El área de un triángulo es la base por la altura dividido entre 2.",
    difficulty: 'medium',
    xpReward: 20,
    coinReward: 10
  },
  {
    id: 7,
    question: "¿Cuántos grados suman los ángulos internos de un cuadrilátero?",
    options: ["180°", "270°", "360°", "450°"],
    correctAnswer: 2,
    explanation: "La suma de los ángulos internos de cualquier cuadrilátero es 360°.",
    difficulty: 'medium',
    xpReward: 20,
    coinReward: 10
  },
  {
    id: 8,
    question: "¿Qué teorema relaciona los lados de un triángulo rectángulo?",
    options: ["Teorema de Tales", "Teorema de Pitágoras", "Teorema de Euclides", "Teorema de Arquímedes"],
    correctAnswer: 1,
    explanation: "El Teorema de Pitágoras establece que a² + b² = c² en un triángulo rectángulo.",
    difficulty: 'medium',
    xpReward: 20,
    coinReward: 10
  },
  {
    id: 9,
    question: "¿Cuál es el perímetro de un cuadrado con lado de 5 cm?",
    options: ["10 cm", "15 cm", "20 cm", "25 cm"],
    correctAnswer: 2,
    explanation: "El perímetro de un cuadrado es 4 × lado = 4 × 5 = 20 cm.",
    difficulty: 'medium',
    xpReward: 20,
    coinReward: 10
  },
  {
    id: 10,
    question: "¿Cuántos ejes de simetría tiene un círculo?",
    options: ["2", "4", "Infinitos", "Ninguno"],
    correctAnswer: 2,
    explanation: "Un círculo tiene infinitos ejes de simetría que pasan por su centro.",
    difficulty: 'medium',
    xpReward: 20,
    coinReward: 10
  },
  // Nivel 3 - Difícil
  {
    id: 11,
    question: "¿Cuál es el volumen de un cubo con arista de 3 cm?",
    options: ["9 cm³", "18 cm³", "27 cm³", "36 cm³"],
    correctAnswer: 2,
    explanation: "El volumen de un cubo es arista³ = 3³ = 27 cm³.",
    difficulty: 'hard',
    xpReward: 30,
    coinReward: 15
  },
  {
    id: 12,
    question: "En un triángulo rectángulo, si un cateto mide 3 y el otro 4, ¿cuánto mide la hipotenusa?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 0,
    explanation: "Por Pitágoras: √(3² + 4²) = √(9 + 16) = √25 = 5.",
    difficulty: 'hard',
    xpReward: 30,
    coinReward: 15
  },
  {
    id: 13,
    question: "¿Cuál es el área de un círculo con radio de 2 cm? (π ≈ 3.14)",
    options: ["6.28 cm²", "12.56 cm²", "25.12 cm²", "50.24 cm²"],
    correctAnswer: 1,
    explanation: "Área = π × r² = 3.14 × 4 = 12.56 cm².",
    difficulty: 'hard',
    xpReward: 30,
    coinReward: 15
  },
  {
    id: 14,
    question: "¿Cuántas caras tiene un cubo?",
    options: ["4", "6", "8", "12"],
    correctAnswer: 1,
    explanation: "Un cubo tiene 6 caras cuadradas iguales.",
    difficulty: 'hard',
    xpReward: 30,
    coinReward: 15
  },
  {
    id: 15,
    question: "¿Qué polígono regular tiene todos sus ángulos internos de 108°?",
    options: ["Pentágono", "Hexágono", "Heptágono", "Octágono"],
    correctAnswer: 0,
    explanation: "El pentágono regular tiene ángulos internos de 108° cada uno.",
    difficulty: 'hard',
    xpReward: 30,
    coinReward: 15
  }
];
