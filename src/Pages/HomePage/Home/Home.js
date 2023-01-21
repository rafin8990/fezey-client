import React from 'react';
import Contact from '../Contact/Contact';
import Form from '../Form/Form';
import Header from '../Header/Header';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeSection from '../HomeSection/HomeSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeProducts></HomeProducts>
            <HomeSection></HomeSection>
            <Contact></Contact>
            <Form></Form>
            
        </div>
    );
};

export default Home;