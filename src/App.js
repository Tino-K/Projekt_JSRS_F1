import './App.css';
import Header from './Header';
import Footer from './Footer';
import Registracija from './Registracija';
import Pocetna from './Pocetna';
import O from './O';
import Povijest from './Povijest';
import VozaciTimovi from './VozaciTimovi';
import Prijava from './Prijava';
import { BrowserRouter as BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Pocetna></Pocetna>}></Route>
          <Route path='/registracija' element={<Registracija></Registracija>}></Route>
          <Route path='/o' element={<O></O>}></Route>
          <Route path='/povijest' element={<Povijest></Povijest>}></Route>
          <Route path='/vozaci_i_timovi' element={<VozaciTimovi></VozaciTimovi>}></Route>
          <Route path='/prijava' element={<Prijava></Prijava>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
