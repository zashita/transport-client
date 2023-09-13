import React from 'react';
import {FiltersContainer, StyledFilters} from "./styled";
import Section from "./SectionContainer";
import CheckBoxFilter from "./checkboxfilter";
import RangeFilter from "./RangeFilter";

const Filters:React.FC = () => {
    return (
        <FiltersContainer>
            <StyledFilters>
                <Section title = 'Дополнительные услуги'>
                    <CheckBoxFilter active ={false} title = 'Погрузка-разгрузка'/>
                    <CheckBoxFilter active ={false} title = 'Вывоз мусора'/>
                </Section>

                <Section title = 'Специальное оборудование'>
                    <CheckBoxFilter active ={false} title = 'Гидроборт'/>
                    <CheckBoxFilter active = {true} title = 'Манипулятор'/>
                </Section>

                <Section title = 'Цента за час, BYN'>
                    <RangeFilter min = {5} max = {20}/>
                </Section>
                <Section title = 'Цента за час, BYN'>
                    <RangeFilter min = {5} max = {20}/>
                </Section>
                <Section title = 'Тип кузова'>
                    <CheckBoxFilter active ={false} title = 'Рефрижиратор'/>
                    <CheckBoxFilter active ={false} title = 'Фургон'/>
                    <CheckBoxFilter active ={false} title = 'Платформа'/>
                    <CheckBoxFilter active ={false} title = 'Самосвал'/>
                    <CheckBoxFilter active ={false} title = 'Цистерна'/>
                </Section>
                <Section title = 'Грузоподъемность, т'>
                    <CheckBoxFilter active ={false} title = 'Менее 1.5'/>
                    <CheckBoxFilter active ={false} title = 'От 1.5 до 3'/>
                    <CheckBoxFilter active ={false} title = 'От 3 до 5'/>
                    <CheckBoxFilter active ={false} title = 'Более 5'/>
                </Section>
                <Section title = 'Объем кузова, м³'>
                    <CheckBoxFilter active ={false} title = 'Менее 5'/>
                    <CheckBoxFilter active ={false} title = 'От 5 до 10'/>
                    <CheckBoxFilter active ={false} title = 'От 10 до 20'/>
                    <CheckBoxFilter active ={false} title = 'Более 5'/>
                </Section>

                <Section title = 'Длина кузова, м'>
                    <CheckBoxFilter active ={false} title = 'Менее 3'/>
                    <CheckBoxFilter active ={false} title = 'От 3 до 5'/>
                    <CheckBoxFilter active ={false} title = 'От 5 до 10'/>
                    <CheckBoxFilter active ={false} title = 'Более 10'/>
                </Section>

                <Section title = 'Объем кузова, м³'>
                    <CheckBoxFilter active ={false} title = 'Менее 5'/>
                    <CheckBoxFilter active ={false} title = 'От 5 до 10'/>
                    <CheckBoxFilter active ={false} title = 'От 10 до 20'/>
                    <CheckBoxFilter active ={false} title = 'Более 5'/>
                </Section>

            </StyledFilters>

        </FiltersContainer>


    );
};

export default Filters;
