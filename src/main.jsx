import { lazy, StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client';
import './index.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Routedata } from './components/common/ui/routingdata.jsx';
import { Provider } from 'react-redux';
import store from './components/common/ui/redux/store.jsx';
import RootWrapper from './pages/Rootwrapper.jsx';
import Loader from './components/loader/loader.jsx';
import App from './pages/App.jsx';

import Error404 from './container/authentication/error/404-error/error404.jsx';
import AuthenticationLayout from './pages/authenticationlayout.jsx';
import Login from './firebase/login.jsx';
import Auth from './firebase/auth.jsx';
import Signup from './firebase/signup.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RootWrapper>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path={`${import.meta.env.BASE_URL}`} element={<Auth />}>
                <Route index element={<Login />} />
                <Route path={`${import.meta.env.BASE_URL}firebase/login`} element={<Login />} />
                <Route path={`${import.meta.env.BASE_URL}firebase/signup`} element={<Signup />} />
              </Route>
              <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
                {Routedata.map((idx) => (
                  <Route key={idx.id} path={idx.path} element={idx.element} />
                ))}
              </Route>

              <Route path={`${import.meta.env.BASE_URL}`} element={<AuthenticationLayout />}>



                <Route path={`${import.meta.env.BASE_URL}authentication/error/404-error`} element={<Error404 />} />
              </Route>

            </Routes>
          </Suspense>
        </BrowserRouter>
      </RootWrapper>
    </Provider>
  </StrictMode>
)
