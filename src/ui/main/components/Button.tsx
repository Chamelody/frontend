import React from "react";
import { Link } from "react-router-dom";
import FlexContainer from "../../../components/FlexContainer";
import { palette } from "../../../constants/style";

type ButtonProps = {
  content: string;
  img_file: string;
  size?: number;
  to: string;
  onClick?: () => void;
};

const Button = ({ content, img_file, size = 14, to, onClick }: ButtonProps): JSX.Element => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <FlexContainer
      justifyContent="space-evenly"
      flexDirection="row"
      flexWrap="nowrap"
      width="auto"
      {...{
        backgroundColor: palette.lightblack,
        padding: '10px 12px',
        borderRadius: '100px',
        cursor: 'pointer', // 클릭 가능한 커서 스타일 추가
      }}
    >
      <Link
        to={to}
        onClick={handleClick}
        style={{
          textDecoration: 'none',
          fontSize: `${size}px`,
          color: palette.white,
          fontWeight: 500,
          display: 'flex', // Make the container a flex container
          alignItems: 'center', // Center items vertically
          textAlign: 'center', // Center text horizontally
        }}>
        {content}
        <img
          src={img_file} alt='btn'
          height={`${size + 10}px`}
          width={`${size + 10}px`}
          style={{ marginLeft: "10px" }}
        />
      </Link>
    </FlexContainer>
  );
};

export default Button;
