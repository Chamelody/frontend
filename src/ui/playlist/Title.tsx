import React from "react";
import WordBlock from "../main/components/WordBlock";
import FlexContainer from "../../components/FlexContainer";
import { Emoji } from "../home/emoji/EmojiTypes";
import { palette } from "../../constants/style";

type TitleProps = {
    fromEmoji: Emoji
    toEmoji: Emoji
}
const Title = ({
    fromEmoji,
    toEmoji
}: TitleProps): JSX.Element => {
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
                height: "100%",
                width: "auto",
                paddingLeft: "3vw",
                boxSizing: "border-box",
            }}
        >

            <FlexContainer flexWrap="wrap" alignContent="flex-start">
                <FlexContainer flexWrap="wrap" alignItems="center"
                    {...flexContainerStyles}>
                    <WordBlock content={"From"} mode="default" />
                    <WordBlock
                        content={`# ${fromEmoji.emotag.split("_")[0]}`}
                        mode="emotag"
                        emo={fromEmoji.unicode}
                        color={palette.lightblack}
                    />
                    <WordBlock content={"mood"} mode="default" />
                </FlexContainer>

                <FlexContainer flexWrap="wrap" alignItems="center"
                    {...flexContainerStyles}>
                    <WordBlock content={"to"} mode="default" />
                    <WordBlock
                        content={`# ${toEmoji.emotag.split("_")[0]}`}
                        mode="emotag"
                        emo={toEmoji.unicode}
                        color={palette.lightblack}
                    />
                    <WordBlock content={"mood,"} mode="default" />
                </FlexContainer>

                <FlexContainer flexWrap="wrap" alignItems="center"
                    {...flexContainerStyles}>
                    <WordBlock content={"a"} mode="default" />
                    <WordBlock content={("# journey")} mode="filled" color={palette.lightblack} />
                    <WordBlock content={"of"} mode="default" />
                    <WordBlock content={"shifting"} mode="lined" />
                </FlexContainer>
            </FlexContainer>
        </div>

    );
};

export default Title;
