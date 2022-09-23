import React, {useEffect, useState} from 'react';
import {MessageText, PromotionsContainer} from "../../styles/Promotions";
import {Box, Slide} from "@mui/material";

const messages = [
    "Welcome to your website",
    "20% off on Summer Sale",
    "Please Like and subscribe",
]


function Promotion() {
    const [messageIndex, setMessageIndex] = useState(0)
    const [show, setShow] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setShow(false)
        }, 3000)

        const intervalId = setInterval(() => {

            setMessageIndex(i => (i + 1) % messages.length)

            setShow(true)

            setTimeout(() => {
                setShow(false)
            }, 3000)

        }, 4000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <PromotionsContainer>
            <Slide
                direction={show ? 'left' : 'right'}
                in={show}
            >

                <Box display={'flex'} justifyContent='center' alignItems={'center'}>
                    <MessageText>
                        {messages[messageIndex]}
                    </MessageText>
                </Box>
            </Slide>
        </PromotionsContainer>
    );
}

export default Promotion;