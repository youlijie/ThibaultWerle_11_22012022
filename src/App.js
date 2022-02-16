import React from 'react';
import Home from './dependencies/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pagenotfound from './dependencies/pages/PageNotFound';
import About from './dependencies/pages/APropos';
import Fichelogement from './dependencies/pages/FicheLogement';

const App = () => (

    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="APropos" element={<About />} />
            <Route exact path="fiche-logement/:id" element={<Fichelogement />} />
            <Route path='*' element={<Pagenotfound />} />
        </Routes>
    </BrowserRouter>
);

export default App;