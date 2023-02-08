import React from 'react'
import {useState,useEffect} from 'react';
import {Box,Stack,Typography} from '@mui/material'
import {SideBar,Videos} from './'
import { FetchFromApi } from '../utils/FetchFromApi';
const Feed = ({category}) => {
  const [video,setVideos] = useState([]);
  useEffect(()=>{
        FetchFromApi(`search?part=snippet&q=${category?category : "New"}`).then((data)=>setVideos(data.items))
     },[])
  return (
    <Stack sx={{flexDirection:{sx:'column' ,md:'row'}}}>
        {/* <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d', px:{sx:0,md:2}}}>
          {/* <SideBar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          /> */}
          {/* <Typography className='copyright' variant='body2' sx={{mt:2,color:"#fff"}}>copyright jsx media</Typography>
        </Box> */} */
        {/* //} */}
        <Box p={2} sx={{overflowY:'auto',flex:2,height:'90vh'}}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>New
          <span style={{color:'#F31503'}} mr={2}> Videos </span>
           
          </Typography>
          <Videos videos={video}/>
        </Box>
    </Stack>
  )
}

export default Feed