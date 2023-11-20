import React from 'react';
import { EmojiPath } from '../../home/emoji/EmojiPath';
import { useMediaQuery } from 'react-responsive';
import { ResponsiveSizeConst } from '../../../constants/ResponsiveSizeConst';
import { palette } from '../../../constants/style';

type WordBlockProps = {
  content: string;
  mode: 'lined' | 'filled' | 'default' | 'image' | 'emotag'; // mode prop 추가
  color?: string;
  emo?: string | null;
  onClick?: () => void;
};

const WordBlock: React.FC<WordBlockProps> = ({ content, mode, color = palette.white, emo = null }) => {
  const isMobileScreen = useMediaQuery({
    maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH
  });

  const isTabletScreen = useMediaQuery({
    minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
    maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
  });

  const fontSizes = {
    mobile: "6vw",
    tablet: "4.2vw",
    default: "3.2vw",
  };

  const imageSizes = {
    mobile: "7.2vw",
    tablet: "8vw",
    default: "5.2vw",
  };

  const emotagSizes = {
    mobile: "7.4vw",
    tablet: "6vw",
    default: "4.2vw",

  }

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

  const getEmotagSize = () => {
    if (isMobileScreen) {
      return emotagSizes.mobile;
    } else if (isTabletScreen) {
      return emotagSizes.tablet;
    } else {
      return emotagSizes.default;
    }
  };

  const getResponsiveText = (content: string, color: string = palette.white, fontWeight: number = 800) => {
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


  const linedHighlight = (content: string, color: string = palette.white) => (
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


  const filledHighlight = (content: string, color: string = palette.white) => (
    <div
      style={{
        height: 'auto',
        padding: isMobileScreen ? "10px" : "15px",
        borderRadius: '100px',
        backgroundColor: palette.white
      }}
    >
      {getResponsiveText(content, color, 900)}
    </div>
  );

  const tagHighlight = (content: string, color: string = palette.white, emo: string | null) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        padding: emo ? "8px 18px" : "16px 24px",
        borderRadius: '100px',
        backgroundColor: palette.white,
        cursor: 'pointer'
      }}
    >
      {getResponsiveText(content, color, 900)}
      {emo && <img
        src={EmojiPath[emo]}
        alt={emo}
        style={{
          marginLeft: "10px",
          width: getEmotagSize(),
          height: getEmotagSize(),
          // backgroundColor: "red"
        }} />}
    </div>
  );

  const defaultHighlight = (content: string, color: string = palette.white) => (
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
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <img
        src={content}
        alt='img'
        style={{
          width: getImageSize(),
          height: getImageSize(),
        }}
      />
    </div>
  );

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
