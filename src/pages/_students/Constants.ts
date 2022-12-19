import { Server } from 'hooks/useServer';
import {Student}    from 'pages/models';

// @ts-ignore
export const studentSource = new Server<Student>({
    endpoint: 'students',
    model: Student
});

export const groupSource = new Server({
    endpoint: 'groups'
});

export const ALL_ID = '0000-0001';

export const ALL_GROUP = {
    id: ALL_ID,
    name: 'Все'
}
