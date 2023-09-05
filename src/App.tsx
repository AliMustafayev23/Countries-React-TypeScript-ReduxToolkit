import "./App.css";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";
import Header from "./layout/header";
import Footer from "./layout/footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
