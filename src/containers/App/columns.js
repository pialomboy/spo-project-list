export const fields = {
    id: { key: 'ID', name: 'ID' },
    title: { key: 'Title', name: 'Title' },
    acronym: { key: 'xq0l', name: 'Acronym' },
    startDate: { key: 'z5y5', name: 'Start Date' },
    endDate: { key: 'hguu', name: 'End Date' },
    projectManager: { key: '', name: 'Project Manager' },
    sponsor: { key: '', name: 'Sponsor' },
    description: { key: 'p1p2', name: 'Description' },
    isReportable: { key: 'Reportable', name: 'Reportable' },
    office: { key: 'gvpm', name: 'Office' },
    officesParticipating: { key: 'Offices_x0020_Participating', name: 'Offices Participating' },
    remedyTicketNo: { key: 'hguu', name: 'Remedy Ticket No.' },
    siteUrl: { key: 'Site_x0020_URL', name: 'Site URL' },
    metaData: { key: 'Meta_x0020_Data', name: 'Meta Data' },
};

const columns = Object.keys(fields).map(field => ({
    key: field.key,
    fieldName: field.key,
    name: field.name,
    isResizable: true,
}));

export default columns;