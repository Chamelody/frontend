import React from "react";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../../../constants/ResponsiveSizeConst";
import musicImage1 from "./backgrounds/music_1.png";
import musicImage2 from "./backgrounds/music_2.png";
import { DivideContainer, DivideItem } from "../../../../components/Divider";
import CardHead from "./common/CardHead";

type MusicCardProps = {
    children?: React.ReactNode;
    height: string; // <length>
    width: string;  // <length>
}

const MusicCard = ({
    children = undefined,
    height,
    width
}: MusicCardProps): JSX.Element => {
    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH + 300
    });
    const isMobileScreen = useMediaQuery({ maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH });
    
    let background;
    let minHeight: string;
    
    if (isTabletScreen) {
        background = musicImage2;
        minHeight = "250px";
    } else {
        background = musicImage1;
        minHeight = "150px";
    }

    return (
        <div 
            style={{
                height: height,
                width: width,
                borderRadius: "30px",
                marginBottom: "25px",
                background: "#1ED760",
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                padding: "15px 20px",
                boxSizing: 'border-box',
                minHeight: minHeight,
            }}
        >
            <DivideContainer width="100%" height="100%" direction='column'>
                <DivideItem ratio={10}>
                    <CardHead text="#music" color='white' />
                </DivideItem>
                <DivideItem ratio={90}>

                </DivideItem>
            </DivideContainer>

            {children}
        </div>
    );
};

export default MusicCard;
