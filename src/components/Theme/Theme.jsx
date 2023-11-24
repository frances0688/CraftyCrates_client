import React, {useContext, useEffect} from 'react'
import {ThemeContext} from '../../context/ThemeContext/ThemeState';

const Theme = () => {
    const {themes, getThemes} = useContext(ThemeContext);
    useEffect(() => {
        getThemes();
    }, []);

    return (
        <div>
            {themes.map((theme) => {
                return (
                    <div key={theme.id}>
                        <h2>{theme.theme_name}</h2>
                        <p>{theme.description}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Theme