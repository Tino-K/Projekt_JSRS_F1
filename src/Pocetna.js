import { Link } from 'react-router-dom';
import Vijest1 from './Slike/vijest1.avif';
import Vijest2 from './Slike/vijest2.avif';
import Vijest3 from './Slike/vijest3.webp';
function Pocetna() {
  return (
    <div className="Pocetna">
      <table>
        <th>
          <Link to="/o" className='linkovi'><td>O</td></Link>
          <Link to="/povijest" className='linkovi'><td>Povijest</td></Link>
          <Link to="/vozaci_i_timovi" className='linkovi'><td>Vozači i timovi</td></Link>
          <Link to="/registracija" className='linkovi'><td>Registriraj se</td></Link>
          <Link to="/prijava" className='linkovi'><td>Prijavi se</td></Link>
        </th>
      </table>
      <h1>Vijesti</h1>
      <hr></hr>
      <div className='vijesti'>
        <div className='vijest1'>
          <h2>Leclerc pobjednik domaće utrke</h2>
          <img src={Vijest1}></img>
        </div>
        <div className='vijest2'>
          <h3>McLaren u posebnim Senninim bojama za VN Monaka</h3>            
          <img src={Vijest2}></img>
        </div>
        <div className='vijest2'>
          <h3>Verstappen pobijedio u Imoli sa 7 desetinki sekunde prednosti ispred Norrisa</h3>
          <img src={Vijest3}></img>
        </div>
      </div>
    </div>
  );
}

export default Pocetna;
