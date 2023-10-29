import React from "react";
import { useMediaQuery } from "react-responsive";
import { ResponsiveSizeConst } from "../../../constants/ResponsiveSizeConst";
import Content from "./Content";
import LandingImage from "./LandingImage";
import FlexContainer from "../../../components/FlexContainer";

const IntroSection = (): JSX.Element => {
    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
    });
    const isMobileScreen = useMediaQuery({ 
        maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH 
    });
    
    const getComponentOrder = (isMobileScreen : boolean) => {
        if (isMobileScreen) {
            return ['LandingImage', 'Content'];
        }
        return ['Content', 'LandingImage'];
    };

    let componentLayoutInfo: {
        Content: { height: string, width: string },
        LandingImage: { height: string, width: string }
    };

    if (isTabletScreen) {           // Tablet Screen 
        componentLayoutInfo = {
            Content: { height: "60%", width: "100%" },
            LandingImage: { height: "40%", width: "100%" }
        }
    } else if (isMobileScreen) {    // Mobile Screen
        componentLayoutInfo = {
            Content: { height: "55%", width: "100%" },
            LandingImage: { height: "45%", width: "100%" }
        }
    } else {                        // Desktop Screen
        componentLayoutInfo = {
            Content: { height: "100%", width: "50%" },
            LandingImage: { height: "100%", width: "50%" }
        }
    }

    let componentOrder = getComponentOrder(isMobileScreen);

    return (
        <FlexContainer 
            height="100%" 
            width="100%" 
            justifyContent="space-between" 
            flexWrap="wrap"
            {...{backgroundColor: '#2EC364'}}
        >
            {/* layout */}
            {componentOrder.map(component => (
                <React.Fragment key={component}>
                    {component === 'Content' && (
                        <Content 
                            height={componentLayoutInfo.Content.height}
                            width={componentLayoutInfo.Content.width}
                        />
                    )}
                    {component === 'LandingImage' && (
                        <LandingImage 
                            height={componentLayoutInfo.LandingImage.height}
                            width={componentLayoutInfo.LandingImage.width}
                        />
                    )}
                </React.Fragment>
            ))}
        </FlexContainer>
    );
};

export default IntroSection;