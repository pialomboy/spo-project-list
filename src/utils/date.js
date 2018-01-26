/* eslint-disable */
/**
 * Formats date to "LongMonth Day, Year"
 * @param {String|Date} date    - date to format
 * 
 * @return {String}             - fomratted date
 */
export function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date ? new Date(date).toLocaleDateString('en-US', options) : '';    
}