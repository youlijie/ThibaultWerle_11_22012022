import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import starEmpty from '../assets/stars/empty-stars.png';
import starFull from '../assets/stars/full-stars.png';

const Stars = ({datas, setDatas}) => {
    const { id } = useParams();
    const [logement , setLogement] = useState();

    useEffect(() => {
        const data = datas.find(logement => logement.id === id);
        setLogement(data);
    }, [datas, id]);

    // use star to show datas.rating
    const [rating, setRating] = useState(0);

    useEffect(() => {
        if (logement) {
            setRating(logement.rating);
        }
    }, [logement]);
    
    const [stars, setStars] = useState([]);

    useEffect(() => {
        if (rating) {
            const starsArr = [];
            for (let i = 0; i < rating; i++) {
                starsArr.push(starFull);
            }
            for (let i = rating; i < 5; i++) {
                starsArr.push(starEmpty);
            }
            setStars(starsArr);
        }
    }, [rating]);

    return (
        <div className='stars'>
            {stars.map((star) => (
                <img key={star} src={star} alt="star" />
            ))}
        </div>
    );
}

export default Stars;