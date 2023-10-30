import React from "react";
import tagImgae from "./backgrounds/tag.png";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../../../constants/ResponsiveSizeConst";
import CardHead from "./common/CardHead";
import { DivideContainer, DivideItem } from "../../../../components/Divider";
import FlexContainer from "../../../../components/FlexContainer";
import { ResponsiveText } from "../../../../components/ResponsiveText";

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
    let headRatio: number;
    let contentRatio: number;
    let headTextWidth: string;
    let contentTextWidth: string;
    
    if (isMobileScreen) {
        imageWidth = "40%";
        imageHeight = "auto";
        minHeight = "150px";
        headRatio = 40;
        contentRatio = 60;
        headTextWidth = "100%";
        contentTextWidth = "100%";
    } else if (isTabletScreen) {
        imageWidth = "auto";
        imageHeight = "50%";
        minHeight = "250px";
        headRatio = 20;
        contentRatio = 80;
        headTextWidth = "70%";
        contentTextWidth = "70%";
    } else {
        imageWidth = "50%";
        imageHeight = "auto";
        minHeight = "150px";
        headRatio = 40;
        contentRatio = 60;
        headTextWidth = "60%";
        contentTextWidth = "30%";
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
                <DivideItem ratio={headRatio}>
                    <CardHead text="#tag" color="#323232" />
                </DivideItem>
                <DivideItem ratio={contentRatio}>
                    <ResponsiveText fontSize={'Small'} color="#323232" fontWeight={750} width={headTextWidth}
                        {...{margin: 0}}>
                        What Emotion Tags Can I Use?
                    </ResponsiveText>
                    <ResponsiveText fontSize={10} color="#616161" width={contentTextWidth} {...{margin: 0}}>
                        나의 감정을 표현해주는 태그는 어떤 종류가 있을까요?
                    </ResponsiveText>
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
