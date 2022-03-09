import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./Pages/Homepage";
import { SignIn } from "./Pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={"Error Page"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
