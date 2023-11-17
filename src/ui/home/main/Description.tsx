import React from "react";
import { ResponsiveText } from "../../../components/ResponsiveText";
import { useMediaQuery } from "react-responsive";
import { ResponsiveSizeConst } from "../../../constants/ResponsiveSizeConst";

const descriptionTexts = [
    "Chamelody guides you by drawing an emotion map.",
    "Shall we follow the playlist created by finding a path between the two emotions of your choice?"
];

const Description = (): JSX.Element => {
    const isMobileScreen = useMediaQuery({
        maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH
    });

    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
    });

    const fontSizes = {
        mobile: 16,
        tablet: 17,
        default: 17,
    };

    const getFontSize = () => {
        if (isMobileScreen) {
            return fontSizes.mobile;
        } else if (isTabletScreen) {
            return fontSizes.tablet;
        } else {
            return fontSizes.default;
        }
    };
    return (
        <div
            style={{
                height: "auto",
                width: "100%",
                // backgroundColor: "red",
                padding: "0 50px",
                boxSizing: "border-box",
            }}
        >
            {descriptionTexts.map((text, index) => (
                <ResponsiveText
                    key={index}
                    fontSize={getFontSize()}
                    color="white"
                    fontWeight={300}
                    {...{
                        margin: "0px", letterSpacing: '-0.1px',
                    }}
                >
                    {text}
                </ResponsiveText>
            ))}
        </div>
    );
};

export default Description;
