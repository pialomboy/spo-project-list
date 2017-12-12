import React, { Component } from 'react';


class ProjectList extends Component {
  render() {
    console.log('ProjectList - items: ', this.props.items)
    console.log('ProjectList - columns: ', this.props.columns)
    return (
      <div>
          Project List
      </div>
    );
  }
}

export default ProjectList;