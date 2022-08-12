import './Navbar.css'

function Navbar() {

    return (
        <div className="w3-card  w3-blue navbarcontainerwrapper">
            <img className="logoimg" src={process.env.PUBLIC_URL + '/images/logo.png'} />
        </div>
        );

}

export default Navbar;