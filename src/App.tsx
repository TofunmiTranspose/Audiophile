import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<RootLayout />}>
          <Route index element={<Home />} />
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
