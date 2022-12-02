import * as React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
const Login = () => {
    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >

                <Grid item xs={3}>
                    <div>Vuln3r@bility ScannRE</div>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField id="filled-basic" label="email" variant="filled" />
                        </div>
                        <div>
                            <TextField id="filled-basic" label="password" variant="filled" />
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