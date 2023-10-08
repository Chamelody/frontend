import React from "react"
import FlexContainer from "../../../../../components/FlexContainer";
import { ResponsiveText } from "../../../../../components/ResponsiveText";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../../../../constants/ResponsiveSizeConst";


type CardHeadProps = {
    text: string,
    color: string,
}


const CardHead = ({
    text,
    color
}: CardHeadProps): JSX.Element => {
    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
    });
    const isMobileScreen = useMediaQuery({ maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH });

    let cardHeadMaxHeight: string;

    if (isMobileScreen) cardHeadMaxHeight = "20px";
    else cardHeadMaxHeight = "25px"

    return (
        <FlexContainer justifyContent='space-between' height={cardHeadMaxHeight}>
            <FlexContainer justifyContent='center' alignItems='center' 
                {...{border: `1px solid ${color}`, borderRadius: "20px"}}>
                <ResponsiveText fontSize={12} color={color} {...{margin: "0px 5px"}}>
                    {text}
                </ResponsiveText>
            </FlexContainer>
            <FlexContainer justifyContent='center' alignItems='center' width={cardHeadMaxHeight} height="100%"
                {...{background: 'white', borderRadius: "50%"}}>
                
            </FlexContainer>
        </FlexContainer>
    );
};

export default CardHead;
