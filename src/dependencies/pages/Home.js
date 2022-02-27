import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logement from '../components/Logement';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const Home = ({datas, setDatas}) => {


    
    return (
        <div>
            <div className='nav'>
                <Logo />
                <Navigation />
            </div>
            <Header />
            <Logement datas={datas} setDatas={setDatas}/>
            <Footer />
        </div>
    );
};

export default Home;