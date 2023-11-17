import React, { useState } from "react";
import { EmojiPath } from "../emoji/EmojiPath";
import { getRandomSize } from "../emoji/EmojiUtils";

interface Emoji {
    unicode: string;
    name: string;
    description: string;
    emotag: string;
}

interface EmojiItemProps {
    emoji: Emoji;
    size: string;
}

const EmojiItem: React.FC<EmojiItemProps> = ({ emoji, size }) => {
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
        backgroundColor: isHovered ? "#656565" : "#454545",
        borderRadius: "50px",
        fontSize: "1.4em",
        fontFamily: "Roboto",
        fontWeight: "bold",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={containerStyle}
        >
            {size === "tag" ? (
                <div style={tagStyle}>
                    #{emoji.emotag}
                </div>
            ) : (
                <img
                    src={EmojiPath[emoji.unicode]}
                    width="100%"
                    alt={emoji.unicode}
                />
            )}
        </div>
    );
};

export default EmojiItem;