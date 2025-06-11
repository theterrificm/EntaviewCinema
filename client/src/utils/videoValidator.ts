// Video validation utility for production deployment
export interface VideoValidationResult {
  isValid: boolean;
  url: string;
  encodedUrl: string;
  error?: string;
}

export function validateAndEncodeVideoUrl(url: string): VideoValidationResult {
  try {
    // Remove leading slash if present for consistent handling
    const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
    
    // URL encode the filename while preserving the path structure
    const encodedUrl = '/' + encodeURIComponent(cleanUrl);
    
    return {
      isValid: true,
      url,
      encodedUrl
    };
  } catch (error) {
    return {
      isValid: false,
      url,
      encodedUrl: url,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

export function createVideoSources(videoUrl: string): Array<{ src: string; type: string }> {
  const validation = validateAndEncodeVideoUrl(videoUrl);
  
  return [
    {
      src: validation.encodedUrl,
      type: 'video/mp4'
    }
  ];
}

export async function testVideoLoad(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const video = document.createElement('video');
    video.muted = true;
    video.playsInline = true;
    
    const timeout = setTimeout(() => {
      resolve(false);
    }, 5000); // 5 second timeout
    
    video.oncanplay = () => {
      clearTimeout(timeout);
      resolve(true);
    };
    
    video.onerror = () => {
      clearTimeout(timeout);
      resolve(false);
    };
    
    video.src = url;
  });
}