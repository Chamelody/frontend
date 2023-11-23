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

};

const font = {
    family: "Pretendard"
}

const audio = {
    track1: require("../assets/demo/track01.mp3").default,
}
export { palette, icons, images, font, audio };