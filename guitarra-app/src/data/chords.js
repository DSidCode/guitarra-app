// src/data/chords.js

// Estructura: [E bajo, A, D, G, B, E alto]
// X: Mute, 0: Open string, 1..N: Fret number
export const CHORDS_DATA = [
  {
    name: 'Dm (Re menor)',
    spanishName: 'Re menor',
    fingering: [
      { fret: 'X', finger: '' }, { fret: 'X', finger: '' }, { fret: '0', finger: '0' },
      { fret: '2', finger: '2' }, { fret: '3', finger: '3' }, { fret: '1', finger: '1' },
    ],
    tab: [
      '  D     U I M A', 'E|-1-----1-|', 'B|--3----3-|', 'G|---2---2-|',
      'D|-0---0---|', 'A|---------|', 'E|---------|',
      'Pulgar en D | Toca rápido: I, M, A, I, M, A, D'
    ],
  },
  {
    name: 'C (Do mayor)',
    spanishName: 'Do mayor',
    fingering: [
      { fret: 'X', finger: '' }, { fret: '3', finger: '3' }, { fret: '2', finger: '2' },
      { fret: '0', finger: '0' }, { fret: '1', finger: '1' }, { fret: '0', finger: '0' },
    ],
    tab: [
      '  D     U I M A', 'E|--0----0-|', 'B|---1---1-|', 'G|--0----0-|',
      'D|---2---2-|', 'A|-3---3---|', 'E|---------|',
      'Pulgar en A | Toca rápido: I, M, A, I, M, A, D'
    ],
  },
  {
    name: 'F (Fa mayor) - Cejilla',
    spanishName: 'Fa mayor',
    fingering: [
      { fret: '1', finger: '1' }, { fret: '3', finger: '3' }, { fret: '3', finger: '4' },
      { fret: '2', finger: '2' }, { fret: '1', finger: '1' }, { fret: '1', finger: '1' },
    ],
    tab: [
      '  D     U I M A', 'E|-1-----1-|', 'B|--1----1-|', 'G|---2---2-|',
      'D|----3--3-|', 'A|---------|', 'E|-1---1---|',
      'Pulgar en E grave | Toca rápido: I, M, A, I, M, A, D'
    ],
  },
  {
    name: 'Bb (Si♭ mayor) - Cejilla',
    spanishName: 'Si bemol mayor',
    fingering: [
      { fret: 'X', finger: '' }, { fret: '1', finger: '1' }, { fret: '3', finger: '2' },
      { fret: '3', finger: '3' }, { fret: '3', finger: '4' }, { fret: '1', finger: '1' },
    ],
    tab: [
      '  D     U I M A', 'E|-1-----1-|', 'B|--3----3-|', 'G|---3---3-|',
      'D|----3--3-|', 'A|-1---1---|', 'E|---------|',
      'Pulgar en A | Toca rápido: I, M, A, I, M, A, D'
    ],
  },
];

export const STRING_NAMES = ['E', 'A', 'D', 'G', 'B', 'E'];