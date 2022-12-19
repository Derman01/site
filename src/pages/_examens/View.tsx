import React      from 'react';
import List       from '../../components/list';
import { Server } from '../../hooks/useServer';
import CreateExam from './CreateExam';

interface IView {
    student: {name: string, id: string; surname: string};
    close: () => void;
}

interface Exam {
    id: string;
    name: string;
    mark: string;
    date: string;
}

const View: React.FC<IView> = (
    {
        close,
        student
    }
) => {

    const source = new Server({
        endpoint: 'exams'
    });

    const filter = {
        student: student.id
    };

    const createExam = () => {
        import('components/popup').then(({ModalOpen}) => {
            ModalOpen({
                Template: CreateExam,
                templateOptions: {
                    student
                }
            });
        });
    };

    return (
        <div>
            Экзамены {student.surname} {student.name}
            <List.View source={source}
                       filter={filter}
                       style={'list'}
                       canSelected={false}
                       markerVisible={false}
                       templateItem={({item}: { item: Exam }) =>
                           <div style={{display: 'flex', width: '500px', justifyContent: 'space-around'}}>
                               <div className="">
                                   Название: {item.name}
                               </div>
                               <div className="">
                                   Оценка: {item.mark}
                               </div>
                               <div className="">
                                   Дата: <input type="date" disabled={true} value={item.date.split(' ')[0]}
                                                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                               />
                               </div>
                           </div>
                       }
            />
            <button onClick={createExam}>Добавить экзамен'</button>
        </div>
    );
};

export default View;