import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../../constants/ResponsiveSizeConst";
import { icons } from "../../../constants/style";

const HeaderLogo = (): JSX.Element => {
    const isMobileScreen = useMediaQuery({
        maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH,
    });

    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH,
    });

    const isDesktop = !isMobileScreen && !isTabletScreen;

    return (
        <Link to={"/"}>
            <div
                style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    cursor: "pointer"
                }}
            >
                <img src={icons.headerLogo} alt="logo"
                    style={{
                        width: isDesktop ? "20vw" : "20vh",
                        maxWidth: "200px"
                    }} />
            </div>
        </Link>
    );
};

export default HeaderLogo;
