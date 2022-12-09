import React from 'react';
import {students} from './source';

interface IView {
    data: string
}

const View: React.FC<IView> = (options: IView) => {
    return (
        <div>
            {options.data}
            {
                students.map((student) =>
                    <div key={student.id}>
                        {student.name.name}
                        {student.group}
                        {student.isPay}
                    </div>
                )
            }
        </div>
    );
};

export default View;