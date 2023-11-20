import React from "react";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../../../constants/ResponsiveSizeConst";
import musicImage1 from "./backgrounds/music_1.png";
import musicImage2 from "./backgrounds/music_2.png";
import { DivideContainer, DivideItem } from "../../../../components/Divider";
import CardHead from "./common/CardHead";
import FlexContainer from "../../../../components/FlexContainer";
import { ResponsiveText } from "../../../../components/ResponsiveText";

type MusicCardProps = {
    children?: React.ReactNode;
    height: string; // <length>
    width: string;  // <length>
}

const MusicCard = ({
    children = undefined,
    height,
    width
}: MusicCardProps): JSX.Element => {
    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH + 300
    });
    const isMobileScreen = useMediaQuery({ maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH });

    const availableTrackCount: string = "132m";
    
    let background;
    let minHeight: string;
    let flexDirection: 'row' | 'column-reverse';
    let alignItems: 'center' | undefined;
    let widthValue: string;
    
    if (isTabletScreen) {
        background = musicImage2;
        minHeight = "250px";
        flexDirection = 'column-reverse';
        alignItems = undefined;
        widthValue = "100%";
    } else {
        background = musicImage1;
        minHeight = "150px";
        flexDirection = 'row';
        alignItems = 'center';
        widthValue = "40%";
    }

    return (
        <div 
            style={{
                height: height,
                width: width,
                borderRadius: "30px",
                marginBottom: "25px",
                background: "#1ED760",
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                padding: "15px 20px",
                boxSizing: 'border-box',
                minHeight: minHeight,
                overflow: 'hidden'
            }}
        >
            <DivideContainer width="100%" height="100%" direction='column'>
                <DivideItem ratio={60}>
                    <CardHead text="#music" color='white' />
                </DivideItem>
                <DivideItem ratio={40}>
                    <FlexContainer flexDirection={flexDirection} justifyContent='space-between' alignItems={alignItems}>
                        <FlexContainer width={widthValue} flexDirection='column'>
                            <ResponsiveText fontSize={'Tiny'} color="#FEFEFE" fontWeight={600} {...{margin: 0}}>
                                How many tracks are there?
                            </ResponsiveText>
                            <ResponsiveText fontSize={10} color="#FEFEFE" {...{margin: 0}}>
                                플레이리스트에 들어갈 수 있는 트랙들은 얼마나 되나요?
                            </ResponsiveText>
                        </FlexContainer>
                        <FlexContainer>
                            <ResponsiveText fontSize={'Large'} color="#FEFEFE" fontWeight={650} {...{margin: 0}}>
                                +{availableTrackCount}
                            </ResponsiveText>
                        </FlexContainer>
                    </FlexContainer>
                </DivideItem>
            </DivideContainer>

            {children}
        </div>
    );
};

export default MusicCard;
