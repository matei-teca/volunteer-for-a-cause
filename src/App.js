
import HomePage from "./pages/homePage";
import ContactPage from "./pages/contactPage";
import ErrorPage from "./pages/errorPage";
import LegalPage from "./pages/legalPage";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// testing
function App() {
  return (
    // <HomePage/>

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
