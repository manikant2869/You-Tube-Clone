import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Stack, Box,Typography} from '@mui/material'
import { useState,useEffect } from 'react'
import { FetchFromApi } from '../utils/FetchFromApi'
import { CheckBox } from '@mui/icons-material'
import { border } from '@mui/system'
import Videos from './Videos'
const VideoDetail = () => {
  const {id} = useParams()
  const [VideoDetail,SetVideoDetail] = useState(null);
  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    FetchFromApi(`videos?part=snippet&,statistics&id=${id}`).then((data)=>SetVideoDetail(data.items[0]));
    FetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=>setVideos(data.items))
  },[id])

  if (!VideoDetail?.snippet ) {return 'Loading...'} 

  const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}}= VideoDetail
  return (
    <Box>
    <Stack minHeight='95vh' >
      <Box direction={{xs:'column',md:'row' }} >
          <Box flex={1} >
            <Box sx={{width:'100%',position:'sticky',top:'120px'}} >
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls width='100%' />
              <Typography color='#fff' variant='h5' fontWeight='bold' p={2} >
                  {title}
              </Typography>
              <Stack py={1} px={3} color='#fff' direction='row'>
                {channelTitle}
                <CheckBox fontSize='8px' color='gray' ml='10px' opacity='0.7'/>
                
              </Stack>
              <Stack direction='row' gap='20px' alignItems='center' color='#fff' ml='20px' >
                <Typography variant='body1'>
                   {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1'>
                   {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Box>
            
          </Box>
        
      </Box>
      <Box px={4} py={2} justifyContent='center' alignItems='center' m={2}>
              <Videos videos={videos} />
             </Box>
      
    </Stack>
    </Box>
  )
}

export default VideoDetail