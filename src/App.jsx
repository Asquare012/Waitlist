import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
// ROUTED COMPOENTS
import Home from "./components/Home";
import FaQ from "./components/FaQ";
//
import Join from "./components/Join";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/faq" Component={FaQ} />
        </Routes>
      </HashRouter>
      <Join />
      <Footer />
    </div>
  );
};

export default App;
