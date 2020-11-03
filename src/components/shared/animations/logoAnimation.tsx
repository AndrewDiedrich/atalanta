import { useRef, useEffect } from 'react';
import anime from 'animejs';
import style from './chart.module.css';

const LogoAnimation = () => {
  //   const animationRef = useRef<any>(null);
  useEffect(() => {
    anime({
      targets: '.line-drawing-demo .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function (el, i) {
        return i * 250;
      },
      direction: 'alternate',
      loop: true,
    });
  }, []);

  return (
    <div className="App">
      <div
        className="line-drawing-demo"
        style={{ marginTop: '200px', display: 'flex', flexWrap: 'wrap' }}
      >
        <img src="/images/hermes_logo_dark.svg" />
      </div>
    </div>
  );
};

export default LogoAnimation;
