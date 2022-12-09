import React from 'react';
import {NavLink, Route, Routes} from "react-router-dom";
import Async from 'components/Async';

interface Template {
    library: string;
    component: string;
}

interface ItemAccordion {
    name: string;
    icon?: string;
    path: string;
    template?: Template;
}


const BasePage = () => {

    const pages: ItemAccordion[] = [{
        name: 'Студенты',
        path: 'students',
        template: {
            library: 'pages/students',
            component: 'View'
        }
    }, {
        name: 'Документы',
        path: 'document'
    }, {
        name: 'Календарь',
        path: 'calendar'
    }]

    return (
        <div className='page'>
            <div className='page__accordion accordion'>
                <div className="accordion__list">
                    {pages.map((page) =>
                        <NavLink key={page.path}
                                 to={page.path}
                                 className={({isActive}) =>
                                     'accordion__item ' + (isActive ? 'accordion__item-selected' : '')}
                        >
                            {page.name}
                        </NavLink>
                    )}
                </div>
            </div>

            <Routes>
                {pages.map((page) =>
                    <Route key={page.path} path={page.path} element={
                        page.template
                            ? <Async template={page.template}/>
                            : <div>Ничего</div>

                    }/>
                )}
            </Routes>
        </div>
    );
};

export default BasePage;