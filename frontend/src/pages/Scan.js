import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import VulnChart from '../components/VulnChart';
import VulnLines from '../components/VulnLines';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

let items = ['link1', 'link2', 'link3'];
let itemList = [];

items.forEach((item, index) => {
    itemList.push(
        <Grid container wrap="nowrap" spacing={5} p={2}>
            <Grid item p={2}>
                <Avatar>W</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth p={2}>
                <Typography noWrap><Link href={"reports/"+index}>{item}</Link></Typography>
            </Grid>
        </Grid>
    )
})

export default function Scan() {
    return (
        <>
            <ResponsiveAppBar />
            <Box sx={{ flexGrow: 1 }}>
                {itemList}
            </Box >
        </>
    );
}

