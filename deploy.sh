#!/bin/bash

# Deployment script for Entaview Creative
# Ensures all video files are properly served in production

echo "Starting deployment process..."

# Create dist directory if it doesn't exist
mkdir -p dist/public

# Copy all video files to production directory
echo "Copying video files to production directory..."
cp -r public/*.mp4 dist/public/ 2>/dev/null || echo "No MP4 files found in public directory"

# Copy all image files to production directory
echo "Copying image files to production directory..."
cp -r public/*.png dist/public/ 2>/dev/null || echo "No PNG files found in public directory"
cp -r public/*.jpg dist/public/ 2>/dev/null || echo "No JPG files found in public directory"
cp -r public/*.jpeg dist/public/ 2>/dev/null || echo "No JPEG files found in public directory"

# List files in production directory
echo "Files in production directory:"
ls -la dist/public/*.mp4 2>/dev/null | head -10

# Check if key video files exist
HERO_VIDEO="dist/public/hero-video.mp4"
MAKU_VIDEO="dist/public/2025 Showreel MAKU (1)_1749340063718.mp4"
ICON_VIDEO="dist/public/icon-heist-video.mp4"

if [ -f "$HERO_VIDEO" ]; then
    echo "✓ Hero video found: $(ls -lh $HERO_VIDEO | cut -d' ' -f5)"
else
    echo "✗ Hero video missing"
fi

if [ -f "$MAKU_VIDEO" ]; then
    echo "✓ MAKU video found: $(ls -lh "$MAKU_VIDEO" | cut -d' ' -f5)"
else
    echo "✗ MAKU video missing"
fi

if [ -f "$ICON_VIDEO" ]; then
    echo "✓ Icon video found: $(ls -lh $ICON_VIDEO | cut -d' ' -f5)"
else
    echo "✗ Icon video missing"
fi

echo "Deployment preparation complete!"
echo "Files are ready for production deployment"