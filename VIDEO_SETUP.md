# Runtime Terror - Video Background Setup

## 🎥 Video Background is Already Working!

The home page now features a **professional video background** with a person coding (back view).

### Current Setup:

1. **Video Sources** (in order of priority):
   - Primary: High-quality coding video from Pixabay
   - Fallback 1: Programming screen video
   - Fallback 2: Code on screen video

2. **Features**:
   - ✅ Auto-plays on page load
   - ✅ Loops continuously
   - ✅ Muted (for better UX)
   - ✅ Responsive (works on all devices)
   - ✅ Dark overlay for text readability
   - ✅ "Welcome to Runtime Terror" text with typewriter effect

### How to Use Your Own Video:

If you want to use a custom video:

1. **Add your video file** to the `public` folder:
   ```
   public/
   └── coding-video.mp4
   ```

2. **Update the video source** in `src/components/Home.jsx`:
   ```jsx
   <source src="/coding-video.mp4" type="video/mp4" />
   ```

### Recommended Video Specifications:

- **Format**: MP4 (H.264)
- **Resolution**: 1920x1080 (Full HD) or higher
- **Duration**: 10-30 seconds (will loop)
- **File Size**: Under 10MB for best performance
- **Content**: Person coding from behind/back view

### Free Video Sources:

1. **Pexels**: https://www.pexels.com/search/videos/coding/
2. **Pixabay**: https://pixabay.com/videos/search/programming/
3. **Coverr**: https://coverr.co/

### Current Design:

The page features:
- 🎬 Full-screen video background
- 📝 Typewriter text animation
- 🎨 Glassmorphism UI elements
- 📱 Bootstrap responsive layout
- ✨ Professional feature cards

Everything is already set up and working! Just refresh your browser to see it in action.
