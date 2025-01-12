import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../Header/Logo';
import RightSideIcons from './RightSideIcons';
import SearchBox from './SearchBox';
import {Container} from '@mui/system';
import {Grid} from '@mui/material';

const NavBar = () => {
   return (
      <Box
         sx={{
            borderStyle: 'solid',
            borderWidth: '0 0 1px 0 ',
            borderColor: '#D9D9D9',
         }}
      >
         <Container
            maxWidth="lg"
            sx={{
               padding: '0.3rem',
               backgroundColor: 'white',
               //  height: '10vh',
               //  width: '100%',
               boxShadow: 'none',

               // position: 'fixed',
            }}
         >
            <Grid container sx={{display: 'flex', alignItems: 'center'}}>
               <Grid
                  item
                  xs={3}
                  sm={4}
                  md={3}
                  lg={2}
                  sx={{
                     display: 'flex',
                     justifyContent: 'flex-start',
                  }}
               >
                  <Logo />
               </Grid>
               <Grid
                  item
                  xs={6}
                  sm={4}
                  md={6}
                  lg={8}
                  sx={{display: 'flex', justifyContent: 'center'}}
               >
                  <SearchBox
                     style={{
                        // flex: '1 0 auto',
                        height: '4vh',
                        width: '40vw',
                        borderColor: 'darkgray',
                        backgroundColor: '#D9D9D9',
                        borderRadius: '0.3rem',
                        paddingLeft: '1.5rem',
                        borderStyle: 'none',
                     }}
                     placeholder="искать вопросы"
                  />
               </Grid>
               <Grid
                  item
                  xs={3}
                  sm={4}
                  md={3}
                  lg={2}
                  sx={{display: 'flex', justifyContent: 'flex-end'}}
               >
                  <RightSideIcons />
               </Grid>
            </Grid>
         </Container>
      </Box>
   );
};

export default NavBar;
