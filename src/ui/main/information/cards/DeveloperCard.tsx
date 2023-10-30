import React from "react";
import developerImage from "./backgrounds/developer.png";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../../../constants/ResponsiveSizeConst";
import { DivideContainer, DivideItem } from "../../../../components/Divider";
import CardHead from "./common/CardHead";
import { ResponsiveText } from "../../../../components/ResponsiveText";
import FlexContainer from "../../../../components/FlexContainer";

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
    let background;
    let maxHeight: string | undefined;

    if (isMobileScreen) {
        imageWidth = "70%";
        imageHeight = "auto";
        maxHeight = "250px";
    } else if (isTabletScreen) {
        imageWidth = "auto";
        imageHeight = "80%";
        maxHeight = "250px";
    } else {
        imageWidth = "80%";
        imageHeight = "auto";
        maxHeight = undefined;
    }

    return (
        <FlexContainer 
            height={height}
            width={width}
            {...{
                borderRadius: "30px",
                marginBottom: "25px",
                background: "#1ED760",
                position: "relative",
                padding: "15px 20px",
                boxSizing: 'border-box',
                overflow: 'hidden',
                maxHeight: maxHeight,
                minHeight: "150px",
            }}
        >
            <div style={{background: "linear-gradient(180deg, rgba(254,254,254,0) 0%, rgba(255,255,255,0) 40%"}}>
                <DivideContainer width="100%" height="100%" direction='column' {...{zIndex: 1}}>
                    <DivideItem ratio={20}>
                        <CardHead text="#developer" color="#FEFEFE" />
                    </DivideItem>
                    <DivideItem ratio={80}>
                        <ResponsiveText fontSize={'Medium'} fontWeight={900} color="#FEFEFE" 
                            {...{margin: 0, opacity: 0.6}}>
                            WHO
                        </ResponsiveText>
                        <ResponsiveText fontSize={'Medium'} fontWeight={900} color="#FEFEFE" 
                            {...{margin: 0, opacity: 0.6}}>
                            MADE
                        </ResponsiveText>
                        <ResponsiveText fontSize={'Medium'} fontWeight={900} color="#FEFEFE" 
                            {...{margin: 0, opacity: 0.6}}>
                            THIS?
                        </ResponsiveText>
                        <ResponsiveText fontSize={10} color='#FEFEFE' width={"70%"} wordWarp='normal' 
                            {...{marginTop: "15px", opacity: 0.6}}>
                            이 프로젝트를 어떻게 시작했는지 우리의 이야기를 들려드릴게요. 같이 여정을 떠나보아요.
                        </ResponsiveText>
                    </DivideItem>
                </DivideContainer>

                <img 
                    src={developerImage}
                    style={{ 
                        zIndex: 0,
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: imageWidth,
                        height: imageHeight,
                    }}
                />
            </div>

            {children}
        </FlexContainer>
    );
};

export default DeveloperCard;
