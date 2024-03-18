import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home />
      <Projects></Projects>
      <Experience></Experience>
      <ContactUs></ContactUs>
    </>
  );
}

export default App;
