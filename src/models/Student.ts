interface Name {
    surname: string;
    name: string;
    middleName: string;
}

export interface IStudent {
    id: string;
    payment_needed?: 10000,
    group_id?: 1,
    group_name: string;
    name: string,
    surname: string,
    middle_name: string,
    birthday?: string,
    photo_path?: string,
    phone?: string,
    address?: string,
    studying_start_date?: string,
    studying_end_date?: string,
    examen_date?: string,
    instructor_id?: 1
}


class Student implements IStudent {
    public id: string;
    public group_name: string;
    public name: string;
    public surname: string;
    public middle_name: string;

    public get ShortName() {
        return `${this.surname} ${this.name[0]}.${this.middle_name[0]}.`;
    }

    public get Payment() {
        return '';
        // const pay = Math.round(this.pay / 1000);
        // const allPay = Math.round(this.allPay / 1000);
        // return `${pay}т/${allPay}т`;
    }

    public constructor(data: IStudent) {
        this.id = data.id;
        this.name = data.name;
        this.surname = data.surname;
        this.middle_name = data.middle_name;
        this.group_name = data.group_name;
    }
}

export default Student