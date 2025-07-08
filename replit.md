# Entaview Creative - Video Production Agency

## Overview

Entaview Creative is a cinematic video production agency specializing in brand films and social content for lifestyle brands. The application is a full-stack React website featuring immersive video content, portfolio showcases, and strategic brand storytelling. Built with modern web technologies, it emphasizes performance, user experience, and cross-browser compatibility for video playback.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth page transitions and interactions
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Library**: Radix UI for accessible, unstyled components

### Backend Architecture
- **Server**: Express.js with TypeScript
- **API Design**: RESTful endpoints for image generation and content management
- **External Integrations**: OpenAI API for dynamic image generation
- **Development Tools**: Hot module replacement via Vite's middleware mode

### Database & ORM
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured for Neon serverless deployment)
- **Schema Management**: Type-safe schema definitions with Zod validation
- **Connection**: Neon serverless driver for production deployment

## Key Components

### Video System
- **SimpleVideoAutoplay**: Production-ready autoplay component with browser compatibility
- **VideoErrorBoundary**: Graceful error handling for video failures
- **VideoModal**: Full-screen video player with escape key support
- **Video Validator**: URL encoding and validation utilities for video sources

### Navigation & Layout
- **Responsive Navigation**: Mobile-first navigation with hamburger menu
- **Footer**: Company information and social links
- **Logo Loader**: Animated brand introduction sequence

### Content Sections
- **Hero Section**: Full-screen video background with call-to-action
- **Portfolio Gallery**: Interactive video showcase with hover effects
- **Netflix-Style Our Work**: Horizontal scrolling video rows with category organization
- **Brand Launch Page**: StoryBrand framework-based content for market launches
- **About Page**: StoryBrand-structured company overview with mission, team, and values
- **Lead Magnet**: High-converting landing page for "10-Step Video Marketing Blueprint"
- **Thank You Page**: Post-download page with next steps and discovery call CTA
- **Testimonials**: Client feedback with rating system
- **Pricing**: Service packages with dynamic image generation
- **FAQ**: Expandable question/answer interface

## Data Flow

### Client-Side State Management
- React state for component-level interactions
- Framer Motion for animation state management
- Custom hooks for video interaction and mobile detection

### API Integration
- TanStack Query for server state management
- RESTful API calls for image generation
- Error boundaries for graceful failure handling

### Video Content Management
- Static video assets served from public directory
- URL encoding for file names with special characters
- Lazy loading and intersection observer for performance

## External Dependencies

### Production Services
- **OpenAI API**: Dynamic image generation for course packages
- **Neon Database**: Serverless PostgreSQL hosting
- **Google Fonts**: Typography (Anton, Bebas Neue, Oswald, Roboto Condensed, JetBrains Mono)

### Development Tools
- **Replit Integration**: Development environment with live preview
- **ESBuild**: Production build optimization
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### Browser Compatibility
- Modern browsers supporting HTML5 video
- Mobile-specific video attributes (playsInline, webkit-playsinline)
- Progressive enhancement for unsupported browsers

## Deployment Strategy

### Build Process
1. Vite builds the React frontend to `dist/public`
2. ESBuild bundles the Express server to `dist/index.js`
3. Static assets copied to public directory during build

### Production Configuration
- Environment variables for database connection and API keys
- Video optimization with `preload="metadata"` for faster loading
- CDN-ready static asset structure

### Performance Optimizations
- Video autoplay with mute to comply with browser policies
- Intersection Observer for lazy loading
- Optimized image formats and responsive breakpoints
- Minimal JavaScript bundles with code splitting

### Error Handling
- Global error boundaries for React components
- Server-side error middleware with proper status codes
- Video fallbacks for unsupported formats or network issues
- Graceful degradation for disabled JavaScript

## Changelog
- July 08, 2025: Built lead magnet landing page with "10-Step Video Marketing Blueprint" offer and thank-you page
- July 08, 2025: Added italics to standout works in About page section titles for visual emphasis
- July 08, 2025: Created comprehensive About page using StoryBrand structure with mission, team story, values, and client logos
- July 08, 2025: Optimized mobile video scrolling with overlap effect and swipe indicators for better UX
- July 08, 2025: Increased mobile animation speeds (5x banner, 6x brand logos) for improved performance
- July 08, 2025: Simplified video overlays by removing descriptive text for cleaner design
- July 07, 2025: Removed all pricing information across website, replaced with "Book call for investment" messaging
- July 07, 2025: Updated all CTA buttons to link to contact page for consistent user journey
- July 07, 2025: Aligned pricing section buttons and implemented proper flexbox layout
- July 07, 2025: Renamed Social Content page to Brand Launch page with StoryBrand framework focus
- July 07, 2025: Transformed Our Work page to Netflix-style horizontal scrolling interface 
- July 06, 2025: Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.