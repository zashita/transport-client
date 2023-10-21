import React from 'react';
import AdsList from "../components/AdsList/AdsList";
import AdsLayout from "../layouts/AdsLayout";

const Ads:React.FC = () => {
    return (
        <AdsLayout>
            <AdsList/>
        </AdsLayout>

    );
};

export default Ads;
