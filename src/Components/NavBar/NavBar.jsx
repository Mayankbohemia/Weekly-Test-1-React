import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar__main">
      <div className="navbar__container">
        <div>
          <h3 className="logo">Flex Business pro</h3>
          <h4 className="navbar__color">Clean and Modern Business Theme</h4>
        </div>
        <div className="nav__links " >
            <button className="nav__link navbar__color ">Home</button> 
            <button className="nav__link navbar__color">About Us</button>
            <button className="nav__link navbar__color">Styleguide</button>
            <button className="nav__link navbar__color">Blog</button>
            <button className="nav__link navbar__color">Contact Us</button>        

        </div>
      </div>
    </div>
  );
};
export default NavBar;
