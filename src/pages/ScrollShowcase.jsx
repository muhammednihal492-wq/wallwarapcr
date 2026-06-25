import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
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

    // Calculate scaling ratio (cover style)
    const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
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
  const opacityStep1 = useTransform(scrollYProgress, [0.0, 0.05, 0.20, 0.25], [0, 1, 1, 0]);
  const yStep1 = useTransform(scrollYProgress, [0.0, 0.05, 0.20, 0.25], [40, 0, 0, -40]);

  const opacityStep2 = useTransform(scrollYProgress, [0.25, 0.30, 0.45, 0.50], [0, 1, 1, 0]);
  const yStep2 = useTransform(scrollYProgress, [0.25, 0.30, 0.45, 0.50], [40, 0, 0, -40]);

  const opacityStep3 = useTransform(scrollYProgress, [0.50, 0.55, 0.70, 0.75], [0, 1, 1, 0]);
  const yStep3 = useTransform(scrollYProgress, [0.50, 0.55, 0.70, 0.75], [40, 0, 0, -40]);

  const opacityStep4 = useTransform(scrollYProgress, [0.75, 0.80, 0.92, 0.98], [0, 1, 1, 0]);
  const yStep4 = useTransform(scrollYProgress, [0.75, 0.80, 0.92, 0.98], [40, 0, 0, -40]);

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
            {/* Step 1 */}
            <motion.div 
              style={{ opacity: opacityStep1, y: yStep1, pointerEvents: 'none' }}
              className={styles.narrativeCard}
            >
              <span className={styles.stepBadge}>01 / 04</span>
              <h2 className={styles.stepTitle}>Precision Selection</h2>
              <div className={styles.goldLine}></div>
              <p className={styles.stepDescription}>
                We consult, measure, and curate only the finest structural architectural wraps tailored to fit your home's unique interior styling and contours.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              style={{ opacity: opacityStep2, y: yStep2, pointerEvents: 'none' }}
              className={styles.narrativeCard}
            >
              <span className={styles.stepBadge}>02 / 04</span>
              <h2 className={styles.stepTitle}>Expert Alignment</h2>
              <div className={styles.goldLine}></div>
              <p className={styles.stepDescription}>
                Every corner and edge is perfectly prepared and aligned by our master craftsmen to guarantee a flawless substrate ready for wrapping.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              style={{ opacity: opacityStep3, y: yStep3, pointerEvents: 'none' }}
              className={styles.narrativeCard}
            >
              <span className={styles.stepBadge}>03 / 04</span>
              <h2 className={styles.stepTitle}>Thermal Bond Activation</h2>
              <div className={styles.goldLine}></div>
              <p className={styles.stepDescription}>
                Using advanced heat-activated adhesive polymers, the wrapping binds structurally to the surface for an incredibly durable, heat, and water-resistant finish.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              style={{ opacity: opacityStep4, y: yStep4, pointerEvents: 'none' }}
              className={styles.narrativeCard}
            >
              <span className={styles.stepBadge}>04 / 04</span>
              <h2 className={styles.stepTitle}>A Luxury Finish</h2>
              <div className={styles.goldLine}></div>
              <p className={styles.stepDescription}>
                Demolition-free, modern renovation complete. Enjoy premium wood grain, marble, or solid texture finishes with zero mess and long-lasting guarantees.
              </p>
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
