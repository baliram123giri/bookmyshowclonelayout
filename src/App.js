import 'react-accessible-accordion/dist/fancy-example.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Movies } from "./Pages/Movies/Movies";
import { Stream } from "./Pages/Stream/Stream";
import { Events } from "./Pages/Events";
import { Plays } from "./Pages/Plays";
import { Sports } from "./Pages/Sports";
import { Activites } from "./Pages/Activites";
import { Footer } from "./Footer/Footer";

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
        <Footer />
    </div>
}

export default App