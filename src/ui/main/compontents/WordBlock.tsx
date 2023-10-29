import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { ResponsiveSizeConst } from '../../../constants/ResponsiveSizeConst';
import { ResponsiveText } from '../../../components/ResponsiveText';

type WordBlockProps = {
    content: string;
    mode: 'lined' | 'filled' | 'default'; // mode prop 추가
    color?: string;
};  

const WordBlock: React.FC<WordBlockProps> = ({ content, mode, color='white'}) => {
  const isMobileScreen = useMediaQuery({ 
    maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH
  });

  const isTabletScreen = useMediaQuery({
    minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
    maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
  });

  const fontSizes = {
    mobile: 46,
    tablet: 36,
    default: 40,
  };

  const getFontSize = () => {
    if (isMobileScreen) {
      return fontSizes.mobile;
    } else if (isTabletScreen) {
      return fontSizes.tablet;
    } else {
      return fontSizes.default;
    }
  };

  const getResponsiveText = (content: string, color: string = "white") => {
    return <ResponsiveText
      fontSize={getFontSize()} // 함수 호출하여 결과 값을 전달
      fontWeight={800}
      color={color}
      {...{
        letterSpacing:'-0.5px', 
        marginBottom: "-8px", 
        marginTop: "-8px",
        }}>
      {content}
    </ResponsiveText>
  };
  

  const linedHighlight = (content: string, color: string = "white") => (
    <div
      style={{
        padding: isMobileScreen ? "10px" : "15px",
        borderRadius: '100px',
        border: isMobileScreen ? "3px solid white" : "5px solid white",
      }}
    >
      {getResponsiveText(content, color)} 
    </div>
  );
  

  const filledHighlight = (content: string, color: string = "white") => (
    <div
      style={{ 
        height : 'auto',
        padding:  isMobileScreen ? "10px" : "15px",
        borderRadius: '100px',
        backgroundColor:"white"
    }}
    >
      {getResponsiveText(content, color)} 
    </div>
  );

  const defaultHighlight = (content: string, color: string = "white") => (
    <div
      style={{ 
        height : 'auto',
        padding:  isMobileScreen ? "10px" : "15px",
    }}
    >
      {getResponsiveText(content, color)} 
    </div>
  );

  return (
    <div className={`word-block ${mode}`}>
      {mode === 'lined' && linedHighlight(content, color)}
      {mode === 'filled' && filledHighlight(content, color)}
      {mode === 'default' && defaultHighlight(content, color)}
    </div>
  );
};

export default WordBlock;
