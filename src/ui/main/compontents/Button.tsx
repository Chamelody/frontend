import React from "react";
import FlexContainer from "../../../components/FlexContainer";

type ButtonProps = {
    content : string;
    img_file : string;
    size?: number; 
};

const Button = ({content, img_file, size = 16} : ButtonProps): JSX.Element => {

  return (
    <FlexContainer 
        justifyContent="space-evenly" 
        flexDirection="row"
        flexWrap="nowrap"
        width="auto"
        {...{
            backgroundColor: '#323232',
            padding: '10px 16px',
            borderRadius: '100px',
            margin: '10px'
        }}
    >
       
        <p
            style={{
                fontSize: {size}+"px",
                color: "white",
                margin: 0,
                fontWeight: 500
            }}
            >
            {content} 
        </p>     
        <img 
            src={img_file} alt='btn'
            height={(size/1.2) + "px"}
            width={(size/1.2) + "px"}
        />

    </FlexContainer>
  );
};

export default Button;
