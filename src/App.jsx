import Nav from "./components/Nav";
import { useDarkMode } from "./context/DarkModeContext";
import Home from "./pages/Home/Home";

const App = () => {
  const { darkMode } = useDarkMode(); // Access dark mode state


  return (
    <main className={`relative z-20 ${darkMode ? 'bg-dark' : 'bg-white'}`}>
      {/* Navbar */}
      <Nav />

      {/* Home Page */}
      <Home />
    </main>
  );
}

export default App;
