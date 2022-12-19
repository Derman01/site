import React, { useState } from 'react';
import { Server }          from 'hooks/useServer';

interface ICreatePayment {
    student: {id: string};
    close: () => void;
}

interface IData {
    student_id: string;
    value: number;
    date: string;
}

const CreatePayment: React.FC<ICreatePayment> = (
    {
        student,
        close
    }
) => {
    const initialData: IData = {
        student_id: student.id,
        value: 2000,
        date: '2022-02-20'
    }
    const [data, setData] = useState(initialData);

    const updateValue = (name: string) => {
        return (e: React.FormEvent<HTMLInputElement>) => {
            setData({
                ...data,
                // @ts-ignore
                [name]: e.target.value
            });
        };
    };

    const create = () => {
        new Server({
            endpoint: 'payments'
        }).call('create', data).then(() => {
            close();
        });
    }


    return (
        <div>
            <div className="">
                Сумма: <input type="number" defaultValue={data.value} onChange={updateValue('value')}/>
            </div>
            <div className="">
                Дата: <input type="date" defaultValue={data.date} onChange={updateValue('date')}
                             required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
            </div>
            <button onClick={create}>Создать</button>
        </div>
    );
};

export default CreatePayment;