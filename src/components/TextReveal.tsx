import React, { useRef, useMemo } from 'react';
import { motion, useInView } from 'motion/react';

interface TextRevealProps {
  children?: React.ReactNode;
  text?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'p' | 'span';
  className?: string;
  delay?: number; // base delay in seconds
  stagger?: number; // delay between words in seconds
  duration?: number;
  once?: boolean;
}

/**
 * TextReveal provides a modern, cinematic masked reveal animation.
 * Words and phrases slide smoothly from behind an overflow mask with
 * a refined cubic-bezier curve and subtle blur release.
 */
export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  text,
  as = 'h2',
  className = '',
  delay = 0.05,
  stagger = 0.045,
  duration = 0.75,
  once = true,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, {
    once,
    margin: '-30px 0px -30px 0px',
  });

  // Respect user preference for reduced motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const content = useMemo(() => {
    let wordCounter = 0;

    const processNode = (node: React.ReactNode, keyPrefix: string): React.ReactNode => {
      // Plain text strings: split into individual words
      if (typeof node === 'string') {
        const words = node.split(/\s+/).filter(Boolean);
        return words.map((word, idx) => {
          const currentIndex = wordCounter++;
          const wordDelay = delay + currentIndex * stagger;

          return (
            <span
              key={`${keyPrefix}-w-${idx}`}
              className="inline-block overflow-hidden align-top pb-[0.16em] -mb-[0.16em] mr-[0.24em] last:mr-0"
            >
              <motion.span
                className="inline-block will-change-transform"
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0 }
                    : { y: '115%', opacity: 0, filter: 'blur(4px)' }
                }
                animate={
                  isInView || prefersReducedMotion
                    ? { y: '0%', opacity: 1, filter: 'blur(0px)' }
                    : { y: '115%', opacity: 0, filter: 'blur(4px)' }
                }
                transition={{
                  duration,
                  ease: [0.16, 1, 0.3, 1], // Smooth quintic deceleration curve
                  delay: prefersReducedMotion ? 0 : wordDelay,
                }}
              >
                {word}
              </motion.span>
            </span>
          );
        });
      }

      if (React.isValidElement(node)) {
        // Preserve standard line breaks
        if (node.type === 'br') {
          return node;
        }

        const element = node as React.ReactElement<{
          className?: string;
          children?: React.ReactNode;
          style?: React.CSSProperties;
        }>;

        const elClass = element.props.className || '';

        // If the element has bg-clip-text or animated gradient, animate the entire element together
        // to preserve the continuous gradient across the phrase without chopping it up
        if (elClass.includes('bg-clip-text') || elClass.includes('gradient')) {
          const currentIndex = wordCounter++;
          const elementDelay = delay + currentIndex * stagger;

          return (
            <span
              key={`${keyPrefix}-grad`}
              className="inline-block overflow-hidden align-top pb-[0.18em] -mb-[0.18em] mr-[0.24em] last:mr-0"
            >
              <motion.span
                className="inline-block will-change-transform"
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0 }
                    : { y: '115%', opacity: 0, filter: 'blur(4px)' }
                }
                animate={
                  isInView || prefersReducedMotion
                    ? { y: '0%', opacity: 1, filter: 'blur(0px)' }
                    : { y: '115%', opacity: 0, filter: 'blur(4px)' }
                }
                transition={{
                  duration,
                  ease: [0.16, 1, 0.3, 1],
                  delay: prefersReducedMotion ? 0 : elementDelay,
                }}
              >
                {element}
              </motion.span>
            </span>
          );
        }

        // For elements like colored spans (e.g. text-amber-400), wrap and process their children
        if (element.props.children) {
          return React.cloneElement(
            element,
            {
              key: `${keyPrefix}-styled`,
              className: element.props.className,
            },
            React.Children.map(element.props.children, (child, cIdx) =>
              processNode(child, `${keyPrefix}-${cIdx}`)
            )
          );
        }

        return element;
      }

      return node;
    };

    if (text) {
      return processNode(text, 'txt');
    }

    if (children) {
      return React.Children.map(children, (child, idx) => processNode(child, `ch-${idx}`));
    }

    return null;
  }, [text, children, isInView, delay, stagger, duration, prefersReducedMotion]);

  const Component = as as any;

  return (
    <Component ref={containerRef} className={className}>
      {content}
    </Component>
  );
};
