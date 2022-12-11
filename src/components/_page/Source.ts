import {ItemAccordion} from 'components/Interface';

export const Pages: ItemAccordion[] = [{
    name: 'Студенты',
    path: 'students',
    template: {
        library: 'pages/students.ts',
        component: 'View'
    }
}, {
    name: 'Документы',
    path: 'document'
}, {
    name: 'Календарь',
    path: 'calendar'
}];