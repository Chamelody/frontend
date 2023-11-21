import React from "react";

const PlaylistContent = ({ musicList, height, width }: {
    height: string,  // <length>
    width: string,   // <length> 
    musicList: any[]
}) => (
    <div
        style={{
            height: height,
            width: width,
            backgroundColor: "yellow"
        }}
    >
        <div>PlaylistContent layout</div>
        {musicList.map((music: any, index: number) => (
            <div></div>
            // <div
            //     key={index}
            //     style={{
            //         backgroundColor: "yellow"
            //     }}
            // >
            //     <div>{music.name}</div>
            //     <div>{music.artists}</div>
            // </div>
        ))}
    </div>
);

export default PlaylistContent;