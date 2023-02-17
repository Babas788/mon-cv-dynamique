import { Link } from "react-router-dom";

function Buton({text, link}){
    return(
        <div className="container">
            <Link to={link}>
                    <div className="button">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                     {text}
                     </div>
            </Link>
        </div>
    )
}

export default Buton;