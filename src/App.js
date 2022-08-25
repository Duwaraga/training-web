import "./App.css";
import SignIn from "./Pages/SignInPage";
import AddNewCard from "./Components/AddNewCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/card" element={<AddNewCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
