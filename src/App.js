import "./App.css";
import Navbar from "./Components/Navbar/Navbar/Navbar";
import WelcomePage from "./Components/Welcome-page/WelcomePage";
import WorkPage_WD from "./Components/WorkPage_WD/WorkPage";
import Certifications from "./Components/Certifications/Certifications";
import AboutPage from "./Components/AboutPage/AboutPage";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import WorkPage_DA from "./Components/WorkPage_DA/WorkPage";

function App() {
  return (
    <div>
      <Navbar />
      <div className="on-screen">
        <WelcomePage />
        <WorkPage_DA />
        <WorkPage_WD />
        <Certifications />
        <AboutPage />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
