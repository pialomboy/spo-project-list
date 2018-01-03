import { types } from '../../utils/data'; 

export default {
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
    remedyTicketNo: { key: 'ia5c', name: 'Remedy Ticket No.' },
    siteUrl: { key: 'Site_x0020_URL', name: 'Site URL', type: types.url },
    metaData: { key: 'Meta_x0020_Data', name: 'Meta Data' },
};