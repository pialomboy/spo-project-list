import { Web } from 'sp-pnp-js';

export const site = new Web('https://stateca.sharepoint.com/sites/Projects/');

export const getProjectRegistry = () => (
    site.lists.getByTitle('_ProjectRegistry')
);

export const getUsers = () => (
    site.siteUsers
);

