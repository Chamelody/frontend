import React, { useRef, useEffect, useState } from "react";
import EmojiData from "../emoji/EmoInfo.json";
import { Emoji } from "../emoji/EmojiTypes";
import { selectRandomEmojis, getRandomSizeList, getGridValue } from "../emoji/EmojiUtils";
import EmojiItem from "../emoji/EmojiItem";
import ArrowIcon from "../images/arrow_down.png";

interface EmojiFieldProps {
    height: string;
    width: string;
}

const EmojiField: React.FC<EmojiFieldProps> = ({ height, width }) => {
    const [randomEmojis, setRandomEmojis] = useState(() => selectRandomEmojis(EmojiData, 27));
    const [emojiItemSizes, setEmojiItemSizes] = useState(() => getRandomSizeList(27));
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [selectedStartEmoji, setSelectedStartEmoji] = useState<string | null>(null);
    const [selectedTargetEmoji, setSelectedTargetEmoji] = useState<string | null>(null);
    const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);

    useEffect(() => {
        // Scroll to the top when the component mounts
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, []);

    const handleEmojiItemClick = (emoji: Emoji) => {
        // console.log(`click! ${selectedEmojis}`)
        if (selectedEmojis.includes(emoji.unicode)) {
            if (emoji.unicode === selectedStartEmoji) {
                setSelectedStartEmoji(null);
                setSelectedEmojis((prevSelectedEmojis) =>
                    prevSelectedEmojis.filter((e) => e !== emoji.unicode)
                );
            } else if (emoji.unicode === selectedTargetEmoji) {
                setSelectedTargetEmoji(null);
                setSelectedEmojis((prevSelectedEmojis) =>
                    prevSelectedEmojis.filter((e) => e !== emoji.unicode)
                );
            }
        }
        else {
            if ((selectedStartEmoji && selectedTargetEmoji)) {
                return;
            }
            if (!selectedStartEmoji) {
                setSelectedStartEmoji(emoji.unicode);
                setSelectedEmojis([emoji.unicode]);
            } else if (!selectedTargetEmoji && emoji.unicode !== selectedStartEmoji) {
                // If start emoji is selected, and the clicked emoji is not the same as start emoji, select target emoji
                setSelectedTargetEmoji(emoji.unicode);
                setSelectedEmojis([selectedStartEmoji, emoji.unicode]);
            }

        }
    };





    const handleScrollButtonClick = () => {
        if (contentRef.current) {
            const { scrollHeight, clientHeight, scrollTop } = contentRef.current;

            // If already at the bottom or near the bottom, scroll to the top
            if (scrollHeight - scrollTop <= clientHeight * 1.1) {
                contentRef.current.scrollTop = 0;
            } else {
                // Scroll to the bottom on button click
                contentRef.current.scrollTop = contentRef.current.scrollTop + 150;
            }
        }
    };

    const ContainerStyle: React.CSSProperties = {
        backgroundColor: "#323232",
        width: width,
        height: height,
        position: "relative",
    };

    const gridContainerStyle: React.CSSProperties = {
        width: "80%",
        height: "75%",
        margin: "auto",
        display: "grid",
        backgroundColor: "#262626",
        gridTemplateColumns: "repeat(auto-fill, minmax(4rem, auto))",
        gridTemplateRows: "repeat(5, minmax(4rem ,auto))",
        gridAutoFlow: "dense",
        gap: "0.2rem",
        padding: "10px 10px 40px 10px",
        overflow: "hidden",
        position: "relative",
    };

    const gridStyle = (size: string): React.CSSProperties => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gridColumn: getGridValue(size).gridColumn,
        gridRow: getGridValue(size).gridRow,
        boxSizing: "border-box",
    });

    const buttonStyle: React.CSSProperties = {
        position: "fixed",
        width: "100%",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        background: "linear-gradient(180deg, rgba(30, 30, 30, 0.8) 0%, rgba(30, 30, 30, 1) 100%)",
        color: "white",
        padding: "12px",
        border: "none",
        cursor: "pointer",
    };

    return (
        <div style={ContainerStyle}>
            <div ref={contentRef} style={gridContainerStyle}>
                {randomEmojis.map((emoji, index) => {
                    const itemSize = emojiItemSizes[index];
                    return (
                        <div
                            key={index}
                            className={`size-${itemSize} custom-scrollbar`}
                            style={gridStyle(itemSize)}
                        >
                            <EmojiItem
                                emoji={emoji}
                                size={itemSize}
                                onClick={() => handleEmojiItemClick(emoji)}
                                isSelected={selectedEmojis.includes(emoji.unicode)}
                            />
                        </div>
                    );
                })}
            </div>
            <button style={buttonStyle} onClick={handleScrollButtonClick}>
                <img src={ArrowIcon} style={{ height: "14px" }} />
            </button>

            {/* Display the selected emojis' unicode */}
            {selectedStartEmoji && (
                <div style={{ color: "white", textAlign: "center", marginTop: "10px" }}>
                    Selected Start Emoji: {selectedStartEmoji}
                </div>
            )}
            {selectedTargetEmoji && (
                <div style={{ color: "white", textAlign: "center", marginTop: "10px" }}>
                    Selected Target Emoji: {selectedTargetEmoji}
                </div>
            )}
        </div>
    );
};

export default EmojiField;
