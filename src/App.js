import React from 'react';
import Home from './dependencies/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pagenotfound from './dependencies/pages/PageNotFound';
import About from './dependencies/pages/APropos';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/APropos" element={<About />} />
            <Route element={<Pagenotfound />} />
        </Routes>
    </BrowserRouter>
);

export default App;