import React from 'react'

import defaultLogo from '../assets/usm.png'

export const ProjectContainer = ({softwareName='Nombre Software', teamName='Nombre Equipo', tags=['Agregar tag'], img=defaultLogo}) => {
    return (
        <div className='project-container'>
            <img src={img} alt='logo usm' /><br />
            <div className='project-container__names'>
                <h2>{softwareName}</h2>
                <h3>{teamName}</h3>
                <p>Tags: {tags.map(
                    function tagIterator(tag, i, {length}){
                        return (
                            tag + ((i + 1 === length) ? '' : ', ')
                        )
                    }
                )}</p>
            </div>
        </div>
    )
}

export default ProjectContainer