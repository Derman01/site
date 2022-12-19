import React, { useState }                              from 'react';
import 'pages/students.css';
import { studentSource, groupSource, ALL_ID, ALL_GROUP} from './Constants';
import List                                             from 'components/list';
import {Student}                                        from 'pages/models';
import Store                                            from 'hooks/useStore';
import CreateStudent                                    from './CreateStudent';
import CreateGroup                                      from './CreateGroup';
import {View as PaymentView} from 'pages/payments';
import {View as ExamView} from 'pages/examens';


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

    const openExam = () => {
        import('components/popup').then(({ModalOpen}) => {
            ModalOpen({
                Template: ExamView,
                templateOptions: {
                    student: item
                }
            });
        })
    };

    const openPayment = () => {
        import('components/popup').then(({ModalOpen}) => {
            ModalOpen({
                Template: PaymentView,
                templateOptions: {
                    student: item
                }
            });
        })
    };

    return (
        <div className={'pages-students__View_detail__item'}>
            <div className="photo">ТД</div>
            <div className="pages-students__View_detail__item_info">
                <span className={'pages-students__View_detail__item_infoName'}>
                    {item.ShortName}
                </span>
                <span className={'pages-students__View_detail__item_infoGroup'}>
                    {item.group_name}
                </span>
            </div>
            <div className={'pages-students__View_detail__item_payment'}>
                <span>{item.Payment}</span>
                <span>{}</span>
            </div>
            <div className="pages-students__View_detail__item_options">
                <button onClick={openPayment}>Платежи</button>
                <button onClick={openExam}>Экзамены</button>
            </div>
        </div>
    );
};

const View: React.FC<IView> = (options: IView) => {

    const [filter, setFilter] = useState({})

    const groupLoadCallback = (groups: object[]) => {
        groups.unshift(ALL_GROUP);
    };

    const changeFolderHandler = (item: {id: string}) => {
        if (item.id === ALL_ID) {
            setFilter({});
        } else {
            setFilter({
                group: item.id
            })
        }
    }

    Store.listen('ADD_STUDENT', () => {
        import('components/popup').then(({ModalOpen}) => {
            ModalOpen({
                Template: CreateStudent
            })
        })
    });

    Store.listen('ADD_GROUP', () => {
        import('components/popup').then(({ModalOpen}) => {
            ModalOpen({
                Template: CreateGroup
            });
        })
    })

    return (
        <div className={options.className + ' pages-students__View'}>
            <List.View style={'master'}
                       className={'pages-students__View_master'}
                       source={groupSource}
                       minWidth={300}
                       selectedChanged={changeFolderHandler}
                       templateItem={MasterItem}
                       dataLoadCallback={groupLoadCallback}
            />
            <List.View className={'pages-students__View_detail'}
                       source={studentSource}
                       filter={filter}
                       keyProperty={'id'}
                       canSelected={false}
                       markerVisible={false}
                       templateItem={DetailItem}
            />
        </div>
        );
};

export default View;