import React         from 'react';
import List          from 'components/list';
import { Server }    from 'hooks/useServer';
import CreatePayment from './CreatePayment';

interface IView {
    student: {name: string, id: string; surname: string};
    close: () => void;
}

interface Payment {
    id: string;
    value: string;
    date: string;
}

const View: React.FC<IView> = (
    {
        student,
        close
    }) => {

    const source = new Server({
        endpoint: 'payments'
    });
    const filter = {
        student: student.id
    };

    const createPayment = () => {
        import('components/popup').then(({ModalOpen}) => {
            ModalOpen({
                Template: CreatePayment,
                templateOptions: {
                    student
                }
            })
        });
    };


    return (
        <div>
             Платежи {student.surname} {student.name}
            <List.View source={source}
                       filter={filter}
                       style={'list'}
                       canSelected={false}
                       markerVisible={false}
                       templateItem={({item}: { item: Payment }) =>
                           <div style={{display: 'flex'}}>
                               <div className="">
                                   Дата: <input type="date" disabled={true} value={item.date.split(' ')[0]}
                                                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                               />
                               </div>
                               <div className="">
                                   Сумма: {item.value}
                               </div>
                           </div>
                       }
            />
            <button onClick={createPayment}>Добавить платеж</button>
        </div>
    );
};

export default View;