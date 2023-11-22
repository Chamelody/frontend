import React from "react";
import { DivideContainer, DivideItem } from "../../components/Divider";
import { palette } from "../../constants/style";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../constants/ResponsiveSizeConst";

type TrackProps = {
    index: number;
    imageUrl: string;
    name: string;
    artists: string;
};

const Track = ({ index, imageUrl, name, artists }: TrackProps): JSX.Element => {
    const isMobileScreen = useMediaQuery({
        maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH
    });

    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
    });


    const TrackContainerStyle: React.CSSProperties = {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        margin: "8px",
        padding: "4px",
        borderRadius: "0.6vw",
    }

    const IndexStyle: React.CSSProperties = {
        color: palette.lightblack,
        height: "100%",
        fontSize: "10px",
        display: "flex",
        fontWeight: "800",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "4px"
    }

    const AlbumCoverStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 3,
    }

    const NameStyle: React.CSSProperties = {
        color: palette.lightblack,
        fontWeight: "800",
        height: "100%",
        fontSize: "14px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        letterSpacing: "-0.5px"
    }

    const ArtistsStyle: React.CSSProperties = {
        color: palette.darkgray,
        height: "100%",
        fontSize: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    }

    return (
        <div style={TrackContainerStyle}>
            <DivideContainer direction="row" width="100%" height="100%">
                <DivideItem ratio={1}><div style={IndexStyle}>{index + 1}</div></DivideItem>
                <div style={AlbumCoverStyle}>
                    <img src={imageUrl} alt="album cover" style={{ width: isTabletScreen ? "50%" : "70%" }} />
                </div>
                <DivideItem ratio={12}>
                    <DivideContainer direction="column" width="100%" height="100%">
                        <DivideItem ratio={1}><div style={NameStyle}>{name}</div></DivideItem>
                        <DivideItem ratio={1}><div style={ArtistsStyle}>{artists}</div></DivideItem>
                    </DivideContainer>
                </DivideItem>
            </DivideContainer >
        </div >
    );
};

export default Track;
