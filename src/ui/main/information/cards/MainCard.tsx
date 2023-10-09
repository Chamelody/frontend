import React from "react";
import mainImageMobile from "./backgrounds/main_mobile.png";
import mainImageDesktop from "./backgrounds/main_desktop.png";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../../../constants/ResponsiveSizeConst";

type MainCardProps = {
    children?: React.ReactNode;
    height: string; // <length>
    width: string;  // <length>
}

const MainCard = ({
    children = undefined,
    height,
    width
}: MainCardProps): JSX.Element => {
    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH + 300
    });
    const isMobileScreen = useMediaQuery({ maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH });
    
    let background;

    if (isMobileScreen) background = mainImageMobile;
    else background = mainImageDesktop;

    return (
        <div 
            style={{
                height: height,
                width: width,
                borderRadius: "30px",
                marginBottom: "25px",
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                minHeight: "300px",
            }}  
        >
            {children}
        </div>
    );
};

export default MainCard;

