import "./App.css";
import { Container } from "@chakra-ui/react";
import { AboutMe } from "./components/about-me";
import { ContactMe } from "./components/contact-me";
import { Header } from "./components/header";
import { Projects } from "./components/projects";
function App() {
  return (
    <>
      <Container centerContent>
        <Header />
        <AboutMe />
        <ContactMe />
        <Projects />
      </Container>
    </>
  );
}

export default App;
