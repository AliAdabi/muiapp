import React from 'react';
import {useMediaQuery, useTheme} from "@mui/material";
import AppBarMobile from "./AppBarMobile";
import AppBarDesktop from "./AppBarDesktop";

function AppBar(props) {
    const theme = useTheme();
    const matches  = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            {matches? <AppBarMobile/> : <AppBarDesktop/>}
        </>
    );
}

export default AppBar;
