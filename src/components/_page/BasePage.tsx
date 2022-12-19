import React, { FC, useState } from 'react';
import {Route, Routes}         from 'react-router-dom';
import Async             from 'components/Async';
import {Pages}           from './Source';
import Navbar            from './Navbar';
import { ItemAccordion } from '../Interface';
import Store             from 'hooks/useStore';

interface IPage {
    page: ItemAccordion;
}

interface IPopupContent {
    show: boolean;
    Template?: React.ReactElement;
}

const Page: React.FC<IPage> = ({page}) => {

    const initialStatePopups: {id: number, popup: React.ReactElement}[] = []
    const [TemplatePopups, setTemplatePopups] = useState(initialStatePopups);

    Store.listen('OPEN_POPUP', (popup: {id: number, popup: React.ReactElement}) => {

        setTemplatePopups([
            ...TemplatePopups,
            popup
        ]);
    });

    Store.listen('CLOSE_POPUP', (id: number) => {
        setTemplatePopups(TemplatePopups.filter((popup: {id: number}) => {
            return popup.id !== id;
        }));
    })

    return (
        <div className={'component-page__Page'}>
            <div className="component-page__Page__content">
                <div className="component-page__Page__header">
                    {
                        page.buttons?.map((button) =>
                            <button key={button.id} onClick={() => Store.call(button.id)}>{button.name}</button>
                        )
                    }
                </div>
                {
                    page.template
                        ? <Async template={page.template}/>
                        : <div>Ничего</div>
                }
            </div>
            <div className="component-page__Page__aside">

            </div>
            {
                TemplatePopups.length && TemplatePopups.map((popup: {popup: React.ReactElement}) => popup.popup)
            }
        </div>
    );
}

const BasePage = () => {
    return (
        <div className='component-page__BasePage'>
            <Navbar/>
            <Routes>
                {Pages.map((page) =>
                    <Route key={page.path} path={page.path} element={
                        <Page page={page}/>
                    }/>
                )};
            </Routes>
        </div>
    );
};

export default BasePage;