import styled from "styled-components";

export const PriceChip= styled.div`
    display: flex;
    gap: 12px;
    flex-direction: column;
    
`
export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  margin-bottom: 24px;
`
export const ImageGrid = styled.div`
  display: grid;
  width: 716px;
  height: 560px;
  grid-template-columns: 140px 140px 140px 140px 140px;
  grid-template-rows: 465px 90px;
  grid-gap: 2px;
  
`
export const BigImage = styled.img`
display: grid;
  grid-column: 1 / 6;
  width: 100%;
  height: 100%;
`
export const SmallImage = styled.img`
display: grid;
  width: 100%;
  height: 100%;
`
export const BottomRow = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Text = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
`
export const Title = styled.p`
  color: ${props => props.theme.colors.darkText};

  /* H5 */
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 550;
  line-height: 22px; /* 122.222% */
  letter-spacing: -0.33px;`

export const Line = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const ProfilePreview = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 4px;`

export const Info = styled.div`
  display: flex;
  //padding: 12px;
  align-items: center;
  align-self: stretch;
  gap: 12px;
  border-radius: 8px;
  background: var(--Background---gray, #F2F2F3);`

export const Stats = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  align-self: stretch;
`
export const Stat = styled.div`
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  height: 40px;
  flex: 1 0 0;
  border-radius: 8px;
  background: var(--Background---gray, #F2F2F3);
  
`
export const ProfilePicture = styled.img`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;`

export const StatValue = styled.p`
  color: var(--black-text-icons, #222224);

  /* Title */
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 530;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.18px;
  margin: 0;
`

export const StatTitle = styled.p`
  color: var(--gray-text, #8E8E93);

  /* Body 2 */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 430;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.1px;
  margin: 0;
`
