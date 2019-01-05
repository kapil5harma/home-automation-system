import React, { Component } from 'react';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '#222',
      lightOn: false
    };
  }

  componentDidMount = () => {};
  lightSwitch = () => {
    console.log('Here');
    this.setState({ lightOn: !this.state.lightOn });
  };

  render() {
    return (
      <div className='Home'>
        <div className='Settings'>
          <h3>Settings: </h3>
          <button onClick={() => this.lightSwitch()}>
            Turn {this.state.lightOn ? 'On' : 'Off'}
          </button>
        </div>
        <div className='Visualize'>
          <a-scene>
            <a-sky color={this.state.lightOn ? '#ffc100' : '#222'} />
            <a-entity geometry='primitive: box' material='color: red' />

            <a-box
              position='-3 2.5 -3'
              rotation='0 0 0'
              color='#ececec'
              shadow
            />
            <a-box
              position='3 2.5 -3'
              rotation='0 0 0'
              color='#ececec'
              shadow
            />
            <a-sphere
              position='0 8.5 -8'
              rotation='0 0 0'
              color={this.state.lightOn ? '#ffc100' : '#ececec'}
              shadow
            />
          </a-scene>
        </div>
        <div className='Report'>
          <h3>Report:</h3>
          Energy consumption: {this.state.lightOn ? '100 Watts' : '0 Watts'}
        </div>
      </div>
    );
  }
}

Categories.propTypes = {};

export default Categories;
