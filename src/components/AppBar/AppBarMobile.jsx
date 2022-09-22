import React from 'react';
import {AppBarContainer, AppBarHeader} from "../../styles/AppBar";
import {IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./Actions";

function AppBarMobile({matches}) {
    return (
        <AppBarContainer>
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <AppBarHeader textAlign={'center'} varient="h4">
                My Paints
            </AppBarHeader>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <Actions matches={matches}/>
        </AppBarContainer>
    );
}

export default AppBarMobile;