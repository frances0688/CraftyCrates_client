import React, {useContext, useEffect} from 'react'
import {UserContext} from '../../context/UserContext/UserState';

const User = () => {
    const {user, getUser} = useContext(UserContext);
    useEffect(() => {
        getUser();
    }, []);
    return (
        <div>{user.user_name}</div>
    )
}

export default User