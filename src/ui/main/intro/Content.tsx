import React from "react";
import Description from "./Description";
import Title from "./Title";
import Button from "../compontents/Button";
import { icons } from "../../../constants/style";
import { DivideContainer, DivideItem } from "../../../components/Divider";
import { useMediaQuery } from "react-responsive";
import { ResponsiveSizeConst } from "../../../constants/ResponsiveSizeConst";

type ContentProps = {
    height: string  // <height>
    width: string   // <width> 
}
const Content = ({
    height,
    width,
}: ContentProps): JSX.Element => {
    const isMobileScreen = useMediaQuery({
        maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH
    });

    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
    });


    let componentLayoutInfo: {
        Space1: number,
        Title: number,
        Description: number,
        Button: number,
        ButtonLayout: Array<number>
        Space2: number
    }

    if (isMobileScreen) {
        componentLayoutInfo = { Space1: 0, Title: 2, Description: 2, Button: 1, ButtonLayout: [1, 2, 1], Space2: 1 };
    } else if (isTabletScreen) {
        componentLayoutInfo = { Space1: 1, Title: 4, Description: 2, Button: 1, ButtonLayout: [15, 10, 5], Space2: 0 };
    } else {
        componentLayoutInfo = { Space1: 1, Title: 2, Description: 2, Button: 1, ButtonLayout: [15, 10, 5], Space2: 1 };
    }


    return (
        <div
            style={{
                // backgroundColor:'pink',
                width: width,
                height: height
            }}
        >
            <DivideContainer direction="column" width="100%" height="100%">

                {/*Space*/}
                <DivideItem ratio={componentLayoutInfo.Space1}></DivideItem>

                {/*타이틀*/}
                <DivideItem ratio={componentLayoutInfo.Title}>
                    <Title />
                </DivideItem>

                {/*설명*/}
                <DivideItem ratio={componentLayoutInfo.Description}>
                    <Description />
                </DivideItem>

                {/*버튼*/}
                <DivideItem ratio={componentLayoutInfo.Button}>
                    <DivideContainer direction="row" width="100%" height="100%">
                        <DivideItem ratio={componentLayoutInfo.ButtonLayout[0]}></DivideItem>
                        <DivideItem ratio={componentLayoutInfo.ButtonLayout[1]}><Button content="Try it for free" img_file={icons.runningShoes} size={18} to="/home" /></DivideItem>
                        <DivideItem ratio={componentLayoutInfo.ButtonLayout[2]}></DivideItem>
                    </DivideContainer>

                </DivideItem>

                {/*Space*/}
                <DivideItem ratio={componentLayoutInfo.Space2}></DivideItem>

            </DivideContainer>
        </div>

    );
};

export default Content;

