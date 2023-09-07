import styled from 'styled-components';

// Define reusable components
export const CardContainer = styled.div`
  display: flex;
  width: 1000px;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  margin-bottom: 20px;
`;

export const Photo = styled.div`
  display: flex;
  width: 320px;
  height: 210px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

// Define other components following the same pattern
export const ImageAndInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const PricesAndZone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

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

export const Chars = styled.div`
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

export const CharsLine = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

export const CharName = styled.div`
  color: #8E8E93;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 430;
  line-height: normal;
  letter-spacing: -0.1px;
`;

export const CharValue = styled.div`
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

export const RatingComments = styled.div`
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
