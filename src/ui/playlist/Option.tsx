import React, { useEffect, useState } from "react";
import { palette, icons } from "../../constants/style";
import { useMediaQuery } from "react-responsive";
import ResponsiveSizeConst from "../../constants/ResponsiveSizeConst";
import FlexContainer from "../../components/FlexContainer";
import { ResponsiveText } from "../../components/ResponsiveText";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { queries } from "@testing-library/react";


interface OptionProps {
    musicList: any
}


const Option: React.FC<OptionProps> = ({
    musicList
}) => {
    const [data, setData] = useState<AxiosResponse | null | void>(null);
    const oAuthURL = 
    `https://accounts.google.com/o/oauth2/v2/auth?client_id=818228899048-vjkg3re3tqc9rg7629ksr14oqtd56uma.apps.googleusercontent.com&response_type=token&redirect_uri=http://localhost:3000&scope=https://www.googleapis.com/auth/youtube`

    const oAuthHandler = () => {
        window.location.assign(oAuthURL);
    }

    const isMobileScreen = useMediaQuery({
        maxWidth: ResponsiveSizeConst.MOBILE_SCREEN_MAX_WIDTH,
    });

    const isTabletScreen = useMediaQuery({
        minWidth: ResponsiveSizeConst.TABLET_SCREEN_MIN_WIDTH,
        maxWidth: ResponsiveSizeConst.TABLET_SCREEN_MAX_WIDTH,
    });

    const isDesktop = !isMobileScreen && !isTabletScreen;

    const [isThumbsUpHovered, setIsThumbsUpHovered] = useState(false);
    const [isSpotifyHovered, setIsSpotifyHovered] = useState(false);

    const buildQueries = (musicList: any): Array<string> => {
        return musicList.map((music: any) => `${music.name} ${music.artists}`);
    };

    const getYoutubeVideoIds = async (queries: Array<string>): Promise<Array<string>> => {
        const result: Array<string> = [];
        for (let query of queries) {
            const response: any = await axios.get("https://www.googleapis.com/youtube/v3/search", {
                params: {part: 'snippet', maxResults: 2, q: query},
                headers: {'Authorization': `Bearer ${Cookies.get('google-oauth')}`}
            });
            const videoId: string = response['data']['items'][0]['id']['videoId'];
            result.push(videoId);
        }
        return result;
    };

    const makeYoutubePlaylist = async (name: string): Promise<string> => {
        const response: any = await axios.post("https://www.googleapis.com/youtube/v3/playlists?part=snippet", 
        {
            snippet: { 
                title: name
            }
        }, 
        {
            headers: {
                'Authorization': `Bearer ${Cookies.get('google-oauth')}`,
                'Content-Type': "application/json"
            },
        });
        console.log(response);
        console.log(response['id']);
        return response['data']['id'];
    };

    const addPlaylist = async (youtubeVideoIds: Array<string>, playlistId: string) => {
        for (let videoId of youtubeVideoIds) {
            await axios.post("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet", 
            {
                snippet: {
                    playlistId: playlistId,
                    resourceId: {kind: "youtube#video", videoId: videoId},
                }
            }, 
            {
            headers: {
                'Authorization': `Bearer ${Cookies.get('google-oauth')}`,
                'Content-Type': "application/json"
            },
        });
        }
    }

    const generateYoutubePlaylist = async () => {
        const queries: Array<string> = buildQueries(musicList);
        console.log(queries)
        const youtubeVideoIds: Array<string> = await getYoutubeVideoIds(queries);
        const playlistId: string = await makeYoutubePlaylist(youtubeVideoIds.join(""));
        console.log(playlistId);
        await addPlaylist(youtubeVideoIds, playlistId);
    };

    const ThumbsUpStyle: React.CSSProperties = {
        width: isDesktop ? "3vw" : "3vh",
        height: isDesktop ? "3vw" : "3vh",
        backgroundColor: palette.lightblack,
        padding: "10px",
        borderRadius: "50%", // Use 50% for a circular shape
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "3vw",
        marginRight: "1vw",
        cursor: "pointer",
        transition: "transform 0.3s ease", // Add transition for smooth transform change
        transform: isThumbsUpHovered ? "rotate(15deg)" : "rotate(0deg)", // Initial transform set to 0, will be changed on hover
    };

    const SpotifyStyle: React.CSSProperties = {
        width: "auto",
        height: isDesktop ? "3vw" : "3vh",
        backgroundColor: palette.lightblack,
        padding: "10px",
        borderRadius: "50px", // Use 50% for a circular shape
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "width 0.3s ease, transform 0.3s ease", // Add transition for smooth width and transform change
        transform: isSpotifyHovered ? "translateX(6px)" : "translateX(0)", // Initial transform set to 0, will be changed on hover
    };

    return (
        <FlexContainer >
            <div
                style={ThumbsUpStyle}
                onMouseOver={() => setIsThumbsUpHovered(true)}
                onMouseOut={() => setIsThumbsUpHovered(false)}
            >
                <img src={icons.thumbsUp} alt="good" style={{ width: "100%" }} />
            </div>
            <div
                style={SpotifyStyle}
                onMouseOver={() => setIsSpotifyHovered(true)}
                onMouseOut={() => setIsSpotifyHovered(false)}
            >
                <span>
                    <img src={icons.logo} alt="spotify" style={{ width: "30px" }} />
                </span>
                <span>
                    <img src={icons.spotifyLogo} alt="spotify" style={{ width: "30px" }} />
                </span>
                {(isSpotifyHovered) && (
                    <span
                        onClick={Cookies.get('google-oauth') === undefined ? oAuthHandler : generateYoutubePlaylist}
                        style={{
                            margin: "0px 20px",
                        }}
                    ><ResponsiveText
                        color={palette.green}
                        fontSize={18}
                        fontWeight={800}
                    >
                            {"Add a Playlist"}
                        </ResponsiveText>
                    </span>
                )}
            </div>
        </FlexContainer>
    );
};

export default Option;
