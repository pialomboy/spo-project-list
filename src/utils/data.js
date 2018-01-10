import React from 'react';
import keyBy from 'lodash.keyby';

import { renderMultiLine } from './string';
import { formatDate } from './date';


export const types = {
    url: 'url',
    title: 'title',
    mutliLine: 'multiLine',
    person: 'person',
    date: 'date',
};

export function mapColumns(fields, keys, users) {
    const mappedUsers = keyBy(users, 'Id');
    
    return keys.map((key) => {
        const field = fields[key];
        return ({
            key: field.key,
            fieldName: field.key,
            name: field.name,
            isResizable: true,
            minWidth: 100,
            maxWidth: 200,
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
                    case types.title:
                        return `${selected} (${item[fields.acronym.key]})`;
                    default:
                        return String(selected);
                }
            },
        });
    });
}
