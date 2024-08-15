import "./App.css";
import { ContextWork } from "./containers/ContextWork";
import { UserProvider } from "./context/UserContext";
import { WelcomePage } from "./containers/WelcomePage";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/search";
import { Random } from "./components/random";
import { Mocktails } from "./components/Mocktail";
import { ConditionalRoute } from "./components/ConditionalRoute";

const App = () => {
    return (
        <UserProvider>
            <Navbar />
            <Routes>
                <Route index element={<WelcomePage />} />
                <Route path="verification" element={<ContextWork />} />
                <Route
                    path="search"
                    element={<ConditionalRoute ComponentForAdult={Search} ComponentForMinor={Mocktails} />}
                />
                <Route
                    path="random"
                    element={<ConditionalRoute ComponentForAdult={Random} ComponentForMinor={Mocktails} />}
                />
                <Route path="*" element={<div>This path doesn't exist yet...</div>} />
            </Routes>
        </UserProvider>
    );
};

export default App;
