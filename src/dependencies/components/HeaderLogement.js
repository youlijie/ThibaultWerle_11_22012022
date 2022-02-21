import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import arrow from '../assets/big-arrow.png';

const HeaderLogement = ({datas, setDatas}) => {
    const { id } = useParams();
    const [Logement, setLogement] = useState();
    
    useEffect(() => {
        
        const data = datas.find(Logement => Logement.id === id);
        setLogement(data);
        console.log(data, "idlogement");
    }, [datas, id]);

    // carousel with pictures from datas.pictures and arrow left and right
    const [index, setIndex] = useState(0);
    const [pictures, setPictures] = useState([]);
    const [picturesLength, setPicturesLength] = useState(0);

    useEffect(() => {
        if (Logement) {
            setPictures(Logement.pictures);
            setPicturesLength(Logement.pictures.length);
        }
    }, [Logement]);

    const handleLeftArrow = () => {
        if (index === 0) {
            setIndex(picturesLength - 1);
        } else {
            setIndex(index - 1);
        }
    };

    const handleRightArrow = () => {
        if (index === picturesLength - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    // if only one picture, don't show arrow
    const showArrow = () => {
        if (picturesLength === 1) {
            return null;
        } else {
            return (
                <div className="arrow-container">
                    <img onClick={handleLeftArrow} src={arrow} alt="arrow" className="arrowLeft" />
                    <img onClick={handleRightArrow} src={arrow} alt="arrow" className="arrowRight" />
                </div>
            );
        }
    };

    // add picture counter
    const showCounter = () => {
        if (picturesLength === 1) {
            return null;
        } else {
            return (
                <div className="counter">
                    {index + 1}/{picturesLength}
                </div>
            );
        }
    };

    return (
        <div className='headerlogement'>
            <div className="headerlogement-pictures">
                <div className="container">
                    <img src={pictures[index]} alt="Logement" className='picLogement'/>
                    {showArrow()}
                    {showCounter()}
                </div>
                    
            </div>
        </div>
    );
};

export default HeaderLogement;