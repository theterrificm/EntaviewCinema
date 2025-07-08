// Video file path utilities for deployment compatibility
export const encodeVideoPath = (filename: string): string => {
  // Return the path as-is since Express handles static files correctly
  return filename;
};

// Video file mappings for deployment compatibility - only files that exist in public/
export const videoFiles = {
  // Main showreel videos - using stable files that exist
  makuShowreel: "/maku-showreel-optimized.mp4",
  heroVideo: "/hero-video.mp4",
  
  // Portfolio videos - use existing files in public directory
  iconHeist: "/icon-heist-video.mp4",
  rezzilPlayer: "/hero-video.mp4", // Fallback until we add the actual file
  
  // Use actual files that exist in public directory
  makuShowreel2025: "/2025 Showreel MAKU (1)_1749340063718.mp4",
  teremanaFull: "/hero-video.mp4", // Fallback to hero video
  manifestV5: "/hero-video.mp4", // Fallback to hero video
  padelWebsite: "/hero-video.mp4", // Fallback to hero video
  rezzilPSVR: "/hero-video.mp4", // Fallback to hero video
  iconHeistFull: "/icon-heist-video.mp4",
  
  // Fallback mappings for missing files
  teremanaShort: "/hero-video.mp4", // Fallback to hero video
  manifestV4: "/hero-video.mp4", // Fallback to hero video
  iconHeistAds: "/icon-heist-video.mp4" // Fallback to main icon heist video
};

// Get properly encoded video URL
export const getVideoUrl = (videoKey: keyof typeof videoFiles): string => {
  const filename = videoFiles[videoKey];
  return encodeVideoPath(filename);
};

// Fallback video in case of errors
export const getFallbackVideo = (): string => {
  return videoFiles.heroVideo;
};

// Direct video path encoder for any video file
export const encodeVideoUrl = (videoPath: string): string => {
  return encodeVideoPath(videoPath);
};