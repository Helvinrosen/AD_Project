// src/components/StudiosPage.js
import React from 'react';
import PrimarySearchAppBar from './Dashboad/Header';

import './Dashboad/studio.css';
import Footer from './Dashboad/Footer';
import StudioCards from './Dashboad/StudioCards';



const StudioPage = () => {
  return (
    <div>

    <div>
        <PrimarySearchAppBar/>
    </div>
    <div style={{backgroundColor:'#f0f0f0',textAlign:'center',paddingTop:'4vh',paddingBottom:'1vh'}}>
        <h1>STUDIOS</h1>
    </div>
    <div className='Studiocontainer'>
    <StudioCards/>
    </div>
    <div>
      <Footer/>
    </div>
    
        </div>
  );
};

export default StudioPage;
