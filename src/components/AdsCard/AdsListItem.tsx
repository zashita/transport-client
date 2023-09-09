import React from 'react';
import {IAds} from "../../types/Ads";
import Location from "/ads-svgs/Локация.svg"
import Like from '/ads-svgs/Избранное.svg'
import {
    ButtonGroup,
    CardContainer,
    CharName,
    Chars,
    CharsLine,
    CharValue,
    Chip,
    ChipContainer,
    Comments, CommentsText,
    ContactButton,
    Divider,
    Handling,
    ImageAndInfo,
    Info,
    LikeButton,
    Photo,
    PriceHour,
    PriceKm,
    Prices,
    PricesAndZone,
    Rating,
    RatingComments,
    RatingText,
    Zone,
    ZoneText
} from "./styled";


export interface IAdsItemProps{
    adsItem: IAds
}

const AdsListItem:React.FC<IAdsItemProps> = ({adsItem}) => {
    return (
        <CardContainer>
            <ImageAndInfo>
                <Photo>
                    <img src="/Фото.png" alt="fd"/>
                </Photo>
                <Info>
                    <PricesAndZone>
                        <Prices>
                            <PriceHour>
                                {adsItem.priceHour} BYN/час
                            </PriceHour>
                            <PriceKm className="price-km-text">
                                {adsItem.priceKm} BYN/км
                            </PriceKm>
                        </Prices>

                        <Zone>
                            <img src={Location} alt=""/>
                            <ZoneText>
                                {adsItem.zone}
                            </ZoneText>
                        </Zone>
                    </PricesAndZone>
                    <Chars>
                        <ChipContainer>
                            <Chip>
                                    Загрузка-разгрузка
                            </Chip>
                        </ChipContainer>
                        <CharsLine>
                            <CharName>Тип кузова:</CharName>
                            <CharValue>{adsItem.cargoType}</CharValue>
                        </CharsLine>
                        <CharsLine>
                            <CharName>Грузоподъёмность:</CharName>
                            <CharValue>{adsItem.maxWeight} т</CharValue>
                        </CharsLine>
                        <CharsLine>
                            <CharName>Вместимость кузова:</CharName>
                            <CharValue>{adsItem.capacity} м³</CharValue>
                        </CharsLine>

                    </Chars>

                </Info>
            </ImageAndInfo>
            <Handling>
                <ButtonGroup>
                    <ContactButton>
                        Связаться
                    </ContactButton>
                    <LikeButton>
                        <img src={Like} alt=""/>
                    </LikeButton>
                </ButtonGroup>

                <RatingComments>
                    <Rating>
                        <img src="/ads-svgs/Rating.svg" alt=""/>
                        <RatingText>
                            {adsItem.rating}
                        </RatingText>
                    </Rating>
                    <Divider/>

                    <Comments>
                        <img src="/ads-svgs/Отзыв.svg" alt=""/>
                        <CommentsText>
                            45
                        </CommentsText>
                    </Comments>


                </RatingComments>
            </Handling>

        </CardContainer>
    );
};

export default AdsListItem;
