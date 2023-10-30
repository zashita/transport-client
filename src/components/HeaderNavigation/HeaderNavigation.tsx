import React from 'react';
import {NavigationBlock, Title} from "./styled";
import {Link} from "react-router-dom";
import {Routes} from "../../routes/routes";

const HeaderNavigation:React.FC = () => {
    return (
        <NavigationBlock>

            <Link
                to ={Routes.DRIVERS}
                style = {{textDecoration: `none`}}
            >
                <Title>
                    Водители
                </Title>
            </Link>
            <Link
                to = {Routes.ADS}
                style = {{textDecoration: `none`}}
            >
                <Title>
                    Объявления
                </Title>
            </Link>
            <Title>Активные заказы</Title>
        </NavigationBlock>
    );
};

export default HeaderNavigation;
