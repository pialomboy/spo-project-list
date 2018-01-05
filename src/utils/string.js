
import React from 'react';
/**
 * Escapes any special characters in a string
 * 
 * @param {string} string       - string to escape
 * 
 * @return {string}             - escaped string
 */
export function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}


/**
 * Parses a SharePoint `Multiple Lines of Text` field
 * then renders as a comma seperated string
 * 
 * @param {string} htmlString       - SharePoint multi line text to parse
 * 
 * @return {string}                 - comma seperated string from htmlString
 */
export function renderMultiLine(htmlString) {
    const html = { __html: htmlString };
    return <div dangerouslySetInnerHTML={html} />;  // eslint-disable-line
}