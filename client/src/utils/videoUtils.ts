// Video file path utilities for deployment compatibility
export const encodeVideoPath = (filename: string): string => {
  // URL encode the filename while preserving the path structure
  return '/' + encodeURIComponent(filename.startsWith('/') ? filename.slice(1) : filename);
};

// Video file mappings for deployment compatibility - only files that exist in public/
export const videoFiles = {
  // Main showreel videos - using stable files
  makuShowreel: "/maku-showreel-optimized.mp4",
  heroVideo: "/hero-video.mp4",
  
  // Portfolio videos - use existing files in public directory
  iconHeist: "/icon-heist-video.mp4",
  rezzilPlayer: "/rezzil-player.mp4",
  
  // Use primary video files for deployment compatibility
  makuShowreel2025: "/2025 Showreel MAKU (1)_1749340063718.mp4",
  teremanaFull: "/Teremana UK Launch - (Full Version - 4K)_1749341946737.mp4",
  manifestV5: "/1. Comp Open - Manifest v5_1749342296563.mp4",
  padelWebsite: "/Padel Website (Wide - FINAL) _1749158053418.mp4",
  rezzilPSVR: "/Rezzil 16-9 PSVR Final_1749337960289.mp4",
  iconHeistFull: "/ICON_Heist_FullFilm_Edit06_OriginalVersion_DC (1)_1749333927336.mp4",
  
  // Fallback mappings for missing files
  teremanaShort: "/hero-video.mp4", // Fallback to hero video
  manifestV4: "/1. Comp Open - Manifest v5_1749342296563.mp4", // Fallback to v5
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