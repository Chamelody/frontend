import React from "react";
import { useMediaQuery } from "react-responsive";
import { icons } from "../../constants/style";
import FlexContainer from "../../components/FlexContainer";
import ResponsiveSizeConst from "../../constants/ResponsiveSizeConst";
import BackgroundContainer from "../playlist/BackgroundContainer";
import Description from "./Description";
import Spacer from "./Spacer";


const LoadingSection = (): JSX.Element => {
    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
    });
    return (
        <FlexContainer
            height="100vh"
            width="100vw"
            flexWrap="wrap"
            alignContent="center"
            justifyContent="center"
        >
            <BackgroundContainer />
            <img
                src={icons.logo}
                style={{
                    width: isTabletScreen ? "20vw" : "24vh",
                    height: isTabletScreen ? "20vw" : "24vh",
                }} />

            <Spacer height="5%" />
            <Description />
        </FlexContainer >
    );
};

export default LoadingSection;
