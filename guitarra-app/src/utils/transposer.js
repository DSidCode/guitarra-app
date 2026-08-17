// src/utils/transposer.js

const NOTES_FLAT  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const NOTES_SHARP = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

/**
 * Transpone una nota raíz por N semitonos
 */
function transposeNote(note, semitones) {
  // Normalizar equivalencias comunes
  let normalized = note;
  if (note === 'Si♭') normalized = 'Bb';
  if (note === 'Do#') normalized = 'C#';

  let index = NOTES_FLAT.indexOf(normalized);
  if (index === -1) {
    index = NOTES_SHARP.indexOf(normalized);
  }
  if (index === -1) return note; // No reconocida

  let newIndex = (index + semitones + 12 * 10) % 12;
  // Preferir flats para Bb/Eb/Ab, sharps para C#/F#
  return NOTES_FLAT[newIndex];
}

/**
 * Transpone un acorde completo (ej. 'Dm' -> -2 semitonos -> 'Cm')
 */
export function transposeChord(chordId, semitones) {
  if (semitones === 0 || !chordId) return chordId;

  // Separar nota raíz de sufijos (m, 7, maj7, etc.)
  let root = '';
  let suffix = '';

  if (chordId.length >= 2 && (chordId[1] === 'b' || chordId[1] === '#')) {
    root = chordId.substring(0, 2);
    suffix = chordId.substring(2);
  } else {
    root = chordId.substring(0, 1);
    suffix = chordId.substring(1);
  }

  const transposedRoot = transposeNote(root, semitones);
  return transposedRoot + suffix;
}
