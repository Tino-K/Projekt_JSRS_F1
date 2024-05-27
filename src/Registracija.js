import React, {Component} from 'react';
import Dobrodoslica from './Dobrodoslica';
import { Link } from 'react-router-dom';
export class Registracija extends Component{
    state={
        spol:"",
        ime:"",
        prezime:"",
        datumRodenja:"",
        email:"",
        lozinka:"",
        pokaziDobrodoslicu: false,
    }
    onSubmit=()=>{
        const { spol, ime, prezime, datumRodenja, email, lozinka } = this.state;
        if (spol && ime && prezime && datumRodenja && email && lozinka) {
            this.setState({ pokaziDobrodoslicu: true });
        } else {
            alert("Molimo popunite sva polja.");
        }
    }
    render(){
        if(this.state.pokaziDobrodoslicu==true){
            return(<Dobrodoslica spol={this.state.spol} ime={this.state.ime} prezime={this.state.prezime}></Dobrodoslica>)
        }
        return(
            <div className='regiPoz'>
                <table>
                    <th>
                        <Link to="/" className='linkovi'><td>Početna</td></Link>
                    </th>
                </table>
                <div className='registracija'>
                    <h1>Napravi profil</h1>
                    <form>
                        <br></br><label>Spol:  </label><br></br>
                        <select value={this.state.spol} onChange={e=>this.setState({spol:e.target.value})}>
                            <option value="">Odaberite spol</option>
                            <option value="Muško">Muško</option>
                            <option value="Žensko">Žensko</option>
                        </select>
                        <br></br>
                        <label>Ime:  </label><br></br>
                        <input placeholder='Ime' value={this.state.ime} onChange={e=>this.setState({ime:e.target.value})}></input>
                        <br></br>
                        <label>Prezime:  </label><br></br>
                        <input placeholder='Prezime' value={this.state.prezime} onChange={e=>this.setState({prezime:e.target.value})}></input>
                        <br></br>
                        <label>Datum rođenja:  </label><br></br>
                        <input placeholder='Datum rođenja' type="date" value={this.state.datumRodenja} onChange={e=>this.setState({datumRodenja:e.target.value})}>
                        </input>
                        <br></br>
                        <label>Email:  </label><br></br>
                        <input placeholder='Email' type="email" value={this.state.email} onChange={e=>this.setState({email:e.target.value})}></input>
                        <br></br>
                        <label>Lozinka:  </label><br></br>
                        <input placeholder='Lozinka' type="password" value={this.state.lozinka} onChange={e=>this.setState({lozinka:e.target.value})}></input>
                        <br></br>
                        <button onClick={()=>this.onSubmit()} className='botun'>Registrirajte se</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Registracija;
