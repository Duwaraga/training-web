import "./App.css";
import SignIn from "../SignInPage";
import AddNewCard from "../../Components/AddNewCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/todo" element={<AddNewCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
