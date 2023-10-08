import React from "react";
import tasteImage from "./backgrounds/taste.png"
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../../../constants/ResponsiveSizeConst";
import FlexContainer from "../../../../components/FlexContainer";
import { DivideContainer, DivideItem } from "../../../../components/Divider";
import CardHead from "./common/CardHead";

type TasteCardProps = {
    children?: React.ReactNode;
    height: string; // <length>
    width: string;  // <length>
}

const TasteCard = ({
    children = undefined,
    height,
    width
}: TasteCardProps): JSX.Element => {
    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH + 300
    });
    const isMobileScreen = useMediaQuery({ maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH });

    let imageWidth: string;
    let imageHeight: string;

    if (isMobileScreen) {
        imageWidth = "50%";
        imageHeight = "auto";
    } else if (isTabletScreen) {
        imageWidth = "auto";
        imageHeight = "50%";
    } else {
        imageWidth = "40%";
        imageHeight = "auto";
    }

    return (
        <FlexContainer 
            height={height}
            width={width}
            {...{
                borderRadius: "30px",
                marginBottom: "25px",
                background: "#DF5656",
                position: "relative",
                padding: "15px 20px",
                boxSizing: 'border-box',
            }}
        >
            <DivideContainer width="100%" height="100%" direction='column'>
                <DivideItem ratio={1}>
                    <CardHead text="#taste" color="#713F3F" />
                </DivideItem>
                <DivideItem ratio={1}>

                </DivideItem>
            </DivideContainer>

            <img 
                src={tasteImage}
                style={{ 
                    position: "absolute",
                    top: "20%",
                    right: "15%",
                    width: imageWidth,
                    height: imageHeight
                }}
            />

            {children}
        </FlexContainer>
    );
};

export default TasteCard;
