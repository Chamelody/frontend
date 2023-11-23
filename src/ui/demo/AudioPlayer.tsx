import React, { useRef } from "react";
import { palette } from "../../constants/style";

type AudioPlayerProps = {
    src: string; // URL to your MP3 file
    startTime: number; // Start time in seconds
    duration: number; // Duration of the segment in seconds
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, startTime, duration }) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const containerStyles: React.CSSProperties = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Adjust as needed
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
            <audio ref={audioRef} controls>
                <source src={src} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
            <button onClick={playSegment} style={PlayButton}>
                Play Segment
            </button>
        </div>
    );
};

export default AudioPlayer;
