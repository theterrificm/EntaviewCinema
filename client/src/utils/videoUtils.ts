// Video file path utilities for deployment compatibility
export const encodeVideoPath = (filename: string): string => {
  // Handle special characters in video filenames for deployment
  // Only encode the filename part, not the leading slash
  if (filename.startsWith('/')) {
    const path = filename.substring(1);
    return '/' + encodeURIComponent(path);
  }
  return encodeURIComponent(filename);
};

// Video file mappings for deployment compatibility
export const videoFiles = {
  // Main showreel videos - using stable files
  makuShowreel: "/maku-showreel-optimized.mp4",
  heroVideo: "/hero-video.mp4",
  
  // Portfolio videos - use existing files in public directory
  iconHeist: "/icon-heist-video.mp4",
  rezzilPlayer: "/rezzil-player.mp4",
  
  // Map problematic filenames to working alternatives - use encoded paths for deployment
  makuShowreel2025: "/2025%20Showreel%20MAKU%20(1)_1749340063718.mp4",
  teremanaFull: "/Teremana%20UK%20Launch%20-%20(Full%20Version%20-%204K)_1749341946737.mp4",
  teremanaShort: "/Teremana%20UK%20Launch%20(20%20Sec%20Cutdown%20-%20Vertical)%20(1)_1749495031895.mp4",
  manifestV4: "/1.%20Comp%20Open%20-%20Manifest%20v4_1749493286513.mp4",
  manifestV5: "/1.%20Comp%20Open%20-%20Manifest%20v5_1749342296563.mp4",
  padelWebsite: "/Padel%20Website%20(Wide%20-%20FINAL)%20_1749158053418.mp4",
  rezzilPSVR: "/Rezzil%2016-9%20PSVR%20Final_1749337960289.mp4",
  iconHeistFull: "/ICON_Heist_FullFilm_Edit06_OriginalVersion_DC%20(1)_1749333927336.mp4"
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