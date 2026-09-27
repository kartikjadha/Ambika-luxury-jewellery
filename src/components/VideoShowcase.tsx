import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, MessageCircle, MapPin, Film } from 'lucide-react';
import { JEWELLER_CONFIG } from '../config/jewellerConfig';

interface VideoShowcaseProps {
  onOpenEnquiry: (category?: string) => void;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ onOpenEnquiry }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="video" className="py-16 sm:py-20 bg-[#161412] text-white overflow-hidden relative">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A038]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#85611E]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#DEC17C] uppercase tracking-widest mb-2">
            <Film className="w-3.5 h-3.5" />
            <span>Showroom Experience Film</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F0]">
            {JEWELLER_CONFIG.video.title}
          </h2>
          <p className="font-devanagari text-lg sm:text-xl text-[#DEC17C] font-medium mt-1">
            {JEWELLER_CONFIG.video.titleMarathi}
          </p>
          <p className="text-sm sm:text-base text-stone-300 mt-3 max-w-xl mx-auto">
            {JEWELLER_CONFIG.video.subtitle}
          </p>
        </div>

        {/* Cinematic Video Player Container */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-[#DEC17C]/30 shadow-2xl bg-black group">
          <div className="relative aspect-video w-full bg-stone-900 flex items-center justify-center">
            
            <video
              ref={videoRef}
              src={JEWELLER_CONFIG.video.videoUrl}
              poster={JEWELLER_CONFIG.video.poster}
              muted={isMuted}
              loop
              playsInline
              preload="metadata"
              onClick={togglePlay}
              className="w-full h-full object-cover cursor-pointer"
            />

            {/* Dark Scrim overlay when paused */}
            {!isPlaying && (
              <div 
                onClick={togglePlay}
                className="absolute inset-0 bg-black/45 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-all duration-300"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FAF7F0] text-[#1D1917] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 pl-1.5 border-4 border-[#C5A038]">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current text-[#1D1917]" />
                </div>
                <div className="mt-4 text-center">
                  <span className="font-serif text-lg sm:text-xl font-bold text-white block">
                    Play Showroom Tour
                  </span>
                  <span className="text-xs text-[#DEC17C] font-devanagari">
                    रोहा दालनाची सुवर्ण सफर
                  </span>
                </div>
              </div>
            )}

            {/* Persistent Control Bar on Video */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between pointer-events-auto">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-2 sm:p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-colors"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current pl-0.5" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2 sm:p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-colors"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="text-xs text-stone-300 hidden sm:inline">
                  Shree Ambika Jewellers • Roha
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={JEWELLER_CONFIG.getWhatsAppUrl('Showroom Video Tour & Visit')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-medium flex items-center gap-1.5 hover:bg-[#1EBE5D] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Connect on WhatsApp</span>
                  <span className="sm:hidden">WhatsApp</span>
                </a>

                <a
                  href={JEWELLER_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#DEC17C]" />
                  <span>Visit In Person</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Video Customization Notice for Showroom Owner */}
        <div className="mt-8 text-center text-xs text-stone-400 max-w-xl mx-auto">
          <p>
            Showroom Owners: Custom business reels or showroom video clips can be effortlessly connected in{' '}
            <code className="bg-stone-800 text-[#DEC17C] px-1.5 py-0.5 rounded">src/config/jewellerConfig.ts</code>.
          </p>
        </div>

      </div>
    </section>
  );
};
