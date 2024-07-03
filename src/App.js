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
import Clients from './Pages/Clients/Clients';
import Contact from './Pages/Contact/Contact';
import LanguageCard from './Components/LanguageCard/LanguageCard';


function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/translation-services" exact element={<Translation />} />
            <Route path="/interpretation-services" exact element={<Interpretation />} />
            <Route path="/transcription-services" exact element={<Transcription />} />
            <Route path="/apostille-services" exact element={<Apostille />} />
            <Route path="/simultaneous-equipment" exact element={<Simultaneous />} />
            <Route path="/european-languages" exact element={<Languages heading={"European"} />} />
            <Route path="/asian-languages" exact element={<Languages heading={"Asian"} />} />
            <Route path="/indian-languages" exact element={<Languages heading={"Indian"} />} />
            <Route path="/:categoryId/:pathName" exact element={<LanguageCard />} />
            <Route path="/services" exact element={<Services />} />
            <Route path="/industry" exact element={<Industry />} />
            <Route path="/clients" exact element={<Clients />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/blogs/" exact element={<Blogs />} />
            <Route path="/blogs/:pathName" exact element={<BlogDetails />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
