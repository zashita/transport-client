import React from 'react';
import {TabButton, Tabs} from "./styled";

const ProfileButtons:React.FC = () => {
    return (
        <Tabs>
            <TabButton>Объявления</TabButton>
            <TabButton>Объявления</TabButton>
            <TabButton>Объявления</TabButton>
        </Tabs>
    );
};

export default ProfileButtons;
