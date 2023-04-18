import About from "./components/About";
import HomePage from "./components/HomePage"
import Sidebar from "./components/Sidebar"
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <HomePage isOpen={isOpen} />
    </div>
  )
}

export default App
