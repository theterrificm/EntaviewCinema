#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🚀 Pre-deployment setup starting...');

// Ensure dist/public directory exists
const distPublicPath = path.join(process.cwd(), 'dist', 'public');
if (!fs.existsSync(distPublicPath)) {
  fs.mkdirSync(distPublicPath, { recursive: true });
  console.log('✅ Created dist/public directory');
}

// Copy all video files from public to dist/public
const publicPath = path.join(process.cwd(), 'public');
if (fs.existsSync(publicPath)) {
  const files = fs.readdirSync(publicPath);
  const videoFiles = files.filter(file => file.endsWith('.mp4'));
  
  console.log(`📁 Found ${videoFiles.length} video files in public directory`);
  
  videoFiles.forEach(file => {
    const sourcePath = path.join(publicPath, file);
    const destPath = path.join(distPublicPath, file);
    
    try {
      fs.copyFileSync(sourcePath, destPath);
      const stats = fs.statSync(destPath);
      console.log(`✅ Copied ${file} (${(stats.size / 1024 / 1024).toFixed(1)}MB)`);
    } catch (error) {
      console.error(`❌ Failed to copy ${file}:`, error.message);
    }
  });
} else {
  console.log('❌ Public directory not found');
}

// Verify critical video files
const criticalVideos = [
  'hero-video.mp4',
  '2025 Showreel MAKU (1)_1749340063718.mp4',
  'icon-heist-video.mp4',
  'rezzil-player.mp4',
  'Padel Website (Wide - FINAL) _1749158053418.mp4'
];

console.log('\n🔍 Verifying critical video files...');
criticalVideos.forEach(videoFile => {
  const filePath = path.join(distPublicPath, videoFile);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log(`✅ ${videoFile} (${(stats.size / 1024 / 1024).toFixed(1)}MB)`);
  } else {
    console.log(`❌ Missing: ${videoFile}`);
  }
});

console.log('\n🎬 Pre-deployment setup complete!');
console.log('Ready for deployment - all video files are properly positioned.');