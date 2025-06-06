import { useState } from 'react';

interface PackageImage {
  packageType: 'essential' | 'professional' | 'premium';
  imageUrl: string;
}

interface UsePackageImagesReturn {
  images: Record<string, string>;
  isLoading: boolean;
  error: string | null;
  generateImages: () => Promise<void>;
}

export function usePackageImages(): UsePackageImagesReturn {
  const [images, setImages] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateImages = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/generate-all-package-images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate images');
      }

      const imageMap: Record<string, string> = {};
      data.images.forEach((img: PackageImage) => {
        imageMap[img.packageType] = img.imageUrl;
      });
      
      setImages(imageMap);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate images';
      setError(errorMessage);
      console.error('Error generating package images:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    images,
    isLoading,
    error,
    generateImages
  };
}