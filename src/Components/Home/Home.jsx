import React, { useContext } from 'react';
import { UserContext } from '../../Providers/AuthProviders';

const Home = () => {
    const {consumer} = useContext(UserContext);
    console.log(consumer);
    return (
        <div>
            <h3>Home</h3>
            <h3>Your user name is: {consumer && <span>{consumer.displayName}</span>}</h3>
            <p>Your email is: {consumer && <span>{consumer.email}</span>}</p>
        </div>
    );
};

export default Home;