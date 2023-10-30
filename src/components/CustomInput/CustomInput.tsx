import React, {useState} from 'react';
import {IconBlock, InputBlock, InputContainer, StyledInput, DropdownBlock} from "./styled";
import {ExpandButton} from "../Profile/styled";
import {DropdownModes, ProfileDDRows} from "../Profile/Profile";
import Expand from '/header-svgs/Expandblack.svg';
import Dropdown from "../Dropdown/Dropdown";


export interface IInputProps{
    dropdown: boolean;
    placeholder: string;
}
const CustomInput:React.FC<IInputProps> = ({placeholder, dropdown}) => {
    const [mode, setMode] = useState<DropdownModes>(DropdownModes.MINIMIZED)
    return (

        <InputContainer>
            <InputBlock>
                <StyledInput
                    placeholder={placeholder}
                    maxLength={20}
                />
            </InputBlock>

            <IconBlock>
                {
                    dropdown?
                        <ExpandButton
                            mode={mode}
                            src={Expand}
                            onClick={() =>
                                setMode(
                                    mode === DropdownModes.EXPANDED?
                                        DropdownModes.MINIMIZED
                                        : DropdownModes.EXPANDED
                                )
                            }
                        />
                        : null
                }
            </IconBlock>
        <DropdownBlock>
            {
                mode === DropdownModes.EXPANDED?
                    <Dropdown
                        rows = {ProfileDDRows}
                        mode = {mode}
                    />
                    : null
            }
        </DropdownBlock>


        </InputContainer>

    );
};

export default CustomInput;
