import React, { Component } from 'react';

class Visualize extends Component {
  render() {
    return (
      <div className='Visualize'>
        <a-scene>
          <a-box
            position='-1 0.5 -3'
            rotation='0 45 0'
            color='#4CC3D9'
            shadow
          />
        </a-scene>
      </div>
    );
  }

  componentWillUnmount = () => {
    // var scene = document.querySelector('a-scene');
    // console.log('scene: ', scene);
    // scene.parentNode.removeChild(scene);
  };
}

export default Visualize;
