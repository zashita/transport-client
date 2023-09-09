import React from 'react';
import {ImageBlock, ProfileBlock} from "./styled";
import Expand from '/header-svgs/Expand.svg';
import ProfileSVG from '/header-svgs/Profile.svg';

const Profile:React.FC= () => {
    return (
        <ProfileBlock>
            <ImageBlock>
                <img src={ProfileSVG} alt=""/>
            </ImageBlock>
            <img src={Expand} alt=""/>

        </ProfileBlock>


    );
};

export default Profile;
