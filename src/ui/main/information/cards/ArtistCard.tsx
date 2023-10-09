import React from "react";
import artistImage1 from "./backgrounds/artist_1.png";
import artistImage2 from "./backgrounds/artist_2.png";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../../../constants/ResponsiveSizeConst";
import { DivideContainer, DivideItem } from "../../../../components/Divider";
import CardHead from "./common/CardHead";

type ArtistCardProps = {
    children?: React.ReactNode;
    height: string; // <length>
    width: string;  // <length>
}

const ArtistCard = ({
    children = undefined,
    height,
    width
}: ArtistCardProps): JSX.Element => {
    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH + 300
    });
    const isMobileScreen = useMediaQuery({ maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH });
    
    let background;
    let minHeight: string;

    if (isTabletScreen) {
        background = artistImage2;
        minHeight = "250px";
    } else {
        background = artistImage1;
        minHeight = "150px";
    }

    return (
        <div 
            style={{
                height: height,
                width: width,
                borderRadius: "30px",
                marginBottom: "25px",
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
                    <CardHead text="#artist" color='white' />
                </DivideItem>
                <DivideItem ratio={90}>

                </DivideItem>
            </DivideContainer>

            {children}
        </div>
    );
};

export default ArtistCard;
