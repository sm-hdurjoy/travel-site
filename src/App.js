// Library Imports

// Components Imports
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AllRoutes } from "./routes/AllRoutes";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <div>
        <Header />
        <AllRoutes />
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
