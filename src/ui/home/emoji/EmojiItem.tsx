import React, { useState } from "react";
import { Emoji } from "./EmojiTypes";
import { EmojiPath } from "../emoji/EmojiPath";

interface EmojiItemProps {
    emoji: Emoji;
    size: string;
    onClick: (emoji: Emoji) => void;
    isSelected: boolean;
}

const EmojiItem: React.FC<EmojiItemProps> = ({ emoji, size, onClick, isSelected }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const containerStyle: React.CSSProperties = {
        cursor: "pointer",
        transform: isHovered ? "scale(1.1)" : "scale(1)",
        display: "flex",
    };

    const tagStyle: React.CSSProperties = {
        padding: "10px 16px",
        backgroundColor: isSelected ? "#656565" : isHovered ? "#656565" : "#454545",
        borderRadius: "50px",
        fontSize: "1.4em",
        fontFamily: "Roboto",
        fontWeight: "bold",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const imgStyle: React.CSSProperties = {
        width: "100%",
        filter: isSelected ? "grayscale(100%)" : "none", // Apply grayscale filter if selected
    };

    const handleClick = () => {
        onClick(emoji);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={containerStyle}
        >
            {size === "tag" ? (
                <div style={tagStyle}>
                    #{emoji.emotag.split('_')[0]}
                </div>
            ) : (
                <img
                    src={EmojiPath[emoji.unicode]}
                    alt={emoji.unicode}
                    style={imgStyle}
                />
            )}
        </div>
    );
};

export default EmojiItem;