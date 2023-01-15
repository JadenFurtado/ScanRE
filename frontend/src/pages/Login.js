import * as React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
const Login = () => {
    return (
        <>
            <ResponsiveAppBar />
            <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >

                <Grid item xs={3} sx={{ bgcolor: 'primary.main', borderRadius: '16px'}}>
                    <div>Vuln3r@bility ScannRE</div>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' }
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField id="filled-basic" color='warning' label="email" variant="outlined" sx={{ input: { color: 'white' } }}/>
                        </div>
                        <div>
                            <TextField id="filled-basic" label="password" variant="filled" sx={{ input: { color: 'white' } }}/>
                        </div>
                        <div>
                            <Button variant="contained">Login</Button>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default Login