import React from "react";
import mainImageMobile from "./backgrounds/main_mobile.png";
import mainImageDesktop from "./backgrounds/main_desktop.png";
import { useMediaQuery } from "react-responsive";
import WordBlock from "../../compontents/WordBlock";
import ResponsiveSizeConst from "../../../../constants/ResponsiveSizeConst";
import FlexContainer from "../../../../components/FlexContainer";
import chamelody_3d from "../../../../assets/chamelody_3d.svg";
import firework from "../../../../assets/firework.svg";
import { ResponsiveText } from "../../../../components/ResponsiveText";
import Button from "../../compontents/Button";
import btn_img from '../../../../assets/call_made.png'

type MainCardProps = {
    children?: React.ReactNode;
    height: string; // <length>
    width: string;  // <length>
}

const MainCard = ({
    children = undefined,
    height,
    width
}: MainCardProps): JSX.Element => {
    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH + 300
    });
    const isMobileScreen = useMediaQuery({ maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH });

    let background;
    let fireworkImageSize;
    let rootFlexContainerDirection: 'row' | 'column';
    let buttonFlexContainerDirection: 'row' | 'column';

    if (isMobileScreen) {
        background = mainImageMobile;
        fireworkImageSize = "70vw";
        rootFlexContainerDirection = 'column';
        buttonFlexContainerDirection = 'row';
    } else if (isTabletScreen) {
        background = mainImageDesktop;
        fireworkImageSize = "90vw";
        rootFlexContainerDirection = 'row';
        buttonFlexContainerDirection = 'column';
    } else {
        background = mainImageDesktop;
        fireworkImageSize = "100vw";
        rootFlexContainerDirection = 'row';
        buttonFlexContainerDirection = 'column';
    }

    return (
        <FlexContainer
            flexDirection={rootFlexContainerDirection}
            justifyContent='center'
            alignItems='center'
            {...{
                height: height,
                width: width,
                borderRadius: "30px",
                marginBottom: "25px",
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: "300px",
            }}
        >
            <FlexContainer flexDirection='column' justifyContent="flex-start" {...{ marginRight: "5%" }}>
                <FlexContainer flexDirection='row' alignItems='center'
                    {...{
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                        borderRadius: "50px",
                        marginBottom: "10px"
                    }}>
                    <WordBlock content={"Change your"} mode="default" />
                    <WordBlock content={"mood"} mode="lined" />
                </FlexContainer>
                <FlexContainer flexDirection='row' alignItems='center'
                    {...{
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                        borderRadius: "50px",
                        marginBottom: "10px"
                    }}>
                    <WordBlock content={"with the - "} mode="default" />
                    <WordBlock content={chamelody_3d} mode="image" />
                </FlexContainer>
                <FlexContainer flexDirection='row' alignItems='center'
                    {...{
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                        borderRadius: "50px",
                        marginBottom: "10px"
                    }}>
                    <WordBlock content={"# Chamelody"} mode="filled" color="#2EC364" />
                    <WordBlock content={"playlist"} mode="default" />
                </FlexContainer>
                <ResponsiveText fontSize={10} color='#FEFEFE' {...{ marginBottom: 0 }}>
                    오늘 하루의 기분과 고민거리를 날려버려요.
                </ResponsiveText>
                <ResponsiveText fontSize={10} color='#FEFEFE' {...{ marginTop: 0 }}>
                    플레이리스트를 들으면 어느새 원하는 감정에 도달할거에요.
                </ResponsiveText>
            </FlexContainer>
            <FlexContainer flexDirection={buttonFlexContainerDirection} alignItems='center'>
                <img src={firework} width={fireworkImageSize} />
                <Button content="Try it" img_file={btn_img} size={20} to="/home" />
            </FlexContainer>
        </FlexContainer>
    );
};

export default MainCard;
