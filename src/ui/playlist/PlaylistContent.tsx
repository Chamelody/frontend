import React from "react";
import "./PlaylistContent.css";
import { useMediaQuery } from "react-responsive";
import { ResponsiveSizeConst } from "../../constants/ResponsiveSizeConst";
import Track from "./Track";

const PlaylistContent = ({ musicList, height, width }: {
    height: string,
    width: string,
    musicList: any[]
}) => {
    const isMobileScreen = useMediaQuery({
        maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH
    });

    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
    });

    const isDesktop = !isMobileScreen && !isTabletScreen;


    const PlaylistContainerStyle: React.CSSProperties = {
        backgroundColor: "rgba(33, 33, 33, 0.2)",
        width: isDesktop ? "90%" : "92%",
        height: isDesktop ? "80%" : "92%",
        overflow: "auto",
        borderRadius: "3vw",
        padding: "20px 16px 20px 10px",
        boxSizing: "border-box",
    }

    return (
        <div
            style={{
                height: height,
                width: width,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div style={PlaylistContainerStyle}>
                <div className="playlist-box">
                    {musicList.map((music: any, index: number) => (
                        <Track
                            index={index}
                            imageUrl={music.imageUrl}
                            name={music.name}
                            artists={music.artists}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlaylistContent;
