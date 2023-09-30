import React from "react"

type ScaffoldProps = {
    children?: React.ReactNode,
    height?: string,  // <length>
    width?: string,  // <length>
    minheight?: string,  // <length>
    minwidth?: string  // <length>
}

const scaffoldConstant = {
    SCREEN_HEIGHT: '100vh',
    SCREEN_WIDTH: '100vw',
    SCREEN_MIN_WIDTH: '280px'
}

const Scaffold: React.FC<ScaffoldProps> = ({
    children = undefined,
    height = scaffoldConstant.SCREEN_HEIGHT,
    width = scaffoldConstant.SCREEN_WIDTH,
    minheight = undefined,
    minwidth = scaffoldConstant.SCREEN_MIN_WIDTH,
    ...otherAttributes
}) => {
    return (
        <div 
            style={{
                height: height,
                width: width,
                minHeight: minheight,
                minWidth: minwidth,
                ...otherAttributes
            }}
        >
            {children}
        </div>
    )
}

export default Scaffold;
