import React from "react";
import { ResponsiveText } from "../../../components/ResponsiveText";
import { useMediaQuery } from "react-responsive";
import { ResponsiveSizeConst } from "../../../constants/ResponsiveSizeConst";

const descriptionTexts = [
  "Chamelody brings you a new experience.",
  "Click the emoji that matches your current mood and the mood you want to be.",
  "If you listen to the playlist created by Chamelody, you can feel the mood you want.",
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
    mobile: 12,
    tablet: 14,
    default: 14,
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
