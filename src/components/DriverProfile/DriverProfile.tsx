import React from 'react';
import {
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

const DriverProfile = () => {
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
            <MessageButton>
                Написать сообщение
            </MessageButton>
        </ProfileContainer>
    );
};

export default DriverProfile;
