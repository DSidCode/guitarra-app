// src/data/chords.js

// Estructura: [E bajo, A, D, G, B, E alto]
// X: Mute, 0: Open string, 1..N: Fret number
export const CHORDS_DATA = [
  {
    id: 'C',
    name: 'C (Do mayor)',
    spanishName: 'Do mayor',
    fingering: [
      { fret: 'X', finger: '' }, { fret: '3', finger: '3' }, { fret: '2', finger: '2' },
      { fret: '0', finger: '0' }, { fret: '1', finger: '1' }, { fret: '0', finger: '0' },
    ],
    tab: ['  D     U I M A', 'E|--0----0-|', 'B|---1---1-|', 'G|--0----0-|', 'D|---2---2-|', 'A|-3---3---|', 'E|---------|', 'Pulgar en A'],
  },
  {
    id: 'D',
    name: 'D (Re mayor)',
    spanishName: 'Re mayor',
    fingering: [
      { fret: 'X', finger: '' }, { fret: 'X', finger: '' }, { fret: '0', finger: '0' },
      { fret: '2', finger: '1' }, { fret: '3', finger: '3' }, { fret: '2', finger: '2' },
    ],
    tab: ['  D     U I M A', 'E|--2----2-|', 'B|---3---3-|', 'G|--2----2-|', 'D|-0---0---|', 'A|---------|', 'E|---------|', 'Pulgar en D'],
  },
  {
    id: 'Dm',
    name: 'Dm (Re menor)',
    spanishName: 'Re menor',
    fingering: [
      { fret: 'X', finger: '' }, { fret: 'X', finger: '' }, { fret: '0', finger: '0' },
      { fret: '2', finger: '2' }, { fret: '3', finger: '3' }, { fret: '1', finger: '1' },
    ],
    tab: ['  D     U I M A', 'E|-1-----1-|', 'B|--3----3-|', 'G|---2---2-|', 'D|-0---0---|', 'A|---------|', 'E|---------|', 'Pulgar en D'],
  },
  {
    id: 'E',
    name: 'E (Mi mayor)',
    spanishName: 'Mi mayor',
    fingering: [
      { fret: '0', finger: '0' }, { fret: '2', finger: '2' }, { fret: '2', finger: '3' },
      { fret: '1', finger: '1' }, { fret: '0', finger: '0' }, { fret: '0', finger: '0' },
    ],
    tab: ['  D     U I M A', 'E|--0----0-|', 'B|---0---0-|', 'G|--1----1-|', 'D|---2---2-|', 'A|--2----2-|', 'E|-0---0---|', 'Pulgar en E grave'],
  },
  {
    id: 'Em',
    name: 'Em (Mi menor)',
    spanishName: 'Mi menor',
    fingering: [
      { fret: '0', finger: '0' }, { fret: '2', finger: '2' }, { fret: '2', finger: '3' },
      { fret: '0', finger: '0' }, { fret: '0', finger: '0' }, { fret: '0', finger: '0' },
    ],
    tab: ['  D     U I M A', 'E|--0----0-|', 'B|---0---0-|', 'G|--0----0-|', 'D|---2---2-|', 'A|--2----2-|', 'E|-0---0---|', 'Pulgar en E grave'],
  },
  {
    id: 'F',
    name: 'F (Fa mayor) - Cejilla',
    spanishName: 'Fa mayor',
    fingering: [
      { fret: '1', finger: '1' }, { fret: '3', finger: '3' }, { fret: '3', finger: '4' },
      { fret: '2', finger: '2' }, { fret: '1', finger: '1' }, { fret: '1', finger: '1' },
    ],
    tab: ['  D     U I M A', 'E|-1-----1-|', 'B|--1----1-|', 'G|---2---2-|', 'D|----3--3-|', 'A|---------|', 'E|-1---1---|', 'Pulgar en E grave'],
  },
  {
    id: 'G',
    name: 'G (Sol mayor)',
    spanishName: 'Sol mayor',
    fingering: [
      { fret: '3', finger: '2' }, { fret: '2', finger: '1' }, { fret: '0', finger: '0' },
      { fret: '0', finger: '0' }, { fret: '3', finger: '3' }, { fret: '3', finger: '4' },
    ],
    tab: ['  D     U I M A', 'E|--3----3-|', 'B|---3---3-|', 'G|--0----0-|', 'D|---------|', 'A|---2---2-|', 'E|-3---3---|', 'Pulgar en E grave'],
  },
  {
    id: 'A',
    name: 'A (La mayor)',
    spanishName: 'La mayor',
    fingering: [
      { fret: 'X', finger: '' }, { fret: '0', finger: '0' }, { fret: '2', finger: '1' },
      { fret: '2', finger: '2' }, { fret: '2', finger: '3' }, { fret: '0', finger: '0' },
    ],
    tab: ['  D     U I M A', 'E|--0----0-|', 'B|---2---2-|', 'G|--2----2-|', 'D|---2---2-|', 'A|-0---0---|', 'E|---------|', 'Pulgar en A'],
  },
  {
    id: 'Am',
    name: 'Am (La menor)',
    spanishName: 'La menor',
    fingering: [
      { fret: 'X', finger: '' }, { fret: '0', finger: '0' }, { fret: '2', finger: '2' },
      { fret: '2', finger: '3' }, { fret: '1', finger: '1' }, { fret: '0', finger: '0' },
    ],
    tab: ['  D     U I M A', 'E|--0----0-|', 'B|---1---1-|', 'G|--2----2-|', 'D|---2---2-|', 'A|-0---0---|', 'E|---------|', 'Pulgar en A'],
  },
  {
    id: 'Bb',
    name: 'Bb (Si♭ mayor)',
    spanishName: 'Si bemol mayor',
    fingering: [
      { fret: 'X', finger: '' }, { fret: '1', finger: '1' }, { fret: '3', finger: '2' },
      { fret: '3', finger: '3' }, { fret: '3', finger: '4' }, { fret: '1', finger: '1' },
    ],
    tab: ['  D     U I M A', 'E|-1-----1-|', 'B|--3----3-|', 'G|---3---3-|', 'D|----3--3-|', 'A|-1---1---|', 'E|---------|', 'Pulgar en A'],
  },
  {
    id: 'Bm',
    name: 'Bm (Si menor)',
    spanishName: 'Si menor',
    fingering: [
      { fret: 'X', finger: '' }, { fret: '2', finger: '1' }, { fret: '4', finger: '3' },
      { fret: '4', finger: '4' }, { fret: '3', finger: '2' }, { fret: '2', finger: '1' },
    ],
    tab: ['  D     U I M A', 'E|-2-----2-|', 'B|--3----3-|', 'G|---4---4-|', 'D|----4--4-|', 'A|-2---2---|', 'E|---------|', 'Pulgar en A'],
  },
  {
    id: 'B7',
    name: 'B7 (Si séptima)',
    spanishName: 'Si séptima',
    fingering: [
      { fret: 'X', finger: '' }, { fret: '2', finger: '2' }, { fret: '1', finger: '1' },
      { fret: '2', finger: '3' }, { fret: '0', finger: '0' }, { fret: '2', finger: '4' },
    ],
    tab: ['  D     U I M A', 'E|--2----2-|', 'B|---0---0-|', 'G|--2----2-|', 'D|---1---1-|', 'A|-2---2---|', 'E|---------|', 'Pulgar en A'],
  }
];

export const STRING_NAMES = ['E', 'A', 'D', 'G', 'B', 'E'];