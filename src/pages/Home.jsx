import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { BorderAllRounded } from '@mui/icons-material';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "var( --eerie-black-2)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: "var( --white-2)",
  padding: "10px",
  margin: "10px",
  justifyContent: "center",
  borderRadius: "20px",
}));

export default function FullWidthGrid() {
  return (

    <Grid container spacing={2}  >
      <Grid item xs={12} lg={3}>
        <Item >



          <Grid container spacing={2}  >
            <Grid item xs={5} lg={12}>

              <Box sx={{ width: 200, height: 200, bgcolor: 'var(--onyx)', }} style={{
                borderRadius: "30px",
                margin: "auto",
              }} >
                <img src="./face.png" alt="my_image" srcset="" />

              </Box>
            </Grid>
            <Grid item xs={7} lg={12}>
              <Typography level="h1" >
                Kartik Gupta
              </Typography>
              <Typography level="h5" backgroundColor={'var(--onyx)'}>
                Web Developer
              </Typography>
            </Grid>

          </Grid>
          </Item>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Item>xs=6 md=4</Item>
        <Item>xs=6 md=4</Item>
        <Item>xs=6 md=4</Item>
        <Item>xs=6 md=4</Item>
        <Item>xs=6 md=4</Item>
        <Item>xs=6 md=4</Item>

      </Grid>
    </Grid>

  );
}