import React from "react";
import { useMediaQuery } from "react-responsive";

import FlexContainer from "../../../../components/FlexContainer";
import Card from "./Card";
import ResponsiveSizeConst from "../../../../constants/ResponsiveSizeConst";

const InfoSection = (): JSX.Element => {
    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH + 150
    });
    const isMobileScreen = useMediaQuery({ maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH });

    let cardSizeInfo;

    if (isMobileScreen || isTabletScreen) {
        cardSizeInfo = {
            learnMore: { height: "50%", width: "100%" },
            taste: { height: "30%", width: "100%" },
            developer: { height: "30%", width: "100%" },
            artist: { height: "30%", width: "100%" },
            music: { height: "30%", width: "100%" },
            tag: { height: "30%", width: "100%" },
        }
    } else {
        cardSizeInfo = {
            learnMore: { height: "60%", width: "60%" },
            taste: { height: "60%", width: "18%" },
            developer: { height: "60%", width: "18%" },
            artist: { height: "30%", width: "32%" },
            music: { height: "30%", width: "32%" },
            tag: { height: "30%", width: "32%" },
        }
    }

    return (
        <FlexContainer 
            width="90%"
            height="75%"
        >
                <FlexContainer 
                    height="100%" 
                    width="100%" 
                    justifyContent="space-between"
                    flexWrap="wrap"
                >
                    {/* Learn more card */}
                    <Card height={cardSizeInfo.learnMore.height} width={cardSizeInfo.learnMore.width} />
                    {/* Taste card */}
                    <Card height={cardSizeInfo.taste.height} width={cardSizeInfo.taste.width} />
                    {/* Developer card */}
                    <Card height={cardSizeInfo.developer.height} width={cardSizeInfo.developer.width} />
                    {/* Artist card */}
                    <Card height={cardSizeInfo.artist.height} width={cardSizeInfo.artist.width} />
                    {/* Music card */}
                    <Card height={cardSizeInfo.music.height} width={cardSizeInfo.music.width} />
                    {/* Tag card */}
                    <Card height={cardSizeInfo.tag.height} width={cardSizeInfo.tag.width} />
                </FlexContainer>
        </FlexContainer>
    );
};

export default InfoSection;
