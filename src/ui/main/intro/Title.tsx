import React from "react";
import WordBlock from "../compontents/WordBlock";
import FlexContainer from "../../../components/FlexContainer";
import { icons } from "../../../constants/style";

const Title = (): JSX.Element => {
  const flexContainerStyles = {
    width: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: "50px",
    marginBottom: "8px",
    marginRight: "5px",
    paddingRight: "15px",
  };

  return (
    <div
      style={{
        height: "auto",
        width: "auto",
        // backgroundColor: "orange",
        paddingLeft: "50px",
        boxSizing: "border-box",
      }}
    >
      <FlexContainer flexWrap="wrap" alignContent="flex-start">
        <FlexContainer flexWrap="wrap" {...flexContainerStyles}>
          <WordBlock content={"Stress-Busting"} mode="default" />
          <WordBlock content={"Beats"} mode="lined" />
        </FlexContainer>

        <FlexContainer flexWrap="wrap" alignItems="center"
          {...flexContainerStyles}>
          <WordBlock content={"with the -"} mode="default" />
          <WordBlock content={icons.logo} mode="image" />
        </FlexContainer>

        <FlexContainer flexWrap="wrap" alignItems="center"
          {...flexContainerStyles}>
          <WordBlock content={("# Chamelody")} mode="filled" color="#2EC364" />
          <WordBlock content={"playlist"} mode="default" />
        </FlexContainer>
      </FlexContainer>
    </div>
  );
};

export default Title;
