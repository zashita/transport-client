import React from 'react';
import {Container, LogoText, StyledHeader} from "./styled";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import Profile from "../Profile/Profile";
import {Link} from "react-router-dom";
import {Routes} from "../../routes/routes";

export interface IHeaderProps {
    children: React.ReactNode;
}

const Header:React.FC = () => {
    return (
        <Container>
            <StyledHeader>
                <Link
                    to = {Routes.MAIN}
                    style = {{textDecoration: `none`}}
                >
                    <LogoText>
                        LOGO
                    </LogoText>
                </Link>
                <HeaderNavigation/>
                <Profile/>
            </StyledHeader>
        </Container>

    );
};

export default Header;
