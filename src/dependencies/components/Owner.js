import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Owner = ({datas, setDatas}) => {
    const { id } = useParams();
    const [logement , setLogement] = useState();

    useEffect(() => {
        const data = datas.find(logement => logement.id === id);
        setLogement(data);
    }, [datas, id]);

    return (
        <div className='owner'>
            <p>{logement?.host.name}</p>
            <img src={logement?.host.picture} alt="logo" />
        </div>
    );
};

export default Owner;