import styled from "styled-components";
import  {IDropdownProps} from "./Dropdown";
import {DropdownModes} from "../Profile/Profile";

export const DropdownContainer = styled.div<IDropdownProps>`
  position: absolute;
  display: ${props => props.mode === DropdownModes.MINIMIZED? 'none': 'flex'};
  width: 250px;
  padding: 8px 0px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  background: var(--Background---white, #FFF);

  /* Shadow objects */
  box-shadow: 0px 0px 6px 1px rgba(24, 39, 75, 0.05);
  overflow: hidden;
  

`

export const DropdownRow = styled.div`
  display: flex;
  height: 36px;
  padding: 10px 16px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  &:hover{
    background: var(--Background---gray, #F2F2F3);
  }
  background: var(--Background---white, #FFF);
`

export const RowText = styled.p`
  color: var(--black-text-icons, #1A142D);

  /* Body 2 */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 430;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.1px;`
