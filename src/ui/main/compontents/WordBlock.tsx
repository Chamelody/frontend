import React from 'react';
import { EmojiPath } from '../../home/emoji/EmojiPath';
import { useMediaQuery } from 'react-responsive';
import { ResponsiveSizeConst } from '../../../constants/ResponsiveSizeConst';

type WordBlockProps = {
  content: string;
  mode: 'lined' | 'filled' | 'default' | 'image' | 'emotag'; // mode prop 추가
  color?: string;
  emo?: string | null;
};

const WordBlock: React.FC<WordBlockProps> = ({ content, mode, color = 'white', emo = null }) => {
  const isMobileScreen = useMediaQuery({
    maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH
  });

  const isTabletScreen = useMediaQuery({
    minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
    maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
  });

  const fontSizes = {
    mobile: "6vw",
    tablet: "5vw",
    default: "3.4vw",
  };

  const imageSizes = {
    mobile: "8vw",
    tablet: "8.2vw",
    default: "6vw",
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

  const getImageSize = () => {
    if (isMobileScreen) {
      return imageSizes.mobile;
    } else if (isTabletScreen) {
      return imageSizes.tablet;
    } else {
      return imageSizes.default;
    }
  };

  const getResponsiveText = (content: string, color: string = "white", fontWeight: number = 800) => {
    return <p
      style={{
        fontSize: getFontSize(),
        fontWeight: fontWeight,
        color: color,
        letterSpacing: '-0.5px',
        marginBottom: '-8px',
        marginTop: '-8px',
      }}
    >
      {content}
    </p>
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
        height: 'auto',
        padding: isMobileScreen ? "10px" : "15px",
        borderRadius: '100px',
        backgroundColor: "white"
      }}
    >
      {getResponsiveText(content, color, 900)}
    </div>
  );

  const tagHighlight = (content: string, color: string = "white", emo: string | null) => (
    <div
      style={{
        display: 'flex',
        height: 'auto',
        padding: isMobileScreen ? "10px" : "15px",
        borderRadius: '100px',
        backgroundColor: "white"
      }}
    >
      {getResponsiveText(content, color, 900)}
      {emo && <img
        src={EmojiPath[emo]}
        alt={emo}
        style={{
          marginLeft: "10px",
          // maxWidth: "24px", 
          // maxHeight: "24px",
          width: getFontSize(),
          height: getFontSize(),

        }} />}
    </div>
  );

  const defaultHighlight = (content: string, color: string = "white") => (
    <div
      style={{
        height: 'auto',
        padding: isMobileScreen ? "10px" : "15px",
      }}
    >
      {getResponsiveText(content, color)}
    </div>
  );

  const imageBlock = (content: string) => (
    <img src={content} alt='img' style={{
      width: getImageSize(), height: getImageSize(),
      margin: 'auto'
    }} />

  )

  return (
    <div className={`word-block ${mode}`}>
      {mode === 'lined' && linedHighlight(content, color)}
      {mode === 'filled' && filledHighlight(content, color)}
      {mode === 'default' && defaultHighlight(content, color)}
      {mode === 'image' && imageBlock(content)}
      {mode === 'emotag' && tagHighlight(content, color, emo)}
    </div>
  );
};

export default WordBlock;
