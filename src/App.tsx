import React, { useState, useEffect, useRef } from 'react';
import { Heart, Music, Volume2, VolumeX } from 'lucide-react';
import { FloatingBalloons } from './components/FloatingBalloons';
import { PhotoGallery } from './components/PhotoGallery';
import { Fireworks } from './components/Fireworks';
import { GiftBox } from './components/GiftBox';
import { SurpriseBalloons } from './components/SurpriseBalloons';

// Replace with your crush's name
const CRUSH_NAME = "Vel..";

const QUOTES = [
  "You light up my world...",
  "Every moment with you is magical...",
  "May all your wishes come true!",
  "You are the sunshine in my life.",
  "With you, every day feels like a dream.",
  "I'd choose you, over and over again."
];

const SONGS = [
  { url: 'Koondukkulla.mp3' },
  { url: 'Kannana-Kanne.mp3' },
  
  // Add more songs as needed
];

function App() {
  const [showPetals, setShowPetals] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [showSurpriseBalloons, setShowSurpriseBalloons] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying]);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  const handleGiftOpen = () => {
    setShowPetals(true);
    setShowSurpriseBalloons(true);
    setTimeout(() => {
      setShowPetals(false);
      setShowSurpriseBalloons(false);
    }, 8000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Stars Background */}
      <div className="fixed inset-0 opacity-50">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + 'vh',
              left: Math.random() * 100 + 'vw',
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`
            }}
          />
        ))}
      </div>

      {/* Music Controls */}
      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
      >
        {isMusicPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      {/* Audio Element */}
      <audio ref={audioRef} src={SONGS[currentSongIndex].url} loop />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="animate-fade-in text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-glow">
            Happy Birthday, {CRUSH_NAME}!
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Today is your special day, and I want to make every moment as special as you.
          </p>
        </div>
      </section>

      {/* Floating Balloons Section */}
      <section className="min-h-screen relative">
        <FloatingBalloons quotes={QUOTES} />
        <div className="absolute inset-0 flex items-center justify-center">
          <GiftBox onOpen={handleGiftOpen} />
        </div>
        {showPetals && <div className="rose-petals" />}
        <SurpriseBalloons isVisible={showSurpriseBalloons} />
      </section>

      {/* Memory Lane Section */}
      <section className="min-h-screen py-20 px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-16 animate-on-scroll">
          Our Special Moments
        </h2>
        <PhotoGallery />
      </section>

      {/* Personal Message Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4 text-center">
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <Heart 
            size={48} 
            className="mx-auto mb-8 animate-heartbeat text-pink-400"
          />
          <p className="text-xl md:text-2xl leading-relaxed mb-12">
            I hope this birthday is as amazing and beautiful as you are. 
            Every day with you feels like a celebration, but today, is special. 
            Happy Birthday!
          </p>
          <p className="text-2xl md:text-3xl font-bold mt-8">
            In a sky full of stars, you are brightest one.
          </p>
        </div>
        <Fireworks />
      </section>
    </div>
  );
}

export default App;