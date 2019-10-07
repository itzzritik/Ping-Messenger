import React, {useState, useEffect} from 'react';
import './InfoBar.css';

const InfoBar = () => {
    <div className='infoBar'>
        <div className='leftInnerContainer'>
            <img className="onlineIcon" src={onlineIcon} alt='Online Icon'/>
            <h3></h3>
        </div>
        <div className='rightInnerContainer'>
            <a href="/"><img src={closeIcon} alt='Close Icon'/></a>
        </div>
    </div>
}

export default InfoBar;