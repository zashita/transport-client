import React from 'react';
import {
    ButtonContainer,
    CommentText,
    Divider,
    Ellipse, MessageButton,
    Name,
    NameAndStats,
    ProfileContainer,
    ProfileImage,
    ProfileInfo,
    ProfileText, Rating, RatingBlock, RatingText,
    Stats,
    StatText
} from "./styled";
import RatingSVG from '../../../public/driverprofileimages/ICON_Rating.svg'
import Driver from '../../../public/driverprofileimages/Profile pic.png'
import CommentSVG from '../../../public/driverprofileimages/ICON_Comment.svg'

export const driver = {

}

const DriverInfo:React.FC = () => {
    return (
        <ProfileContainer>
            <ProfileImage>
                <img src={Driver}/>
            </ProfileImage>
            <ProfileInfo>
                <ProfileText>
                    <NameAndStats>
                        <Name>Егор Жуковский</Name>
                        <Stats>
                            <StatText>
                                Водитель
                            </StatText>
                            <Ellipse/>
                            <StatText>
                                Новополоцк
                            </StatText>
                            <Ellipse/>
                            <StatText>
                                12 лет стажа
                            </StatText>
                            <Ellipse/>
                        </Stats>
                    </NameAndStats>
                    <RatingBlock>
                        <Rating>
                            <img src={RatingSVG}/>
                            <RatingText>4,8</RatingText>
                        </Rating>
                        <Divider/>
                        <Rating>
                            <img src={CommentSVG}/>
                            <CommentText>50</CommentText>
                        </Rating>
                    </RatingBlock>
                </ProfileText>
            </ProfileInfo>
            <ButtonContainer>
                <MessageButton>
                    Написать сообщение
                </MessageButton>
            </ButtonContainer>
        </ProfileContainer>
    );
};

export default DriverInfo;
