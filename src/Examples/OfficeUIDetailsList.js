import React, { Component } from 'react';

import {
    DetailsList,
} from 'office-ui-fabric-react/lib/DetailsList';


const items = [
    {
        title: 'Title 1',
        version: '1',
    },
    {
        title: 'Title 2',
        version: '21',
    },
    {
        title: 'Title 3',
        version: '13',
    },
];

const columns = [
    {
        key: 'title',
        name: 'Title',
        fieldName: 'title',
        isResizable: true,
    },
    {
        key: 'version',
        name: 'Document Version',
        fieldName: 'version',
        isResizable: true,
    },
];


class OfficeUIDetailsList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <DetailsList
                items={items}
                columns={columns}
            />
        );
    }
}

export default OfficeUIDetailsList;