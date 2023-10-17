import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`
export const StyledFilters = styled.div`
  display: flex;
  height: 604px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  
`
export const StyledSection = styled.div`
display: flex;
width: 245px;
flex-direction: column;
align-items: flex-start;
gap: 8px;
`

export const SectionTitle = styled.h2`
  color: var(--black-text-icons, #222);

  /* Title */
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
  letter-spacing: -0.18px;
`

export const StyledCheckBoxFilter = styled.div`
  display: flex;
  height: 26px;
  align-items: center;
  gap: 4px;`

export const CheckBoxTitle = styled.p`
  color: var(--black-text-icons, #222);

  /* Body 2 */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 430;
  line-height: normal;
  letter-spacing: -0.1px;
`
export const RangeInput = styled.input`
  display: flex;
  max-height: 30px;
  max-width: 45%;
  padding: 10px;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 4px;
  border: 1px solid var(--gray-border, #DCDDE0);
`
 export const RangeContainer = styled.div`
   display: flex;
   align-items: flex-start;
   gap: 8px;
   align-self: stretch;
   max-width: 248px;
 
 `
