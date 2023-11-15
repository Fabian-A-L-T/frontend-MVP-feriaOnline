import { faMailForward, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';


export const ProjectContainer = ({softwareName, teamName, tags, img, counter, url, pageLink}) => {

    const [favCounter, setFavCounter] = useState(counter);
    const [flag, setFlag] = useState(true);

    return (
        <div className='project-container'>
            <div className='project-container-video'>
                <iframe width={'auto'} height={'100%'} src="https://www.youtube.com/embed/" title="YouTube video player" frameborder='0' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='project-container-info'>
                <div className='project-container__names'>
                    <div className='project-img-container'>
                        <img src={img} alt='logo proyecto' />
                    </div>
                    <div className='project-container-name'>
                        <h2>{softwareName}</h2>
                        <p>Creado por {teamName}</p>
                        <p>Tags: {tags.map(
                            function tagIterator(tag, i, {length}){
                                return (
                                    tag + ((i + 1 === length) ? '' : ', ')
                                )
                                }
                            )}
                        </p>
                    </div>
                </div>
                <div className='project-container-buttons'>
                    {flag?
                        <button onClick={() => {setFavCounter(favCounter => favCounter + 1); setFlag(false); counter +=1}} ><FontAwesomeIcon icon={faThumbsUp}/> {favCounter}</button>
                    :   
                        <button onClick={() => {setFavCounter(favCounter => favCounter - 1); setFlag(true);counter -=1}} ><FontAwesomeIcon icon={faThumbsUp} color='#0062d9'/> {favCounter}</button>
                    }
                    <a href='#'><FontAwesomeIcon icon={faMailForward}/> Visitar sitio</a>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectContainer