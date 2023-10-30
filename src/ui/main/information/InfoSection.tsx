import React from "react";
import { useMediaQuery } from "react-responsive";

import FlexContainer from "../../../components/FlexContainer";
import ResponsiveSizeConst from "../../../constants/ResponsiveSizeConst";
import MainCard from "./cards/MainCard";
import TasteCard from "./cards/TasteCard";
import DeveloperCard from "./cards/DeveloperCard";
import ArtistCard from "./cards/ArtistCard";
import MusicCard from "./cards/MusicCard";
import TagCard from "./cards/TagCard";

const InfoSection = (): JSX.Element => {
    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH + 300
    });
    const isMobileScreen = useMediaQuery({ maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH });

    let cardSizeInfo;

    if (isMobileScreen) {
        cardSizeInfo = {
            learnMore: { height: "50%", width: "100%" },
            taste: { height: "calc(35vh + 40vw)", width: "48%" },
            developer: { height: "calc(35vh + 40vw)", width: "48%" },
            artist: { height: "20%", width: "100%" },
            music: { height: "20%", width: "100%" },
            tag: { height: "20%", width: "100%" },
        }
    } else if (isTabletScreen) {
        cardSizeInfo = {
            learnMore: { height: "50%", width: "100%" },
            taste: { height: "calc(35vh + 40vw)", width: "48%" },
            developer: { height: "calc(35vh + 40vw)", width: "48%" },
            artist: { height: "60%", width: "30%" },
            music: { height: "60%", width: "30%" },
            tag: { height: "60%", width: "30%" },
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
                {/* Main card */}
                <MainCard height={cardSizeInfo.learnMore.height} width={cardSizeInfo.learnMore.width} />
                {/* Taste card */}
                <TasteCard height={cardSizeInfo.taste.height} width={cardSizeInfo.taste.width} />
                {/* Developer card */}
                <DeveloperCard height={cardSizeInfo.developer.height} width={cardSizeInfo.developer.width} />
                {/* Artist card */}
                <ArtistCard height={cardSizeInfo.artist.height} width={cardSizeInfo.artist.width} />
                {/* Music card */}
                <MusicCard height={cardSizeInfo.music.height} width={cardSizeInfo.music.width} />
                {/* Tag card */}
                <TagCard height={cardSizeInfo.tag.height} width={cardSizeInfo.tag.width} />
            </FlexContainer>
        </FlexContainer>
    );
};

export default InfoSection;
