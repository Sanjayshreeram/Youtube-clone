import React, { useEffect, useState } from 'react'
import { Box,Stack,Typography } from '@mui/material'
import { BorderRight } from '@mui/icons-material'


import {Sidebar,Videos} from './';
import { FetchFromAPI } from '../utils/Fetchfromapi';


const Feed = () => {

  const [selectedCategory,setselectedCategory]=useState('New');
  const [videos,SetVideos]=useState([]);
  useEffect(()=>{
    FetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((s)=>SetVideos(s.items));



  },[selectedCategory])
  return (
    <Stack sx={{flexDirection:{sx:'column' ,md:'row'}}} >
        <Box sx={{height:{sx:'auto ',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
         
        <Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>

         <Typography className='copyright' variant='body2' sx={{color:'white',mt:'1.5'}}>
            copyright 2022
         </Typography>
        </Box>

        <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2 } }>
          <Typography variant="h4" mb={2} fontWeight='bold' sx={{ mt:1.5,color:'white'}}>
           {selectedCategory} <span style={{color:'#F31503'}}>videos</span>

          </Typography>
          <Videos videos={videos}/>

        </Box>

        


    </Stack>
  )
}

export default Feed