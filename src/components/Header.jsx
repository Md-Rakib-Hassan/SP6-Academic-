import Navbar from './Navbar';

const Header = () => {
  const name = localStorage.getItem('name');
    
    return (
    <header className="header">
      <Navbar></Navbar>
      <div className="section__container header__container" id="home">
        <div className="header__image">
          <img src="../assets/header.png" alt="header" />
          </div>
          <div>
            <h2 className='header__username'>Hi {name }</h2>
          <div className="header__content">
          <h2>IT IS GOOD TIME FOR THE GREATE TASTE OF BURGER</h2>
          <h1>BURGER<br /><span>WEEK</span></h1>
        </div>

          </div>
        
      </div>
    </header>
    );
};

export default Header;