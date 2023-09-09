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
                    <CheckBoxFilter active ={true} title = 'Манипулятор'/>
                </Section>

                <Section title = 'Цента за час, BYN'>
                    <RangeFilter min = {5} max = {20}/>
                </Section>
                <Section title = 'Цента за час, BYN'>
                    <RangeFilter min = {5} max = {20}/>
                </Section>

            </StyledFilters>

        </FiltersContainer>


    );
};

export default Filters;
