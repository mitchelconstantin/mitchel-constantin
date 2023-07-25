import "./App.css";
import { Container } from "@chakra-ui/react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Coffee } from "./pages/coffee";

const routes = [
  { path: "/", element: <Home />, title: "Home" },
  { path: "/coffee", element: <Coffee />, title: "Coffee" },
];

export const Navigation = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.title}>
            <Link to={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

function App() {
  return (
    <HashRouter>
      <Container centerContent>
        {/* <Navigation /> */}
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.title}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
