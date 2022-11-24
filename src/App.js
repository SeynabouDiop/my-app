import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Filiale from './components/filiale/Filiale';
import Contact from './components/contact/Contact';
import Somme from './components/somme/Somme'



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/filiale' element={<Filiale/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/somme' element={<Somme/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
