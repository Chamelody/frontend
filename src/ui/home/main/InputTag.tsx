import React from "react";

type InputTagProps = {
    height: string      // <height>
    width: string       // <width> 
}
const InputTag = ({
    height,
    width
}: InputTagProps): JSX.Element => {
    return <div
        style={{
            backgroundColor: 'pink',
            width: width,
            height: height
        }}
    >
        Input Tag Selection

    </div>

};

export default InputTag;