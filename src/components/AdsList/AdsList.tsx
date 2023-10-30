import React from 'react';
import AdsListItem, {CardTypes} from "../AdsCard/AdsListItem";
import {ListContainer} from "./styled";
import {IAds} from "../../types/Ads";


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

export interface IAdsListProps{
    ViewMode: CardTypes;
    // setViewMode:  (type: CardTypes) => unknown
}

const AdsList:React.FC<IAdsListProps> = ({ViewMode}) => {
    return (

        <ListContainer type={ViewMode}>
            {AdsArray.map((item) => (
                <AdsListItem
                    adsItem = {item}
                    type = {ViewMode}/>
            ))}
        </ListContainer>
    );
};

export default AdsList;
