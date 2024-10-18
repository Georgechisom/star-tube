import { useState, useEffect} from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SideBar } from './Home';
import Video from './Video';
import { apiData } from '../assets/apiData';

const Feed = () => {
  const [selectedCategory, setSelectedCategory ] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    apiData(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory]);
  
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row"} }}>
      <Box sx={{ height: { sx: "auto", md: "92vh"}, borderRadius: "2px solid #3d3d3d", borderRight: "1px solid #028802", px: { sx: 0, md: 2}}}>
        <SideBar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: "green", fontSize: "25px" }}>{selectedCategory}
          <span style={{ color: '#F31503', fontSize: "35px", marginLeft: "4px" }}>Videos</span>
        </Typography>

        <Video videos={videos} />

        <Box sx={{ flexDirection: { sx: "column", md: "column"} }}>
          <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "green", textAlign: "center", fontWeight: "bold" }}>
            CopyRight 2024 Winsome media
          </Typography>
        </Box>
      </Box>
    </Stack>
  )
}

export default Feed