import "./App.css";
import { AboutMe } from "./components/about-me";
import { ContactMe } from "./components/contact-me";
import { Header } from "./components/header";
import { Projects } from "./components/projects";

function App() {

  return (
    <>
      <Header />
      <AboutMe />
      <ContactMe />
      <Projects />
    </>
  );
}

export default App;
