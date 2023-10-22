import React, { useState } from 'react';
import ProjectContainer from './project_container';

export const projectShow = (dataList) => {
    
    function updateCounter(value, index){
        dataList[index].favCounter = value
    }
    return (
        dataList.map((project, index) => 
            <ProjectContainer 
              softwareName={project.softwareName} 
              teamName={project.teamName} 
              tags={project.tags} 
              img={project.img}
              counter={project.favCounter}
              key={project.softwareName}
            /> 
        )  
    )
}
export default projectShow