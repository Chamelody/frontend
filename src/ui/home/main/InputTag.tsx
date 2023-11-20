import React from "react";
import { Emoji } from "../emoji/EmojiTypes";
import { DivideContainer, DivideItem } from "../../../components/Divider";
import { useMediaQuery } from "react-responsive";
import { ResponsiveSizeConst } from "../../../constants/ResponsiveSizeConst";
import FlexContainer from "../../../components/FlexContainer";
import WordBlock from "../../main/compontents/WordBlock";
import Description from "./Description";

type InputTagProps = {
    height: string      // <height>
    width: string       // <width> 
    onSelectStartEmoji: Emoji | null;
    onSelectTargetEmoji: Emoji | null;
}
const InputTag = ({
    height,
    width,
    onSelectStartEmoji,
    onSelectTargetEmoji

}: InputTagProps): JSX.Element => {
    const isMobileScreen = useMediaQuery({
        maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH
    });

    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
    });

    let componentLayoutInfo: {
        Space: number,
        Title: number,
        TitleLayout: Array<number>,
        Description: number,
    }

    if (isMobileScreen) {
        componentLayoutInfo = { Space: 2, Title: 3, TitleLayout: [1, 29], Description: 2 };
    } else if (isTabletScreen) {
        componentLayoutInfo = { Space: 5, Title: 3, TitleLayout: [1, 15], Description: 2 };
    } else {
        componentLayoutInfo = { Space: 1, Title: 2, TitleLayout: [1, 19], Description: 1 };
    }


    const flexContainerStyles = {
        width: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: "50px",
        marginBottom: "8px",
        marginRight: "5px",
        paddingRight: "15px",
    };

    return (
        <div
            style={{
                // backgroundColor: 'pink',
                width: width,
                height: height,

            }}
        >
            <DivideContainer direction="column" width="100%" height="100%">
                {/*Space*/}
                <DivideItem ratio={componentLayoutInfo.Space}></DivideItem>

                {/*타이틀*/}
                <DivideItem ratio={componentLayoutInfo.Title}>
                    <DivideContainer direction="row" width="100%" height="100%">
                        {/*Space*/}
                        <DivideItem ratio={componentLayoutInfo.TitleLayout[0]}></DivideItem>
                        <DivideItem ratio={componentLayoutInfo.TitleLayout[1]}>
                            <div
                                style={{
                                    height: "auto",
                                    width: "auto",
                                    boxSizing: "border-box",
                                }}
                            >
                                <FlexContainer flexWrap="wrap" alignContent="flex-start">
                                    <FlexContainer flexWrap="wrap" alignItems="center"  {...flexContainerStyles}>
                                        <WordBlock content={"I want to"} mode="default" />
                                        <WordBlock content={"Chamelody"} mode="lined" />
                                    </FlexContainer>
                                </FlexContainer>
                                <FlexContainer flexWrap="wrap" alignContent="flex-start" >
                                    <FlexContainer flexWrap="wrap" alignItems="center" {...flexContainerStyles}>
                                        <WordBlock content={" from"} mode="default" />
                                        <WordBlock
                                            content={onSelectStartEmoji ? `# ${onSelectStartEmoji.emotag}` : "# currnet mood"}
                                            mode="emotag"
                                            emo={onSelectStartEmoji ? onSelectStartEmoji.unicode : null}
                                            color="#323232" />
                                    </FlexContainer>

                                    <FlexContainer flexWrap="wrap" alignItems="center" {...flexContainerStyles}>
                                        <WordBlock content={" to"} mode="default" />
                                        <WordBlock
                                            content={onSelectTargetEmoji ? `# ${onSelectTargetEmoji.emotag}` : "# mood I want"}
                                            mode="emotag"
                                            emo={onSelectTargetEmoji ? onSelectTargetEmoji.unicode : null}
                                            color="#323232" />
                                    </FlexContainer>

                                </FlexContainer>
                            </div>
                        </DivideItem>
                    </DivideContainer>
                </DivideItem>

                {/*설명*/}
                <DivideItem ratio={componentLayoutInfo.Description}>
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                        }}>
                        <Description />
                    </div>
                </DivideItem>
            </DivideContainer >
        </div>

    );
};

export default InputTag;