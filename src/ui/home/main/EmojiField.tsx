import React, { useRef, useEffect } from "react";
import EmojiData from "../emoji/EmoInfo.json";
import { selectRandomEmojis, getRandomSize, getGridValue } from "../emoji/EmojiUtils";
import EmojiItem from "../emoji/EmojiItem";
import ArrowIcon from "../images/arrow_down.png"

interface EmojiFieldProps {
    height: string;
    width: string;
}

const EmojiField: React.FC<EmojiFieldProps> = ({ height, width }) => {
    const randomEmojis = selectRandomEmojis(EmojiData, 27);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Scroll to the top when the component mounts
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, []);

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
        overflow: "hidden", // "auto" to enable scrolling in this area
        position: "relative",
    };

    const gridStyle = (size: string): React.CSSProperties => ({
        // backgroundColor: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gridColumn: getGridValue(size).gridColumn,
        gridRow: getGridValue(size).gridRow,
        boxSizing: "border-box"
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
        // borderRadius: "8px",
        cursor: "pointer",
    };


    return (
        <div style={ContainerStyle}>
            <div ref={contentRef} style={gridContainerStyle}>
                {randomEmojis.map((emoji, index) => {
                    const size = getRandomSize();
                    return (
                        <div
                            key={index}
                            className={`size-${size} custom-scrollbar`}
                            style={gridStyle(size)}
                        >
                            <EmojiItem emoji={emoji} size={size} />
                        </div>
                    );
                })}
            </div>
            <button
                style={buttonStyle}
                onClick={handleScrollButtonClick}
            >
                <img src={ArrowIcon} style={{ height: "14px" }} />
            </button>
        </div>
    );
};

export default EmojiField;