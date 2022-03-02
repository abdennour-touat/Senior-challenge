import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Landing } from "./pages/Landing";
import PickAvatar from "./pages/PickAvatar";
import { CreateRoom } from "./pages/CreateRoom";
import GameRoom from "./pages/GameRoom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/gameRoom" element={<GameRoom />} />
            <Route path="/createRoom" element={<CreateRoom />} />
            <Route path="/" element={<Landing />} />
            <Route path="/avatar" element={<PickAvatar />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
