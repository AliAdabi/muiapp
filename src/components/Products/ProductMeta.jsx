import React from 'react';
import {ProductMetaWrapper} from "../../styles/Products";
import {Typography} from "@mui/material";

function ProductMeta({product, matches}) {
    return (
        <ProductMetaWrapper>
            <Typography variant={matches? 'h6' : 'h5'} lineHeight={2}>
                {product.name}
            </Typography>
            <Typography variant={matches ? 'captoin' : 'body1'}>
                ${product.price}
            </Typography>
        </ProductMetaWrapper>
    );
}

export default ProductMeta;