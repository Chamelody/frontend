import React from "react";
import svg_image from './images/landing_animate.svg'
import { useMediaQuery } from "react-responsive";
import { ResponsiveSizeConst } from "../../../constants/ResponsiveSizeConst";
import FlexContainer from "../../../components/FlexContainer";

type ImageProps = {
    height: string  // <length>
    width: string   // <length> 
}
const LandingImage = ({
    height,
    width, 
}: ImageProps): JSX.Element => {
    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
    });
    const isMobileScreen = useMediaQuery({ 
        maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH 
    });

    let ImageSize: {
        width: string,
        height : string
    }


    if (isMobileScreen) {
        ImageSize = {width:"auto", height:"65%"}
    } else if (isTabletScreen) {
        ImageSize = {width:"auto", height:"90%"}

    } else {
        ImageSize = {width:"90%", height:"auto"}
    }

    return (
       <div
            style={{
                height: height,
                width: width,
                padding: "0 30px",
                boxSizing: "border-box",

        }}>
    
                <FlexContainer 
                    width="100%"
                    height="100%"
                    justifyContent= {isTabletScreen ? "flex-end" : "center" } 
                    alignItems="center">
                    <img 
                        src={svg_image} alt="gif" 
                        height={ImageSize.height}
                        width={ImageSize.width}
                    /> 
                </FlexContainer>
        
        </div> 
    );
  };

export default LandingImage;