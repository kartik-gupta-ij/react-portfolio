import Home from "./pages/Home";
import ThemeProvider from "@/theme/ThemeProvider";
import Seo from "@/components/Seo";


function App() {
  return (
    <ThemeProvider>
      <Seo />
      <Home />
    </ThemeProvider>
  );
}

export default App;
