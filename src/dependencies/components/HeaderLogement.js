import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HeaderLogement = ({datas, setDatas}) => {
    const { id } = useParams();
    const [Logement, setLogement] = useState();
    
    useEffect(() => {
        
        const data = datas.find(Logement => Logement.id === id);
        setLogement(data);
        console.log(data, "idlogement");
    }, []);


    return (
        <div>
            
        </div>
    );
};

export default HeaderLogement;