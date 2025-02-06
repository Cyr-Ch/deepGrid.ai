// Video loading handler
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.contact-video');
    
    videos.forEach(video => {
        // Set dimensions before loading
        const container = video.parentElement;
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        
        // Force video to maintain aspect ratio and cover container
        video.style.width = '100%';
        video.style.height = '100%';
        
        // Preload video
        video.preload = 'auto';
        
        // Handle video loading
        const handleLoad = () => {
            video.classList.add('loaded');
        };
        
        // Add loaded class when metadata is loaded
        video.addEventListener('loadedmetadata', handleLoad);
        
        // Fallback if video is already loaded
        if (video.readyState >= 2) {
            handleLoad();
        }
    });
});
