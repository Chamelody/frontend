import React from "react";

type SpacerProps = {
    height: string;
};

const Spacer: React.FC<SpacerProps> = ({ height }) => (
    <div
        style={{
            width: "100%",
            height: height,
        }}
    ></div>
);

export default Spacer;
