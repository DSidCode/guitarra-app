// src/App.jsx
import React from 'react';
import { ArrowLeft, ArrowRight, Music, Fingerprint } from 'lucide-react';
import { CHORDS_DATA } from './data/chords';
import { useChordNavigation } from './hooks/useChordNavigation';
import Fretboard from './components/Fretboard';

const App = () => {
  const { currentIndex, next, prev } = useChordNavigation(CHORDS_DATA.length);
  const currentChord = CHORDS_DATA[currentIndex];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-4 md:p-8 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-2 mt-4 flex items-center">
        <Music className="mr-3 w-8 h-8 md:w-10 md:h-10"/>
        LADY MADRIZZZ - céro
      </h1>
      <p className="text-lg text-gray-400 mb-8 text-center">
        Tutorial Interactivo: Patrón <strong>Dm - C - F - Bb</strong>
      </p>

      <div className="bg-gray-800 p-6 md:p-10 rounded-xl shadow-2xl w-full max-w-4xl">
        <div className="text-center mb-6">
          <p className="text-xl text-yellow-500">Acorde Actual ({currentIndex + 1} de {CHORDS_DATA.length})</p>
          <h2 className="text-5xl md:text-6xl font-black text-white">{currentChord.name}</h2>
          <p className="text-gray-300 text-lg">({currentChord.spanishName})</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3 text-yellow-400 flex items-center">
              <Fingerprint className="w-5 h-5 mr-2"/>
              1. Posición de Dedos
            </h3>
            <p className="text-gray-400 mb-3">Coloca tus dedos como se indica. Los números indican el dedo a usar (1=Índice, 4=Meñique).</p>
            <Fretboard chordData={currentChord} />
          </div>

          <div className="flex-1 mt-6 md:mt-0">
            <h3 className="text-2xl font-bold mb-3 text-yellow-400 flex items-center">
              <Music className="w-5 h-5 mr-2"/>
              2. Patrón de Arpegio (TAB)
            </h3>
            <p className="text-gray-400 mb-3">
              Este es un arpegio sugerido: Marcar la Tónica (<strong>D</strong>) y luego tocar rápido (<strong>I M A</strong>).
            </p>
            <div className="bg-gray-900 p-4 rounded-lg shadow-inner overflow-x-auto text-yellow-200 font-mono text-sm md:text-base border border-gray-700">
              <div className="whitespace-pre">{currentChord.tab.slice(0, 7).join('\n')}</div>
            </div>
            <p className="mt-2 text-sm text-gray-400">{currentChord.tab[7]}</p>
          </div>
        </div>
        
        <div className="flex justify-between mt-8 pt-4 border-t border-gray-700">
          <button onClick={prev} className="flex items-center px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-full text-white font-semibold transition-all shadow-lg">
            <ArrowLeft className="w-5 h-5 mr-2"/> Anterior
          </button>
          <button onClick={next} className="flex items-center px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-full text-white font-semibold transition-all shadow-lg">
            Siguiente <ArrowRight className="w-5 h-5 ml-2"/>
          </button>
        </div>
      </div>
      
      <p className="text-center text-gray-500 text-sm mt-8">
        Recuerda: El patrón se repite constantemente: <strong>Dm - C - F - Bb</strong>
      </p>

      <footer className="text-center mt-4 mb-8 p-4 font-mono text-sm text-gray-400">
        creado y diseñado por{' '}
        <a
          href="https://danisid.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-cyan-400 hover:text-cyan-300 transition-all filter drop-shadow-[0_0_4px_rgba(0,255,255,0.6)] hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]"
        >
          DaniSid.com - (SidZCooL)
        </a>
        {' ® 2025'}
      </footer>
    </div>
  );
};

export default App;