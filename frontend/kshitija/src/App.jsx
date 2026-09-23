import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import StreetPlay from "./EventDetails/StreetPlay";
import Dance from "./EventDetails/Dance";
import Singing from "./EventDetails/Singing";
import BestWaste from "./EventDetails/BestWaste";
import FacePainting from "./EventDetails/FacePainting";
import EscapeRoom from "./EventDetails/EscapeRoom";
import Debate from "./EventDetails/Debate";
import Reels from "./EventDetails/Reels";
import AdminDashboard from "./admin/AdminDashboard";
// import AdminLogin from "./admin/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Kshithija Website */}
        <Route path="/" element={<Main />} />

        <Route path="/admin" element={<AdminDashboard />} />

        {/* Event Details */}

        <Route path="/events/yugantara" element={<StreetPlay />} />
        <Route path="/events/vasudhaiva nrityam" element={<Dance />} />
        <Route path="/events/bhavataranga" element={<Singing />} />
        <Route path="/events/rupantara" element={<BestWaste />} />
        <Route path="/events/antariksha" element={<FacePainting />} />
        <Route path="/events/rahasyadvaram" element={<EscapeRoom />} />
        <Route path="/events/janasabha" element={<Debate />} />
        <Route path="/events/kshanachitra" element={<Reels />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
