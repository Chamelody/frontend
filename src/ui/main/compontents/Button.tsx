import React from "react";
import { Link } from "react-router-dom";
import FlexContainer from "../../../components/FlexContainer";

type ButtonProps = {
  content: string;
  img_file: string;
  size?: number;
  to: string; // 추가된 프로퍼티: 클릭 시 이동할 경로
};

const Button = ({ content, img_file, size = 14, to }: ButtonProps): JSX.Element => {
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
        cursor: 'pointer', // 클릭 가능한 커서 스타일 추가
      }}
    >
      <Link to={to} 
            style={{ 
             
                textDecoration: 'none', 
                fontSize: `${size}px`,
                color: "white",
                fontWeight: 500,
        }}>
        {content}
        <img
          src={img_file} alt='btn'
          height={`${size}px`} 
          width={`${size}px`}
        />
      </Link>
    </FlexContainer>
  );
};

export default Button;
