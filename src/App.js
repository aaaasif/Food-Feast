import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Login from "./pages/Login/Login/Login";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import BookingPage from "./pages/BookingPage/BookingPage";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking-food/:id" element={<BookingPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
