import React, { useEffect, useState } from 'react';
import arrow from '../assets/arrow.png';


const AboutInfo = () => {

    //Create 4 dropdown
    const [dropdown, setDropdown] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [dropdown4, setDropdown4] = useState(false);

    useEffect(() => {
        setDropdown(false);
        setDropdown2(false);
        setDropdown3(false);
        setDropdown4(false);
    }, []);

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

    const handleClick3 = () => {
        if (dropdown3 === false) {
            setDropdown3(true);
        } else {
            setDropdown3(false);
        }
    }

    const handleClick4 = () => {
        if (dropdown4 === false) {
            setDropdown4(true);
        } else {
            setDropdown4(false);
        }
    }

    // rotate arrow of 90° when dropdown is open
    const arrowStyle = {
        transform: dropdown ? 'rotate(90deg)' : 'rotate(0deg)'
    }

    const arrowStyle2 = {
        transform: dropdown2 ? 'rotate(90deg)' : 'rotate(0deg)'
    }

    const arrowStyle3 = {
        transform: dropdown3 ? 'rotate(90deg)' : 'rotate(0deg)'
    }

    const arrowStyle4 = {
        transform: dropdown4 ? 'rotate(90deg)' : 'rotate(0deg)'
    }

    return (
        <div className='descriptiondropdown2'>
            <div className='dropdown'>
                <div className='button' onClick={handleClick}>
                    <p>Fiabilité</p>
                    <img src={arrow} style={arrowStyle} alt="arrow" />
                </div>
                {dropdown && <p className='text1'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>}
            </div>
            <div className='dropdown'>
                <div className='button' onClick={handleClick2}>
                    <p>Respect</p>
                    <img src={arrow} style={arrowStyle2} alt="arrow" />
                </div>
                {dropdown2 && <p className='text1'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}
            </div>
            <div className='dropdown'>
                <div className='button' onClick={handleClick3}>
                    <p>Service</p>
                    <img src={arrow} style={arrowStyle3} alt="arrow" />
                </div>
                {dropdown3 && <p className='text1'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>}
            </div>
            <div className='dropdown'>
                <div className='button' onClick={handleClick4}>
                    <p>Sécurité</p>
                    <img src={arrow} style={arrowStyle4} alt="arrow" />
                </div>
                {dropdown4 && <p className='text1'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
            </div>
        </div>
    );
}

export default AboutInfo;