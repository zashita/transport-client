import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  width: 1340px;
  padding-bottom: 0px;
  justify-content: space-between;
  align-items: flex-start;
`
export const ProfileInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`
export const ProfileImage = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;

`
export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;`

export const NameAndStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`
export const Name = styled.p`
  color: var(--black-text-icons, #222);

  /* H4 */
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
  letter-spacing: -0.47px;
`

export const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const StatText = styled.div`
  color: var(--gray-text, #8E8E93);

  /* Body 2 */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 430;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.1px;
`
export const Ellipse = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 9px;
  background: var(--gray-text, #8E8E93);
`

export const RatingBlock = styled.div`
  display: flex;
  height: 24px;
  padding: 6px 8px;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: var(--Background---gray, #F2F2F3); 
`
export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;`

export const RatingText = styled.p`
  color: var(--black-text-icons, #222);

  /* Body 2 */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 430;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.1px;`

export const Divider = styled.div`
  width: 1px;
  height: 16px;
  background: #DEDEDF;`

export const MessageButton = styled.button`
  display: flex;
  height: 40px;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(--colot-accent-100, #3F7BD7);`

export const CommentText = styled.p`
  color: var(--gray-text, #8E8E93);

  /* Body 2 */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 430;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.1px;`
