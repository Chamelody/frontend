import React from "react";
import FlexContainer from "../../components/FlexContainer";
import WordBlock from "../main/components/WordBlock";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../constants/ResponsiveSizeConst";
import AudioPlayer from "./AudioPlayer";
import { audio, images } from "../../constants/style";

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
        {/* <button>Play All in once</button> */}
        <AudioPlayer index={1} src={audio.track1} startTime={86} duration={14} imgUrl={images.track1} />
        <AudioPlayer index={2} src={audio.track2} startTime={188} duration={14} imgUrl={images.track2} />
        <AudioPlayer index={3} src={audio.track3} startTime={50} duration={14} imgUrl={images.track3} />
        <AudioPlayer index={4} src={audio.track4} startTime={76} duration={14} imgUrl={images.track4} />
        <AudioPlayer index={5} src={audio.track5} startTime={52} duration={12} imgUrl={images.track5} />

    </div>;
};

export default PlaylistComponent;
