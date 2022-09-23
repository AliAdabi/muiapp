import {styled} from "@mui/material/styles";
import {Box, IconButton} from "@mui/material";
import {Colors as Colos} from "../theme";
import {slideInBottom, slideInRight} from '../../animation'

export const Product = styled(Box)(({theme}) => ({
    display: 'felx',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
        position: 'relative'
    }
}))

export const ProductImage = styled('img')(({src, theme}) => ({
    src: `url(${src})`,
    width: '100%',
    background: Colos.light_gray,
    padding: '10%',
    [theme.breakpoints.down('md')]: {
        width: '80%',
        padding: '24px',

    }
}))

export const ProductActionButton = styled(IconButton)(() => ({
    background: Colos.white,
    margin: 4,
}));

export const ProductFavButton = styled(ProductActionButton)(({ isfav, theme }) => ({
    color: isfav ? Colos.primary : Colos.light,
    [theme.breakpoints.up("md")]: {
        position: "absolute",
        right: 0,
        top: 0,
    },
}));

export const ProductAddToCart = styled(Box)(({show, theme}) => ({
    width: '120px',
    fontSize: '12px',
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        bottom: '2%',
        width: '300px',
        padding: '10px 5px',
        animation: show && `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450 , 0.940) both`
    },
    background: Colos.secondary,
    opacity: 0.9,
}))

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
    padding : 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}))

export const ProductActionsWrapper = styled(Box)(({ show, theme}) => ({
    [theme.breakpoints.up('md')]: {
        display: show ? 'visible' : 'none',
        position: 'absolute',
        right: 0,
        top: '20%',
        animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450 , 0.940) both`

    }
}))
