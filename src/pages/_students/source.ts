interface Name {
    surname: string;
    name: string;
    middleName: string
}

interface Student {
    id: string;
    name: Name;
    group: string;
    pay: number;
    allPay: number;
    isPay: boolean;
}


export const students: Student[] = [{
    id: '1',
    name: {
        surname: 'Топычканов',
        name: 'Денис',
        middleName: 'Сергеевич'
    },
    group: 'A-01',
    pay: 25000,
    allPay: 25000,
    isPay: true,
}, {
    id: '2',
    name: {
        surname: 'Топычканов',
        name: 'Денис',
        middleName: 'Сергеевич'
    },
    group: 'A-01',
    pay: 25000,
    allPay: 25000,
    isPay: true,
}, {
    id: '3',
    name: {
        surname: 'Топычканов',
        name: 'Денис',
        middleName: 'Сергеевич'
    },
    group: 'A-01',
    pay: 25000,
    allPay: 25000,
    isPay: true,
}, {
    id: '4',
    name: {
        surname: 'Топычканов',
        name: 'Денис',
        middleName: 'Сергеевич'
    },
    group: 'A-01',
    pay: 25000,
    allPay: 25000,
    isPay: true,
}]