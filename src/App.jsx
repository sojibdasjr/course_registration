import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <ToastContainer />
    </>
  );
}

export default App;
