import {Button, Container, ThemeProvider} from "@mui/material";
import {useEffect} from "react";
import theme from "./styles/theme";
import AppBar from "./components/AppBar";
import Banner from "./components/Banner";

function App() {

    useEffect(() => {
        document.title = "react material ui - home";
    }, [])
    return (
        <ThemeProvider theme={theme}>

        <Container maxWidth="xl"
        sx ={{
            background: "#ffff"
        }}
        >
            <AppBar/>
            <Banner/>
            {
                /*
                * AppBar
                * Banner
                * Promotions
                * title
                * Products
                * Footer
                * Searchbox
                * appdrawer
                * */
            }
            <Button variant='contained'>Test</Button>
        </Container>
        </ThemeProvider>

    );
}

export default App;
