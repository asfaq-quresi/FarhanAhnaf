import React, { useEffect, useState, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface VideoPlayerModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire?: (projectTitle: string) => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  project,
  onClose,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState('0:00');
  const [durationFormatted, setDurationFormatted] = useState(project?.duration || '0:00');
  const [isLoading, setIsLoading] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    setIsPlaying(true);
    setProgress(0);
    setCurrentTimeFormatted('0:00');
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Handle play/pause with real video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch(() => {
        // Fallback: browser may require muted autoplay
        if (!video.muted) {
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        }
      });
    } else {
      video.pause();
    }
  }, [isPlaying]);

  // Handle mute with real video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Real video time tracking
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const current = video.currentTime;
    const total = video.duration;
    setProgress((current / total) * 100);
    setCurrentTimeFormatted(formatTime(current));
    setDurationFormatted(formatTime(total));
  };

  // Scrub bar click/seek
  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    setProgress(pct);

    const video = videoRef.current;
    if (video && video.duration) {
      video.currentTime = (pct / 100) * video.duration;
    }
  };

  // Fallback simulated progress if project has no videoSrc
  useEffect(() => {
    if (project?.videoSrc || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 1));
    }, 200);
    return () => clearInterval(interval);
  }, [isPlaying, project?.videoSrc]);

  if (!project) return null;

  const isVertical = project.aspectRatio === '9:16';

  return (
    <div
      role="dialog"
      aria-modal="true"
      data-lenis-prevent
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Focused Video Player Modal */}
      <div
        className={`relative ${
          isVertical
            ? 'w-full max-w-[360px] sm:max-w-[400px] aspect-[9/16]'
            : 'w-full max-w-4xl aspect-video'
        } bg-black border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center select-none`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Top Right of Video Player */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/75 hover:bg-neutral-800 border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg"
          aria-label="Close viewer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Real Hosted Video Player or Poster Thumbnail */}
        {project.videoSrc ? (
          <video
            ref={videoRef}
            src={project.videoSrc}
            poster={project.thumbnail}
            playsInline
            autoPlay
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onWaiting={() => setIsLoading(true)}
            onPlaying={() => setIsLoading(false)}
            onLoadedMetadata={(e) => {
              const d = e.currentTarget.duration;
              if (d && !isNaN(d)) setDurationFormatted(formatTime(d));
            }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-full h-full object-cover cursor-pointer"
          />
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        )}

        {/* Buffering Indicator */}
        {isLoading && project.videoSrc && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <Loader2 className="w-10 h-10 text-amber-400 animate-spin drop-shadow-lg" />
          </div>
        )}

        {/* Vignette / Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

        {/* Center Play/Pause Overlay Indicator on click */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute inset-0 flex items-center justify-center cursor-pointer group z-10"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <div
            className={`w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all ${
              isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100 scale-110'
            }`}
          >
            {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1 fill-white" />}
          </div>
        </button>

        {/* Bottom Player Scrubbing & Controls Bar */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/85 to-transparent flex flex-col gap-2.5 z-20">
          {/* Timeline scrub track */}
          <div
            className="w-full h-1.5 bg-white/20 hover:h-2 rounded-full cursor-pointer relative overflow-hidden transition-all"
            onClick={handleScrub}
          >
            <div
              className="h-full bg-amber-400 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Playback status row */}
          <div className="flex items-center justify-between text-xs text-neutral-300">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-amber-400 transition-colors cursor-pointer"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="hover:text-amber-400 transition-colors cursor-pointer"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="font-mono text-[11px] text-neutral-300">
                {project.videoSrc ? `${currentTimeFormatted} / ${durationFormatted}` : project.duration}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
