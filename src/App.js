import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import About from './Pages/About/About';
import Translation from './Pages/Services/Translation';
import Transcription from './Pages/Services/Transcription';
import Interpretation from './Pages/Services/Interpretation';
import Apostille from './Pages/Services/Apostille';
import Simultaneous from './Pages/Services/Simultaneous';
import Services from './Pages/Services/Services';
import Languages from './Pages/Languages/Languages';
import Industry from './Pages/Industry/Industry';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/gmls" exact element={<Home />} />
          <Route path="/gmls/about" exact element={<About />} />
          <Route path="/gmls/translation-services" exact element={<Translation />} />
          <Route path="/gmls/services" exact element={<Services />} />
          <Route path="/gmls/industry" exact element={<Industry />} />
          <Route path="/gmls/european-languages" exact element={<Languages heading={"European Languages"}/>} />
          <Route path="/gmls/asian-languages" exact element={<Languages heading={"Asian Languages"}/>} />
          <Route path="/gmls/indian-languages" exact element={<Languages heading={"Indian Languages"}/>} />
          <Route path="/gmls/interpretation-services" exact element={<Interpretation />} />
          <Route path="/gmls/transcription-services" exact element={<Transcription />} />
          <Route path="/gmls/apostille-services" exact element={<Apostille />} />
          <Route path="/gmls/simultaneous-equipment" exact element={<Simultaneous />} />
          {/* <Route path="/blogs/" exact element={<Blogs />} />
          <Route path="/blogs/:pathName" exact element={<BlogDetails />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
