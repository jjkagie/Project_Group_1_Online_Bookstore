import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Books from "./pages/Books";
import Contact from "./pages/Contact";


function App(){
  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route 
          path="/" 
          element={<Books />} 
        />

        <Route 
          path="/contact" 
          element={<Contact />} 
        />

      </Routes>

    </BrowserRouter>

  );
}
export default App;