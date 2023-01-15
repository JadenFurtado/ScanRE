import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import VulnChart from '../components/VulnChart';
import VulnLines from '../components/VulnLines';

import ResponsiveAppBar from '../components/ResponsiveAppBar';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

let items = [<VulnChart />,'Vulnerability List',<VulnLines />,'Vulnerability Lines'];
let itemList = [];
items.forEach((item, index) => {
  itemList.push(
    <Grid container spacing={1} key={index}>
      <Grid container item spacing={3}>
        <React.Fragment>
          <Grid item xs={2}>
            <Item></Item>
          </Grid>
          <Grid item xs={9}>
            <Item>{item}</Item>
          </Grid>
        </React.Fragment>
      </Grid>
    </Grid>
  )
})

export default function Report() {
  return (
    <>
    <ResponsiveAppBar />
    <Box sx={{ flexGrow: 1 }}>
      {itemList}
    </Box >
    </>
  );
}

