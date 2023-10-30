import React, {PropsWithChildren} from 'react';
import Header from "../components/Header/Header";
import SortSVG from '/sort-svgs/Sorting.svg';
import Filters from "../components/Filters/Filters";
import {
    ContentBlock,
    PageTitle,
    SortBlock,
    SortTypeBlock,
    SortTypeText,
    TitleBlock,
    TitleNumber, ViewModeSwitch,
    Wrapper
} from "./styled";
import {CardTypes} from "../components/AdsCard/AdsListItem";
import ListActive from '../../public/View Mode SVGS/ListActive.svg'
import GridActive from '../../public/View Mode SVGS/GridActive.svg'
import ListInactive from '../../public/View Mode SVGS/ListInactive.svg'
import GridInactive from '../../public/View Mode SVGS/GridInactive.svg'

export interface ILayoutProps{
    ViewMode: CardTypes;
    setViewMode: (type: CardTypes) => unknown;
}
const AdsLayout:React.FC<PropsWithChildren<ILayoutProps>> = ({
                                                                 children,
                                                                 setViewMode,
                                                                 ViewMode}) => {
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
                        <img
                            src={SortSVG}
                            alt=""
                        />
                        <SortTypeText>
                            Сначала популярные
                        </SortTypeText>
                    </SortTypeBlock>
                    <ViewModeSwitch>
                        <>
                            {ViewMode === CardTypes.LIST?
                                <img src={ListActive}/>
                                :
                                <img
                                    src={ListInactive}
                                    onClick={() => setViewMode(CardTypes.LIST)}
                                />}
                        </>
                        <>
                            {ViewMode === CardTypes.GRID?
                                <img src={GridActive}/>
                                :
                                <img
                                    src={GridInactive}
                                    onClick={() => setViewMode(CardTypes.GRID)}
                                />}

                        </>
                    </ViewModeSwitch>
                </SortBlock>
                <ContentBlock>
                    <Filters/>
                    {children}
                </ContentBlock>
            </Wrapper>

        </>
    );
};

export default AdsLayout;
