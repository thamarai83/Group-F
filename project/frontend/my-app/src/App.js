import React,{useState} from "react"
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid, Tab, Tabs } from '@mui/material';

import logo from '../src/assets/logo.png'

function App() {
  const [value,setValue] = useState();

  return (
    <div className="App">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={3}>
          <Grid item xs={2}>
          <img src={logo}  alt="HTML5" style={{width: 50, height: 50}}/>
          </Grid>         
          <Grid item xs={8}>
         <Tabs sx={{marginCentre:'auto'}} value={value} onChange={(e,value)=> setValue(value)} textColor="inherit" indicatorColor="secondary">
            <Tab label="Home"></Tab>
            <Tab label="Book Details"></Tab>
            <Tab label="Contact Us"></Tab>
         </Tabs> 
         </Grid>
         <Grid item xs={2}>      
         <Button sx={{marginLeft:'auto'}} variant="contained">Login{ " "}</Button>
         <Button sx={{marginLeft:'10px'}} variant="contained">SignUp{ " " }</Button>
         </Grid>
         </Grid>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}

export default App;
