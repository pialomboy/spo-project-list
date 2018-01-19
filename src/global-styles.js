import { injectGlobal } from 'styled-components';


/* eslint no-unused-expressions: 0 */
injectGlobal`
/* OFFICE UI DIALOG (requires classname to be passed, ignores styled compoents...) */
.ms-Dialog-main {
    @media (min-width: 576px) {
        width: 500px;
        max-width: 500px;
    }
}

.ms-Dialog-main .ms-List-page > .ms-List-cell {
    border-bottom: 1px solid #efefef;
}

.ms-Dialog-main .ms-List-page:last-child > .ms-List-cell:last-child {
    border-bottom: none;
}
`;