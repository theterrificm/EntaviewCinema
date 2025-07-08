// Video file path utilities for deployment compatibility
export const encodeVideoPath = (filename: string): string => {
  // Return the path as-is since Express handles static files correctly
  return filename;
};

// Video file mappings for deployment compatibility - only files that exist in public/
export const videoFiles = {
  // Main showreel videos - using stable files that exist
  makuShowreel: "/2025 Showreel MAKU (1)_1749340063718.mp4",
  heroVideo: "/hero-video.mp4",
  
  // Portfolio videos - use existing files in public directory
  iconHeist: "/icon-heist-video.mp4",
  rezzilPlayer: "/rezzil-player.mp4",
  
  // Use actual files that exist in public directory
  makuShowreel2025: "/2025%20Showreel%20MAKU%20(1)_1749340063718.mp4",
  teremanaFull: "/Teremana%20UK%20Launch%20-%20(Full%20Version%20-%204K)_1749341946737.mp4",
  manifestV5: "/2025%20Showreel%20MAKU%20(1)_1749340063718.mp4", // Use MAKU as fallback
  padelWebsite: "/Padel%20Website%20(Wide%20-%20FINAL)%20_1749158053418.mp4",
  rezzilPSVR: "/Rezzil%2016-9%20PSVR%20Final_1749337960289.mp4",
  iconHeistFull: "/icon-heist-video.mp4",
  
  // Fallback mappings for missing files
  teremanaShort: "/Teremana%20UK%20Launch%20-%20(Full%20Version%20-%204K)_1749341946737.mp4",
  manifestV4: "/2025%20Showreel%20MAKU%20(1)_1749340063718.mp4", // Use MAKU as fallback
  iconHeistAds: "/icon-heist-video.mp4", // Fallback to main icon heist video
  iconBlackFriday: "/icon-heist-video.mp4", // Use main icon heist video
  iconHeistRico: "/icon-heist-video.mp4" // Use main icon heist video
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