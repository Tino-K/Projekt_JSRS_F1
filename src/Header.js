import Logo from "./Slike/logo.png";
function Header() {
  return (
    <div className="Header">
      <h1>Formula 1</h1>
      <a href={'https://www.formula1.com/'}><img src={Logo}></img></a>
    </div>
  );
}

export default Header;
