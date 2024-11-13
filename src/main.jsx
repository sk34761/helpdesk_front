import React, { Fragment } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import { HelmetProvider } from 'react-helmet-async';
import { RouteData } from './common/Routingdata';
import App from './layouts/App';
import Loader from './layouts/Component/Loader/Loader';
import Authenticationlayout from './layouts/Authenticationlayout';

//component import path
import Error500 from './components/Authentication/ErrorPages/Error500';
import Indexpage from './components/Dashboard/IndexPage';
import Login from './components/Authentication/LogIn';
import Forgotpassword from './components/Authentication/ForgotPassword';
import Lockscreen from './components/Authentication/LockScreen';
import Undermaintaince from './components/Authentication/UnderMaintainance';
import Error400 from './components/Authentication/ErrorPages/Error400';
import Error401 from './components/Authentication/ErrorPages/Error401';
import Error403 from './components/Authentication/ErrorPages/Error403';
import Error404 from './components/Authentication/ErrorPages/Error404';
import Error503 from './components/Authentication/ErrorPages/Error503';
/*
import Landingpage from './components/LandingPage/LandingPage';
*/
import ScrollToTop from './ScrolltoTop';
import Firebaselayout from './layouts/Firebaselayout';




ReactDOM.createRoot(document.getElementById("root")).render(
  <Fragment>
    <HelmetProvider>
      <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
          <ScrollToTop />
          <Routes>
            <Route>
            </Route>

            <Route path={`${import.meta.env.BASE_URL}`} element={<Firebaselayout />}>
              <Route index element={<Login />} />
              <Route path={`${import.meta.env.BASE_URL}Login`} element={<Login />} />
             
            </Route>
            {/* //main layout */}

            <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
              <Route index element={<Indexpage />} />
              {RouteData.map((idx) => (
                <Route key={Math.random()} path={idx.path} element={idx.element} />
              ))}
            </Route>


            {/* //LandingPage layout */}
            {
              /* 
           
            <Route path={`${import.meta.env.BASE_URL}`} element={<Landingpagelayout />}>

              <Route path={`${import.meta.env.BASE_URL}LandingPage`} element={<Landingpage />} />

            </Route>
            */
            }

            {/* //Authentication layout */}

            <Route path={`${import.meta.env.BASE_URL}`} element={<Authenticationlayout />}>
              <Route path='*' element={<Error500 />} />
              <Route path={`${import.meta.env.BASE_URL}Authentication/LogIn`} element={<Login />} />
              {/*
              <Route path={`${import.meta.env.BASE_URL}Authentication/Register`} element={<Register />} />
              */}
              <Route path={`${import.meta.env.BASE_URL}Authentication/ForgotPassword`} element={<Forgotpassword />} />
              <Route path={`${import.meta.env.BASE_URL}Authentication/LockScreen`} element={<Lockscreen />} />
              <Route path={`${import.meta.env.BASE_URL}Authentication/UnderMaintainance`} element={<Undermaintaince />} />
              <Route path={`${import.meta.env.BASE_URL}Authentication/ErrorPages/Error400`} element={<Error400 />} />
              <Route path={`${import.meta.env.BASE_URL}Authentication/ErrorPages/Error401`} element={<Error401 />} />
              <Route path={`${import.meta.env.BASE_URL}Authentication/ErrorPages/Error403`} element={<Error403 />} />
              <Route path={`${import.meta.env.BASE_URL}Authentication/ErrorPages/Error404`} element={<Error404 />} />
              <Route path={`${import.meta.env.BASE_URL}Authentication/ErrorPages/Error500`} element={<Error500 />} />
              <Route path={`${import.meta.env.BASE_URL}Authentication/ErrorPages/Error503`} element={<Error503 />} />
            </Route>
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </Fragment>,
);