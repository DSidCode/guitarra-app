// src/App.jsx
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Music, Fingerprint, ListMusic } from 'lucide-react';
import { CHORDS_DATA } from './data/chords';
import { SONGS_DATA } from './data/songs';
import { useChordNavigation } from './hooks/useChordNavigation';
import Fretboard from './components/Fretboard';

const App = () => {
  const [selectedSongId, setSelectedSongId] = useState(SONGS_DATA[0].id);
  
  const currentSong = SONGS_DATA.find(s => s.id === selectedSongId);
  const songChordsObjects = currentSong.chords.map(chordId => 
    CHORDS_DATA.find(c => c.id === chordId)
  ).filter(Boolean); // Filter out any undefined chords just in case

  const { currentIndex, setCurrentIndex, next, prev } = useChordNavigation(songChordsObjects.length);
  const currentChord = songChordsObjects[currentIndex];

  const handleSongChange = (e) => {
    setSelectedSongId(e.target.value);
    setCurrentIndex(0); // Reset chord index when changing song
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-4 md:p-8 flex flex-col items-center">
      
      {/* App Header & Gorra Digital */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
        <h1 className="text-2xl font-black text-cyan-400 tracking-widest">
          CANCIONERO PRO
        </h1>
        <button 
          onClick={() => alert('¡Próximamente! Aquí enlazaremos la cuenta de PayPal, Stripe o Bizum.')}
          className="bg-transparent border border-gray-500 text-gray-300 font-semibold py-2 px-4 rounded-full text-sm hover:bg-gray-800 hover:text-white transition-all shadow-md backdrop-blur-sm"
        >
          LA GORRA DIGITAL (APOYO)
        </button>
      </div>

      {/* Selector de Canción DESTACADO */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center bg-gray-800 p-6 rounded-2xl shadow-[0_0_20px_rgba(250,204,21,0.2)] mb-8 border-2 border-yellow-500/50">
        <div className="flex items-center text-yellow-400 mb-4 md:mb-0">
          <ListMusic className="mr-3 w-8 h-8 animate-pulse" />
          <span className="font-black text-2xl uppercase tracking-wider text-yellow-400 drop-shadow-md">ELEGIR CANCIÓN:</span>
        </div>
        <select 
          value={selectedSongId} 
          onChange={handleSongChange}
          className="w-full md:w-2/3 bg-gray-900 text-yellow-100 font-bold text-xl border-2 border-yellow-500 rounded-xl p-4 outline-none focus:ring-4 focus:ring-yellow-500/50 transition-all shadow-inner cursor-pointer"
        >
          {SONGS_DATA.map(song => (
            <option key={song.id} value={song.id} className="bg-gray-800 text-white font-sans text-lg">
              🎵 {song.artist} - {song.title}
            </option>
          ))}
        </select>
      </div>

      <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-2 flex items-center text-center">
        <Music className="mr-3 w-8 h-8 md:w-10 md:h-10 hidden md:block"/>
        {currentSong.title}
      </h1>
      <p className="text-xl text-gray-300 mb-2 text-center font-semibold">
        {currentSong.artist}
      </p>
      <p className="text-md text-gray-400 mb-8 text-center max-w-2xl bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
        {currentSong.patternDescription}
      </p>

      {/* Main Board */}
      <div className="bg-gray-800 p-6 md:p-10 rounded-xl shadow-2xl w-full max-w-4xl border border-gray-700">
        {songChordsObjects.length > 0 ? (
          <>
            <div className="text-center mb-6">
              <p className="text-xl text-yellow-500">Acorde Actual ({currentIndex + 1} de {songChordsObjects.length})</p>
              <h2 className="text-5xl md:text-6xl font-black text-white">{currentChord?.name || 'Error'}</h2>
              <p className="text-gray-300 text-lg">({currentChord?.spanishName || ''})</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-yellow-400 flex items-center">
                  <Fingerprint className="w-5 h-5 mr-2"/>
                  1. Posición de Dedos
                </h3>
                <p className="text-gray-400 mb-3">Coloca tus dedos como se indica. Los números indican el dedo a usar (1=Índice, 4=Meñique).</p>
                {currentChord && <Fretboard chordData={currentChord} />}
              </div>

              <div className="flex-1 mt-6 md:mt-0">
                <h3 className="text-2xl font-bold mb-3 text-yellow-400 flex items-center">
                  <Music className="w-5 h-5 mr-2"/>
                  2. Patrón (TAB)
                </h3>
                <p className="text-gray-400 mb-3">
                  Sigue el arpegio o rasgueo sugerido para este acorde.
                </p>
                {currentChord && currentChord.tab && (
                  <>
                    <div className="bg-gray-900 p-4 rounded-lg shadow-inner overflow-x-auto text-yellow-200 font-mono text-sm md:text-base border border-gray-700">
                      <div className="whitespace-pre">{currentChord.tab.slice(0, 7).join('\n')}</div>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">{currentChord.tab[7]}</p>
                  </>
                )}
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
          </>
        ) : (
          <div className="text-center p-10 text-red-400">
            Faltan datos de acordes para esta canción en `chords.js`.
          </div>
        )}
      </div>
      
      <p className="text-center text-gray-500 text-sm mt-8">
        Secuencia completa: <strong>{currentSong.chords.join(' - ')}</strong>
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