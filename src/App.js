
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Movies } from "./Pages/Movies";
import { Stream } from "./Pages/Stream";
import { Events } from "./Pages/Events";
import { Plays } from "./Pages/Plays";
import { Sports } from "./Pages/Sports";
import { Activites } from "./Pages/Activites";

function App() {
    return <div className="bg-light">
        <Header />
        <Routes>
            <Route path="/" element={<Movies />}></Route>
            <Route path="/stream" element={<Stream />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/plays" element={<Plays />}></Route>
            <Route path="/sports" element={<Sports />}></Route>
            <Route path="/activities" element={<Activites />}></Route>
            <Route path="*" element={<h4>Page Not Found</h4>}></Route>
        </Routes>
    </div>
}

export default App