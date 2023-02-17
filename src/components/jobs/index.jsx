import Experience from "../../data/metiers.json";
import React from 'react';
import { Link } from "react-router-dom";

function Job() {
  return (
    <>
      <section className="home_job">
        {Experience.map((experience) => {
          return (
            <article key={experience.id} className="article_job">
              <Link to={`/experiences/${experience.id}`} className="job">
                <img
                  src={experience.cover}
                  alt="picture_job"
                  className="picture_job"
                />
                <div className="title">
                <p>{experience.title}</p>
                </div>
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default Job;