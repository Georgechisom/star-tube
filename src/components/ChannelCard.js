import { Link } from 'react-router-dom';
import { Typography, Box, CardContent, CardMedia } from '@mui/material';
import { demoProfilePicture } from '../assets/constant'

const ChannelCard = ({ channelDetail, marginTop }) => (
    <Box
      sx={{ boxShadow: "none", borderRadius: "20px", display: 'flex', justifyContent: "center", alignItems: "center", width: { xs: "356px", md: "320px"}, height: "326px", margin: "auto", marginTop }}
    >
      <Link to={`/channel/${channelDetail?.Id?.channelId}`}>
        <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", color: "#068506" }}>
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: "50%", height: "180px", width: "180px", mb: 2, border: "1px solid #068506" }}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <checkCircle sx={{ fontSize: 14, color: "#068506", ml: '5px' }} />
          </Typography>
          {channelDetail?.statistics?.subcriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subcriberCount).toLocaleString()}Subcribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
)

export default ChannelCard;