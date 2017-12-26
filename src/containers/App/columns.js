import React from 'react';
import keyBy from 'lodash.keyby';

import { renderMultiLine } from '../../utils/string';
import { formatDate } from '../../utils/date'; 

export const types = {
    url: 'url',
    mutliLine: 'multiLine',
    person: 'person',
    date: 'date',
};


export const fields = {
    id: { key: 'ID', name: 'ID' },
    title: { key: 'Title', name: 'Title' },
    acronym: { key: 'xq0l', name: 'Acronym' },
    startDate: { key: 'z5y5', name: 'Start Date', type: types.date },
    endDate: { key: 'hguu', name: 'End Date', type: types.date },
    projectManager: { key: 'xxdfStringId', name: 'Project Manager', type: types.person },
    sponsor: { key: '_x006d_c95StringId', name: 'Sponsor', type: types.person },
    description: { key: 'p1p2', name: 'Description' },
    isReportable: { key: 'Reportable', name: 'Reportable' },
    office: { key: 'gvpm', name: 'Office' },
    officesParticipating: { key: 'Offices_x0020_Participating', name: 'Offices Participating', type: types.mutliLine },
    remedyTicketNo: { key: 'hguu', name: 'Remedy Ticket No.' },
    siteUrl: { key: 'Site_x0020_URL', name: 'Site URL', type: types.url },
    metaData: { key: 'Meta_x0020_Data', name: 'Meta Data' },
};

function mapColumns(users) {
    const mappedUsers = keyBy(users, 'Id');

    return Object.values(fields).map(field => ({
        key: field.key,
        fieldName: field.key,
        name: field.name,
        isResizable: true,
        data: {
            type: field.type,
        },
        onRender: (item, index, column) => {
            const selected = item[column.key];
            switch (column.data.type) {
                case types.url:
                    return <a href={selected.Url} target={'_blank'}>{selected.Description}</a>;
                case types.mutliLine:
                    return renderMultiLine(selected);
                case types.person:
                    return <a href={`mailto:${mappedUsers[selected].Email}`}>{mappedUsers[selected].Title}</a>;
                case types.date:
                    return formatDate(selected);                    
                default:
                    return String(selected);
            }
        },
    }));
}

export default mapColumns;