import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 320px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex-shrink: 0;
`
export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;`
export const CardImage = styled.image`
  display: flex;
  height: 210px;
  padding: 8px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  align-self: stretch;`

export const PriceAndLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`

export const PriceBlock = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;`

export const PricePerHour = styled.div`
  color: var(--black-text-icons, #222);

  /* H5 */
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 550;
  line-height: 22px; /* 122.222% */
  letter-spacing: -0.33px;
`

export const PricePerKm = styled.div`
  color: var(--gray-text, #8E8E93);

  /* Caption */
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 123.077% */
  letter-spacing: -0.04px;
`

export const LocationBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  align-self: stretch;`

export const Specs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`
export const CardChips = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 8px;
  align-self: stretch;
  flex-wrap: wrap;`
export const Chip = styled.div`
  display: flex;
  height: 24px;
  padding: 4px 8px;
  align-items: center;
  gap: 4px;
`
export const ChipText = styled.div`
  color: var(--black-text-icons, #222);

  /* Body 2 */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 430;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.1px;
`
export const SpecsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`

export const Spec = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;`

export const SpecName = styled.p`
  color: var(--gray-text, #8E8E93);

  /* Body 2 */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 430;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.1px;
`
export const SpecValue = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`

export const RatingContainer = styled.div`
  display: flex;
  height: 24px;
  padding: 6px 8px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;`

export const Rating = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;`

export const RatingText = styled.p`
  color: var(--black-text-icons, #222);
  text-align: right;

  /* Body 2 */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 430;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.1px;`

export const Divider = styled.div`
  width: 1px;
  height: 16px;
`

export const CommentsTitle = styled.p`
  color: var(--gray-text, #8E8E93);
  text-align: right;

  /* Body 2 */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 430;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.1px;`
