import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./Screens/Header/Header";
const App = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
