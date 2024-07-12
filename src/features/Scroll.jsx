import { animateScroll as scroll } from 'react-scroll';

export const scrollTo = (id) => {
  scroll.scrollTo(id, {
    duration: 800,  // Scroll duration in milliseconds
    smooth: 'easeInOutQuart'  // Scroll animation easing
  });
};
