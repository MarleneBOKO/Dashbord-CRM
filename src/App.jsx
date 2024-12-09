import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <Router>
      <div className="flex bg-[#FAFBFF] font-poppins min-w-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <MainContent />
        </div>
      </div>
    </Router>
  );
}

export default App;