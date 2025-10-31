import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./components/Home";
import Headphones from "./components/headphone/Headphones";
import Speakers from "./components/speakers/Speakers";
import Earphones from "./components/earphones/Earphones";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="headphones" element={<Headphones />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="earphones" element={<Earphones />} />
          <Route
            path="*"
            element={
              <div className="dark1 h-[90vh] text-white text-5xl font-bold flex justify-center items-center">
                NOT FOUND
              </div>
            }
          />
        </Route>
        <Route path="*" element={<div>NOT FOUND</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
