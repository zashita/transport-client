import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  width: 1340px;
  padding: 15px 0px;
  top: 0;
  justify-content: space-between;
  align-items: center;
  //flex-shrink: 0;
  //position: fixed;
  

`
export const Container = styled.div`
  width: 100%;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  //border-bottom: 1px solid var(--gray-border, #DCDDE0);
  position: fixed;
  height: 70px;
  background: ${props => props.theme.colors.darkBg};


`

export const LogoText = styled.h1`
  color: ${props => props.theme.colors.lightText};
  leading-trim: both;
  text-edge: cap;
  font-family: Lexend Peta;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -4.4px;
  display: flex;
  padding: 3px 0px;
  justify-content: center;
  align-items: center;

`
