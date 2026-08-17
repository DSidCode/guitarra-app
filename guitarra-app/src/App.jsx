import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Music, 
  Fingerprint, 
  ListMusic, 
  Sliders, 
  RotateCcw, 
  MessageCircle, 
  Github, 
  Linkedin, 
  Globe, 
  Sparkles, 
  Heart,
  ExternalLink
} from 'lucide-react';
import { CHORDS_DATA } from './data/chords';
import { SONGS_DATA } from './data/songs';
import { useChordNavigation } from './hooks/useChordNavigation';
import { transposeChord } from './utils/transposer';
import Fretboard from './components/Fretboard';

const App = () => {
  const [selectedSongId, setSelectedSongId] = useState(SONGS_DATA[0].id);
  const [transpose, setTranspose] = useState(0);

  const currentSong = SONGS_DATA.find(s => s.id === selectedSongId);

  // Mapear los acordes de la canción aplicando la transposición activa
  const songChordsObjects = currentSong.chords.map(rawChordId => {
    const transposedId = transposeChord(rawChordId, transpose);
    const foundChord = CHORDS_DATA.find(c => c.id === transposedId);
    
    if (foundChord) return foundChord;
    
    return {
      id: transposedId,
      name: `${transposedId} (Transp. ${transpose > 0 ? '+' : ''}${transpose})`,
      spanishName: `${transposedId}`,
      fingering: [
        { fret: 'X', finger: '' }, { fret: 'X', finger: '' }, { fret: '0', finger: '0' },
        { fret: '2', finger: '1' }, { fret: '3', finger: '2' }, { fret: '1', finger: '3' },
      ],
      tab: ['  D     U I M A', 'E|--1----1-|', 'B|---3---3-|', 'G|--2----2-|', 'D|-0---0---|', 'A|---------|', 'E|---------|', 'Transpuesto']
    };
  });

  const { currentIndex, setCurrentIndex, next, prev } = useChordNavigation(songChordsObjects.length);
  const currentChord = songChordsObjects[currentIndex];

  const handleSongChange = (e) => {
    setSelectedSongId(e.target.value);
    setCurrentIndex(0);
    setTranspose(0);
  };

  return (
    <div className="min-h-screen bg-[#070913] text-white font-sans p-4 md:p-8 flex flex-col items-center selection:bg-cyan-500 selection:text-black relative overflow-hidden">
      
      {/* Background Cyberpunk Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Cyberpunk Top Banner / Hub de Contactos Luxury */}
      <header className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center mb-8 pb-4 border-b border-cyan-500/30 backdrop-blur-md gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            <h1 className="text-3xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-yellow-300 to-amber-400 drop-shadow-[0_0_12px_rgba(0,243,255,0.4)]">
              CANCIONERO PRO
            </h1>
            <span className="bg-cyan-950 text-cyan-400 border border-cyan-500/50 text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">
              v1.2 Cyberpunk
            </span>
          </div>
          <p className="text-xs text-gray-400 font-mono mt-0.5">
            Maison Quintessence Studio • Guitar Learning Engine
          </p>
        </div>

        {/* Botonera de Redes Directas Luxury */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {/* WhatsApp Directo */}
          <a
            href="https://wa.me/34641868620"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/60 text-emerald-400 rounded-full text-xs font-bold transition-all shadow-[0_0_12px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
            <span>WhatsApp (641868620)</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/DSidCode"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900/90 hover:bg-gray-800 border border-gray-700 text-gray-300 hover:text-white rounded-full text-xs font-semibold transition-all hover:border-gray-500 hover:scale-105"
            title="GitHub (DSidCode)"
          >
            <Github className="w-4 h-4 text-gray-300" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/garciadanielsid/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-950/80 hover:bg-blue-900 border border-blue-500/50 text-blue-300 hover:text-white rounded-full text-xs font-semibold transition-all hover:scale-105"
            title="LinkedIn (DaniSid)"
          >
            <Linkedin className="w-4 h-4 text-blue-400" />
            <span>LinkedIn</span>
          </a>

          {/* Maison Quintessence */}
          <a
            href="https://quintessence.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-950/80 to-yellow-950/80 hover:from-amber-900 hover:to-yellow-900 border border-amber-500/50 text-amber-300 rounded-full text-xs font-semibold transition-all hover:scale-105 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
            title="Maison Quintessence IT Boutique"
          >
            <Globe className="w-4 h-4 text-amber-400" />
            <span>Quintessence</span>
          </a>

          {/* Gorra Digital */}
          <button
            onClick={() => alert('¡Gracias por apoyar el desarrollo independiente! Próximamente integración directa con Bizum, Stripe y PayPal.')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black font-black rounded-full text-xs transition-all shadow-[0_0_15px_rgba(250,204,21,0.5)] hover:scale-105"
          >
            <Heart className="w-4 h-4 fill-black" />
            <span>APOYAR</span>
          </button>
        </div>
      </header>

      {/* Selector de Canción DESTACADO (Cyberpunk Glassmorphism) */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center bg-gray-900/80 backdrop-blur-xl p-6 rounded-2xl shadow-[0_0_30px_rgba(250,204,21,0.15)] mb-8 border-2 border-yellow-500/40 relative">
        <div className="flex items-center text-yellow-400 mb-4 md:mb-0">
          <ListMusic className="mr-3 w-8 h-8 text-yellow-400 animate-pulse drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
          <span className="font-black text-2xl uppercase tracking-wider text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">
            ELEGIR REPERTORIO:
          </span>
        </div>
        <select 
          value={selectedSongId} 
          onChange={handleSongChange}
          className="w-full md:w-2/3 bg-gray-950/90 text-yellow-200 font-bold text-xl border-2 border-yellow-500 rounded-xl p-4 outline-none focus:ring-4 focus:ring-yellow-500/50 transition-all shadow-inner cursor-pointer hover:border-yellow-400"
        >
          {SONGS_DATA.map(song => (
            <option key={song.id} value={song.id} className="bg-gray-900 text-white font-sans text-lg">
              🎵 {song.artist} — {song.title}
            </option>
          ))}
        </select>
      </div>

      {/* Título de la Canción con Neón Glow */}
      <h1 className="text-3xl md:text-5xl font-black text-yellow-400 mb-2 flex items-center text-center tracking-tight drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]">
        <Music className="mr-3 w-8 h-8 md:w-10 md:h-10 text-yellow-400 hidden md:block animate-bounce"/>
        {currentSong.title}
      </h1>
      <p className="text-xl text-gray-300 mb-2 text-center font-bold tracking-wide">
        {currentSong.artist}
      </p>
      <p className="text-md text-cyan-200/90 mb-4 text-center max-w-2xl bg-cyan-950/40 backdrop-blur-md p-3.5 rounded-xl border border-cyan-500/30 font-mono text-xs md:text-sm shadow-inner">
        {currentSong.patternDescription}
      </p>

      {/* Control de Tonalidad y Transposición para la Voz (Cyberpunk Module) */}
      <div className="w-full max-w-4xl bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 backdrop-blur-xl p-5 rounded-2xl border border-cyan-500/50 shadow-[0_0_25px_rgba(0,243,255,0.15)] mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col text-left">
          <div className="flex items-center text-cyan-400 font-bold text-lg mb-1">
            <Sliders className="w-5 h-5 mr-2 text-cyan-400" />
            <span className="tracking-wider">ADAPTAR TONALIDAD PARA TU VOZ</span>
          </div>
          <p className="text-xs text-gray-300 max-w-md">
            ¿La canción está muy alta o incómoda para cantar? Ajusta los semitonos para subir o bajar el tono manteniendo la progresión exacta.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-black/80 p-3 rounded-xl border border-cyan-500/40 shadow-inner">
          <button 
            onClick={() => setTranspose(t => Math.max(t - 1, -5))}
            className="bg-cyan-600 hover:bg-cyan-400 text-black font-black px-4 py-2 rounded-lg text-lg transition-all active:scale-95 shadow-[0_0_10px_rgba(0,243,255,0.4)]"
            title="Bajar 1 semitono (hacer más grave)"
          >
            - 1 ST
          </button>

          <div className="px-4 text-center min-w-[130px]">
            <span className="block font-black text-xl text-yellow-400 font-mono">
              {transpose === 0 ? 'ORIGINAL' : `${transpose > 0 ? '+' : ''}${transpose} ST`}
            </span>
            <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-mono font-bold block">
              {transpose < 0 ? '▼ Más Grave' : transpose > 0 ? '▲ Más Agudo' : 'Tonalidad Base'}
            </span>
          </div>

          <button 
            onClick={() => setTranspose(t => Math.min(t + 1, 5))}
            className="bg-cyan-600 hover:bg-cyan-400 text-black font-black px-4 py-2 rounded-lg text-lg transition-all active:scale-95 shadow-[0_0_10px_rgba(0,243,255,0.4)]"
            title="Subir 1 semitono"
          >
            + 1 ST
          </button>

          {transpose !== 0 && (
            <button 
              onClick={() => setTranspose(0)}
              className="ml-1 p-2.5 bg-gray-800 hover:bg-gray-700 text-yellow-400 rounded-lg transition-all border border-yellow-500/40"
              title="Restaurar tono original"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Board (Cyberpunk Luxury Fretboard Display) */}
      <div className="bg-gray-900/90 backdrop-blur-2xl p-6 md:p-10 rounded-2xl shadow-[0_0_35px_rgba(0,0,0,0.8)] w-full max-w-4xl border border-gray-700/70 relative">
        {songChordsObjects.length > 0 ? (
          <>
            <div className="text-center mb-6">
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Acorde Posición ({currentIndex + 1} / {songChordsObjects.length})
              </p>
              <h2 className="text-5xl md:text-7xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] my-1">
                {currentChord?.name || 'Error'}
              </h2>
              <p className="text-yellow-400 text-lg font-medium">({currentChord?.spanishName || ''})</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-extrabold mb-3 text-yellow-400 flex items-center tracking-wide">
                  <Fingerprint className="w-5 h-5 mr-2 text-cyan-400"/>
                  1. Posición de Dedos
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-4">
                  Coloca tus dedos como se indica en el mástil (1=Índice, 2=Medio, 3=Anular, 4=Meñique).
                </p>
                {currentChord && <Fretboard chordData={currentChord} />}
              </div>

              <div className="flex-1 mt-6 md:mt-0">
                <h3 className="text-xl font-extrabold mb-3 text-yellow-400 flex items-center tracking-wide">
                  <Music className="w-5 h-5 mr-2 text-cyan-400"/>
                  2. Patrón de Arpegio (TAB)
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-4">
                  Ejecuta las cuerdas en secuencia sugerida para este acorde.
                </p>
                {currentChord && currentChord.tab && (
                  <>
                    <div className="bg-black/90 p-4 rounded-xl shadow-inner overflow-x-auto text-yellow-300 font-mono text-sm md:text-base border border-yellow-500/30">
                      <div className="whitespace-pre">{currentChord.tab.slice(0, 7).join('\n')}</div>
                    </div>
                    <p className="mt-3 text-xs font-mono text-cyan-300/80 bg-cyan-950/30 p-2 rounded border border-cyan-800/40">
                      {currentChord.tab[7]}
                    </p>
                  </>
                )}
              </div>
            </div>
            
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-800">
              <button 
                onClick={prev} 
                className="flex items-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 rounded-xl text-black font-black transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5 mr-2 stroke-[3]"/> Anterior
              </button>
              <button 
                onClick={next} 
                className="flex items-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 rounded-xl text-black font-black transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:scale-105"
              >
                Siguiente <ArrowRight className="w-5 h-5 ml-2 stroke-[3]"/>
              </button>
            </div>
          </>
        ) : (
          <div className="text-center p-10 text-red-400 font-mono">
            Faltan datos de acordes para esta canción.
          </div>
        )}
      </div>
      
      <p className="text-center text-gray-400 font-mono text-xs mt-8">
        Secuencia completa: <strong className="text-yellow-400">{currentSong.chords.join(' - ')}</strong>
      </p>

      {/* Cyberpunk Luxury Footer & Hub de Contacto Directo */}
      <footer className="w-full max-w-4xl text-center mt-8 mb-8 p-6 bg-gray-950/80 backdrop-blur-md rounded-2xl border border-gray-800 flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-mono text-gray-300">
          <a
            href="https://wa.me/34641868620"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-all font-bold"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Directo
          </a>
          <span>•</span>
          <a
            href="https://github.com/DSidCode"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-300 hover:text-white transition-all font-bold"
          >
            <Github className="w-4 h-4" /> GitHub (DSidCode)
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/garciadanielsid/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-all font-bold"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn Profile
          </a>
          <span>•</span>
          <a
            href="https://quintessence.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-all font-bold"
          >
            <Globe className="w-4 h-4" /> Maison Quintessence
          </a>
        </div>

        <div className="text-xs font-mono text-gray-400 pt-2 border-t border-gray-800/80 w-full">
          Diseñado y desarrollado por{' '}
          <a
            href="https://danisid.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-bold hover:text-cyan-300 transition-all filter drop-shadow-[0_0_6px_rgba(0,255,255,0.6)] inline-flex items-center gap-0.5"
          >
            DaniSid.com (SidZCooL) <ExternalLink className="w-3 h-3 ml-0.5 inline" />
          </a>
          {' • Maison Quintessence ® 2026'}
        </div>
      </footer>
    </div>
  );
};

export default App;