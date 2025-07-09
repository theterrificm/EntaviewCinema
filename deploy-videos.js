#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🎬 Starting video deployment process...');

// Ensure dist/public exists
const distPublicPath = path.join(process.cwd(), 'dist', 'public');
if (!fs.existsSync(distPublicPath)) {
  fs.mkdirSync(distPublicPath, { recursive: true });
  console.log('✅ Created dist/public directory');
}

// Copy ALL files from public to dist/public
const publicPath = path.join(process.cwd(), 'public');
if (fs.existsSync(publicPath)) {
  function copyRecursive(src, dest) {
    const stats = fs.statSync(src);
    if (stats.isDirectory()) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      const files = fs.readdirSync(src);
      files.forEach(file => {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        copyRecursive(srcPath, destPath);
      });
    } else {
      fs.copyFileSync(src, dest);
      if (src.endsWith('.mp4')) {
        const fileSize = (fs.statSync(dest).size / 1024 / 1024).toFixed(1);
        console.log(`✅ Copied ${path.basename(src)} (${fileSize}MB)`);
      }
    }
  }
  
  copyRecursive(publicPath, distPublicPath);
} else {
  console.log('❌ Public directory not found');
}

// Verify all critical video files exist
const criticalVideos = [
  'hero-video.mp4',
  '2025 Showreel MAKU (1)_1749340063718.mp4',
  'icon-heist-video.mp4',
  'rezzil-player.mp4',
  'Padel Website (Wide - FINAL) _1749158053418.mp4'
];

console.log('\n🔍 Verifying critical video files in dist/public...');
let allVideosPresent = true;
criticalVideos.forEach(videoFile => {
  const filePath = path.join(distPublicPath, videoFile);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log(`✅ ${videoFile} (${(stats.size / 1024 / 1024).toFixed(1)}MB)`);
  } else {
    console.log(`❌ MISSING: ${videoFile}`);
    allVideosPresent = false;
  }
});

if (allVideosPresent) {
  console.log('\n🎉 All critical video files are present in dist/public!');
  console.log('🚀 Video deployment complete - ready for production!');
} else {
  console.log('\n❌ Some video files are missing from dist/public');
  process.exit(1);
}