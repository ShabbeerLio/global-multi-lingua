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
import Host from './Pages/Host';
import axios from 'axios';
import { useEffect, useState } from 'react';
import TermCondition from './Pages/TermCondition/TermCondition';

function App() {

  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${Host}/api/meta/fetchallmeta`, {
          headers: {
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY3NmEzNDQ1NzQyZjM1NjgyZTNlMWNjIn0sImlhdCI6MTcxOTA1MTA4NH0.OsZKI_I3GuMyljUYJmdqTCSxFWy_BPaNhDb2gfnXb6Q',
            'Content-Type': 'application/json',
          },
        });
        setApiData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const formatPathname = (pathname) => {
    return pathname?.toLowerCase().replace(/\s+/g, '-');
  };

  const getMeta = (path) => {
    if (!apiData) return { title: "", descriptions: "" };
    const formattedPath = formatPathname(path);
    const meta = apiData.find(item => formatPathname(item.page) === formattedPath);
    return meta && meta.subcategories.length > 0
      ? { title: meta.subcategories[0].title, descriptions: meta.subcategories[0].description }
      : { title: "Translation Services Delhi, Interpretation Services Delhi, Best Language Translation Service Provider India", descriptions: "We are reputed language translation & interpretation service provider in Delhi under the name of Global Multilingua Services, Translation Services Delhi, Interpretation Services Delhi" };
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home {...getMeta('home')} />} />
          <Route path="/about" exact element={<About {...getMeta('about')} />} />
          <Route path="/translation-services" exact element={<Translation {...getMeta('translation-services')} />} />
          <Route path="/interpretation-services" exact element={<Interpretation {...getMeta('interpretation-services')} />} />
          <Route path="/transcription-services" exact element={<Transcription {...getMeta('transcription-services')} />} />
          <Route path="/apostille-services" exact element={<Apostille {...getMeta('apostille-services')} />} />
          <Route path="/simultaneous-equipment" exact element={<Simultaneous {...getMeta('simultaneous-equipment')} />} />
          <Route path="/european-languages" exact element={<Languages heading={"European"} {...getMeta('european-languages')} />} />
          <Route path="/asian-languages" exact element={<Languages heading={"Asian"} {...getMeta('asian-languages')} />} />
          <Route path="/indian-languages" exact element={<Languages heading={"Indian"} {...getMeta('indian-languages')} />} />
          <Route path="/services" exact element={<Services {...getMeta('services')} />} />
          <Route path="/industry" exact element={<Industry {...getMeta('industry')} />} />
          <Route path="/clients" exact element={<Clients {...getMeta('clients')} />} />
          <Route path="/term-&-conditions" exact element={<TermCondition {...getMeta('term-&-conditions')} />} />
          <Route path="/contact" exact element={<Contact {...getMeta('contact')} />} />
          <Route path="/blogs" exact element={<Blogs {...getMeta('blogs')} />} />
          <Route path="/blogs/:pathName" exact element={<BlogDetails getMeta={getMeta} />} />
          <Route path="/:pathName" exact element={<LanguageCard getMeta={getMeta} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
