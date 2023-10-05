import React from "react";
import GridItem from "../../../../components/GridItem";

type CardProps = {
    columnStart: string,  // <integer>
    columnEnd: string,  // <integer>
    rowStart: string,  // <integer>
    rowEnd: string  // <integer>
}

const Card = ({
    columnStart, 
    columnEnd,
    rowStart,
    rowEnd,
}: CardProps): JSX.Element => {
    return (
        <GridItem 
            gridColumnStart={columnStart}
            gridColumnEnd={columnEnd}
            gridRowStart={rowStart}
            gridRowEnd={rowEnd}
            {...{
                border: "1px solid black", 
                borderRadius: "30px"
            }}
        >
            card
        </GridItem>
    );
};

export default Card;
