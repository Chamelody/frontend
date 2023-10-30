import React from "react";
import artistImage1 from "./backgrounds/artist_1.png";
import artistImage2 from "./backgrounds/artist_2.png";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../../../constants/ResponsiveSizeConst";
import { DivideContainer, DivideItem } from "../../../../components/Divider";
import CardHead from "./common/CardHead";
import { ResponsiveText } from "../../../../components/ResponsiveText";
import FlexContainer from "../../../../components/FlexContainer";

type ArtistCardProps = {
    children?: React.ReactNode;
    height: string; // <length>
    width: string;  // <length>
}

const ArtistCard = ({
    children = undefined,
    height,
    width
}: ArtistCardProps): JSX.Element => {
    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH + 300
    });
    const isMobileScreen = useMediaQuery({ maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH });

    const artistCount: string = "76k";
    
    let background;
    let minHeight: string;
    let flexDirection: 'row' | 'column-reverse';
    let alignItems: 'center' | undefined;
    let widthValue: string;

    if (isTabletScreen) {
        background = artistImage2;
        minHeight = "250px";
        flexDirection = 'column-reverse';
        alignItems = undefined;
        widthValue = "100%";
    } else {
        background = artistImage1;
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
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                padding: "15px 20px",
                boxSizing: 'border-box',
                minHeight: minHeight,
            }}
        >
            
            <DivideContainer width="100%" height="100%" direction='column'>
                <DivideItem ratio={60}>
                    <CardHead text="#artist" color='white' />
                </DivideItem>
                <DivideItem ratio={40}>
                    <FlexContainer flexDirection={flexDirection} justifyContent='space-between' alignItems={alignItems}>
                        <FlexContainer width={widthValue} flexDirection='column'>
                            <ResponsiveText fontSize={'Tiny'} color="#FEFEFE" fontWeight={600} {...{margin: 0}}>
                                How many artists are there?
                            </ResponsiveText>
                            <ResponsiveText fontSize={10} color="#FEFEFE" {...{margin: 0}}>
                                몇 명의 아티스트의 곡이 데이터베이스에 있을까요?
                            </ResponsiveText>
                        </FlexContainer>
                        <FlexContainer>
                            <ResponsiveText fontSize={'Large'} color="#FEFEFE" fontWeight={600} {...{margin: 0}}>
                                +{artistCount}
                            </ResponsiveText>
                        </FlexContainer>
                    </FlexContainer>
                </DivideItem>
            </DivideContainer>

            {children}
        </div>
    );
};

export default ArtistCard;
