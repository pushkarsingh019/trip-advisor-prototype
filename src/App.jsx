import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContinentScreen from "./ContinentScreen";
import HomeScreen from "./HomeScreen";
import PlaceScreen from "./PlaceScreen";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route
                    path="/continent/:continentId"
                    element={<ContinentScreen />}
                />
                <Route
                    path="/:continent/:country/:placeId"
                    element={<PlaceScreen />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
