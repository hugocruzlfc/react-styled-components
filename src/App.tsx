import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import GlobalStyle from "./globalStyles";
import { Home, Signup, Pricing, NotMatch } from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/pricing"
          element={<Pricing />}
        />
        <Route
          path="*"
          element={<NotMatch />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
