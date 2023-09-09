import React, {ReactChild, ReactChildren} from 'react';
import {LogoText, StyledHeader} from "./styled";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import {NavigationBlock, Title} from "../HeaderNavigation/styled";
import Profile from "../Profile/Profile";

export interface IHeaderProps {
    children: React.ReactNode;
}

const Header:React.FC = () => {
    return (
        <StyledHeader>
            <LogoText>
                LOGO
            </LogoText>
            <HeaderNavigation/>
            <Profile/>
        </StyledHeader>
    );
};

export default Header;
