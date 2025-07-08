import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { setupScrollRestoration, scrollToTop } from '../utils/scrollToTop';

interface ScrollToTopWrapperProps {
  children: React.ReactNode;
}

export default function ScrollToTopWrapper({ children }: ScrollToTopWrapperProps) {
  const [location] = useLocation();

  useEffect(() => {
    // Set up scroll restoration on component mount
    setupScrollRestoration();
    
    // Handle popstate events (browser back/forward)
    const handlePopState = () => {
      scrollToTop('instant');
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    // Scroll to top on every route change
    scrollToTop('instant');
  }, [location]);

  return <>{children}</>;
}