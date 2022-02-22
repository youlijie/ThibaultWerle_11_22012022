import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from './Dropdown';
import Owner from './Owner';
import Stars from './Stars';

const DescriptionLog = ({datas, setDatas}) => {
    const { id } = useParams();
    const [logement , setLogement] = useState();

    useEffect(() => {
        const data = datas.find(logement => logement.id === id);
        setLogement(data);
    }, [datas, id]);
    



    return (
        <div>
            <div className='description'>
                <div>
                    <h1>{logement?.title}</h1>
                    <p className='location'>{logement?.location}</p>
                    <div className="tags">
                        {logement?.tags.map((tag) => (
                        <p key={tag}>{tag}</p>
                        ))}
                    </div>
                </div>
                <div className='ownerWithStars'>
                    <Owner datas={datas} setDatas={setDatas} />
                    <Stars datas={datas} setDatas={setDatas} />
                </div>    
            </div>
            <Dropdown title={"Description"} data={logement?.description} datas={datas} setDatas={setDatas} /> 
        </div>
    );
};

export default DescriptionLog;