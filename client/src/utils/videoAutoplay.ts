// Global video autoplay manager for production deployment
class VideoAutoplayManager {
  private hasUserInteracted = false;
  private pendingVideos: HTMLVideoElement[] = [];
  private observers: IntersectionObserver[] = [];

  constructor() {
    this.initializeGlobalHandlers();
  }

  private initializeGlobalHandlers() {
    // Listen for any user interaction to enable autoplay globally
    const enableAutoplay = () => {
      this.hasUserInteracted = true;
      this.playAllPendingVideos();
      
      // Remove listeners after first interaction
      document.removeEventListener('click', enableAutoplay);
      document.removeEventListener('touchstart', enableAutoplay);
      document.removeEventListener('scroll', enableAutoplay);
      document.removeEventListener('keydown', enableAutoplay);
    };

    document.addEventListener('click', enableAutoplay, { passive: true });
    document.addEventListener('touchstart', enableAutoplay, { passive: true });
    document.addEventListener('scroll', enableAutoplay, { passive: true });
    document.addEventListener('keydown', enableAutoplay, { passive: true });

    // Also try immediate autoplay
    this.testImmediateAutoplay();
  }

  private async testImmediateAutoplay() {
    try {
      const testVideo = document.createElement('video');
      testVideo.muted = true;
      testVideo.playsInline = true;
      testVideo.volume = 0;
      testVideo.src = 'data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAENmcmVlAAAAG21kYXQAAAGzABAHAAABthADAowdbb9/AAAC6W1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAAAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIVdHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAALgAAAAAoAAAAAAEdlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAG4AAAAAAAEAAAAAAQVtZGlhAAAAIG1kaGQAAAAAC';
      
      document.body.appendChild(testVideo);
      testVideo.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;';
      
      await testVideo.play();
      this.hasUserInteracted = true;
      testVideo.remove();
      this.playAllPendingVideos();
    } catch {
      // Autoplay blocked, will wait for user interaction
    }
  }

  private playAllPendingVideos() {
    this.pendingVideos.forEach(video => {
      if (video && !video.paused) return;
      
      video.muted = true;
      video.volume = 0;
      video.play().catch(() => {
        // Silent fail - video will play on hover
      });
    });
  }

  public registerVideo(video: HTMLVideoElement, options: {
    enableIntersection?: boolean;
    enableHover?: boolean;
  } = {}) {
    const { enableIntersection = true, enableHover = true } = options;

    // Add to pending videos for global autoplay
    this.pendingVideos.push(video);

    // Set up intersection observer for viewport-based autoplay
    if (enableIntersection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.attemptPlay(video);
            } else {
              video.pause();
              video.currentTime = 0;
            }
          });
        },
        { threshold: 0.3, rootMargin: '50px' }
      );
      
      observer.observe(video);
      this.observers.push(observer);
    }

    // Set up hover handlers
    if (enableHover) {
      video.addEventListener('mouseenter', () => this.attemptPlay(video));
      video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    }

    // Try immediate play if user has already interacted
    if (this.hasUserInteracted) {
      setTimeout(() => this.attemptPlay(video), 100);
    }

    // Multiple play attempts when video is ready
    video.addEventListener('canplay', () => this.attemptPlay(video));
    video.addEventListener('loadeddata', () => {
      setTimeout(() => this.attemptPlay(video), 50);
    });

    return () => {
      // Cleanup function
      const index = this.pendingVideos.indexOf(video);
      if (index > -1) this.pendingVideos.splice(index, 1);
    };
  }

  private attemptPlay(video: HTMLVideoElement) {
    if (!video || video.paused === false) return;

    video.muted = true;
    video.volume = 0;
    
    // Set all possible autoplay attributes
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const playAttempt = async () => {
      try {
        await video.play();
      } catch (error) {
        // Retry with additional delay
        setTimeout(async () => {
          try {
            await video.play();
          } catch {
            // Final silent fail
          }
        }, 100);
      }
    };

    playAttempt();
  }

  public cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.pendingVideos = [];
  }
}

export const videoAutoplayManager = new VideoAutoplayManager();