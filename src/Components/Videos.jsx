import React from 'react'
import {Stack,Box} from '@mui/material';
import { VideoCard } from './'
const Videos = ({videos}) => {
  //console.log(videos);
  return (
    <Stack direction={ 'row'} sx={{mx:{sm:2,md:4}}} flexWrap="wrap" justifyContent="start" gap={3}>
      {videos.map((video,idx)=>(
          <Box key={idx}>
            {video.id.videoId && <VideoCard video={video}/>}
           
          </Box>
      ))}
      
    </Stack>
  )
}

export default Videos