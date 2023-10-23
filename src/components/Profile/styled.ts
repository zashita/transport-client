import styled from "styled-components";
import {DropdownModes} from "./Profile";

export interface IExpandButtonProps{
    mode: DropdownModes
}

export const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
    `
export const ImageBlock = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--color-tbd-accent-background, #E7F0FF);
  gap: 10px;`

export const ExpandButton = styled.img<IExpandButtonProps>`
    transform: ${props => props.mode === DropdownModes.EXPANDED? 'rotate(180deg)': null};
    transition-duration: 200ms;
`
