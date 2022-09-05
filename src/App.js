import "./App.css";
import NavBar from "./component/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home";
import NotFound from "./component/notFound";
import LoginForm from "./component/loginForm";

function App() {
  return (
    <div id="main">
      <div>
        <NavBar />
      </div>

      <div>
        <Routes>
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />

          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
