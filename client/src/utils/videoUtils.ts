// Video file path utilities for deployment compatibility
export const encodeVideoPath = (filename: string): string => {
  // Simple path encoding that maintains compatibility
  return filename.replace(/\s/g, '%20');
};

// Video file mappings for deployment compatibility
export const videoFiles = {
  // Main showreel videos - using stable files
  makuShowreel: "/maku-showreel-optimized.mp4",
  heroVideo: "/hero-video.mp4",
  
  // Portfolio videos - use existing files in public directory
  iconHeist: "/icon-heist-video.mp4",
  rezzilPlayer: "/rezzil-player.mp4",
  
  // Use primary video files for deployment compatibility
  makuShowreel2025: "/maku-showreel-optimized.mp4",
  teremanaFull: "/hero-video.mp4",
  teremanaShort: "/hero-video.mp4",
  manifestV4: "/maku-showreel-optimized.mp4",
  manifestV5: "/maku-showreel-optimized.mp4",
  padelWebsite: "/hero-video.mp4",
  rezzilPSVR: "/rezzil-player.mp4",
  iconHeistFull: "/icon-heist-video.mp4"
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