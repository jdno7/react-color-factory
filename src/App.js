import {BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom"
import {useState} from "react"
import './App.css';
import Colors from "./Colors";
import ColorView from "./ColorView";

function App() {
  const [colors, setColors] = useState(['red', 'green', 'blue'])
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route  path="/" element={<App/>}/>
        <Route  path="/colors" element={<Colors colors={colors} setColors={setColors}/>}/>
        <Route  path="/colors/:color" element={<ColorView colors={colors}/>}/>
        <Route  path="*" element={<Navigate to="/colors"/>}/>
        {/* <Route  path="/colors/" element={<Navigate to="/colors"/>}/> */}
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
