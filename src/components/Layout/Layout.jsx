import React from 'react';
import moment from 'moment/moment';
import { BiSearch } from 'react-icons/bi';
import css from './Layout.module.css';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
// import Dashboard from '../../pages/Dashboard/Dashboard';

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className={css.container}>
      <Sidebar />
      <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.header}>
          <span>{moment().format('dddd, Do MMM')}</span>
          <div className={css.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="Search" />
          </div>

          <div className={css.profile}>
            <img src="./profile.png" alt="person image" />
            <div className={css.details}>
              <span>Denis Steven</span>
              <span>Denissteven@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
