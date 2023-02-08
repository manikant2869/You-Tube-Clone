import React,{useState} from 'react'
import { Stack,Button } from '@mui/material';
import {Link} from 'react-router-dom';
import { logo } from '../utils/constant';
import {SearchBar ,SideBar} from './';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';

import { create } from '@mui/material/styles/createTransitions';

const Navbar = () => {
  const [iconButton,setIconButton] = useState(false);
  
  return (
 
  <Stack
     direction="row" 
     alignItems="center"
     sx={{position:"sticky",background:'#000',top:0}}
     zIndex={5}
  >
    <Button onClick={()=>{setIconButton(!iconButton)}}>
      <MenuIcon color='success' fontSize='large'></MenuIcon>

    </Button> 
    <SideBar iconButton={iconButton} setIconButton={setIconButton} />
  <Link to="/" >
    <img src={logo} alt="logo" height={40} style={{marginLeft:'10px'}} />
  </Link>
  <SearchBar />
  <Badge color="primary" badgeContent={20}>
        <NotificationsNoneIcon color='error' fontSize='large'/>
  </Badge>
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ml:4}}/>
  </Stack>

)
}

export default Navbar