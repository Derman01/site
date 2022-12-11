import React           from 'react';
import {Route, Routes} from 'react-router-dom';
import Async           from 'components/Async';
import {Pages}         from './Source';
import Navbar          from './Navbar';

const BasePage = () => {
    return (
        <div className='component-page__BasePage'>
            <Navbar/>
            <Routes>
                {Pages.map((page) =>
                    <Route key={page.path} path={page.path} element={
                        page.template
                            ? <Async className={'component-page__BasePage__content'} template={page.template}/>
                            : <div className={'component-page__BasePage__content'}>Ничего</div>

                    }/>
                )};
            </Routes>
        </div>
    );
};

export default BasePage;