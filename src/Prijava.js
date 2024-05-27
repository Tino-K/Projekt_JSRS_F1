import React, {Component} from 'react';
import Dobrodoslica from './Dobrodoslica';
import { Link } from 'react-router-dom';
export class Prijava extends Component{
    state={
        email:"",
        lozinka:"",
        pokaziDobrodoslicuNatrag: false,
    }
    onSubmit=()=>{
        const {email,lozinka} = this.state;
        if (email && lozinka) {
            this.setState({ pokaziDobrodoslicuNatrag: true });
        } else {
            alert("Molimo popunite sva polja.");
        }
    }
    render(){
        if(this.state.pokaziDobrodoslicuNatrag==true){
            return(<Dobrodoslica pokazi={this.state.pokaziDobrodoslicuNatrag}></Dobrodoslica>)
        }
        return(
            <div className='prijavaPoz'>
                <table>
                    <th>
                        <Link to="/" className='linkovi'><td>Početna</td></Link>
                    </th>
                </table>
                <div className='prijava'>
                    <h1>Prijavi se</h1>
                    <form>
                        <br></br><label>Email:  </label><br></br>
                        <input placeholder='Email' type="email" value={this.state.email} 
                        onChange={e=>this.setState({email:e.target.value})}></input>
                        <br></br><label>Lozinka:  </label><br></br>
                        <input placeholder='Lozinka' type="password" value={this.state.lozinka} 
                        onChange={e=>this.setState({lozinka:e.target.value})}></input>
                        <br></br><button onClick={()=>this.onSubmit()} className='botun'>Prijavi se</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Prijava;
