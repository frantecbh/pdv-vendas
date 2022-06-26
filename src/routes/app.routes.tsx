
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/paginahome" element={<p>Pagina Home</p>} />
            <Route path="*" element={<Navigate to={"/paginahome"} />} />
        </Routes>
    )
}
