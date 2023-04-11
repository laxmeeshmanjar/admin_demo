import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { CircularProgress } from '@mui/material';
const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));
function Routes1() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/home" element={<Home/>} />
        {/* <Route path="/profile" component={ProfilePage} /> */}
      </Routes>
    </Suspense>
  );
}

export default Routes1;
