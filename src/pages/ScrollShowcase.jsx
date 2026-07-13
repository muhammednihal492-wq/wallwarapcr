import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './ScrollShowcase.module.css';

export default function ScrollShowcase() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);

  const totalFrames = 258;

  // Set up Framer Motion scroll tracker
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Frame drawing logic with 'object-fit: cover' behavior
  const drawFrame = React.useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !(img instanceof HTMLImageElement) || !img.complete) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.width;
    const imgHeight = img.height;

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Calculate scaling ratio (contain for mobile to fit to screen, cover for desktop)
    const isMobile = window.innerWidth <= 768;
    const ratio = isMobile
      ? Math.min(canvasWidth / imgWidth, canvasHeight / imgHeight)
      : Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const newWidth = imgWidth * ratio;
    const newHeight = imgHeight * ratio;

    // Center image
    const x = (canvasWidth - newWidth) / 2;
    const y = (canvasHeight - newHeight) / 2;

    ctx.drawImage(img, x, y, newWidth, newHeight);
  }, []);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages = [];
    let isMounted = true;

    const preloadImages = async () => {
      const promises = Array.from({ length: totalFrames }).map((_, index) => {
        return new Promise((resolve) => {
          const img = new Image();
          const frameNum = String(index + 1).padStart(3, '0');
          img.src = `/assets/ezgif-73fe489e692f7910-jpg (1)/ezgif-frame-${frameNum}.jpg`;
          
          img.onload = () => {
            if (isMounted) {
              loadedCount++;
              setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
            }
            resolve(img);
          };

          img.onerror = () => {
            // Fallback: resolve anyway to prevent getting stuck
            if (isMounted) {
              loadedCount++;
              setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
            }
            resolve(null);
          };

          loadedImages.push(img);
        });
      });

      await Promise.all(promises);

      if (isMounted) {
        imagesRef.current = loadedImages;
        setImagesLoaded(true);
        // Draw the initial frame
        requestAnimationFrame(() => drawFrame(0));
      }
    };

    preloadImages();

    return () => {
      isMounted = false;
    };
  }, [drawFrame]);

  // Handle canvas sizing and responsiveness
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;

      // Redraw current frame after resize
      drawFrame(currentFrame);
    };

    if (imagesLoaded) {
      window.addEventListener('resize', handleResize);
      handleResize();
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [imagesLoaded, currentFrame, drawFrame]);

  // Listen to scroll events to update frames
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!imagesLoaded || imagesRef.current.length === 0) return;

    // Map scroll progress (0 to 1) to frame indices (0 to 257)
    const frameIndex = Math.min(
      totalFrames - 1,
      Math.max(0, Math.floor(latest * totalFrames))
    );

    if (frameIndex !== currentFrame) {
      setCurrentFrame(frameIndex);
      requestAnimationFrame(() => drawFrame(frameIndex));
    }
  });

  // Narrative Text Overlays: maps scroll progress to opacity and translation y
  // Hero Step (visible initially, fades out as user scrolls)
  const opacityHero = useTransform(scrollYProgress, [0.0, 0.15, 0.18], [1, 1, 0]);
  const yHero = useTransform(scrollYProgress, [0.0, 0.15, 0.18], [0, 0, -40]);

  return (
    <div ref={containerRef} className={styles.scrollShowcaseContainer}>
      {!imagesLoaded ? (
        <div className={styles.preloader}>
          <div className={styles.loaderContent}>
            <div className={styles.spinner}>
              <div className={styles.doubleBounce1}></div>
              <div className={styles.doubleBounce2}></div>
            </div>
            <h3 className={styles.loaderTitle}>Initializing Showcase</h3>
            <div className={styles.progressBarBg}>
              <div 
                className={styles.progressBarFill} 
                style={{ width: `${loadProgress}%` }}
              ></div>
            </div>
            <p className={styles.loaderProgressText}>{loadProgress}% Loaded</p>
          </div>
        </div>
      ) : (
        <div className={styles.stickyWrapper}>
          {/* Canvas for rendering frames */}
          <canvas ref={canvasRef} className={styles.showcaseCanvas} />
          
          {/* Ambient Top & Bottom overlay overlays */}
          <div className={styles.canvasOverlay}></div>

          {/* Stepped Text Overlays */}
          <div className={styles.narrativeContainer}>
            {/* Introductory Hero Section */}
            <motion.div 
              style={{ opacity: opacityHero, y: yHero, pointerEvents: scrollYProgress.get() > 0.16 ? 'none' : 'auto' }}
              className={styles.heroNarrative}
            >
              <div className={styles.heroEyebrow}>
                Best Interior Wrapping Company Dubai
              </div>
              <h1 className={styles.heroTitle}>
                Premium <span className="text-highlight">Interior Wrapping</span> & Architectural Films
              </h1>
              <p className={styles.heroSubtitle}>
                Elevating kitchens, wardrobes, walls, and office spaces with luxury vinyl wrapping solutions across the UAE with zero demolition.
              </p>
              <div>
                <a href="#services" className={`btn btn-primary ${styles.heroBtn}`}>
                  Explore Our Services <ArrowRight className={styles.btnIcon} size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Minimal scroll indicator */}
          <div className={styles.scrollIndicator}>
            <span className={styles.scrollIndicatorText}>Scroll to Scrub Experience</span>
            <div className={styles.scrollMouse}>
              <div className={styles.scrollWheel}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
