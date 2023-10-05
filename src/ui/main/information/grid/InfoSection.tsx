import React from "react";
import GridContainer from "../../../../components/GridContainer";
import LearnMoreCard from "./LearnMoreCard";
import Card from "./Card";

const InfoSection = (): JSX.Element => {
    return (
        <GridContainer 
            width="90%"
            height="75%"
            gridTemplateColumns="repeat(9, 1fr)"
            gridTemplateRows="reapeat(4, 1fr)"
            columnGap="25px"
            rowGap="25px"
        >
            <LearnMoreCard />  {/* Learn more card */}
            <Card columnStart="6" columnEnd="8" rowStart="1" rowEnd="3" />  {/* Taste card */}
            <Card columnStart="8" columnEnd="10" rowStart="1" rowEnd="3" />  {/* Developer card */}
            <Card columnStart="1" columnEnd="4" rowStart="3" rowEnd="4" />  {/* Artist card */}
            <Card columnStart="4" columnEnd="7" rowStart="3" rowEnd="4" />  {/* Music card */}
            <Card columnStart="7" columnEnd="10" rowStart="3" rowEnd="4" />  {/* Tag card */}
        </GridContainer>
    );
};

export default InfoSection;
