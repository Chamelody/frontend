import React from "react";

import { DivideContainer, DivideItem } from "../../components/Divider";
import { useMediaQuery } from "react-responsive";
import { ResponsiveSizeConst } from "../../constants/ResponsiveSizeConst";

import Title from "./Title";
import Option from "./Option";
import { Emoji } from "../home/emoji/EmojiTypes";


type ContentProps = {
    height: string  // <length>
    width: string   // <length> 
    fromEmoji: Emoji
    toEmoji: Emoji
}

const Content = ({
    height,
    width,
    fromEmoji,
    toEmoji
}: ContentProps): JSX.Element => {
    const isMobileScreen = useMediaQuery({
        maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH
    });

    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
    });


    let componentLayoutInfo: {
        SpaceTop: number,
        Title: number,
        Option: number,
        OptionLayout: number[],
        SpaceBottom: number,

    }

    if (isMobileScreen) {           // Mobile Screen
        componentLayoutInfo = { SpaceTop: 4, Title: 6, Option: 2, OptionLayout: [1, 2, 1], SpaceBottom: 1 };
    } else if (isTabletScreen) {    // Tablet Screen 
        componentLayoutInfo = { SpaceTop: 4, Title: 6, Option: 2, OptionLayout: [15, 10, 5], SpaceBottom: 1 };
    } else {                        // Desktop Screen
        componentLayoutInfo = { SpaceTop: 1, Title: 2, Option: 1, OptionLayout: [15, 10, 5], SpaceBottom: 2 };
    }


    return (
        <div
            style={{
                width: width,
                height: height
            }}
        >
            <DivideContainer direction="column" width="100%" height="100%">

                {/*Space*/}
                <DivideItem ratio={componentLayoutInfo.SpaceTop}></DivideItem>

                {/*타이틀*/}
                <DivideItem ratio={componentLayoutInfo.Title}>
                    <Title fromEmoji={fromEmoji} toEmoji={toEmoji} />
                </DivideItem>

                {/*버튼*/}
                <DivideItem ratio={componentLayoutInfo.Option}
                    {...{ backgroundColor: 'brown', }}
                >
                    <DivideContainer direction="row" width="100%" height="100%">
                        <DivideItem ratio={componentLayoutInfo.OptionLayout[0]}></DivideItem>
                        <DivideItem ratio={componentLayoutInfo.OptionLayout[1]}>Hello</DivideItem>
                        <DivideItem ratio={componentLayoutInfo.OptionLayout[2]}></DivideItem>
                    </DivideContainer>
                </DivideItem>

                {/*Space*/}
                <DivideItem ratio={componentLayoutInfo.SpaceBottom}></DivideItem>

            </DivideContainer>
        </div>

    );
};

export default Content;
