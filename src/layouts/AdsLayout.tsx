import React from 'react';
import Header from "../components/Header/Header";
import AdsList from "../components/AdsList";
import SortSVG from '/sort-svgs/Sorting.svg';
import Filters from "../components/Filters/Filters";
import {
    ContentBLock,
    PageTitle,
    SortBlock,
    SortTypeBlock,
    SortTypeText,
    TitleBlock,
    TitleNumber,
    Wrapper
} from "./styled";

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
                <SortBlock>
                    <SortTypeBlock>
                        <img src={SortSVG} alt=""/>
                        <SortTypeText>
                            Сначала популярные
                        </SortTypeText>
                    </SortTypeBlock>
                </SortBlock>
                <ContentBLock>
                    <Filters/>
                    {children}
                </ContentBLock>
            </Wrapper>

        </>
    );
};

export default AdsLayout;
