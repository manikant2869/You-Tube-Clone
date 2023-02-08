import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import '../App.css'
import { Card,CardMedia,CardContent,Typography,CardActionArea } from '@mui/material'
import {demoVideoUrl,demoVideoTitle,demoChannelUrl, demoChannelTitle} from '../utils/constant';
import styled from 'styled-components';

const NavUnlisted = styled(Link)`
  text-decoration: none;
`;

// const linkStyle = {
//   margin: "1rem",
//   textDecoration: "none",
//   color: 'blue'
// };

const VideoCard = ({video:{id :{videoId},snippet}}) => {
    console.log(videoId,snippet);
    return (
        <Card sx={{width:{xs:'100%',sm:'358px',md:'250px'},boxShadow:'none',borderRadius:'none' }}>
            <CardActionArea >
            
            <NavUnlisted  to={videoId?`/video/${videoId}`:demoVideoUrl}  >
            
               <CardMedia
                  component='img' 
                  image={snippet?.thumbnails?.high?.url}
                  sx={{width:{xs:'100%',sm:'358px',md:'250px'}, height:'150'}}
                  alt={snippet?.title}
               />
               <CardContent sx={{background:'#1e1e1e',height:'106px'}}>
                <NavUnlisted className={'link-style'} to={videoId?`/video/${videoId}`:demoVideoUrl}/>
                <Typography  fontWeight="bold" color="#FFF" >
                    {snippet?.title?.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
                
                <NavUnlisted className={'link-style'} to={snippet?.channelId ? `/video/${snippet?.channelId}`:demoChannelUrl} />
                
                <Typography  fontWeight="bold" color="gray">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}></CheckCircle>
                </Typography>
               </CardContent>
               
            </NavUnlisted>
            </CardActionArea>
        </Card>
  )
}

export default VideoCard