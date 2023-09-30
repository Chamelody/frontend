import React from "react";
import Scaffold from "../../components/Scaffold";
import HomeTopBar from "./top_bar/HomeTopBar";
import HomeMain from "./main/HomeMain";
import HomeEmoji from "./emoji/HomeEmoji";
import { DivideContainer, DivideItem } from "../../components/Divider";

const Home = (): JSX.Element => {
    return <Scaffold>
        <DivideContainer direction='column' height="100%">
            <DivideItem ratio={7}>
                <HomeTopBar />
            </DivideItem>
            <DivideItem ratio={53}>
                <HomeMain />
            </DivideItem>
            <DivideItem ratio={40}>
                <HomeEmoji />
            </DivideItem>
        </DivideContainer>
    </Scaffold>;
};

export default Home;
