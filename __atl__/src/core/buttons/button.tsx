import * as React from 'react';
// import * from '../../css/styles.css'

export abstract class Button extends React.PureComponent {
  render() {
    return <button style={{ backgroundColor: '#f43' }}>Button</button>;
  }
}
