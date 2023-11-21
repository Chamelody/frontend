import React from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../constants/ResponsiveSizeConst";
import BackgroundContainer from "./BackgroundContainer";
import FlexContainer from "../../components/FlexContainer";
import PlaylistContent from "./PlaylistContent";
import Title from "./Title";

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
        Title: { height: string, width: string },
        PlaylistContent: { height: string, width: string }
    };

    if (isTabletScreen) {           // Tablet Screen 
        layout = {
            Title: { height: "45%", width: "100%" },
            PlaylistContent: { height: "55%", width: "100%" }
        }
    } else if (isMobileScreen) {    // Mobile Screen
        layout = {
            Title: { height: "45%", width: "100%" },
            PlaylistContent: { height: "55%", width: "100%" }
        }
    } else {                        // Desktop Screen
        layout = {
            Title: { height: "100%", width: "55%" },
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
            <Title height={layout.Title.height} width={layout.Title.width} />
            <PlaylistContent height={layout.PlaylistContent.height} width={layout.PlaylistContent.width} musicList={location.state.musicList} />

        </FlexContainer>

    );
};


export default PlaylistSection;