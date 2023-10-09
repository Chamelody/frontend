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
    let minHeight: string;

    if (isMobileScreen) {
        imageWidth = "40%";
        imageHeight = "auto";
        minHeight = "150px";
    } else if (isTabletScreen) {
        imageWidth = "auto";
        imageHeight = "50%";
        minHeight = "250px";
    } else {
        imageWidth = "50%";
        imageHeight = "auto";
        minHeight = "150px";
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
                minHeight: minHeight,
            }}
        >
            <DivideContainer width="100%" height="100%" direction='column'>
                <DivideItem ratio={10}>
                    <CardHead text="#tag" color="#323232" />
                </DivideItem>
                <DivideItem ratio={90}>

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
