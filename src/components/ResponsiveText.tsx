import React from "react";
import { useMediaQuery } from "react-responsive";
import { ResponsiveSizeConst } from "../constants/ResponsiveSizeConst";
import { ResponsiveFontSizeNumberConst } from "../constants/ResponsiveFontSizeConst";

const responsiveFontSizeWeights = {
    MOBILE: 1 / 1.2,
    TABLET: 1 / 1.2,
    DESKTOP: 1
};

type ReponsiveTextProps = {
    children: React.ReactNode,
    color?: string,
    fontSize?: 'Large' | 'Medium' | 'Small' | 'Tiny' | number,  // unit: <px>
    fontWeight?: string | number,
    wordWarp?: 'normal' | 'break-word',
    width?: string | Array<string>,  // <length>
    height?: string  // <length>
    id?: string,
    className?: string
};

export const ResponsiveText: React.FC<ReponsiveTextProps> = ({
    children = null,
    color = undefined,
    fontSize = 'Large',
    fontWeight = undefined,
    wordWarp = 'normal',
    width = 'auto',
    height = 'auto',
    id = undefined,
    className = undefined,
    ...otherAttributes
}) => {
    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
    });
    const isMobileScreen = useMediaQuery({ maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH });

    let selectedFontSize: number;
    let finalFontSize: string;
    let selectedWidth: string;

    if (fontSize === 'Large') selectedFontSize = ResponsiveFontSizeNumberConst.LARGE;
    else if (fontSize === 'Medium') selectedFontSize = ResponsiveFontSizeNumberConst.MEDIUM;
    else if (fontSize === 'Small') selectedFontSize = ResponsiveFontSizeNumberConst.SMALL;
    else if (fontSize === 'Tiny') selectedFontSize = ResponsiveFontSizeNumberConst.TINY;
    else selectedFontSize = fontSize;  // fontSize is number

    if (isMobileScreen) {
        finalFontSize = String(selectedFontSize * responsiveFontSizeWeights.MOBILE) + 'px';
        selectedWidth = typeof width === 'object' ? width[0] : width;
    } else if (isTabletScreen) {
        finalFontSize = String(selectedFontSize * responsiveFontSizeWeights.TABLET) + 'px';
        selectedWidth = typeof width === 'object' ? width[1] : width;
    } else {  // Desktop Screen
        finalFontSize = String(selectedFontSize) + 'px';
        selectedWidth = typeof width === 'object' ? width[2] : width;
    }

    return <div id={id} className={className} style={{
        color: color,
        fontSize: finalFontSize,
        fontWeight: fontWeight,
        wordWrap: wordWarp,
        width: selectedWidth,
        height: height,
        ...otherAttributes
    }}>
        {children}
    </div>
}
