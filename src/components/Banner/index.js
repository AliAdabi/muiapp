import React from 'react';
import {Typography, useMediaQuery, useTheme} from "@mui/material";
import {BannerContainer, BannerContent, BannerDescription, BannerTitle} from "../../styles/Banner";

function Banner(props) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <BannerContainer>
            <BannerContent>
                <Typography variant='h6'>Huge Collection</Typography>
                <BannerTitle variant='h2'> New Paints</BannerTitle>
                <BannerDescription variant='Subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </BannerDescription>
            </BannerContent>
        </BannerContainer>
    );
}

export default Banner;