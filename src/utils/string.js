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
 * 
 * @param {string} htmlString       - SharePoint multi line text to parse
 * 
 * @return {array}                  - parsed strings that were contained in <p> tags
 */
export function parseMultiLine(htmlString) {
    const regex = /<p>([^<\/p>]*)<\/p>/g; // eslint-disable-line
    const lines = [];
    let match;

    match = regex.exec(htmlString);
    while (match) {
        lines.push(match[1]);
        match = regex.exec(htmlString);
    }

    return lines;
}


/**
 * Parses a SharePoint `Multiple Lines of Text` field
 * then renders as a unordered list
 * 
 * @param {string} htmlString       - SharePoint multi line text to parse
 * 
 * @return {JSX}                    - ul of lines from htmlString
 */
export function renderMultiLine(htmlString) {
    const lines = parseMultiLine(htmlString);

    return (
        <ul>
            {
                lines.map(line => (
                    <li key={line}>{line}</li>
                ))
            }
        </ul>
    );
}