import React from 'react';
import {ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList} from "../../styles/AppBar";
import {Divider, ListItemButton, ListItemIcon} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {matches} from "@testing-library/jest-dom/dist/utils";

function Actions({matches}) {
    const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;
    return (
        <Component>
        <MyList type='row'>
            <ListItemButton
                sx={{
                    justifyContent: 'center',
                }}>
                <ListItemIcon sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <ShoppingCartIcon/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
            <ListItemButton
                sx={{
                    justifyContent: 'center',
                }}>
                <ListItemIcon
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    <PersonIcon/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
            <ListItemButton
                sx={{
                    justifyContent: 'center',
                }}>
                <ListItemIcon
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    <FavoriteIcon/>
                </ListItemIcon>
            </ListItemButton>
        </MyList>
        </Component>
    );
}

export default Actions;