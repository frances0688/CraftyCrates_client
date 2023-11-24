import React, {useContext, useEffect} from 'react'
import {BoxContext} from '../../context/BoxContext/BoxState';

const Box = () => {
    const {boxes, getBoxes} = useContext(BoxContext);
    useEffect(() => {
        getBoxes();
    }, []);

    return (
        <div>
            {boxes.map((box) => {
                return (
                    <div key={box.id}>
                        <h2>{box.size}</h2>
                        <h3>{box.price}</h3>
                        <p>{box.description}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Box