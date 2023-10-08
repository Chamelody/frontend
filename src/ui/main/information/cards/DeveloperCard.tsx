import React from "react";
import developerImage from "./backgrounds/developer.png";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../../../constants/ResponsiveSizeConst";
import { DivideContainer, DivideItem } from "../../../../components/Divider";
import CardHead from "./common/CardHead";

type DeveloperCardProps = {
    children?: React.ReactNode;
    height: string; // <length>
    width: string;  // <length>
}

const DeveloperCard = ({
    children = undefined,
    height,
    width
}: DeveloperCardProps): JSX.Element => {
    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH + 300
    });
    const isMobileScreen = useMediaQuery({ maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH });

    let imageWidth: string;
    let imageHeight: string;

    if (isMobileScreen) {
        imageWidth = "70%";
        imageHeight = "auto";
    } else if (isTabletScreen) {
        imageWidth = "auto";
        imageHeight = "80%";
    } else {
        imageWidth = "80%";
        imageHeight = "auto";
    }

    return (
        <div 
            style={{
                height: height,
                width: width,
                borderRadius: "30px",
                marginBottom: "25px",
                background: "#1ED760",
                position: "relative",
                padding: "15px 20px",
                boxSizing: 'border-box',
            }}
        >
            <DivideContainer width="100%" height="100%" direction='column'>
                <DivideItem ratio={10}>
                    <CardHead text="#developer" color="white" />
                </DivideItem>
                <DivideItem ratio={90}>

                </DivideItem>
            </DivideContainer>

            <img 
                src={developerImage}
                style={{ 
                    position: "absolute", 
                    bottom: 0, 
                    right: 0, 
                    width: imageWidth,
                    height: imageHeight,
                }}
            />
            
            {children}
        </div>
    );
};

export default DeveloperCard;
