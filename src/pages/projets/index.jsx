import Data from "../../data/projets.json";
import Collapse from "../../components/collapse";

function Projets() {
    return (
      <>
        <section className="home_projet">
          <div className="packshot_projet">
            <p>L'ensemble des projets ont été réalisés avec OpenClassrooms dans le cadre de la formation "Développeur Web". Vous trouverez ci-dessous les 6 projets avec le Github correspondant et/ou le déploiement via GH-Pages. Les 3 derniers projets n'ont pas été déployer volontairement du aux consignes concernant l'installation des packages</p>
          </div>
          {Data.map((projets) => {
            return (
              <article key={projets.id} className="article_projet">
               <Collapse title={projets.title} appliLink={projets.link} imageCollapse={projets.cover} githubLink={projets.github} description={projets.description} langage={projets.langage} consigne={projets.consignes}/>
              </article>
            );
          })}
        </section>
      </>
    );
  }
  
  export default Projets;