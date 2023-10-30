import styled from "styled-components";

export const InputBlock = styled.div`
  display: flex;
  height: 60px;
  width: 160px;
  overflow: hidden;
  border: 0;
  //flex: 1 0 0;
  
`
export const StyledInput = styled.input`
  border: 0;
  display: grid;
  height: 60px;
  padding: 0px 16px;
  color: var(--gray-text, #8E8E93);
  /* Body */
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 430;
  line-height: 20px; /* 133.333% */
  letter-spacing: -0.18px;
  outline: 0;
  grid-template-columns: 160px 35px;
`
export const InputContainer = styled.div`
  border: 0;
  background: white;
  width: 195px;
  height: 60px;
  overflow: hidden;
  justify-content: left;
  &:last-child{
    border-radius: 0 28px 28px 0;
  }
  &:first-child{
    border-radius: 28px 0 0 28px;
  }
  display: flex;
  align-items: center;
`
export const IconBlock = styled.div`
    width: 16px;
    height: 16px;
`
export const DropdownBlock = styled.div`
   //height: 60px;
    position: absolute;
    padding-top: 60px;
  
    
`
