import React from 'react';
import {IAds} from "../../types/Ads";
import Location from "/ads-svgs/Локация.svg"
import Like from '/ads-svgs/Избранное.svg'
import {
    ButtonGroup,
    CardContainer,
    SpecName,
    Specs,
    SpecLine,
    SpecValue,
    Chip,
    ChipContainer,
    Comments, CommentsText,
    ContactButton,
    Divider,
    Handling,
    CardBody,
    CardText,
    LikeButton,
    Image,
    PriceHour,
    PriceKm,
    Prices,
    PriceAndLocation,
    Rating,
    FeedbackBlock,
    RatingText,
    Zone,
    ZoneText
} from "./styled";
import {router, Routes} from "../../routes/routes";

export enum CardTypes {
    LIST = 'LIST',
    GRID = 'GRID'
}
export interface IAdsItemProps{
    adsItem: IAds
    type: CardTypes
}

const AdsListItem:React.FC<IAdsItemProps> = ({adsItem, type}) => {
    return (
        <CardContainer type = {type}>
            <CardBody type={type} onClick={() => router.navigate(Routes.ADSINFO)}>
                <Image type={type}>
                    {
                        type === CardTypes.GRID?
                            <FeedbackBlock>
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


                            </FeedbackBlock>:
                            null
                    }
                </Image>
                <CardText type={type}>
                    <PriceAndLocation>
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
                    </PriceAndLocation>
                    <Specs>
                        <ChipContainer>
                            <Chip>
                                    Загрузка-разгрузка
                            </Chip>
                        </ChipContainer>
                        <SpecLine>
                            <SpecName>Тип кузова:</SpecName>
                            <SpecValue>{adsItem.cargoType}</SpecValue>
                        </SpecLine>
                        <SpecLine>
                            <SpecName>Грузоподъёмность:</SpecName>
                            <SpecValue>{adsItem.maxWeight} т</SpecValue>
                        </SpecLine>
                        <SpecLine>
                            <SpecName>Вместимость кузова:</SpecName>
                            <SpecValue>{adsItem.capacity} м³</SpecValue>
                        </SpecLine>

                    </Specs>

                </CardText>
            </CardBody>
            <>
                {type === CardTypes.LIST?<Handling>
                    <ButtonGroup>
                        <ContactButton>
                            Связаться
                        </ContactButton>
                        <LikeButton>
                            <img src={Like} alt=""/>
                        </LikeButton>
                    </ButtonGroup>

                    <FeedbackBlock>
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


                    </FeedbackBlock>
                </Handling>: null}

            </>

        </CardContainer>
    );
};

export default AdsListItem;
