import React, { useEffect, useState } from 'react';
import projectData from '../assets/data.json';
import NavBar from '../components/nav_bar';
import '../assets/ProyectosPage.css';
import Footer from '../components/footer';
import { faMailForward, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { useParams } from 'react-router-dom';

const ProjectPage = () => {
    const { projectName } = useParams();
    const [project, setProject] = useState(null);
    const [flag, setFlag] = useState(true);
    const [favCounter, setFavCounter] = useState(0);

    useEffect(() => {
        const foundProject = projectData.Projects.find(
            (project) => project.softwareName === projectName,
        );

        setProject(foundProject);
    }, [projectName]);

    useEffect(() => {
        if (project) {
            setFavCounter(project.favCounter);
        }
    }, [project]);

    if (!project) {
        return (
            <div>
                <NavBar />
                <div className="proyecto_no_encontrado">
                    <h2>Proyecto no encontrado</h2>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <NavBar />
            <div className='project-container' style={{ display: 'flex', flexWrap: 'wrap' }}>
  <div className='project-container-video' style={{ flex: '0 0 50%', maxWidth: '50%' }}>
    <iframe
      width={'100%'}
      height={'100%'}
      src={project.urlVideo}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullscreen="allowfullscreen"
    ></iframe>
  </div>
  <div className='project-container-info' style={{ flex: '1 1 50%', padding: '10px', boxSizing: 'border-box' }}>
    <div className='project-container__names' style={{ display: 'flex', alignItems: 'center' }}>
      <div className='project-img-container' style={{ marginRight: '10px' }}>
        <img src={project.img} alt='logo proyecto' />
      </div>
      <div className='project-container-name'>
        <h2>{project.softwareName}</h2>
        <p style={{ color: '#111111' }}> Creado por {project.teamName}</p>
        <p style={{ fontSize: '1.3rem' }}>Categoria: {project.category}</p>
        <p style={{ fontSize: '1.3rem' }}>
          Tags: {project.tags.map(function tagIterator(tag, i, { length }) {
            return tag + (i + 1 === length ? '' : ', ');
          })}
        </p>
      </div>
    </div>
    <div className='project-container-buttons' style={{ marginTop: '10px' }}>
      {flag ? (
        <button onClick={() => { setFavCounter(favCounter => favCounter + 1); setFlag(false); counter += 1; }}>
          <FontAwesomeIcon icon={faThumbsUp} /> {favCounter}
        </button>
      ) : (
        <button onClick={() => { setFavCounter(favCounter => favCounter - 1); setFlag(true); counter -= 1; }}>
          <FontAwesomeIcon icon={faThumbsUp} color='#0062d9' /> {favCounter}
        </button>
      )}
      <a href={project.urlPage} target='_blank'>
        <FontAwesomeIcon icon={faMailForward} /> Visitar sitio
      </a>
    </div>
    <div>
        <h2 style={{ marginTop: '20px' }}>Descripción</h2>
        <p>{project.descripcion}</p>
    </div>
    <div>
        { project.facebook && project.insta ? 
        <div>
        <a href={project.facebook}><FontAwesomeIcon icon={faFacebook} style={{ padding: '0.55rem', margin: '0.2rem', fontSize: '2rem', color: '#cfcfcf', backgroundColor: '#606060', borderRadius: '100%' }}/></a>
        <a href={project.insta}><FontAwesomeIcon icon={faInstagram} style={{ padding: '0.55rem', margin: '0.2rem', fontSize: '2rem', color: '#cfcfcf', backgroundColor: '#606060', borderRadius: '100%' }}/></a>
        </div> : null
        }
    </div>
  </div>
</div>


            <Footer />
        </div>
    );
};

export default ProjectPage;


