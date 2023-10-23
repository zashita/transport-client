import styled from "styled-components";
import {ICardProps} from "../AdsCard/styled";
import {CardTypes} from "../AdsCard/AdsListItem";

export const ListContainer = styled.div<ICardProps>`
    display: ${props => props.type === CardTypes.GRID? `grid`: null};
    grid-template-columns: 320px 320px 320px;
    // width: ${props => props.type === CardTypes.LIST? `1000px`: `900px`};
    width: 1100px;
    row-gap: 20px;
    column-gap: 30px;
  
`
