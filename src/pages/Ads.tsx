import React, {useState} from 'react';
import AdsList from "../components/AdsList/AdsList";
import AdsLayout from "../layouts/AdsLayout";
import {CardTypes} from "../components/AdsCard/AdsListItem";

const Ads:React.FC = () => {
    const [mode, setMode] = useState<CardTypes>(CardTypes.GRID)
    return (
        <AdsLayout
            ViewMode = {mode}
            setViewMode = {setMode}
        >
            <AdsList ViewMode = {mode}/>
        </AdsLayout>

    );
};

export default Ads;
