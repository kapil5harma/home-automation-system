import React, { Component } from 'react';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      categories: []
    };
  }

  componentDidMount = () => {};

  render() {
    return (
      <div className='Home'>
        <a-scene>
          <a-assets />
          <a-entity />
        </a-scene>
      </div>
    );
  }
}

Categories.propTypes = {};

export default Categories;
