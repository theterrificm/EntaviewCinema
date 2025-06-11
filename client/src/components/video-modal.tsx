import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { validateAndEncodeVideoUrl } from '@/utils/videoValidator';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
  aspectRatio?: '16:9' | '9:16';
}

export function VideoModal({ isOpen, onClose, videoSrc, title, aspectRatio = '16:9' }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`relative w-full bg-black rounded-lg overflow-hidden ${
              aspectRatio === '9:16' 
                ? 'max-w-sm aspect-[9/16]' 
                : 'max-w-4xl aspect-video'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="absolute top-4 left-4 z-10">
              <h3 className="text-white font-oswald font-bold text-lg bg-black/50 px-3 py-1 rounded">
                {title}
              </h3>
            </div>

            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              loop
              playsInline
              webkit-playsinline=""
              preload="metadata"
              onError={(e) => {
                console.error('Video modal load error:', videoSrc, e);
                e.currentTarget.style.display = 'none';
              }}
            >
              <source src={validateAndEncodeVideoUrl(videoSrc).encodedUrl} type="video/mp4" />
              <p>Your browser does not support HTML5 video. <a href={validateAndEncodeVideoUrl(videoSrc).encodedUrl} target="_blank" rel="noopener noreferrer">Download video</a></p>
            </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}