import { AboutMe } from "../components/about-me";
import { ContactMe } from "../components/contact-me";
import { Header } from "../components/header";
import { Projects } from "../components/projects";

export const Home = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <ContactMe />
      <Projects />
    </>
  );
};
