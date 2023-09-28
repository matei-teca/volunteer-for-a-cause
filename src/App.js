
import HomePage from "./pages/home/homePage";
import ContactPage from "./pages/contact/contactPage";
import ErrorPage from "./pages/error/errorPage";
import LegalPage from "./pages/legal/legalPage";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (

    <Router>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/legal" element={<LegalPage/>}/>

        <Route path="*" element={<ErrorPage/>}/>
      </Routes>

      {/* <Footer/> */}
    </Router>
  )
}

export default App;
