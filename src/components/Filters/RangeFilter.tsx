import React from 'react';
import {RangeContainer, RangeInput} from "./styled";

export interface IRangeProps{
    min: number;
    max: number;
}

const RangeFilter: React.FC<IRangeProps> = ({min, max}) => {
    return (
        <RangeContainer>
            <RangeInput placeholder={min.toString()}/>
            <RangeInput placeholder={max.toString()}/>
        </RangeContainer>
    );
};

export default RangeFilter;
