import styled from "styled-components";

export const PageTitle = styled.h1`
  color: var(--black-text-icons, #222);
  font-feature-settings: 'case' on;

  /* Заголовок блока */
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.77px;

`
export const TitleBlock = styled.div`
  //margin-top: 130px;
  display: flex;
  align-items: flex-start;
  gap: 4px;`


export const TitleNumber = styled.h1`
  color: var(--gray-text, #8E8E93);
  font-feature-settings: 'case' on;

  /* Заголовок блока */
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.77px;
`
export const Wrapper = styled.div`
    margin: 130px auto;
  width: 1340px;
`

export const ContentBlock = styled.div`
display: flex;
  row-gap: 92px;
  column-gap: 60px;
  //justify-content: space-between;
`
export const SortBlock = styled.div`
  display: flex;
  width: 1340px;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid var(--gray-border, #DCDDE0);
  margin-bottom: 30px`


export const SortTypeBlock = styled.div`
  display: flex;
  height: 36px;
  padding: 10px 0px;
  align-items: center;
  gap: 8px;`

export const SortTypeText = styled.p`
  color: var(--black-text-icons, #222);

  /* Body */
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 430;
  line-height: normal;
  letter-spacing: -0.18px;`

export const ViewModeSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
