import logo from '../assets/logo.svg';

function Header() {

    return (
      <header className="Header">
       <img src={logo} alt="logo" className='logo'/>
       <h1>my travel journal.</h1>
      </header>
    )
  }
  
  export default Header
