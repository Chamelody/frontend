import React from "react";
import Background from "./Background";
import { palette } from "../../constants/style";
import { useMediaQuery } from "react-responsive";
import FlexContainer from "../../components/FlexContainer";
import Title from "./Title";
import ResponsiveSizeConst from "../../constants/ResponsiveSizeConst";
import PlaylistComponent from "./PlaylistComponent";

const DemoSection = (): JSX.Element => {
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
            Content: { height: "100%", width: "50%" },
            PlaylistContent: { height: "100%", width: "50%" }
        }
    }

    return <FlexContainer
        height="100vh"
        width="100vw"
        justifyContent="space-between"
        flexWrap="wrap"    // Add this line
        {...{
            zIndex: -10,
        }
        }
    >
        <Title height={layout.Content.height} width={layout.Content.width} />
        <Background />
        <PlaylistComponent height={layout.PlaylistContent.height} width={layout.PlaylistContent.width} />
    </FlexContainer >;
};

export default DemoSection;
