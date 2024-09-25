// src/Routes.js
import React from 'react';
import { Route, Routes, Routes as Switch } from 'react-router-dom';
import { IpoList } from './IpoList';
import { IpoDetails } from './IpoDetails';


const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<IpoList />} />
            <Route path="/Details" element={<IpoDetails />} />
        </Routes>
    );
};

export default AppRoutes;
