import React from "react";
import { DivideContainer, DivideItem } from "../../../components/Divider";
import { useMediaQuery } from "react-responsive";
import { ResponsiveSizeConst } from "../../../constants/ResponsiveSizeConst";
import Button from "../../main/compontents/Button";
import btn_img from '../../main/intro/images/call_made.png'

type ButtonFieldProps = {
    height: string      // <height>
    width: string       // <width> 
}
const ButtonField = ({
    height,
    width
}: ButtonFieldProps): JSX.Element => {
    const isMobileScreen = useMediaQuery({
        maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH
    });

    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH
    });

    let componentLayoutInfo: {
        SpaceTop: number,
        Button: number,
        ButtonLayout: Array<number>
        SpaceBottom: number,
    }

    if (isMobileScreen) {
        componentLayoutInfo = { SpaceTop: 1, Button: 1, ButtonLayout: [1, 2, 1], SpaceBottom: 1 };
    } else if (isTabletScreen) {
        componentLayoutInfo = { SpaceTop: 1, Button: 1, ButtonLayout: [15, 10, 5], SpaceBottom: 1 };
    } else { // Desktop
        componentLayoutInfo = { SpaceTop: 11, Button: 1, ButtonLayout: [0, 10, 4], SpaceBottom: 1 };
    }


    return <div
        style={{
            //backgroundColor: 'blue',
            width: width,
            height: height
        }}
    >
        <DivideContainer direction="column" width="100%" height="100%">

            {/*Space Top*/}
            <DivideItem ratio={componentLayoutInfo.SpaceTop}></DivideItem>

            {/*버튼*/}
            <DivideItem ratio={componentLayoutInfo.Button}>
                <DivideContainer direction="row" width="100%" height="100%">
                    <DivideItem ratio={componentLayoutInfo.ButtonLayout[0]}></DivideItem>
                    <DivideItem ratio={componentLayoutInfo.ButtonLayout[1]}>
                        <Button content="Go to playlist" img_file={btn_img} size={17} to="/playlist" /></DivideItem>
                    <DivideItem ratio={componentLayoutInfo.ButtonLayout[2]}></DivideItem>
                </DivideContainer>

            </DivideItem>

            {/*Space Bottom*/}
            <DivideItem ratio={componentLayoutInfo.SpaceBottom}></DivideItem>
        </DivideContainer>

    </div >

};

export default ButtonField;