import * as React from 'react';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea, colors, Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MobileStepper from '@mui/material/MobileStepper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export default function App() {



return(
    <Box 
          sx={{
            width: 1280, height:735
    
          }}
        > 

<Box>    
    <Typography  sx={{mt:0 , ml:45 ,pt:3 ,fontSize: 50,color:'',fontFamily: 'fantasy'} }> What is FIRA ? </Typography>
    <Divider color='black' sx={{height:2,ml:40,mr:75}}></Divider>
    <Typography sx={{ml:20,mr:30,mt:3,fontFamily:'sansi',color:'',fontSize:20 }}>The Federation of International Sports Association (FIRA) founded by Prof. Jong-Hwan Kim, KAIST, Korea in 1996 is the oldest robot soccer competition in the world. From humble beginnings, FIRA has grown to a major robotics competition with the goal using sports as benchmark problems for state of the art research in robotics and other related areas. FIRA also includes the FIRA Air competition for autonomous flying robots, FIRA Challenge for robotics research with great societal benefits such as urban search and rescue robots, and FIRA Youth for the next generation of researchers. In 2018, FIRA RoboWorld Cup was held in Tai Chung, Taiwan and attracted more than 1,200 participants. And in 2019 The FIRA RoboWorld Cup was held in Changwon, South Korea and the year after, due to the covid-19 situation in the world, FIRA RoboWorld Cup had multiple events online.
    <div><Link href="https://firaworldcup.org/" underline="always">
  {'FIRA-Official site link '}
 </Link>
 </div>

</Typography>
         </Box>

<Box>
<CardMedia
        sx={{ height: 450,width:950,ml:10,mt:3 }}
        image="https://firaworldcup.org/wp-content/uploads/2021/09/logo-1.png"
        title="Aiming for Excellence"    
      />
</Box>

        </Box>
);
}
