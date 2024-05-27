import { Link } from "react-router-dom";
function Dobrodoslica({spol,ime,prezime,pokazi}) {
  let tekst="";
  if(spol=="Muško"){
    tekst="Dobrodošao";
  }else if(spol=="Žensko"){
    tekst="Dobrodošla";
  }
  if(pokazi==true){
    return(
        <div className="Dobrodoslica">
            <table>
              <th>
                <Link to="/" className='linkovi'><td>Početna</td></Link>
              </th>
            </table>
            <div className="DobrodoslicaTekst">
                <h2>Dobrodošli natrag</h2>
                <p>Uživajte u najnovijim vijestima Formule 1</p>
            </div>
        </div>
    )
  }
  return (
    <div className="Dobrodoslica">
      <table>
        <th>
         <Link to="/" className='linkovi'><td>Početna</td></Link>
        </th>
      </table>
      <div className="DobrodoslicaTekst">
        <h2>{tekst}, {ime} {prezime} u klub Formule 1</h2>
        <p>Uživajte u najnovijim vijestima Formule 1</p>
      </div>
    </div>
  );
}

export default Dobrodoslica;
