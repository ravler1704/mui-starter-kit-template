import React from 'react';
import {
  Box,
} from "@mui/material";
import Post from './Post'

function Feed(props) {
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </Box>
  );
}

export default Feed;
