import {Link} from "react-router-dom";
import RedBull from "./Slike/red-bull-racing.avif";
import Ferrari from "./Slike/ferrari.avif";
import McLaren from "./Slike/mclaren.avif";
import Mercedes from "./Slike/mercedes.avif";
import AstonMartin from "./Slike/astonMartin.avif";
import RB from "./Slike/RB.avif";
import Haas from "./Slike/haas.avif";
import Alpine from "./Slike/alpine.avif";
import Williams from "./Slike/williams.avif";
import Sauber from "./Slike/sauber.avif";
function Vozaci() {
    return (
      <div className="VozaciTimovi">
        <table>
          <th>
            <Link to="/" className='linkovi'><td>Početna</td></Link>
          </th>
        </table>
        <h1>Formula 1 timovi 2024</h1>
        <hr></hr>
        <div className="Timovi">
          <div className="RedBull">
            <h2 className="mjesto">1.</h2><h2 className="bodovi">276 bodova</h2>
            <h2 className="ime">Red Bull Racing</h2>
            <p className="vozac1">Max Verstappen (169 bodova)</p>
            <p className="vozac2">Sergio Perez (107 bodova)</p>
            <img src={RedBull}></img>
          </div>
          <div className="Ferrari">
          <h2 className="mjesto">2.</h2><h2 className="bodovi">252 boda</h2>
            <h2 className="ime">Ferrari</h2>
            <p className="vozac1">Charles Leclerc (138 bodova)</p>
            <p className="vozac2">Carlos Sainz (108 bodova)</p>
            <img src={Ferrari}></img>
          </div>
          <div className="McLaren">
          <h2 className="mjesto">3.</h2><h2 className="bodovi">184 boda</h2>
            <h2 className="ime">McLaren</h2>
            <p className="vozac1">Lando Norris (113 bodova)</p>
            <p className="vozac2">Oscar Piastri (71 bod)</p>
            <img src={McLaren}></img>
          </div>
          <div className="Mercedes">
          <h2 className="mjesto">4.</h2><h2 className="bodovi">96 boda</h2>
            <h2 className="ime">Mercedes</h2>
            <p className="vozac1">Lewis Hamilton (42 boda)</p>
            <p className="vozac2">George Russell (54 boda)</p>
            <img src={Mercedes}></img>
          </div>
          <div className="AstonMartin">
          <h2 className="mjesto">5.</h2><h2 className="bodovi">44 boda</h2>
            <h2 className="ime">Aston Martin</h2>
            <p className="vozac1">Fernando Alonso (33 boda)</p>
            <p className="vozac2">Lance Stroll (11 bodova)</p>
            <img src={AstonMartin}></img>
          </div>
          <div className="RB">
          <h2 className="mjesto">6.</h2><h2 className="bodovi">24 bodova</h2>
            <h2 className="ime">RB</h2>
            <p className="vozac1">Yuki Tsunoda (19 bodova)</p>
            <p className="vozac2">Daniel Ricciardo (5 bodova)</p>
            <img src={RB}></img>
          </div>
          <div className="Haas">
          <h2 className="mjesto">7.</h2><h2 className="bodovi">7 bodova</h2>
            <h2 className="ime">Hass</h2>
            <p className="vozac1">Nico Hulkenberg (6 bodova)</p>
            <p className="vozac2">Kevin Magnussen (1 bod)</p>
            <img src={Haas}></img>
          </div>
          <div className="Alpine">
          <h2 className="mjesto">8.</h2><h2 className="bodovi">2 boda</h2>
            <h2 className="ime">Alpine</h2>
            <p className="vozac1">Pierre Gasly (1 bod)</p>
            <p className="vozac2">Esteban Ocon (1 bod)</p>
            <img src={Alpine}></img>
          </div>
          <div className="Williams">
          <h2 className="mjesto">9.</h2><h2 className="bodovi">2 boda</h2>
            <h2 className="ime">Williams</h2>
            <p className="vozac1">Alexandar Albon (2 boda)</p>
            <p className="vozac2">Logan Sargeant (0 bodova)</p>
            <img src={Williams}></img>
          </div>
          <div className="Sauber">
          <h2 className="mjesto">10.</h2><h2 className="bodovi">0 bodova</h2>
            <h2 className="ime">Kick Sauber</h2>
            <p className="vozac1">Valtteri Bottas (0 bodova)</p>
            <p className="vozac2">Zhou Guanyu (0 bodova)</p>
            <img src={Sauber}></img>
          </div>
        </div>
      </div>
    );
  }
  
  export default Vozaci;