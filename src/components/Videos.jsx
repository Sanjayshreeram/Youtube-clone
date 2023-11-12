import React from "react";
import { Stack, Box } from "@mui/material";
import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos) {
    // Render a loader or any placeholder content when videos are not available
    return <Loader />;
  }

  if (videos.length === 0) {
    // Optionally, you can render a message when videos are an empty array
    return <p>No videos available.</p>;
  }

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
