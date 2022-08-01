import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
    return(
        <div className='home'>
            <div id="pageHeader"></div>
            <div id="pageToolbar"></div>
            <div id="pageContent"></div>
            <div id="pageFooter">footer</div>
        </div>
    )
}
export default Home;