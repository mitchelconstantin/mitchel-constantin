import "./App.css";
import { Container } from "@chakra-ui/react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sample } from "./pages/sample";

const routes = [
  { path: "/", element: <Home />, title: "Home" },
  { path: "/sample", element: <Sample />, title: "Sample" },
];

export const Navigation = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li>
            <Link to={route.path}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
