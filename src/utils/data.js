/* eslint-disable */
import React from 'react';
import keyBy from 'lodash/keyBy';
import isNil from 'lodash/isNil';
import { Link } from 'office-ui-fabric-react/lib/Link';

import { renderMultiLine } from './string';
import { formatDate } from './date';


export const types = {
    url: 'url',
    title: 'title',
    mutliLine: 'multiLine',
    person: 'person',
    office: 'office',
    date: 'date',
    remedy: 'remedy',
};


function renderOffices(officeIds = [], offices = {}) {
    let ids = [];
    if (!isNil(officeIds)) {
        ids = Array.isArray(officeIds) ? officeIds : [officeIds];
    }

    return ids.map(id => (
        offices[id].Title
    )).join(', ');
}


export function mapColumns(fields, keys, lookups = {}) {
    const mappedUsers = keyBy(lookups.users, 'Id');
    const mappedOffices = keyBy(lookups.offices, 'Id');

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
                        return <Link href={selected.original.Url} target={'_blank'} data-selection-invoke>{selected.mapped}</Link>;
                    case types.person:
                        return <Link href={`mailto:${mappedUsers[selected.original].Email}`} data-selection-invoke>{mappedUsers[selected.original].Title}</Link>;
                    case types.remedy:
                        return <Link target={'_blank'} href={`http://service-technology.us.onbmc.com/arsys/forms/onbmc-s/WOI%3AWorkOrder/Best+Practice+View/?qual='1000000182'%3D%22${selected.mapped}%22`} data-selection-invoke>{selected.mapped}</Link>;
                    default:
                        return <span>{selected.mapped}</span>;
                }
            },
        });
    });
}


export function mapItems(items, fields, keys, lookups = {}) {
    const mappedUsers = keyBy(lookups.users, 'Id');
    const mappedOffices = keyBy(lookups.offices, 'Id');
    const mappedItems = [];

    let mappedItem;
    items.forEach((item) => {
        mappedItem = {};

        keys.forEach((key) => {
            const field = fields[key];
            const selected = item[field.key];
            mappedItem[field.key] = {
                original: selected,
            };

            switch (field.type) {
                case types.url:
                    mappedItem[field.key].mapped = selected.Description;
                    break;
                case types.mutliLine:
                    mappedItem[field.key].mapped = renderMultiLine(selected);
                    break;
                case types.person:
                    mappedItem[field.key].mapped = mappedUsers[selected].Title;
                    break;
                case types.office:
                    mappedItem[field.key].mapped = renderOffices(selected, mappedOffices);
                    break;
                case types.date:
                    mappedItem[field.key].mapped = formatDate(selected);
                    break;
                case types.title:
                    mappedItem[field.key].mapped = `${selected} (${item[fields.acronym.key]})`;
                    break;
                default:
                    mappedItem[field.key].mapped = String(selected);
                    break;
            }
        });

        mappedItems.push(mappedItem);
    });

    return mappedItems;
}
