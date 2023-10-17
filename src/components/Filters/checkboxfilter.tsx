import React, {useState} from 'react';
import {CheckBoxTitle, StyledCheckBoxFilter} from "./styled";
import CheckInactive from '/filters-svgs/Checkbox.svg'
import CheckActive from '/filters-svgs/CheckboxActive.svg'

export interface ICBFileterProps{
    title: string;
    active: boolean;
    onChange?: ()=>unknown;
}

const CheckBoxFilter:React.FC<ICBFileterProps> = ({title}) => {
    const [active, setActive] = useState(false)
    return (
        <StyledCheckBoxFilter onClick={() =>setActive(active?false: true)}>
            {
                !active?
                    <img src={CheckInactive} alt=""/>:
                    <img src={CheckActive} alt=""/>
            }
        <CheckBoxTitle>
            {title}
        </CheckBoxTitle>
        </StyledCheckBoxFilter>


    );
};

export default CheckBoxFilter;
