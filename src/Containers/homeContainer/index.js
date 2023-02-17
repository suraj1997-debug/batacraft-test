import React from 'react';
import Footer from '../../Components/footer';
import Header from '../../Components/header';

const HomeContainer = () => {
    return (
        <>
        <Header />
        <div style={{height:"80vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <p>hello!!!</p>
        </div>
        <Footer />
        </>
    )
}

export default HomeContainer;