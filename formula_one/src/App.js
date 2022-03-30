import Header from "./components/Header"
import Dashboard from "./components/Dashboard"
import Compare from "./components/Compare"
import Timeline from "./components/Timeline"
import {Routes,Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      < Header />
      
      <Routes>
      <Route path="/" element = {<Dashboard />}/>
      <Route path="/Compare" element = {<Compare />}/>
      <Route path="/Timeline" element = {<Timeline />}/>

      </Routes>
    </div>
  );
}

export default App;
