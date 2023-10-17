import React from 'react';
import {
    CardChips,
    CardContainer,
    CardImage,
    CardText, Chip, ChipText, LocationBlock,
    PriceAndLocation,
    PriceBlock,
    PricePerHour,
    PricePerKm, Spec, SpecName, Specs, SpecsList, SpecValue
} from "./styled";

const AdsGridItem:React.FC = () => {
    return (


        <CardContainer>
            <CardImage>

            </CardImage>
            <CardText>
                <PriceAndLocation>
                    <PriceBlock>
                        <PricePerHour></PricePerHour>
                        <PricePerKm></PricePerKm>
                    </PriceBlock>
                    <LocationBlock>

                    </LocationBlock>
                </PriceAndLocation>
                <Specs>
                    <CardChips>
                        <Chip>
                            <ChipText>
                                Разгрузка
                            </ChipText>
                        </Chip>
                    </CardChips>
                    <SpecsList>
                        <Spec>
                            <SpecName>Кузов:</SpecName>
                            <SpecValue></SpecValue>
                        </Spec>
                        <Spec>
                            <SpecName>Грузоподъемность:</SpecName>
                            <SpecValue></SpecValue>
                        </Spec>
                        <Spec>
                            <SpecName>Вместимость:</SpecName>
                            <SpecValue></SpecValue>
                        </Spec>
                    </SpecsList>
                </Specs>
            </CardText>
        </CardContainer>
    );
};

export default AdsGridItem;
