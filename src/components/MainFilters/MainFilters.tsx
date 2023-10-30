import React from 'react';
import {Container, Subtitle, TitleText, InputRow} from "./styled";
import CustomInput from "../CustomInput/CustomInput";
import {Wrapper} from "../../layouts/styled";

const MainFilters:React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <TitleText>
                    Площадка для организации грузоперевозок
                </TitleText>
                <Subtitle>
                    Введите параметры для поиска транспорта
                </Subtitle>
                <InputRow>
                    <CustomInput dropdown = {false} placeholder = {`Откуда`}/>
                    <CustomInput dropdown = {false}  placeholder = {`Куда`}/>
                    <CustomInput dropdown = {true}  placeholder = {`Тип кузова`}/>
                    <CustomInput dropdown = {true}  placeholder = {`Масса груза, т`}/>
                    <CustomInput dropdown = {true}  placeholder = {`Объем, м³`}/>
                    <CustomInput dropdown = {true} placeholder = {`Длина кузова, м`}/>
                </InputRow>
            </Wrapper>
        </Container>
    );
};

export default MainFilters;
