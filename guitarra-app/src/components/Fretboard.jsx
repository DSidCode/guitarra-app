// src/components/Fretboard.jsx
import React, { useMemo } from 'react';
import { STRING_NAMES } from '../data/chords';

const FingerDot = ({ fret, finger, numVisibleFrets }) => {
  const positionStyle = useMemo(() => {
    const fretNumber = parseInt(fret, 10);
    if (isNaN(fretNumber)) return {};
    const fretWidthPercent = 100 / numVisibleFrets;
    const posPercent = (fretNumber - 0.5) * fretWidthPercent;
    return { left: `calc(${posPercent}% - 12px + 8px)` };
  }, [fret, numVisibleFrets]);

  return (
    <div
      className="absolute w-6 h-6 bg-red-600 border-2 border-red-900 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-xl transition-all duration-300 ease-out"
      style={positionStyle}
    >
      {finger}
    </div>
  );
};

const GuitarString = ({ note, stringIndex, numVisibleFrets }) => {
  const isMuted = note.fret === 'X';
  const isOpen = note.fret === '0';
  const showDot = !isMuted && !isOpen;

  return (
    <div className={`relative h-4 flex items-center ${isMuted ? 'opacity-50' : ''}`}>
      <div className={`w-full h-[2px] ${stringIndex <= 2 ? 'bg-gray-400' : 'bg-gray-300'}`}></div>
      <div className="absolute -left-5 text-sm font-bold text-gray-200 w-4 text-center">{STRING_NAMES[stringIndex]}</div>
      {showDot && <FingerDot fret={note.fret} finger={note.finger} numVisibleFrets={numVisibleFrets} />}
      {isMuted && <div className="absolute -left-1 w-4 h-4 flex items-center justify-center text-red-500 font-extrabold text-lg">X</div>}
      {isOpen && <div className="absolute -left-1 w-4 h-4 flex items-center justify-center text-green-400 font-extrabold text-lg">O</div>}
    </div>
  );
};

const Fretboard = ({ chordData }) => {
  const numVisibleFrets = 4;

  return (
    <div className="relative flex flex-col p-4 bg-yellow-900 border-4 border-yellow-800 rounded-lg shadow-2xl overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-around items-center z-0 pointer-events-none">
        {numVisibleFrets >= 3 && (
          <div className="absolute left-[calc((100%/(var(--num-visible-frets)+1))*2.5)] transform -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-700 opacity-50"></div>
        )}
      </div>
      <div className="absolute inset-y-0 flex z-10 w-full" style={{ '--num-visible-frets': numVisibleFrets }}>
        <div className="absolute w-[8px] h-full bg-gray-900 z-20 left-0 top-0 rounded-l-md"></div>
        {Array.from({ length: numVisibleFrets }).map((_, index) => (
          <div key={index} className="flex-1 border-r border-gray-600 bg-yellow-950/20" style={{ width: `calc(100% / var(--num-visible-frets))`, marginLeft: index === 0 ? '8px' : '0.5px' }}>
            <div className="text-xs text-white/70 text-center pt-2">{index + 1}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col flex-grow justify-around z-30">
        {chordData.fingering.map((note, stringIndex) => (
          <GuitarString key={stringIndex} note={note} stringIndex={stringIndex} numVisibleFrets={numVisibleFrets} />
        ))}
      </div>
    </div>
  );
};

export default Fretboard;