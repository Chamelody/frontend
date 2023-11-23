import React from "react";
import Scaffold from "../../components/Scaffold";
import MainInfo from "./information/MainInfo";
import MainIntro from "./intro/MainIntro";
import HeaderLogo from "./components/HeaderLogo";

const Main = (): JSX.Element => {
    return <Scaffold
        {...{
            background: 'linear-gradient(180deg, rgba(46,195,100, 1) 85%, rgba(33, 120, 64, 0.9) 100%)'
        }}>
        <HeaderLogo />
        <MainIntro />
        <MainInfo />
    </Scaffold>;
};

export default Main;
