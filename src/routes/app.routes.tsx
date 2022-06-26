
import { Button } from "@mui/material";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/paginahome" element={<Button variant="contained" color="secondary">Teste</Button>} />
            <Route path="*" element={<Navigate to={"/paginahome"} />} />
        </Routes>
    )
}
