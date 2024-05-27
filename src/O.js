import Slika from './Slike/slika1.jpg';
import { Link } from 'react-router-dom';
import Slika2 from './Slike/slika2.jpg';
function O() {
    return (
      <div className="O">
        <table>
            <th>
                <Link to="/" className='linkovi'><td>Početna</td></Link>
                <Link to="/povijest" className='linkovi'><td>Povijest</td></Link>
            </th>
        </table>
        <h1>O Forumli 1</h1><hr></hr>
        <div className="slikaDesno"><img src={Slika}></img><br></br>Početak Velike Nagrade Australije 2022.</div>
        <p>Formula 1, također poznata i kao F1, a službeno se naziva FIA Formula One World Championship je najviša klasa jednosjeda u automobilizmu koju je odobrila Međunarodna automobilistička federacija. Od 1950. do 1980., natjecanje se službeno zvalo Svjetsko automobilističko prvenstvo, a vozilo se po pravilima Formule 1, osim sezona 1952. i 1953. koje su se vozile po pravilima Formule 2. Termin Formula 1 u samom imenu natjecanja se pojavljuje tek 1981. Ime "Formula" se odnosi na skup pravila kojih se sudionici moraju pridržavati. Sezona Formule 1 sastoji se od niza utrka poznatih kao Velike nagrade, koje se održavaju na posebno izgrađenim stazama ili javnim cestama. Rezultati svake utrke kombinirani su sa sustavom bodovanja koji određuje dva godišnja Svjetska prvenstva, jedno za vozače i drugo za konstruktore. Vozači, konstruktori, momčadi, staze, suci i organizatori moraju biti nositelji super licence, najviše klase trkaćih licenci koje je izdala Međunarodna automobilistička federacija. </p>
        <p>Europa je tradicionalno središte Formule 1 i ostaje njeno vodeće tržište, iako se Velike nagrade održavaju širom svijeta, i njihov broj se povećava. Kao najskuplji sport na svijetu, ekonomski utjecaj Formule je također značajan tako da se mogu primijetiti njena politička i financijska previranja. Posljednjih godina je poznatija po glamuru. </p>
        <p>Formula 1 ima svoje korijene još u motornim utrkama na europskom tlu 1920. i 1930. Brojne Grand Prix organizacije su iznijele pravila za Svjetsko prvenstvo još prije drugog svjetskog rata, ali zbog malog broja utrka za vrijeme rata Svjetsko prvenstvo vozača nije regulirano sve do 1947., a inaguracijska sezona bila je 1950. Prvenstvo za konstruktore uslijedilo je 1958.</p>        
        <h2>Kvalifikacije i utrka</h2><hr></hr>
        <p>Svaki vikend Velike nagrade počinje u petak s dva slobodna treninga, a nastavlja se u subotu s još jednim slobodnim treningom. Nakon slobodnih treninga nastavljaju se kvalifikacije za nedjeljnu utrku. Timovi i vozači imaju 60 minuta po treningu da pripreme bolide za kvalifikacije i utrku.</p>
        <div className="slikaLivo"><img src={Slika2}></img><br></br>Ferrari 2024.</div><br></br><br></br>
        <p>Q1 traje 18 minuta i eliminira pet najsporijih vozača. U Q2, 15 preostalih vozača ima 15 minuta za postavljanje jednog od deset najbržih vremena i nastavak sljedećeg razdoblja. Konačno, Q3 traje 12 minuta i vidi preostalih deset vozača koji odlučuju o prvih deset pozicija na gridu.</p>
        <p>Utrka počinje krugom za zagrijavanje, nakon kojeg se bolidi poredaju na startne pozicije koje su osvojili u kvalifikacijama. Ako vozač iz nekog razloga ne krene u krug za zagrijavanje kreće u utrku sa zadnjeg mjesta. Svjetlosni signali označe početak utrke i utrka počinje. Utrka je duga nešto više od 300 km (osim Monte Carla koji je dugačak 260 km) i ograničena je na dva sata. Za vrijeme utrke vozači ulaze u boks jedan ili više puta na zamjenu guma. </p>
        <p>Na kraju utrke vozači i momčadi se boduju ovisno o poziciji koju su osvojili na kraju utrke. FIA je odredila da se boduje prvih deset koji su završili utrku i po sistemu 25-18-15-12-10-8-6-4-2-1 (prvi osvaja 25 bodova, drugi 18 bodova itd.). Ako se utrka (npr. zbog jake kiše) prekine prije isteka 75% normalne dužine utrke, vozačima se dodjeljuje samo polovica bodova (dakle 12,5-9-7.5-6-5-4-3-2-1-0,5) kao što je bio slučaj s utrkom u Maleziji 2009. koja je prekinuta nakon samo 31 kruga od planiranih 56. Pobjednik Prvenstva vozača odnosno Prvenstva konstruktora (momčadi) je onaj vozač odnosno momčad koja tijekom sezone osvoji najviše bodova. </p> 
      </div>
    );
  }

  export default O;