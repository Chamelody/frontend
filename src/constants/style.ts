import "../assets/fonts/font.css";

const palette = {
    green: '#2EC364',
    white: '#FEFEFE',
    lightblack: '#323232',
    black: '#161616',
    darkgray: "#8F8F8F",
    lightgray: "#e8e9ec"
};

const icons = {
    logo: require("../assets/logo.png"),
    arrowDown: require("../assets/arrow_down.png"),
    arrowUp: require("../assets/arrow_up.png"),
    running: require("../assets/running.png"),
    runningShoes: require("../assets/runningShoes.png"),
    headset: require("../assets/headset.png"),
    logoLP: require("../assets/logo_LP.png"),
    spotifyLogo: require("../assets/spotify_logo.png"),
    thumbsUp: require("../assets/good.png"),
    headerLogo: require("../assets/header_logo.png"),
};

const images = {
    landing: require("../assets/landing_animate.svg").default,
    demo_bg: require("../assets/demo_bg.svg").default,
    track1: require("../assets/track1.png"),
    track2: require("../assets/track2.png"),
    track3: require("../assets/track3.png"),
    track4: require("../assets/track4.png"),
    track5: require("../assets/track5.png"),
};


const audio: Record<string, any> = {
    track1: require("../assets/demo/track01.mp3"),
    track2: require("../assets/demo/track02.mp3"),
    track3: require("../assets/demo/track03.mp3"),
    track4: require("../assets/demo/track04.mp3"),
    track5: require("../assets/demo/track05.mp3"),
}
export { palette, icons, images, audio };