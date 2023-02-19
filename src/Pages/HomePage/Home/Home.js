import React from 'react';
import Cheakout from '../../../Cheakout/Cheakout';
import Category from '../Category.js/Category';
import Contact from '../Contact/Contact';
import Form from '../Form/Form';
import Header from '../Header/Header';
import HomeSection from '../HomeSection/HomeSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Cheakout></Cheakout>
            <Category></Category>
            <HomeSection></HomeSection>
            <Contact></Contact>
            <Form></Form>
            
        </div>
    );
};

export default Home;