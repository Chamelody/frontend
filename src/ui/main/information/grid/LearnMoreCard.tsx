import React from "react";
import GridItem from "../../../../components/GridItem";

const LearnMoreCard = (): JSX.Element => {
    return (
        <GridItem 
            gridColumnStart="1"
            gridColumnEnd="6"
            gridRowStart="1"
            gridRowEnd="3"
            {...{
                border: "1px solid black", 
                borderRadius: "30px"
            }}
        >
            Learn more card
        </GridItem>
    );
};

export default LearnMoreCard;
