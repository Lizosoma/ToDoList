import React, { useState, useRef } from 'react';
import styles from './tooltip.module.css';

const Tooltip = ({ children, text }) => {
  const refSetTimeout = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleOnMouseEnter = () => {
    clearTimeout(refSetTimeout.current);
    refSetTimeout.current = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
      setShowTooltip(true);
    }, 250);
  };

  const handleOnMouseLeave = () => {
    clearTimeout(refSetTimeout.current);
    setIsAnimating(false);
  };

  const handleAnimationEnd = () => {
    if (!isAnimating) {
      setShowTooltip(false);
      setIsVisible(false);
    }
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {children}
      {isVisible && (
        <span
          className={`${styles.tooltip} ${isAnimating ? styles.fadeInRight : styles.fadeOutLeft}`}
          onAnimationEnd={handleAnimationEnd}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default Tooltip;
