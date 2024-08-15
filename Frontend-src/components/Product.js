// src/components/ProductPage.js
import React from 'react';
import PrimarySearchAppBar from './Dashboad/Header';

import './Dashboad/prod.css';
import Footer from './Dashboad/Footer';
import Cards from './Dashboad/Card1';
// import ScrollReveal from './Dashboad/R-Content';

const ProductPage = () => {
  return (
    <div>

    <div>
        <PrimarySearchAppBar/>
    </div>
    <div style={{backgroundColor:'#f0f0f0',textAlign:'center',paddingTop:'4vh',paddingBottom:'1vh'}}>
        <h1>EQUIPMENTS</h1>
    </div>
    <div className='prodcontainer'>
    <Cards/>
    </div>
    <div>
      <Footer/>
    </div>
    
        </div>
  );
};

export default ProductPage;
