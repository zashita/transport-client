import React, {useState} from 'react';
import {IAds} from "../types/Ads";
import AdsListItem, {CardTypes} from "../AdsCard/AdsListItem";
import {ListContainer} from "./styled";


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
    {photo: '../../public/Фото.png', capacity: 12, cargoType: 'рефреджиратор',
        maxWeight: 12, priceHour: 12, priceKm: 23,
        rating: 4.5, zone: 'Минск, Минская область'},
]
const AdsList:React.FC = () => {
    const [test, setTest] = useState(true)
    return (
        <div style={{flexDirection: "row"}}>
        <button
            onClick={() =>setTest(test === false?true:false)}
        style={{maxHeight: `30px`}}>
            ПОМЕНЯТЬ</button>
        <ListContainer type={test?CardTypes.LIST: CardTypes.GRID}>
            {AdsArray.map((item) => (
                <AdsListItem adsItem = {item} type = {test?CardTypes.LIST: CardTypes.GRID}/>
            ))}
        </ListContainer>
        </div>
    );
};

export default AdsList;
