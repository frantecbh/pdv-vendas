
import {
    BrowserRouter,
} from "react-router-dom";

import Header from "./components/Header";
import { Rotas } from "./routes";


function App() {
    return (
        <BrowserRouter>
            <Rotas />
        </BrowserRouter>
    )
}

export default App
