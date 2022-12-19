import React, { useEffect, useState } from 'react';
import { Server }                     from 'hooks/useServer';

interface IGroup {
    id: string;
    name: string;
}

interface IData {
    name: string;
    surname: string;
    middle_name: string;
    payment_needed: number;
    birthday: string;
    group_id: string;
    phone: string;
    address: string;
    photo_path: string;
}

const CreateStudent = ({close}: { close: () => void }) => {
    const groupsInitial: IGroup[] = [];
    const [groups, setGroups] = useState(groupsInitial);

    useEffect(() => {
        new Server({
            endpoint: 'groups'
        }).call('').then((data) => {
            setGroups(data as IGroup[]);
        });
    }, []);

    const dataInitial: IData = {
        birthday: '2001-01-01',
        group_id: '1',
        middle_name: 'Иванович',
        surname: 'Иванов',
        payment_needed: 10000,
        name: 'Иван',
        phone: '88005553535',
        address: 'ул. Пушкина',
        photo_path: 'pic.txt'
    };
    const [data, setData] = useState(dataInitial);

    const createStudent = () => {
        new Server({
            endpoint: 'students',
        }).call('create', data).then(() => {
            close();
        });
    };

    const groupSelectChanged = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setData({
            ...data,
            group_id: e.target.value
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
            <div style={{display: 'flex'}}>
                <input type="text" placeholder={'Имя'} defaultValue={data.name} onChange={updateValue('name')}/>
                <input type="text" placeholder={'Фамилия'} defaultValue={data.surname}
                       onChange={updateValue('surname')}/>
                <input type="text" placeholder={'Отчество'} defaultValue={data.middle_name}
                       onChange={updateValue('middle_name')}/>
            </div>
            <div className="div">
                Группа:
                <select onChange={groupSelectChanged} defaultValue={data.group_id}>
                    {
                        groups.map((group) =>
                            <option key={group.id} value={group.id}>{group.name}</option>
                        )
                    }
                </select>
            </div>
            <div className="phone">
                Телефон: <input type="text"
                                onChange={updateValue('phone')}
                                placeholder={'Телефон'}
                                defaultValue={data.phone}/>
            </div>
            <div className="phone">
                Дата рождения: <input type="date" defaultValue={data.birthday} onChange={updateValue('birthday')}
                                      required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
            </div>
            <div className="pay">
                <label> Стоимость обучения
                    <input type="number" defaultValue={data.payment_needed} onChange={updateValue('payment_needed')}/>
                </label>
            </div>
            <button onClick={createStudent}>Создать</button>
        </div>
    );
};


export default CreateStudent;