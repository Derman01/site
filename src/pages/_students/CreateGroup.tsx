import React, { useState } from 'react';
import { Server }                     from 'hooks/useServer';

interface IData {
    name: string;
    studying_start_date: string;
    studying_end_date: string;
    examen_date: string;
    instructor_id: string;

}

const CreateGroup = ({close}: { close: () => void }) => {
    const dataInitial: IData = {
        name: 'А-03',
        examen_date: '2001-06-10',
        studying_end_date: '2001-12-10',
        studying_start_date: '2000-10-10',
        instructor_id: '4'

    };
    const [data, setData] = useState(dataInitial);

    const createGroup = () => {
        new Server({
            endpoint: 'groups',
        }).call('create', data).then(() => {
            close();
        });
    };


    const updateValue = (name: string) => {
        return (e: React.FormEvent<HTMLInputElement>) => {
            setData({
                ...data,
                // @ts-ignore
                [name]: e.target.value
            });
        };
    };

    return (
        <div>
            <div>
                <div className="">
                    <input type="text" placeholder={'Название'} defaultValue={data.name} onChange={updateValue('name')}/>
                </div>
                <div className="">
                    Начало обучения: <input type="date" defaultValue={data.studying_start_date} onChange={updateValue('studying_start_date')}
                                            required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                </div>
                <div className="">
                    Конец обучения: <input type="date" defaultValue={data.studying_end_date} onChange={updateValue('studying_end_date')}
                                           required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                </div>
                <div className="">
                    Дата экзамена: <input type="date" defaultValue={data.examen_date} onChange={updateValue('examen_date')}
                                            required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                </div>
            </div>
            <button onClick={createGroup}>Создать</button>
        </div>
    );
};

export default CreateGroup;