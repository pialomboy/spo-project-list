import React, { PureComponent } from 'react';
import { SelectionMode, Selection } from 'office-ui-fabric-react/lib/DetailsList';

import List, { handleSelectItem } from '../../components/List';


class ProjectList extends PureComponent {
  constructor(props) {
    super(props);
    this.selection = new Selection({
      onSelectionChanged: () => handleSelectItem(this, this.selection, this.props.onSelect),
    });  
  }
  
  render() {
    return (
      <List
        title={'Project Registry'}
        items={this.props.items}
        columns={this.props.columns}
        selectionMode={SelectionMode.none}
        selection={this.selection}
      />
    );
  }
}

export default ProjectList;