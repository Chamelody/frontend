import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './ui/main/Main';
import Home from './ui/home/Home';
import Playlist from './ui/playlist/Playlist';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/home" element={<Home />} />
                <Route path="/playlist" element={<Playlist />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
