
import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className,
  threshold = 0.1,
  delay = 0,
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return '';
    
    switch (direction) {
      case 'up': return 'animate-fade-in';
      case 'down': return 'animate-fade-in';
      case 'left': return 'animate-fade-in-left';
      case 'right': return 'animate-fade-in-right';
      case 'none': return 'animate-scale-in';
      default: return 'animate-fade-in';
    }
  };

  const getInitialStyles = () => {
    if (isVisible) return {};
    
    switch (direction) {
      case 'up': return { opacity: 0, transform: 'translateY(20px)' };
      case 'down': return { opacity: 0, transform: 'translateY(-20px)' };
      case 'left': return { opacity: 0, transform: 'translateX(-20px)' };
      case 'right': return { opacity: 0, transform: 'translateX(20px)' };
      case 'none': return { opacity: 0, transform: 'scale(0.95)' };
      default: return { opacity: 0, transform: 'translateY(20px)' };
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClass(), className)}
      style={{
        ...getInitialStyles(),
        animationDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
