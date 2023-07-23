import "./App.css";
import { AboutMe } from "./components/about-me";
import { Header } from "./components/header";
import { LinkContainer } from "./components/link-container";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AboutMe />
      <LinkContainer />
    </>
  );
}

export default App;
