import React from 'react';
import {IAds} from "../types/Ads";
import AdsListItem from "./AdsCard/AdsListItem";
export const AdsArray: IAds[] = [
    {photo: '../../public/Фото.png', capacity: 12, cargoType: 'рефреджиратор',
        maxWeight: 12, priceHour: 12, priceKm: 23,
        rating: 4.5, zone: 'Минск, Минская область'},
    {photo: '../../public/Фото.png', capacity: 12, cargoType: 'рефреджиратор',
        maxWeight: 12, priceHour: 12, priceKm: 23,
        rating: 4.5, zone: 'Минск, Минская область'},
    {photo: '../../public/Фото.png', capacity: 12, cargoType: 'рефреджиратор',
        maxWeight: 12, priceHour: 12, priceKm: 23,
        rating: 4.5, zone: 'Минск, Минская область'},
]
const AdsList:React.FC = () => {
    return (
        <div>
            {AdsArray.map((item) => (
                <AdsListItem adsItem = {item}/>
            ))}
        </div>
    );
};

export default AdsList;
