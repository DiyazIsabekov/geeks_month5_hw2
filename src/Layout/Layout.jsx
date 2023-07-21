import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css'


const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink className={styles.nav_Link} to='/posts'>Список постов</NavLink>
                    <NavLink className={styles.nav_Link} to='/create'>Создать пост</NavLink>
                    <Outlet />
                </nav>
            </header>
        </>
    );
};

export default Layout;