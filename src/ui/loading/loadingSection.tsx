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
                src={icons.logoLP}
                style={{
                    width: isTabletScreen ? "20vw" : "28vh",
                    height: isTabletScreen ? "20vw" : "28vh",
                    animation: "spin 8s linear infinite"
                }}
            />

            <Spacer height="5%" />
            <Description />
        </FlexContainer>
    );
};

const styles = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default () => (
    <>
        <style>{styles}</style>
        <LoadingSection />
    </>
);
