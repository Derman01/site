import {ItemAccordion} from 'components/Interface';

export const Pages: ItemAccordion[] = [{
    name: 'Студенты',
    path: 'students',
    template: {
        library: 'pages/students.ts',
        component: 'View'
    },
    buttons: [{
        id: 'ADD_STUDENT',
        name: 'Добавить студента'
    }, {
        id: 'ADD_GROUP',
        name: 'Добавить группу'
    }]
}, {
    name: 'Документы',
    path: 'document'
}, {
    name: 'Календарь',
    path: 'calendar'
}];