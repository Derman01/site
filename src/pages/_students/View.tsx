import React, { useEffect, useMemo, useState } from 'react';
import 'pages/students.css';
import { categories, Categories }              from './source';
import List                                    from 'components/list';
import { useTypesSelector }                    from 'hooks/useTypedSelector';
import { useActions }                          from 'hooks/useActions';
import Student                                 from 'models/Student';
import student                                 from 'models/Student';

interface IView {
    className?: string;
    data: string;
}

interface IMasterItem {
    item: {
        name: string;
        count?: string;
    };
}

interface IDetailItem {
    item: Student;
}

const MasterItem: React.FC<IMasterItem> = ({item}) => {
    return (
        <div className={'pages-students__View_master__item'}>
            <span>{item.name}</span>
            <span className={'pages-students__View_master__item_count'}>{item.count}</span>
        </div>
    );
};

const DetailItem: React.FC<IDetailItem> =
    ({
         item
    }) => {
    return (
        <div className={'pages-students__View_detail__item'}>
            <div className="photo">ТД</div>
            <div className="pages-students__View_detail__item_info">
                <span className={'pages-students__View_detail__item_infoName'}>
                    {item.ShortName}
                </span>
                <span className={'pages-students__View_detail__item_infoGroup'}>
                    {item.group}
                </span>
            </div>
            <div className={'pages-students__View_detail__item_payment'}>
                <span>{item.Payment}</span>
                <span>{}</span>
            </div>
        </div>
    );
};

const View: React.FC<IView> = (options: IView) => {

    const {loading, error, filter, data} = useTypesSelector(state => state.student);
    const students = data;
    const {getStudents, setFilter} = useActions();

    useEffect(() => {
        getStudents(filter);
    }, [filter])


    const changeFolderHandler = (item: Categories) => {
        if (item.id === '01') {
            setFilter({});
        } else {
            setFilter({
                category: item.name
            });
        }
    }

    return (
        <div className={options.className + ' pages-students__View'}>
            <List.View style={'master'}
                       className={'pages-students__View_master'}
                       keyProperty={'id'}
                       source={categories}
                       minWidth={300}
                       selectedChanged={changeFolderHandler}
                       templateItem={MasterItem}
            />
            <List.View className={'pages-students__View_detail'}
                       source={students}
                       keyProperty={'id'}
                       canSelected={false}
                       markerVisible={false}
                       templateItem={DetailItem}
            />
        </div>
        );
};

export default View;