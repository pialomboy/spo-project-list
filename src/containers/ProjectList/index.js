import React, { PureComponent } from 'react';
import { SelectionMode, Selection, ConstrainMode } from 'office-ui-fabric-react/lib/DetailsList';

import List, { handleSelectItem } from '../../components/List';


class ProjectList extends PureComponent {
  constructor(props) {
    super(props);
    this.selection = new Selection({
      onSelectionChanged: () => handleSelectItem(this, this.selection, this.props.onSelect),
    });  
  }
  
  render() {
    const { items, columns, searchFields } = this.props; 

    return (
      <List
        title={'Project Registry'}
        items={items}
        columns={columns}
        searchKey={'mapped'}
        searchFields={searchFields}
        selectionMode={SelectionMode.none}
        selection={this.selection}
        constrainMode={ConstrainMode.unconstrained}
      />
    );
  }
}

export default ProjectList;