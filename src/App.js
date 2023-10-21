import { BrowserRouter,  } from "react-router-dom";

import FindNumber from "./components/findnumber";



function App() {
  return (
    <BrowserRouter>
      
      <div classame="App">
        <div id="page-body">
          <FindNumber />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
