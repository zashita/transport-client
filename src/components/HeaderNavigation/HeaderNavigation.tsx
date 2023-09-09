import React from 'react';
import {NavigationBlock, Title} from "./styled";

const HeaderNavigation = () => {
    return (
        <NavigationBlock>
            <Title color={'black'}>
                Водители
            </Title>
            <Title>Грузы</Title>
        </NavigationBlock>
    );
};

export default HeaderNavigation;
