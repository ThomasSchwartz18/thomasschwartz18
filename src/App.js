import "./App.css";
import Navbar from "./Components/Navbar/Navbar/Navbar";
import WelcomePage from "./Components/Welcome-page/WelcomePage";
import WorkPage from "./Components/WorkPage/WorkPage";
import Certifications from "./Components/Certifications/Certifications";
import AboutPage from "./Components/AboutPage/AboutPage";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="on-screen">
        <WelcomePage />
        <WorkPage />
        <Certifications />
        <AboutPage />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
