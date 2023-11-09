import React from "react";

type EmojiFieldProps = {
    height: string      // <height>
    width: string       // <width> 
}
const EmojiField = ({
    height, 
    width
}: EmojiFieldProps): JSX.Element => {
    return <div
        style={{
            backgroundColor:'red',
            width: width,
            height: height
        }}
    >
        Emoji Field Selection

    </div>

};

export default EmojiField;