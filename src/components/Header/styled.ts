import styled from "styled-components";

export const StyledHeader = styled.div`
  top: 0;
  display: flex;
  width: 83%;
  height: 70px;
  padding: 15px 130px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  position: fixed;
  border-bottom: 1px solid var(--gray-border, #DCDDE0);
  background: var(--white-background, #FFF);
    `

export const LogoText = styled.h1`
  color: var(--black-text-icons, #222);
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
