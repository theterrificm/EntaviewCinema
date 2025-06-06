import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface CoursePackageImage {
  packageType: 'essential' | 'professional' | 'premium';
  imageUrl: string;
}

export async function generateCoursePackageImage(packageType: 'essential' | 'professional' | 'premium'): Promise<string> {
  let prompt = "";
  
  switch (packageType) {
    case 'essential':
      prompt = "Professional 3D rendered course package box, dark grey/black box with orange accent stripe, cover shows successful video production scene with smiling film crew and camera equipment, 'FOUNDATIONS' text on box, realistic lighting and shadows, isometric perspective, premium quality, studio photography style";
      break;
    case 'professional':
      prompt = "Professional 3D rendered course package bundle, 5 different colored course boxes arranged in perspective, covers show various successful campaign visuals - happy cast and crew on film sets, professional video production equipment, behind-the-scenes of successful shoots, realistic shadows and depth, premium studio lighting, isometric view";
      break;
    case 'premium':
      prompt = "Luxury 3D rendered premium course package box, large black box with premium orange/red accents, cover displays high-end video production success story with professional film crew celebrating, cinema-quality equipment, 'CINEMA MASTERY' branding, sophisticated design, studio lighting with dramatic shadows, high-end product photography style";
      break;
  }

  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      quality: "hd",
      style: "natural"
    });

    if (!response.data || response.data.length === 0 || !response.data[0].url) {
      throw new Error('No image URL received from OpenAI');
    }
    return response.data[0].url;
  } catch (error) {
    console.error(`Failed to generate ${packageType} package image:`, error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Failed to generate course package image: ${errorMessage}`);
  }
}

export async function generateAllCoursePackageImages(): Promise<CoursePackageImage[]> {
  try {
    const [essentialUrl, professionalUrl, premiumUrl] = await Promise.all([
      generateCoursePackageImage('essential'),
      generateCoursePackageImage('professional'),
      generateCoursePackageImage('premium')
    ]);

    return [
      { packageType: 'essential', imageUrl: essentialUrl },
      { packageType: 'professional', imageUrl: professionalUrl },
      { packageType: 'premium', imageUrl: premiumUrl }
    ];
  } catch (error) {
    console.error('Failed to generate course package images:', error);
    throw error;
  }
}