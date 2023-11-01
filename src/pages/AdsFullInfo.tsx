import React from 'react';
import Header from "../components/Header/Header";
import {Wrapper} from "../layouts/styled";
import AdsSpecs from "../components/AdsSpecs/AdsSpecs";



const AdsFullInfo:React.FC = () => {
    return (
        <>
            <Header/>
            <Wrapper>
                <AdsSpecs/>
            </Wrapper>


        </>
    );
};

export default AdsFullInfo;
