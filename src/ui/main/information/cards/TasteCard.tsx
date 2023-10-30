import React from "react";
import tasteImage from "./backgrounds/taste.png"
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../../../constants/ResponsiveSizeConst";
import FlexContainer from "../../../../components/FlexContainer";
import { DivideContainer, DivideItem } from "../../../../components/Divider";
import CardHead from "./common/CardHead";
import { ResponsiveText } from "../../../../components/ResponsiveText";

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
    let maxHeight: string | undefined;
    let headRatio: number;
    let contentRatio: number;
    let divideItemRatio = {
        tablet: {
            haedRatio: 30,
            contentRatio: 70
        },
        desktop: {
            haedRatio: 50,
            contentRatio: 50
        }
    };

    if (isMobileScreen) {
        imageWidth = "30%";
        imageHeight = "auto";
        maxHeight = "250px";
        headRatio = divideItemRatio.desktop.haedRatio;
        contentRatio = divideItemRatio.desktop.contentRatio;
    } else if (isTabletScreen) {
        imageWidth = "25%";
        imageHeight = "auto";
        maxHeight = "250px";
        headRatio = divideItemRatio.tablet.haedRatio;
        contentRatio = divideItemRatio.tablet.contentRatio;
    } else {
        imageWidth = "40%";
        imageHeight = "auto";
        maxHeight = undefined;
        headRatio = divideItemRatio.desktop.haedRatio;
        contentRatio = divideItemRatio.desktop.contentRatio;
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
                maxHeight: maxHeight,
                minHeight: "150px",
            }}
        >
            <DivideContainer width="100%" height="100%" direction='column' {...{zIndex: 1}}>
                <DivideItem ratio={headRatio}>
                    <CardHead text="#taste" color="#713F3F" />
                </DivideItem>
                <DivideItem ratio={contentRatio}>
                    <ResponsiveText fontSize={'Medium'} fontWeight={900} color="#713F3F" 
                        {...{margin: 0}}>
                        Try
                    </ResponsiveText>
                    <ResponsiveText fontSize={'Small'} color="#713F3F" {...{margin: 0, letterSpacing: "-1px"}}>
                        a Sample
                    </ResponsiveText>
                    <ResponsiveText fontSize={'Small'} color="#713F3F" {...{margin: 0, letterSpacing: "-1px"}}>
                        of The Service
                    </ResponsiveText>
                    <ResponsiveText fontSize={10} color="#713F3F" width={"70%"} wordWarp='normal' 
                        {...{marginTop: "15px"}}>
                        간단하게 서비스를 유튜브에서도 들어볼 수 있어요. 좋아요 구독 알림설정까지 가보자고.
                    </ResponsiveText>
                </DivideItem>
            </DivideContainer>

            <img 
                src={tasteImage}
                style={{ 
                    zIndex: 0,
                    position: 'absolute',
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
