import { useRef, useEffect } from 'react';
import anime from 'animejs';
import style from './chart.module.css';

const ChartAnimation = () => {
  const animationRef = useRef<any>(null);
  useEffect(() => {
    let i;
    for (i = 1; easingNames.length > i; i++) {
      let box = document.getElementById('chart-div');
      const newDiv = document.createElement('div');
      newDiv.id = `el-${i}`;
      newDiv.style.cssText = 'width: 8px; height: 3px';
      box?.appendChild(newDiv);
      if (easingNames[i].value <= easingNames[i - 1].value) {
        newDiv!.style.backgroundColor = '#04bb2c';
      } else {
        newDiv!.style.backgroundColor = '#f34';
      }

      anime({
        targets: `#el-${i}`,
        translateY: -50 + easingNames[i].value,
        easing: easingNames[i].easing,
        direction: 'alternate',
        loop: true,
        delay: 100,
        endDelay: 100,
        duration: 1000,
      });
    }
  }, []);

  var easingNames = [
    {
      easing: 'easeInQuad',
      value: 1,
    },
    {
      easing: 'easeInCubic',
      value: 2,
    },
    {
      easing: 'easeInQuart',
      value: 3,
    },
    {
      easing: 'easeInQuint',
      value: 4,
    },
    {
      easing: 'easeInSine',
      value: 5,
    },
    {
      easing: 'easeInExpo',
      value: 6,
    },
    {
      easing: 'easeInCirc',
      value: 8,
    },
    {
      easing: 'easeInBack',
      value: 10,
    },
    {
      easing: 'easeOutQuad',
      value: 12,
    },
    {
      easing: 'easeOutCubic',
      value: 13,
    },
    {
      easing: 'easeOutQuart',
      value: 15,
    },
    {
      easing: 'easeOutQuint',
      value: 16,
    },
    {
      easing: 'easeOutSine',
      value: 17,
    },
    {
      easing: 'easeOutExpo',
      value: 15,
    },
    {
      easing: 'easeOutCirc',
      value: 14,
    },
    {
      easing: 'easeOutBack',
      value: 13,
    },
    {
      easing: 'easeInBounce',
      value: 12,
    },
    {
      easing: 'easeInOutQuad',
      value: 11,
    },
    {
      easing: 'easeInOutCubic',
      value: 10,
    },
    {
      easing: 'easeInOutQuart',
      value: 8,
    },
  ];

  return (
    <div className="App">
      <div
        id="chart-div"
        style={{ marginTop: '200px', display: 'flex', flexWrap: 'wrap' }}
      ></div>
    </div>
  );
};

export default ChartAnimation;
