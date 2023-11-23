import React, { useEffect } from "react";
import Scaffold from "../../components/Scaffold";
import MainInfo from "./information/MainInfo";
import MainIntro from "./intro/MainIntro";
import HeaderLogo from "./components/HeaderLogo";
import axios from "axios";
import Cookies from "js-cookie";

const Main = (): JSX.Element => {
    useEffect(() => {
        (async () => {
            const url = new URL(window.location.href);
            const hash = url.hash;
            if (hash) {
                const accessToken = hash.split("=")[1].split("&")[0];
                Cookies.set('google-oauth', accessToken);
                // await axios.get('https://www.googleapis.com/oauth2/v2/userinfo?access_token=' + accessToken, { 
                //     headers: { 
                //         authorization: `token ${accessToken}`, 
                //         accept: 'application/json' 
                //     }
                // }).then(data => {
                //     console.log(data);
                //     Cookies.set('google-oauth', accessToken);
                // }).catch(e => console.log('oAuth token expired', e));
            }
        })();
    }, [])

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
