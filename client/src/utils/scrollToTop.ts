// Utility to handle scroll restoration and page top positioning
export const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior
  });
};

// Hook to handle scroll restoration on route changes
export const useScrollToTop = () => {
  const handleScrollToTop = () => {
    // Use instant scroll to avoid animation delays on page transitions
    scrollToTop('instant');
  };

  return handleScrollToTop;
};

// Override browser's default scroll restoration
export const setupScrollRestoration = () => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
};