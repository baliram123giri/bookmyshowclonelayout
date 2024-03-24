import 'react-accessible-accordion/dist/fancy-example.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-multi-carousel/lib/styles.css';
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Movies } from "./Pages/Movies/Movies";
import { Stream } from "./Pages/Stream/Stream";
import { Events } from "./Pages/Events/Events";
import { Plays } from "./Pages/Plays/Plays";
import { Sports } from "./Pages/Sports/Sports";
import { Activites } from "./Pages/Activities/Activites";
import { Footer } from "./Footer/Footer";
import { Shows } from './Pages/Shows/Shows';
import Corporates from './Pages/Corporates/Corporates';
import Offers from './Pages/Offers/Offers';
import GiftCard from './Pages/GiftCard/GiftCard';

function App() {
    return <div >
        <Header />
        <Routes>
            <Route path="/" element={<Movies />}></Route>
            <Route path="/stream" element={<Stream />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/plays" element={<Plays />}></Route>
            <Route path="/sports" element={<Sports />}></Route>
            <Route path="/activities" element={<Activites />}></Route>
            <Route path="/list-your-shows" element={<Shows />}></Route>
            <Route path="/corporates" element={<Corporates />}></Route>
            <Route path="/offers" element={<Offers />}></Route>
            <Route path="/git-cards" element={<GiftCard />}></Route>
            <Route path="*" element={<h4>Page Not Found</h4>}></Route>
        </Routes>
        <Footer />
    </div>
}

export default App