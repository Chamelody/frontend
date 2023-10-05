import React from "react";

type CardProps = {
    height: string // <length>
    width: string  // <length>
}

const Card = ({
    height,
    width
}: CardProps): JSX.Element => {
    return (
        <div 
            style={{
                height: height,
                width: width,
                border: "1px solid black",
                borderRadius: "30px",
                marginBottom: "25px",
            }}
        >

        </div>
    );
};

export default Card;
