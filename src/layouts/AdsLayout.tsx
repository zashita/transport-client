import React from 'react';
import Header from "../components/Header/Header";
import AdsList from "../components/AdsList";
import Filters from "../components/Filters/Filters";
import {PageTitle, TitleBlock, TitleNumber, Wrapper} from "./styled";

export interface ILayoutProps{
    children: React.ReactNode
}
const AdsLayout:React.FC<ILayoutProps> = ({children}) => {
    return (
        <>
            <Header/>
            <Wrapper>
                <TitleBlock>
                    <PageTitle>Поиск транспорта</PageTitle>
                    <TitleNumber>(44)</TitleNumber>
                </TitleBlock>
                <Filters/>
                {children}
            </Wrapper>

        </>
    );
};

export default AdsLayout;
