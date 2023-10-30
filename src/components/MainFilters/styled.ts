import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 480px;
  //margin: 0;
  flex-shrink: 0;
  border-radius: 0px 0px 28px 28px;
  background: ${props => props.theme.colors.darkBg};`

export const Subtitle = styled.p`
  color: #C6BDCE;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 530;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.18px;
  margin-bottom: 30px`

export const TitleText = styled.p`
  color: ${props => props.theme.colors.lightText};
  //margin: 160px auto 0 auto ;
  text-align: center;
  font-feature-settings: 'case' on;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.11px;`

export const InputRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2px;
  flex: 1 0 0;
  
`
