import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { VideoDetail, Feed, ChannelDetails, Navbar, Searchfeed } from "./components";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
  <Route path="/" element={<Feed />} />
  <Route path="/video/:id" element={<VideoDetail />} />
  <Route path="/channel/:id" element={<ChannelDetails />} />
  <Route path="/search/:searchTerm" element={<Searchfeed />} />
</Routes>

      </Box>
    </BrowserRouter>
  );
}

export default App;
