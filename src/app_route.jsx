import { Routes as RouterRoutes, Route, BrowserRouter } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import { Routedata } from './components/common/ui/routingdata.jsx';
import RootWrapper from './pages/Rootwrapper.jsx';
import Loader from './components/loader/loader.jsx';

// Lazy load components
const App = React.lazy(() => import('./pages/App.jsx'));
const AuthenticationLayout = React.lazy(() => import('./pages/authenticationlayout.jsx'));
const Auth = React.lazy(() => import('./firebase/auth.jsx'));
const Error404 = React.lazy(() => import('./container/authentication/error/404-error/error404.jsx'));


const AppRoute = () => {
  return (
    <RootWrapper>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <RouterRoutes>
          <Route path={`${import.meta.env.BASE_URL}login`} element={<Auth/>}>
          </Route>
            <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
              {Routedata.map((idx) => (
                <Route key={idx.id} path={idx.path} element={idx.element} />
              ))}
            </Route>
            <Route path={`${import.meta.env.BASE_URL}`} element={<AuthenticationLayout />}>
              <Route path={`${import.meta.env.BASE_URL}authentication/error/404-error`} element={<Error404 />} />
            </Route>
          </RouterRoutes>
        </Suspense>
      </BrowserRouter>
    </RootWrapper>
  );
};

export default AppRoute;
