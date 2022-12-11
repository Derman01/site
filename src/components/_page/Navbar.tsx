import React from 'react';
import 'components/page.css';
import {Pages} from './Source';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={'component-page__Navbar'}>
            <div className="component-page__Navbar_logo">
                <div className="component-page__Navbar_logo__icon"></div>
                <div className="component-page__Navbar_logo__title">Автошкола</div>
            </div>
            <div className="component-page__Navbar_pages">
                {
                    Pages.map((page) =>
                        <NavLink key={page.path}
                                 to={page.path}
                                 className={({isActive}) =>
                                     'component-page__Navbar_pages__item ' +
                                     (isActive ? 'component-page__Navbar_pages__item-active' : '')}>
                            {page.name}
                        </NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;