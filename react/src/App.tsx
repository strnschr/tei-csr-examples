import { useRef } from "react";
import "./App.css";
import CETEI from "CETEIcean";

const tei = new CETEI();
const urls = {
  sturm:
    "https://raw.githubusercontent.com/digicademy/sturm-exist-app/master/xml/quellen/01.briefe/1914-00-00/JVH/Q.01.19140322.JVH.01.xml",
  faustus:
    "https://raw.githubusercontent.com/evt-project/evt-sample-documents/master/EVT2js/data/text/marlowe.xml",
};

function App() {
  const editionElement = useRef(document.createElement("div"));

  function onClick(mode: "sturm" | "faustus") {
    tei.getHTML5(urls[mode], (data) => {
      editionElement.current.innerHTML = "";
      editionElement.current.appendChild(data);
    });
  }

  return (
    <div>
      <button onClick={() => onClick("sturm")}>Der Sturm</button>
      <button onClick={() => onClick("faustus")}>Faustus</button>

      <div ref={editionElement}></div>
    </div>
  );
}

export default App;
