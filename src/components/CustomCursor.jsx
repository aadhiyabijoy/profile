import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Track hover on interactive elements
    const handleElementHover = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.interactive-hover') ||
        target.closest('[role="button"]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [isVisible]);

  // Smooth trailing effect
  useEffect(() => {
    let animationFrame;
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrame = requestAnimationFrame(updateTrailing);
    };
    animationFrame = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Center pinpoint */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full transition-transform duration-75 mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '6px',
          height: '6px',
          backgroundColor: '#06b6d4',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px #06b6d4, 0 0 20px #22d3ee',
        }}
      />

      {/* Trailing futuristic neon ring */}
      <div
        className={`fixed pointer-events-none z-[9998] rounded-full transition-all duration-200 ease-out border ${
          isHovered
            ? 'border-neon-cyan scale-150 bg-neon-cyan/10'
            : isClicking
            ? 'border-neon-purple scale-75 bg-neon-purple/20'
            : 'border-neon-purple/60 scale-100'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: '34px',
          height: '34px',
          transform: 'translate(-50%, -50%)',
          boxShadow: isHovered
            ? '0 0 20px rgba(6, 182, 212, 0.45)'
            : '0 0 15px rgba(168, 85, 247, 0.3)',
        }}
      />
    </>
  );
}

