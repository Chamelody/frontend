import React from "react";

type DivideContainerProps = {
    children?: React.ReactNode,
    ratio?: number,
    direction?: 'row' | 'column',
    width?: string,
    height?: string
};

type DivideItemProps = {
    children?: React.ReactNode,
    ratio?: number,
    width?: string,
    height?: string
};

export const DivideContainer: React.FC<DivideContainerProps> = ({
    children = undefined,
    direction = 'row',
    width = '100%',
    height = 'auto',
    ...otherAttributes
}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: direction,
            width: width,
            height: height,
            ...otherAttributes
        }}>
            {children}
        </div>
    );
};

export const DivideItem: React.FC<DivideItemProps> = ({
    children = undefined,
    ratio = 1,
    width = 'auto',
    height = 'auto',
    ...otherAttributes
}) => {
    return (
        <div style={{
            flexBasis: 0,
            flexGrow: ratio,
            width: width,
            height: height,
            ...otherAttributes
        }}>
            {children}
        </div>
    );
};
