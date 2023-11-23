import React from "react";
import FlexContainer from "../../components/FlexContainer";
import WordBlock from "../main/components/WordBlock";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../constants/ResponsiveSizeConst";
import AudioPlayer from "./AudioPlayer";
import track1 from "../../assets/demo/track01.mp3";
import track2 from "../../assets/demo/track02.mp3";
import track3 from "../../assets/demo/track03.mp3";
import track4 from "../../assets/demo/track04.mp3";
import track5 from "../../assets/demo/track05.mp3";

type PlaylistComponentProps = {
    height: string  // <length>
    width: string   // <length> 
}

const PlaylistComponent = ({ height, width }: PlaylistComponentProps): JSX.Element => {
    const isMobileScreen = useMediaQuery({
        maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH
    });

    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
    });

    const isDesktop = !isMobileScreen && !isTabletScreen;

    const flexContainerStyles = {
        width: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: "50px",
        marginBottom: "8px",
        marginRight: "5px",
        paddingRight: "15px",
    };

    const mp3Url = "../";

    return <div
        style={{
            height: height,
            width: width,
            paddingLeft: isDesktop ? "50px" : "10px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <AudioPlayer src={track1} startTime={86} duration={14} />
        <AudioPlayer src={track2} startTime={188} duration={14} />
        <AudioPlayer src={track3} startTime={50} duration={14} />
        <AudioPlayer src={track4} startTime={76} duration={14} />
        <AudioPlayer src={track5} startTime={52} duration={12} />

    </div>;
};

export default PlaylistComponent;
