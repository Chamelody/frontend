import React from "react";

import { DivideContainer, DivideItem } from "../../components/Divider";
import { useMediaQuery } from "react-responsive";
import { ResponsiveSizeConst } from "../../constants/ResponsiveSizeConst";

type ContentProps = {
    height: string  // <length>
    width: string   // <length> 
}
const Content = ({
    height,
    width, 
}: ContentProps): JSX.Element => {
    const isMobileScreen = useMediaQuery({ 
        maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH
    });
    
    const isTabletScreen = useMediaQuery({
    minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
    maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
    });


    let componentLayoutInfo: {
        Space1: number, 
        Title: number, 
        Description: number, 
        Button: number,
        ButtonLayout: Array<number> 
        Space2: number
    }
        
    if (isMobileScreen) {
        componentLayoutInfo = { Space1: 0, Title: 2, Description: 2, Button: 1, ButtonLayout : [1, 2, 1], Space2: 1};
    } else if (isTabletScreen) {
        componentLayoutInfo = { Space1: 1, Title: 4, Description: 2, Button: 1, ButtonLayout : [15, 10, 5], Space2: 0};
    } else {
        componentLayoutInfo = { Space1: 1, Title: 2, Description: 2, Button: 1, ButtonLayout : [15, 10, 5], Space2: 1};
    }
    
    
    return (
        <div 
            style={{ 
            // backgroundColor:'pink',
            width: width,
            height: height }}
        >
            
        </div>
       
    );
  };

export default Content;
