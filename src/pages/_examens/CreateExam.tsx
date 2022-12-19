import React, { useState } from 'react';
import { Server }          from 'hooks/useServer';

interface ICreateExam {
    student: {id: string};
    close: () => void;
}

interface IData {
    student_id: string;
    name: string;
    mark: string;
    date: string;
}

const CreateExam: React.FC<ICreateExam> = (
    {
        student,
        close
    }
) => {
    const initialData: IData = {
        student_id: student.id,
        mark: '5',
        date: '2022-01-12',
        name: 'Название'
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
            endpoint: 'exams'
        }).call('create', data).then(() => {
            close();
        });
    }


    return (
        <div>
            <div className="">
                Название: <input type="text" defaultValue={data.name} onChange={updateValue('name')}/>
            </div>
            <div className="">
                Оценка: <input type="number" defaultValue={data.mark} onChange={updateValue('mark')} max={5} min={2}/>
            </div>
            <div className="">
                Дата: <input type="date" defaultValue={data.date} onChange={updateValue('date')}
                             required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
            </div>
            <button onClick={create}>Создать</button>
        </div>
    );
};

export default CreateExam;