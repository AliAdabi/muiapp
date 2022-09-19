import React from 'react';
import {AppBarContainer, AppBarHeader} from "../../styles/AppBar";

function AppBarDesktop({matches}) {
    return (
        <AppBarContainer>
            <AppBarHeader> My Paints</AppBarHeader>
        </AppBarContainer>
    );
}

export default AppBarDesktop;