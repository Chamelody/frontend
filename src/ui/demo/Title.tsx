import React from "react";
import FlexContainer from "../../components/FlexContainer";
import WordBlock from "../main/components/WordBlock";
import { palette } from "../../constants/style";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../constants/ResponsiveSizeConst";
import Spacer from "../loading/Spacer";

type TitleProps = {
    height: string  // <length>
    width: string   // <length> 
}

const Title = ({ height, width }: TitleProps): JSX.Element => {
    const isMobileScreen = useMediaQuery({
        maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH
    });

    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
    });

    const isDesktop = !isMobileScreen && !isTabletScreen;

    const flexContainerStyles = {
        width: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: "50px",
        marginBottom: "8px",
        marginRight: "5px",
        paddingRight: "15px",
    };
    return <div
        style={{
            height: height,
            width: width,
            paddingLeft: isDesktop ? "50px" : "10px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
        }}
    >
        <FlexContainer flexWrap="wrap" alignContent="flex-start">
            <FlexContainer flexWrap="wrap" {...flexContainerStyles}>
                <WordBlock content={"Let's"} mode="default" />
                <WordBlock
                    content={`# Chamelody`}
                    mode="lined"
                    color={palette.white}
                />

            </FlexContainer>
            <Spacer height="50px" />

            <FlexContainer flexWrap="wrap" {...flexContainerStyles}>
                <WordBlock content={"From"} mode="default" />
                <WordBlock
                    content={`# sad`}
                    mode="emotag"
                    emo={"1F622"}
                    color={palette.lightblack}
                />

            </FlexContainer>

            <FlexContainer flexWrap="wrap" alignItems="center"
                {...flexContainerStyles}>
                <WordBlock content={"to"} mode="default" />
                <WordBlock
                    content={`# happy`}
                    mode="emotag"
                    emo={"1F606"}
                    color={palette.lightblack}
                />
            </FlexContainer>
        </FlexContainer>

        <div style={{ fontWeight: "500", color: palette.white, padding: "50px 20px" }}>변화되는 음악 분위기에 빠져보아요.</div>
    </div>;
};

export default Title;
