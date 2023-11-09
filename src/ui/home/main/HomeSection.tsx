import React from "react";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../../constants/ResponsiveSizeConst";
import FlexContainer from "../../../components/FlexContainer";
import InputTag from "./InputTag";
import EmojiField from "./EmojiField";
import ButtonField from "./ButtonField";

const HomeSection = (): JSX.Element => {
    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
    });
    const isMobileScreen = useMediaQuery({ 
        maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH 
    });

    let layout: {
        InputTag: {height: string, width: string},
        ButtonField: {height: string, width: string},
        EmojiField: {height: string, width: string}
    };

    if (isTabletScreen) {           // Tablet Screen 
        layout = {
            InputTag: { height: "38%", width: "100%" },
            ButtonField: { height: "10%", width: "100%" },
            EmojiField: { height: "52%", width: "100%" }
        }
    } else if (isMobileScreen) {    // Mobile Screen
        layout = {
            InputTag: { height: "38%", width: "100%" },
            ButtonField: { height: "10%", width: "100%" },
            EmojiField: { height: "52%", width: "100%" }
        }
    } else {                        // Desktop Screen
        layout = {
            InputTag: { height: "65%", width: "76%"},
            ButtonField: { height: "65%", width: "24%"},
            EmojiField: { height: "35%", width: "100%"}
        }
    }

    return (
        <FlexContainer 
            height="100vh" 
            width="100vw" 
            justifyContent="space-between" 
            flexWrap="wrap"
            {...{backgroundColor: '#2EC364'}}
        >
            <InputTag height={layout.InputTag.height} width={layout.InputTag.width} />
            <ButtonField height={layout.ButtonField.height} width={layout.ButtonField.width}/>
            <EmojiField height={layout.EmojiField.height} width={layout.EmojiField.width}/>
        </FlexContainer>
    );
};

export default HomeSection;
