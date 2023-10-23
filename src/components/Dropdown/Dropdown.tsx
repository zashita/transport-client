import React from 'react';
import {DropdownContainer, DropdownRow, RowText} from "./styled";
import {DropdownModes} from "../Profile/Profile";

export interface IRow{
    name: string;
    onClick: () => unknown
}
export interface IDropdownProps{
    rows?: Array<IRow>
    mode: DropdownModes;
}
const Dropdown:React.FC<IDropdownProps> = ({rows, mode}) => {
    return (
        <DropdownContainer mode={mode}>
            {rows?.map((row)=>{
                return(
                    <DropdownRow
                        onClick={row.onClick}
                    >
                        <RowText>
                            {row.name}
                        </RowText>
                    </DropdownRow>
                )
            })}
        </DropdownContainer>


    );
};

export default Dropdown;
