import React from 'react';
import {SectionTitle, StyledSection} from "./styled";

export interface ISectionProps {
    children: React.ReactNode;
    title: string;
}

const Section: React.FC<ISectionProps> = ({children, title}) => {
    return (
        <StyledSection>
            <SectionTitle>
                {title}
            </SectionTitle>
            {children}
        </StyledSection>
    );
};

export default Section;
