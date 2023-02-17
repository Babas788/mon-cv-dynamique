import { useParams } from "react-router-dom";
import Job from "../../data/metiers.json";
import Tag from "../../components/tags";

function Metier(){
    const { id } = useParams();
    let metier = Job.find((metier) => metier.id === id);
    return (
        <div className="metier">
          <img src={metier.cover} alt="photo_du_metier" className="photo_du_metier"/>
          <div className="metier_renseignement">
          <h1 className="metier_title">{metier.title}</h1>
          <h2 className="metier_description">{metier.description}</h2>
          <p className="metier_location">{metier.location}</p>
          <div className="competences">
          {metier.competences.map((tag, index) => (
              <Tag key={index} tag={tag} className="tag" />
            ))}
            </div>
          </div>
          <div className="resumer">
           <h2>Résumé des tâches effectuées</h2>
           <p>{metier.resume}</p>
          </div>
        </div>
      );
}

export default Metier