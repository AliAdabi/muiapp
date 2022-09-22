import React from 'react';
import {
    ActionIconsContainerDesktop,
    ActionIconsContainerMobile,
    AppBarContainer,
    AppBarHeader,
    MyList
} from "../../styles/AppBar";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./Actions";

function AppBarDesktop({matches}) {

    return (

            <AppBarContainer>
                <AppBarHeader> My Paints </AppBarHeader>
                <MyList type='row'>
                    <ListItemText primary='Home'/>
                    <ListItemText primary='Categories'/>
                    <ListItemText primary='Products'/>
                    <ListItemText primary='Contact Us'/>
                    <ListItemButton>
                        <ListItemIcon>
                            <SearchIcon/>
                        </ListItemIcon>
                    </ListItemButton>
                </MyList>
                <Actions matches={matches}/>
            </AppBarContainer>

    );
}

export default AppBarDesktop;