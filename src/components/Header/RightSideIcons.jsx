import {Avatar, Box, Link} from '@mui/material';
import Image from '../Header/image.svg';
import React from 'react';
import {useGlobalContext} from '../../contexts/GlobalContextProvider';
import {useNavigate} from 'react-router-dom';

const RightSideIcons = () => {
   const navigate = useNavigate();
   const {user} = useGlobalContext();
   return (
      <Box
         sx={{
            display: {xs: 'none', md: 'flex'},
            alignItems: 'center',
            width: '30%',
            justifyContent: 'flex-end',
            textAlign: 'center',
         }}
      >
         {user ? (
            <Avatar
               alt="Remy Sharp"
               src="https://i.pinimg.com/originals/c6/63/25/c663252ee33f5851edd48b80701d8e81.jpg"
               sx={{
                  cursor: 'pointer',
                  fill: 'black',
                  height: '2.5rem',
                  width: '2.5rem',
                  marginRight: '10px',
               }}
               onClick={() => {
                  navigate('/my-profile');
               }}
            />
         ) : (
            <Avatar
               sx={{
                  cursor: 'pointer',
                  fill: 'black',
                  height: '2.5rem',
                  width: '2.5rem',
                  marginRight: '10px',
               }}
               onClick={() => {
                  navigate('/auth');
               }}
            />
         )}
         <Link>
            <img
               src={Image}
               style={{
                  height: '2.5rem',
                  width: '2.5rem',
                  marginTop: '7px',
               }}
            />
         </Link>
      </Box>
   );
};

export default RightSideIcons;
