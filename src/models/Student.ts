interface Name {
    surname: string;
    name: string;
    middleName: string;
}

export interface IStudent {
    id: string;
    name: Name;
    group: string;
    pay: number;
    allPay: number;
    isPay: boolean;
}


class Student implements IStudent {
    public id: string;
    public name: Name;
    public pay: number;
    public allPay: number;
    public group: string;
    public isPay: boolean;

    public get ShortName() {
        return `${this.name.surname} ${this.name.name[0]}.${this.name.middleName[0]}.`;
    }

    public get Payment() {
        const pay = Math.round(this.pay / 1000);
        const allPay = Math.round(this.allPay / 1000);
        return `${pay}т/${allPay}т`;
    }

    public constructor(data: IStudent) {
        this.id = data.id;
        this.name = data.name;
        this.group = data.group;
        this.allPay = data.allPay;
        this.isPay = data.isPay;
        this.pay = data.pay;
    }
}

export default Student