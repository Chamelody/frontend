import React from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../constants/ResponsiveSizeConst";
import BackgroundContainer from "./BackgroundContainer";
import FlexContainer from "../../components/FlexContainer";
import PlaylistContent from "./PlaylistContent";
import Content from "./Content";

const PlaylistSection = (): JSX.Element => {
    const location = useLocation();

    console.log(location.state.musicList);
    const fromEmoji = location.state.fromEmoji;
    const toEmoji = location.state.toEmoji;

    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
    });
    const isMobileScreen = useMediaQuery({
        maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH
    });

    let layout: {
        Content: { height: string, width: string },
        PlaylistContent: { height: string, width: string }
    };

    if (isTabletScreen) {           // Tablet Screen 
        layout = {
            Content: { height: "45%", width: "100%" },
            PlaylistContent: { height: "55%", width: "100%" }
        }
    } else if (isMobileScreen) {    // Mobile Screen
        layout = {
            Content: { height: "42%", width: "100%" },
            PlaylistContent: { height: "58%", width: "100%" }
        }
    } else {                        // Desktop Screen
        layout = {
            Content: { height: "100%", width: "55%" },
            PlaylistContent: { height: "100%", width: "45%" }
        }
    }


    return (
        <FlexContainer
            height="100vh"
            width="100vw"
            justifyContent="space-between"
            flexWrap="wrap"
        >
            <BackgroundContainer />
            <Content height={layout.Content.height} width={layout.Content.width} fromEmoji={fromEmoji} toEmoji={toEmoji} />
            <PlaylistContent height={layout.PlaylistContent.height} width={layout.PlaylistContent.width} musicList={location.state.musicList} />

        </FlexContainer>

    );
};


export default PlaylistSection;