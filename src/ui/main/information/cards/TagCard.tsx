import React from "react";
import tagImgae from "./backgrounds/tag.png";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../../../constants/ResponsiveSizeConst";
import CardHead from "./common/CardHead";
import { DivideContainer, DivideItem } from "../../../../components/Divider";

type TagCardProps = {
    children?: React.ReactNode;
    height: string; // <length>
    width: string;  // <length>
}

const TagCard = ({
    children = undefined,
    height,
    width
}: TagCardProps): JSX.Element => {
    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH + 300
    });
    const isMobileScreen = useMediaQuery({ maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH });

    let imageWidth: string;
    let imageHeight: string;

    if (isMobileScreen) {
        imageWidth = "40%";
        imageHeight = "auto";
    } else if (isTabletScreen) {
        imageWidth = "auto";
        imageHeight = "50%";
    } else {
        imageWidth = "50%";
        imageHeight = "auto";
    }

    return (
        <div 
            style={{
                height: height,
                width: width,
                borderRadius: "30px",
                marginBottom: "25px",
                position: 'relative',
                overflow: 'hidden',
                background: "linear-gradient(90deg, #FEFEFE 50%, #9F9F9F 115.78%)",
                padding: "15px 20px",
                boxSizing: 'border-box',
            }}
        >
            <DivideContainer width="100%" height="100%" direction='column'>
                <DivideItem ratio={1}>
                    <CardHead text="#tag" color="#323232" />
                </DivideItem>
                <DivideItem ratio={1}>

                </DivideItem>
            </DivideContainer>

            <img 
                src={tagImgae}
                style={{ 
                    position: 'absolute', 
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

export default TagCard;
