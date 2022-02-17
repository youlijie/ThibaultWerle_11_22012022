import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import HeaderLogement from '../components/HeaderLogement';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const FicheLogement = ({datas, setDatas}) => {

    useEffect(() => {
        let data
        if (!datas[0]) {data = require('../data/datas')
        setDatas(data);
        };
        
        console.log(datas, data , "datas");
    }, []);

    return (
        <div>
            <Logo />
            <Navigation />
            <HeaderLogement datas={datas} setDatas={setDatas} />
            <Footer />
        </div>
    );
};

export default FicheLogement;