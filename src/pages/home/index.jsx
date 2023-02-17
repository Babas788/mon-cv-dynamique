
import Buton from "../../components/button";


function Home() {
    return (
      <div className="home">
        <div className="projet">
        </div>
        <div className="div_right">
        <Buton text="Projets Professionnels" link="/projets"/>
        </div>
        <div className="div_left">
        <Buton text="Expériences professionnelles" link="/experiences"/>
        </div>
      </div>
      
    );
  }
  
  export default Home;