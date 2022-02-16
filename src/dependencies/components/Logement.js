import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Logement = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const data = require('../data/datas');
        setDatas(data);
    }, []);

    return (
        <div className='wraperlogement'>
                { datas.map((Logement) => ( 
                <NavLink to={'fiche-logement/' + Logement.id } id={Logement.id} key={Logement.id} exact className={"logement"}  >
                    
                        <div className="logementlink" key={Logement.id}>
                        <img src={Logement.cover}  alt="logo" />
                        <p> {Logement.title}</p>
                        </div>
                     
                </NavLink>
                ))}
            </div>
    );
};

export default Logement;