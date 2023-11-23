import React, { useState } from "react";
import { palette, icons } from "../../constants/style";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../constants/ResponsiveSizeConst";
import FlexContainer from "../../components/FlexContainer";
import { ResponsiveText } from "../../components/ResponsiveText";

const Option = (): JSX.Element => {
    const isMobileScreen = useMediaQuery({
        maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH,
    });

    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH,
    });

    const isDesktop = !isMobileScreen && !isTabletScreen;

    const [isThumbsUpHovered, setIsThumbsUpHovered] = useState(false);
    const [isSpotifyHovered, setIsSpotifyHovered] = useState(false);

    const ThumbsUpStyle: React.CSSProperties = {
        width: isDesktop ? "3vw" : "3vh",
        height: isDesktop ? "3vw" : "3vh",
        backgroundColor: palette.lightblack,
        padding: "10px",
        borderRadius: "50%", // Use 50% for a circular shape
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "3vw",
        marginRight: "1vw",
        cursor: "pointer",
        transition: "transform 0.3s ease", // Add transition for smooth transform change
        transform: isThumbsUpHovered ? "rotate(15deg)" : "rotate(0deg)", // Initial transform set to 0, will be changed on hover
    };

    const SpotifyStyle: React.CSSProperties = {
        width: "auto",
        height: isDesktop ? "3vw" : "3vh",
        backgroundColor: palette.lightblack,
        padding: "10px",
        borderRadius: "50px", // Use 50% for a circular shape
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "width 0.3s ease, transform 0.3s ease", // Add transition for smooth width and transform change
        transform: isSpotifyHovered ? "translateX(6px)" : "translateX(0)", // Initial transform set to 0, will be changed on hover
    };

    return (
        <FlexContainer >
            <div
                style={ThumbsUpStyle}
                onMouseOver={() => setIsThumbsUpHovered(true)}
                onMouseOut={() => setIsThumbsUpHovered(false)}
            >
                <img src={icons.thumbsUp} alt="good" style={{ width: "100%" }} />
            </div>
            <div
                style={SpotifyStyle}
                onMouseOver={() => setIsSpotifyHovered(true)}
                onMouseOut={() => setIsSpotifyHovered(false)}
            >
                <span>
                    <img src={icons.logo} alt="spotify" style={{ width: "30px" }} />
                </span>
                <span>
                    <img src={icons.spotifyLogo} alt="spotify" style={{ width: "30px" }} />
                </span>
                {(isSpotifyHovered) && (
                    <span
                        style={{
                            margin: "0px 20px",
                        }}
                    ><ResponsiveText
                        color={palette.green}
                        fontSize={18}
                        fontWeight={800}
                    >
                            {"Add a Playlist"}
                        </ResponsiveText>
                    </span>
                )}
            </div>
        </FlexContainer>
    );
};

export default Option;
