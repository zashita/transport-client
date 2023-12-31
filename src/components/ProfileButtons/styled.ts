import styled from "styled-components";

export const Tabs = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 12px;
`
export const TabButton = styled.button`
  display: flex;
  width: 180px;
  height: 56px;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  border: 0;
  gap: 10px;
  border-radius: 8px;
  background: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.lightText};

  /* Title */
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 530;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.18px;`

