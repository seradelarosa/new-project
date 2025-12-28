import "./App.css";
import Desktop from "./components/Desktop";
import Navbar from "./components/Navbar";
import PageTitle from "./components/PageTitle";
import { useState } from "react";

function App() {

  const [pageTitle, setPageTitle] = useState("The Basement");
  const [pageSubtitle, setPageSubtitle] = useState("by Utopia");
  return (
    <div className="App">
      {" "}
      <PageTitle title={pageTitle} subtitle={pageSubtitle} />{" "}
      <Navbar setPageTitle={setPageTitle} setPageSubtitle={setPageSubtitle} />{" "}
      <Desktop />{" "}
    </div>
  );
}

export default App;