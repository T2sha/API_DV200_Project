import Header from "./components/Header"
import ComOne from "./components/ComOne"
import ComTwo from "./components/ComTwo"
import ComThree from "./components/ComThree"
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path= "/" element={<ComOne />} />
      <Route path= "/ComTwo" element={<ComTwo />} />
      <Route path= "/ComThree" element={<ComThree />} />
     

      </Routes>
      
     
    </div>
  );
}

export default App;
