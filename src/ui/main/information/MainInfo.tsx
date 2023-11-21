import React from "react";
import InfoSection from "./InfoSection";
import FlexContainer from "../../../components/FlexContainer";

const MainInfo = (): JSX.Element => {
    return (
        <FlexContainer
            height="100%"
            justifyContent="center"
            alignItems="center"
            {...{
                background: 'linear-gradient(180deg, rgba(33, 120, 64, 0.9) 0%,  rgba(32, 32, 32, 0.9) 100%)',
            }}
        >
            <InfoSection />
        </FlexContainer>
    );
};

export default MainInfo;
