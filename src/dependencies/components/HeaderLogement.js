import React, { useEffect, useState } from 'react';

const HeaderLogement = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(data);
        console.log(data);
    }, [data]);

    return (
        <div>
            
        </div>
    );
};

export default HeaderLogement;