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
  background: var(--white-background, #FFF);

`
export const Container = styled.div`
width: 100%;
justify-content: center;
  top: 0;

  display: flex;
  border-bottom: 1px solid var(--gray-border, #DCDDE0);
position: fixed;
  height: 70px;


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
