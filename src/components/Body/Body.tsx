import React, { useState, useEffect } from 'react';
import Timer from '../Timer/Timer';
import { BodyContainer } from './style';


const Body = () => {
    return (
        <BodyContainer>
            <Timer/>
        </BodyContainer>
    )
}


export default Body;
