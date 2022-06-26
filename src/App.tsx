
import { ThemeProvider } from "@mui/material";
import {
    BrowserRouter,
} from "react-router-dom";

import Header from "./components/Header";
import { Rotas } from "./routes";
import { LightTheme } from "./shared/themes";


function App() {
    return (
        <ThemeProvider theme={LightTheme}>
            <BrowserRouter>
                <Rotas />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
