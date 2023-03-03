
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './component/Home.jsx';
import Tools from './component/Tools.jsx';
import Mail from './component/Mail.jsx';
import Study from './component/Study.jsx';

function App() {
  return (
    <BrowserRouter >
    <div>
    <Routes>
    <Route path="/np/" element={<Home />} exact/>
    <Route path="/np/herramientas" element={<Tools />}/>
    <Route path="/np/contacto" element={<Mail/>}/> 
    <Route path="/np/proyectos" element={<Study/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
