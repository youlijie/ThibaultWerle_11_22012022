import React, {useState} from 'react';
import Home from './dependencies/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pagenotfound from './dependencies/pages/PageNotFound';
import About from './dependencies/pages/APropos';
import Fichelogement from './dependencies/pages/FicheLogement';

export const Switch = () => {
    const [datas, setDatas] = useState([]);
    return (
        <Routes>
            <Route exact path="/" element={<Home  datas={datas} setDatas={setDatas} />} />
            <Route exact path="APropos" element={<About />} />
            <Route exact path="fiche-logement/:id" element={<Fichelogement datas={datas} setDatas={setDatas} />} />
            <Route path='*' element={<Pagenotfound />} />
        </Routes>
    );
}

const App = () => (

    <BrowserRouter>        
            <Switch />      
    </BrowserRouter>
);

export default App;