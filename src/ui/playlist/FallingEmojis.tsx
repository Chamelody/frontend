import React from "react";
import { Emoji } from "../home/emoji/EmojiTypes";
import { EmojiPath } from "../home/emoji/EmojiPath";
import "./FallingEmojis.css";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../constants/ResponsiveSizeConst";

type FallingEmojisProps = {
    fromEmoji: Emoji;
    toEmoji: Emoji;
};

const FallingEmojis = ({ fromEmoji, toEmoji }: FallingEmojisProps): JSX.Element => {
    const isMobileScreen = useMediaQuery({
        maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH
    });

    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
    });

    const isDesktop = !isMobileScreen && !isTabletScreen;


    const RandomSize = ["8vw", "12vw", "16vw"];

    // 랜덤 속도 생성
    const getRandomSpeed = () => {
        return Math.floor(Math.random() * 3) + 5;
    };

    // 랜덤한 크기 선택
    const getRandomEmojiSize = () => {
        const randomIndex = Math.floor(Math.random() * RandomSize.length);
        return RandomSize[randomIndex];
    };

    // 랜덤한 딜레이 선택
    const getRandomDelay = () => {
        return Math.floor(Math.random() * 3); // Adjust the range as needed
    };

    // 랜덤한 이모지 선택 (fromEmoji 또는 toEmoji)
    const getRandomEmoji = () => {
        const emojis = [fromEmoji, toEmoji];
        const randomIndex = Math.floor(Math.random() * emojis.length);
        return emojis[randomIndex];
    };

    // 랜덤한 갯수의 이미지 데이터 배열 생성
    const emojiListCount = Math.floor(Math.random() * (10 - 7 + 1)) + 7;
    const emojiList = Array.from({ length: emojiListCount }, (_, index) => ({
        src: EmojiPath[getRandomEmoji().unicode],
        alt: getRandomEmoji().name,
        size: getRandomEmojiSize(),
    }));

    return (
        <div
            style={{
                position: "absolute",
                zIndex: -1,
                width: "100vw",
                height: "100vh",
                top: "0",
                left: "0",
                overflow: "hidden"
            }}
        >
            <div id="falling">
                {emojiList.map((emoji, index) => (
                    <span key={index} style={{
                        animationDuration: `${getRandomSpeed()}s`,
                        animationDelay: `-${getRandomDelay()}s`,
                    }}>
                        <img
                            src={emoji.src}
                            alt={emoji.alt}
                            style={{
                                width: emoji.size,
                                height: emoji.size,
                                opacity: 0.8,
                            }}
                        />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default FallingEmojis;
