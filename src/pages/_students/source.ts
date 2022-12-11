interface Name {
    surname: string;
    name: string;
    middleName: string
}


export interface Categories {
    id: number;
    name: string;
    count?: number
}

export const categories: Categories[] = [{
    id: 0,
    name: 'Все'
}, {
    id: 1,
    name: 'А-01',
    count: 12,
}, {
    id: 2,
    name: 'А-02',
    count: 10,
}];