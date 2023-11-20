import React, { useState } from "react";
import { DivideContainer, DivideItem } from "../../../components/Divider";
import { useMediaQuery } from "react-responsive";
import { ResponsiveSizeConst } from "../../../constants/ResponsiveSizeConst";
import { icons } from "../../../constants/style";
import { Emoji } from "../emoji/EmojiTypes";
import Button from "../../main/components/Button";
import SweetAlert from "./SweetAlert";


type ButtonFieldProps = {
    height: string      // <height>
    width: string       // <width> 
    onSelectStartEmoji: Emoji | null;
    onSelectTargetEmoji: Emoji | null;
}
const ButtonField = ({
    height,
    width,
    onSelectStartEmoji,
    onSelectTargetEmoji
}: ButtonFieldProps): JSX.Element => {
    const [showSweetAlert, setShowSweetAlert] = useState(false);
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


                        {/* 버튼을 눌렀을 때 onSelectStartEmoji, onSelectTargetEmoji 둘 중 하나가 null이면 alert를 띄워줘. */}
                        <Button
                            content="Go to playlist"
                            img_file={icons.headset}
                            size={18}
                            to={onSelectStartEmoji && onSelectTargetEmoji ? "/playlist" : ""}
                            onClick={() => {
                                if (onSelectStartEmoji === null || onSelectTargetEmoji === null) {
                                    setShowSweetAlert(true);
                                } else {
                                    // 선택된 Emoji가 모두 있다면 다른 동작을 수행하거나, Link 컴포넌트에 의한 이동을 진행할 수 있습니다.
                                    // 예: history.push("/playlist"); // 특정 경로로 이동
                                }
                            }}
                        />
                    </DivideItem>
                    <DivideItem ratio={componentLayoutInfo.ButtonLayout[2]}></DivideItem>

                    {showSweetAlert && (
                        <SweetAlert
                            icon="error"
                            title="Oops..."
                            text="Please select both start and target emojis"
                            onClose={() => setShowSweetAlert(false)}
                        />
                    )}

                </DivideContainer>

            </DivideItem>

            {/*Space Bottom*/}
            <DivideItem ratio={componentLayoutInfo.SpaceBottom}></DivideItem>
        </DivideContainer>

    </div >

};

export default ButtonField;