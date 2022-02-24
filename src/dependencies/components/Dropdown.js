import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import arrow from '../assets/arrow.png';

const Dropdown = ({datas, setDatas}) => {
    const { id } = useParams();
    const [logement , setLogement] = useState();

    useEffect(() => {
        const data = datas.find(logement => logement.id === id);
        setLogement(data);
    }, [datas, id]);

    //creat 2 different dropdown (description and equipments)
    const [dropdown, setDropdown] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);

    useEffect(() => {
        setDropdown(false);
        setDropdown2(false);
    }, [datas]);

    const handleClick = () => {
        if (dropdown === false) {
            setDropdown(true);
        } else {
            setDropdown(false);
        }
    }

    const handleClick2 = () => {
        if (dropdown2 === false) {
            setDropdown2(true);
        } else {
            setDropdown2(false);
        }
    }

    // rotate arrow of 90° when dropdown is open
    const arrowStyle = {
        transform: dropdown ? 'rotate(90deg)' : 'rotate(0deg)'
    }

    const arrowStyle2 = {
        transform: dropdown2 ? 'rotate(90deg)' : 'rotate(0deg)'
    }
    

    return (
        <div className='descriptiondropdown'>
            <div className='dropdown'>
                <div className='button' onClick={handleClick}>
                    <p>Description</p>
                    <img src={arrow} style={arrowStyle} alt="arrow" />
                </div>
                {dropdown && <p className='text1'>{logement?.description}</p>}
            </div>
            <div className='dropdown'>
                <div className='button' onClick={handleClick2}>
                    <p>Equipments</p>
                    <img src={arrow} style={arrowStyle2} alt="arrow" />
                </div>
                <div className='equipments'>
                {dropdown2 && logement?.equipments.map((equipment) => (
                    <p key={equipment}>{equipment}</p>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Dropdown;