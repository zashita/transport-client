import styled from 'styled-components';
import {CardTypes} from "./AdsListItem";
export interface ICardProps {
    type: CardTypes
}

// Define reusable components
export const CardContainer = styled.div<ICardProps>`
  display: flex;
  width: ${props => props.type === CardTypes.LIST? 1200: 320} px;
  justify-content: ${props => props.type === CardTypes.LIST? 'space-between': null};
  flex-direction: ${props => props.type === CardTypes.GRID? `column`: null};
  gap: ${props => props.type === CardTypes.GRID? `12px`: null};
  align-items: flex-start;
  flex-shrink: 0;
  margin-bottom: 20px;
  
`;
// export const CardContainer = styled.div`
//   display: flex;
//   width: 320px;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 12px;
//   flex-shrink: 0;
// `
export const Image = styled.div<ICardProps>`
  display: flex;
  width: 320px;
  height: 210px;
  flex-direction: column;
  align-items: flex-start;
  //gap: 10px;
  padding: ${props => props.type === CardTypes.GRID? `8px`: null};
  justify-content: ${props => props.type === CardTypes.GRID? `flex-end`: null};
  align-items: ${props => props.type === CardTypes.GRID? `flex-end`: null};
  align-self: ${props => props.type === CardTypes.GRID? `stretch`: null};
  border-radius: 8px;
  background: url('/Фото.png'), lightgray 50% / cover no-repeat;
`;
export const CardBody = styled.div<ICardProps>`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex-direction: ${props => props.type === CardTypes.LIST? `row`: `column`};
`;

export const CardText = styled.div<ICardProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${props => props.type === CardTypes.LIST? `12px`: `8px`};
  align-self: ${props => props.type === CardTypes.GRID? `stretch`: null};
`;
export const PriceAndLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`

// Define the remaining components...


export const Prices = styled.div`
  display: flex;
  width: 191px;
  align-items: baseline;
  gap: 10px;
`;

export const PriceHour = styled.div`
  color: #222;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.33px;
`;

export const PriceKm = styled.div`
  color: #8E8E93;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.04px;
`;

export const Specs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

export const Handling = styled.div`
  display: flex;
  width: 180px;
  justify-content: flex-end;
  align-items: flex-start;
  align-content: flex-start;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
`;

export const Zone = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  align-self: stretch;
`;

export const ZoneText = styled.div`
  color: #3F7BD7;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.04px;
`;

export const ChipContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Chip = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 8px;
  flex-wrap: wrap;
  border-radius: 5px;
  background: #F2F2F3;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.04px;
`;

export const ChipText = styled.div`
  color: #222;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.04px;
`;

export const SpecLine = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

export const SpecName = styled.div`
  color: #8E8E93;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 430;
  line-height: normal;
  letter-spacing: -0.1px;
`;

export const SpecValue = styled.div`
  color: #222;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 430;
  line-height: normal;
  letter-spacing: -0.1px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
`;

export const ContactButton = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.09px;
  color: white;
  display: flex;
  height: 22px;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #3F7BD7;
  
  &:hover{
    border-radius: 10px;
    background: #E7F0FF;
    color: #3F7BD7;

    /* Button title */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.09px;
  }
`;

export const LikeButton = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #DCDDE0;
`;

export const FeedbackBlock = styled.div`
  display: flex;
  height: 15px;
  padding: 6px 8px;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  background: #F2F2F3;
`;

export const Divider = styled.div`
  width: 1px;
  height: 16px;
  background: #DCDDE0;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
`;

export const RatingText = styled.div`
  color: #222;
  text-align: right;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.04px;
`;

export const Comments = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
`;

export const CommentsText = styled.div`
  color: #8E8E93;
  text-align: right;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.04px;
`;
