import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Faculty from './pages/Faculty';
import DetailFaculty from './pages/DetailFaculty';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/faculty/:id" element={<DetailFaculty />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
