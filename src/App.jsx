import { useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import "./index.css";

function App() {
  const [showModal, setShowModal] = useState(true);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <Main />
      {/* conditional rendering sidebar*/}
      {showModal && <SideBar handleToggleModal={handleToggleModal} />}

      <Footer showModal={showModal} />
    </>
  );
}

export default App;
