import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header">
            <nav className="header_nav">
                <Link to="/mon-cv-dynamique" className="button_nav">
                    <p>Accueil</p>
                </Link>
                <Link to="/about" className="button_nav">
                    <p>A propos</p>
                </Link>
                <a href="mailto:agi.bastien@hotmail.fr" className="button_nav"><p>Contact</p></a>
            </nav>
        </div>
    )
};

export default Header; 