import React from 'react'
import { useParams } from 'react-router-dom'
import { Videos  } from './'
import { FetchFromApi } from '../utils/FetchFromApi'
import {Box,Typography} from '@mui/material'
import {useState,useEffect} from 'react';
function SearchDetail() {
  const {searchTerm} = useParams();
  const [videos,setVideos] = useState([])
  useEffect(()=>{
    FetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data)=>{setVideos(data.items)})
  },[searchTerm])
  return (
    <Box p={2} sx={{overflowY:'auto',flex:2,height:'90vh'}}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>Search Result For {searchTerm}
          <span style={{color:'#F31503'}} mr={2}> Videos </span>
          <Videos videos={videos} />
          </Typography>
    </Box>
  )
}

export default SearchDetail