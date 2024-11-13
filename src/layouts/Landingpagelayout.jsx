import { FC, Fragment } from 'react';

import { Provider } from "react-redux";
import store from '../common/redux/Store';
import Landingswitcher from './Component/Landingswitcher/Landingswitcher';
import { Outlet } from 'react-router-dom';


const Landingpagelayout = () => {
    return (
        <Fragment>
            <Provider store={store}>
                <Landingswitcher/>
                <Outlet />
            </Provider>
        </Fragment >
    );
};

export default Landingpagelayout;