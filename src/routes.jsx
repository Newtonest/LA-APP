import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Home } from "./pages/home";
export function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route></Route>
                <Route></Route>
            </Routes>
        </Router>
    )
}