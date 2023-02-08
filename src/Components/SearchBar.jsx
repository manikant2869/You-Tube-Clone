import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper,IconButton,Input} from '@mui/material'
import { Search } from '@mui/icons-material' 
import '../App.css';
const SearchBar = () => {
  const [searchTerm,setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      searchTerm('');
    }
  }
  return (
    <Paper
        component="form"
        onSubmit={(e)=>{handleSubmit(e)}}
        elevation={10}
        sx={{ width:{xs:'40%',sm:'40%',md:'60%'},borderRadius:20,boxShadow:"none",pl:2,mr:{sm:5,md:10},ml:{xs:2,sm:25,md:18},backgroundColor:'lightgray'}}
    >
      <Input sx={{width:{xs:'60%',sm:'70%',md:'90%'},outline:'none',border:'0px solid'}}  placeholder='Search...' value={searchTerm} type="text" onChange={(e)=>{setSearchTerm(e.target.value)}} ></Input>
        <IconButton type="Submit" sx={{p:"10px",color:"red"}}>
            <Search />
        </IconButton>
    
      
    </Paper>
   
  )
}

export default SearchBar