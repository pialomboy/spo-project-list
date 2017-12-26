/* eslint-disable */
export function formatDate(date) {
    return date ? new Date(date).toISOString().substr(0, 10) : '';
}