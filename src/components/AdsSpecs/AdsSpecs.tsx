import React from 'react';
import {
    Chip,
    ChipContainer,
    PriceAndLocation,
    PriceHour,
    PriceKm,
    Prices, SpecName,
    Specs, SpecValue,
    Zone,
    ZoneText
} from "../AdsCard/styled";
import Driver from '../../../public/driverprofileimages/Profile pic.png'
import Location from "/public/ads-svgs/Локация.svg";
import {
    BigImage,
    BottomRow,
    ImageGrid, Info,
    Line,
    PriceChip, ProfilePicture,
    ProfilePreview,
    SmallImage, Stat, Stats, StatTitle, StatValue,
    Text,
    Title,
    TopRow
} from "./styled";
import {MessageButton} from "../DriverInfo/styled";
import {Link} from "react-router-dom";
import {Routes} from "../../routes/routes";

const Item = {photo: '../../public/Фото.png', capacity: 12, cargoType: 'рефреджиратор',
    maxWeight: 12, priceHour: 12, priceKm: 23,
    rating: 4.5, zone: 'Минск, Минская область'}

const AdsSpecs:React.FC = () => {
    return (
        <>
            <TopRow>
                <PriceChip>
                    <PriceAndLocation>
                        <Prices>
                            <PriceHour>
                                {Item.priceHour} BYN/час
                            </PriceHour>
                            <PriceKm className="price-km-text">
                                {Item.priceKm} BYN/км
                            </PriceKm>
                        </Prices>

                        <Zone>
                            <img src={Location} alt=""/>
                            <ZoneText>
                                {Item.zone}
                            </ZoneText>
                        </Zone>
                    </PriceAndLocation>
                    <ChipContainer>
                        <Chip>
                            Загрузка-разгрузка
                        </Chip>
                    </ChipContainer>
                </PriceChip>
                <MessageButton

                >
                    Написать сообщение
                </MessageButton>
            </TopRow>
            <BottomRow>
                <ImageGrid>
                    <BigImage src = {Item.photo}/>
                    <SmallImage src={Item.photo}/>
                    <SmallImage src={Item.photo}/>
                    <SmallImage src={Item.photo}/>
                    <SmallImage src={Item.photo}/>
                    <SmallImage src={Item.photo}/>
                </ImageGrid>
                <Text>
                    <Title>
                        Характеристики грузовика
                    </Title>
                    <Specs>
                        <Line>
                            <SpecName>Тип кузова:</SpecName>
                            <SpecValue>{Item.cargoType}</SpecValue>
                        </Line>
                        <Line>
                            <SpecName>Грузоподъёмность:</SpecName>
                            <SpecValue>{Item.maxWeight} т</SpecValue>
                        </Line>
                        <Line>
                            <SpecName>Вместимость кузова:</SpecName>
                            <SpecValue>{Item.capacity} м³</SpecValue>
                        </Line>
                        <Line>
                            <SpecName>Гидроборт</SpecName>
                            <SpecValue>Нет</SpecValue>
                        </Line>
                        <Line>
                            <SpecName>Манипулятор</SpecName>
                            <SpecValue>Нет</SpecValue>
                        </Line>
                    </Specs>
                    <Title>
                        Описание
                    </Title>
                    <SpecValue>
                        Качественные услуги по грузоперевозкам! 12 лет опыта вождения, езжу сам. Работаю по всей Беларуси без выходных.
                        Присутствуют дополнительные услуги, такие как вывоз мусора и помощь в погрузке-разгрузке. Цены обговариваются. Минимальное время работы — 2 часа.
                    </SpecValue>
                    <Link
                        to = {Routes.DRIVERS}
                        style = {{textDecoration: `none`}}
                    >
                        <ProfilePreview>
                            <Info>
                                <ProfilePicture src={Driver}/>
                                <SpecValue>Егор Жуковский</SpecValue>
                            </Info>
                            <Stats>
                                <Stat>
                                    <StatValue>
                                        7 мес.
                                    </StatValue>
                                    <StatTitle>
                                        На сайте
                                    </StatTitle>
                                </Stat>
                                <Stat>
                                    <StatValue>
                                        12 лет
                                    </StatValue>
                                    <StatTitle>
                                        Стаж
                                    </StatTitle>
                                </Stat>
                            </Stats>
                        </ProfilePreview>
                    </Link>


                </Text>
            </BottomRow>


        </>

    );
};

export default AdsSpecs;
