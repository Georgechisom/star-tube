import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Video from "../components/Video";
import ChannelCard from "../components/ChannelCard";
import { apiData } from '../assets/apiData';

const ChannelDetail = () => {
  const { id } = useParams();
  const [ channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])

  // console.log(channelDetail, videos);
  

  useEffect(() => {
    apiData(`channels?part=snippet&Id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]));

    apiData(`search?channelsId${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div 
          style={{ background: "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",zIndex: 10, height: "300px" }}
        />
         <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px"} }} />
          <Video videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail;