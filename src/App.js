import { BrowserRouter,  } from "react-router-dom";

import FindNumber from "./components/findnumber";
import GetMedian from "./components/getmedian";



function App() {
  return (
    <BrowserRouter>
      
      <div classame="App">
        <div id="page-body">
          <FindNumber />
          <GetMedian />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
