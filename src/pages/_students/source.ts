interface Name {
    surname: string;
    name: string;
    middleName: string
}


export interface Categories {
    id: string;
    name: string;
    count?: number
}

export const categories: Categories[] = [{
    id: '01',
    name: 'Все'
}, {
    id: '1',
    name: 'А-01',
    count: 12,
}, {
    id: '2',
    name: 'А-02',
    count: 10,
}, {
    id: '3',
    name: 'Б-01',
    count: 14,
}, {
    id: '4',
    name: 'Б-02',
    count: 12,
}];