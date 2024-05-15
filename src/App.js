import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import BlogDetails from './Components/BlogDetails/BlogDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/blogs/" exact element={<Blogs />} />
          <Route path="/blogs/:pathName" exact element={<BlogDetails />} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
