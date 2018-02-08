import { types } from '../../utils/data';


export const fields = {
    id: { key: 'ID', name: 'ID' },
    title: { key: 'Title', name: 'Title', type: types.title },
    acronym: { key: 'xq0l', name: 'Acronym' },
    startDate: { key: 'z5y5', name: 'Start Date', type: types.date },
    endDate: { key: 'hguu', name: 'End Date', type: types.date },
    projectManager: { key: 'xxdfStringId', name: 'Project Manager', type: types.person },
    sponsor: { key: '_x006d_c95StringId', name: 'Sponsor', type: types.person },
    description: { key: 'p1p2', name: 'Description' },
    isReportable: { key: 'Reportable', name: 'Reportable' },
    office: { key: 'OfficeId', name: 'Office', type: types.office },
    officesParticipating: { key: 'Offices_x0020_ParticipatingId', name: 'Offices Participating', type: types.office },
    remedyTicketNo: { key: 'ia5c', name: 'Remedy Ticket No.', type: types.remedy },
    siteUrl: { key: 'Site_x0020_URL', name: 'Site URL', type: types.url },
    metaData: { key: 'Meta_x0020_Data', name: 'Meta Data', type: types.mutliLine },
};


export const keys = {
    home: [
        'title',
        'projectManager',
        'sponsor',
        'office',
        'startDate',
        'endDate',
    ],
    details: [
        'siteUrl',
        'startDate',
        'endDate',
        'projectManager',
        'sponsor',
        'office',
        'officesParticipating',
        'description',
        'isReportable',
        'remedyTicketNo',
        'id',
        'metaData',
    ],
};


export const searchFields = [
    ...keys.home,
    'metaData',
].map(x => fields[x].key);