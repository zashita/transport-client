import React, {useState} from 'react';
import {ExpandButton, ImageBlock, ProfileBlock} from "./styled";
import Expand from '/header-svgs/Expand.svg';
import ProfileSVG from '/header-svgs/Profile.svg';
import Dropdown, {IRow} from "../Dropdown/Dropdown";
export enum DropdownModes {
    EXPANDED = 'EXPANDED',
    MINIMIZED = `MINIMIZED`
}

export const ProfileDDRows: Array<IRow> = [
    {
        name: 'Профиль',
        onClick: () => null
    },
    {
        name: 'Избранное',
        onClick: () => null
    },
    {
        name: 'Настройки',
        onClick: () => null
    },
    {
        name: 'Выход',
        onClick: () => null
    },
]
const Profile:React.FC= () => {
    const [dropdownMode, setDropdownMode]
        = useState<DropdownModes>(DropdownModes.MINIMIZED)
    return (
        <div style={{position: "relative"}}>
            <ProfileBlock>
                <ImageBlock>
                    <img src={ProfileSVG} alt=""/>
                </ImageBlock>
                <ExpandButton
                    src={Expand}
                    mode={dropdownMode}
                    onClick={
                        dropdownMode === DropdownModes.MINIMIZED
                            ?
                            () => setDropdownMode(DropdownModes.EXPANDED)
                            :
                            () => setDropdownMode(DropdownModes.MINIMIZED)}
                />

            </ProfileBlock>
            <Dropdown
                rows = {ProfileDDRows}
                mode = {dropdownMode}
            />

        </div>



    );
};

export default Profile;
