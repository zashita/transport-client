import React from 'react';
import Header from "../components/Header/Header";
import {Wrapper} from "./styled";

export interface IProfileLayoutProps{
    children: React.ReactNode
}

const ProfileLayout:React.FC<IProfileLayoutProps> = ({children}) => {
    return (
        <>
            <Header/>
            <Wrapper>
`               {children}
            </Wrapper>
        </>
    );
};

export default ProfileLayout;
