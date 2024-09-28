import React from 'react';
import { HTMLMotionProps, MotionValue } from 'framer-motion';

import { HEADER_HEIGHT, HEADER_TRANSITION_DURATION } from '../constants';

export const useHideOnScrollHeader = (
  parentScrollY?: MotionValue<number>,
  shouldHideOnScroll?: boolean,
  thresshold = 0.01
): HTMLMotionProps<'div'> => {
  const [showHeader, setShowHeader] = React.useState(true);
  const lastScrollYRef = React.useRef(0);

  React.useEffect(() => {
    if (!parentScrollY || !shouldHideOnScroll) return;

    const unsubscribe = parentScrollY.on('change', (latest) => {
      if (latest < 0 || latest > 1) {
        return;
      }

      if (latest > lastScrollYRef.current + thresshold) {
        setShowHeader(false);
      } else if (latest < lastScrollYRef.current - thresshold) {
        setShowHeader(true);
      }

      if (latest <= 0) {
        setShowHeader(true);
      }

      lastScrollYRef.current = latest;
    });

    return () => unsubscribe();
  }, [parentScrollY, shouldHideOnScroll, thresshold]);

  if (!parentScrollY || !shouldHideOnScroll) {
    return {};
  }

  return {
    initial: { y: 0 },
    animate: { y: showHeader ? 0 : -HEADER_HEIGHT },
    transition: {
      duration: HEADER_TRANSITION_DURATION,
    },
  };
};
