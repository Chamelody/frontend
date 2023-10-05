import React from "react";
import InfoSection from "./flex/InfoSection";
import FlexContainer from "../../../components/FlexContainer";

const MainInfo = (): JSX.Element => {
    return (
        <FlexContainer 
            height="100%" 
            justifyContent="center" 
            alignItems="center"
        >
            <InfoSection />
        </FlexContainer>
    );
};

export default MainInfo;
