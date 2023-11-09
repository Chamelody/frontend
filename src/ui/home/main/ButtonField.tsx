import React from "react";

type ButtonFieldProps = {
    height: string      // <height>
    width: string       // <width> 
}
const ButtonField = ({
    height, 
    width
}: ButtonFieldProps): JSX.Element => {
    return <div
        style={{
            backgroundColor:'blue',
            width: width,
            height: height
        }}
    >
        Emoji Field Selection

    </div>

};

export default ButtonField;