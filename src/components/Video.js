import { Stack, Box } from '@mui/material'

const Video = ({ videos }) => {
    console.log(videos);
    
  return (
    <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="start"
        gap={2}
    >
        {videos.map((item, myId) => (
            <Box key={myId}>
                {item.id.videoId && <videoCard video={item} />}
                {item.id.channelId && <channelCard channelDetail={item} />}
            </Box>
        ))}
    </Stack>
  )
}

export default Video