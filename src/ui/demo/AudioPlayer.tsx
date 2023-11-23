import React, { useRef } from "react";
import { palette, audio, images } from "../../constants/style";

type AudioPlayerProps = {
    index: number;
    src: string; // URL to your MP3 file
    startTime: number; // Start time in seconds
    duration: number; // Duration of the segment in seconds
    imgUrl: string;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ index, src, startTime, duration, imgUrl }) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const containerStyles: React.CSSProperties = {
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        padding: "10px 20px 10px 8px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "auto", // Adjust as needed
        margin: "12px"
    };

    const PlayButton: React.CSSProperties = {
        backgroundColor: palette.green,
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        marginLeft: "10px"

    };

    const playSegment = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = startTime;
            audioRef.current.play();

            // Stop playback after the specified duration
            setTimeout(() => {
                audioRef.current!.pause();
            }, duration * 1000); // Convert duration to milliseconds
        }
    };

    return (
        <div style={containerStyles}>
            <div style={{ fontWeight: "700", color: palette.white, marginRight: "8px", fontSize: "10px" }}>{index}</div>
            <img src={imgUrl} style={{ width: "66px", marginRight: "10px", borderRadius: "6px" }} />
            <audio ref={audioRef} controls>
                <source src={src} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
            <button onClick={playSegment} style={PlayButton}>
                Play Highlight
            </button>
        </div>
    );
};

export default AudioPlayer;
