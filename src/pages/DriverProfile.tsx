import React from 'react';
import ProfileLayout from "../layouts/ProfileLayout";
import DriverCard from "../components/DriverProfile/DriverProfile";
import {Tabs} from "../components/ProfileButtons/styled";
import ProfileButtons from "../components/ProfileButtons/ProfileButtons";

const DriverProfile: React.FC = () => {
    return (
        <>
            <ProfileLayout>
                <DriverCard/>
                <ProfileButtons/>
            </ProfileLayout>
        </>

    );
};

export default DriverProfile;
