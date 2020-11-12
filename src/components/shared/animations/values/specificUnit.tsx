import { useRef, useEffect } from 'react';
import anime from 'animejs';
import style from './chart.module.css';
import { Code } from '@blueprintjs/core';

const UnitBar = (props: {
  index: number;
  row: any;
  widthPercent: number;
  color: string;
}) => {
  useEffect(() => {
    console.log('width', props.widthPercent);
    anime({
      targets: `.specific-unit-values-demo-${props.index}  .el-${props.index}`,
      width: `${props.widthPercent}%`, // -> from '28px' to '100%',
      easing: 'easeInOutQuad',
      direction: '',
      loop: false,
    }),
      [];
  });

  return (
    // <div>
    //   <div style={{ zIndex: 2, position: 'absolute' }}>

    <>
      <Code
        style={{
          background: `linear-gradient(90deg, ${props.color} ${
            props.widthPercent
          }%, transparent ${1 - props.widthPercent}%)`,
        }}
      >
        {`${props.row.date} ${props.row.price}: ${props.row.value}`}
      </Code>
      <br />
    </>
    /* </div>
      <div className={`specific-unit-values-demo-${props.index}`}>
        <div
          className={`el-${props.index}`}
          style={{
            width: '0px',
            opacity: '0.5',
            height: '15px',
            backgroundColor: `${props.color}`,
            zIndex: 1,
            position: 'absolute',
          }}
        ></div>
      </div>
    </div> */
  );
};

export default UnitBar;
