import React from "react";
import * as Div from "@mui/material";

export default function Emoji(props) {
    const styleDivLi = {
        cursor: 'default',
        display: 'flex',
        alignItems: 'center'
    }
    const { emoji, text } = props;
    
    return (
        <Div.Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={styleDivLi}>
            <Div.Box component={'span'} aria-label="cheese" role="img" mr={{ xs: '0.5rem', md: '1rem' }}>
                {emoji}
            </Div.Box>
            {text}
        </Div.Box>
    );
}