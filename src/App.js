import "./App.css";
import NavBar from "./component/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home";
import NotFound from "./component/notFound";
import LoginForm from "./component/loginForm";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />

          <Route exact path="/" element={<Home />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
