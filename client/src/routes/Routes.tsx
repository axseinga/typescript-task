import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { WelcomePage } from '../pages/WelcomePage/WelcomePage';
import { SignUpPage } from '../pages/SignupPage/SignupPage';
import { PlaygroundPage } from '../pages/PlaygroundPage/PlaygroundPage';

export const PagesRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/playground' element={<PlaygroundPage />} />
    </Routes>
  );
};
