import { Fragment } from 'react'
import { Provider } from "react-redux";
import store from '../common/redux/Store';
import { Outlet } from 'react-router';
import Switcher from './Component/Switcher/Switcher';
import { Helmet } from 'react-helmet-async';


const Authenticationlayout = () => {

    return (

        <Fragment>
            <Helmet
                htmlAttributes={{
                    lang: "en",
                    dir: "ltr",
                    "data-nav-layout": "vertical",
                    "data-theme-mode": "light",
                    "data-header-styles": "light",
                    "data-menu-styles": "dark",
                    "data-page-style": "",
                    "data-width": "",
                    "data-menu-position": "",
                    "data-header-position": ""
                }}><body className="app sidebar-mini ltr login-img" /></Helmet>
            <Provider store={store}>
                <Switcher />
                <div className='page'>
                    <Outlet />
                </div>
            </Provider>
        </Fragment >

    )
}

export default Authenticationlayout;
