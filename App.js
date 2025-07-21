import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import ApplyForm from "./components/ApplyForm.jsx";
import DisplayInstructor from "./components/DisplayInstructor.jsx";
import Footer from './components/Footer.jsx';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apply" element={<ApplyForm />} />
            <Route path="/getAllInstructors" element={<DisplayInstructor />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
