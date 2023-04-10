import * as React from 'react';
import * as Div from '@mui/material';

export default function Footer() {
    return (
        <Div.Grid item>
            <Div.Box component="footer" display="flex" flexDirection="column" alignItems="center" py="1.5rem" sx={{ opacity: 0.7 }} width="100%">
                <p>Copyright © 2023. All rights reserved</p>
            </Div.Box>
        </Div.Grid>
    );
}