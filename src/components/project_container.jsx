import React, { useState } from 'react';


export const ProjectContainer = ({softwareName, teamName, tags, img, counter}) => {

    const [favCounter, setFavCounter] = useState(counter);
    const [flag, setFlag] = useState(true);

    return (
        <div className='project-container'>
            <img src={img} alt='logo proyecto' /><br />
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
            <div className='project-container__names'>
                {flag?
                    <button onClick={() => {setFavCounter(favCounter => favCounter + 1); setFlag(false); counter +=1}} style={{backgroundColor:"#2afa84"}}>Me interesa este proyecto</button>
                :   
                    <button onClick={() => {setFavCounter(favCounter => favCounter - 1); setFlag(true);counter -=1}} style={{backgroundColor:"#ff7070"}}>Ya no me interesa este proyecto</button>
                }  
                <p>A {favCounter} personas les interesa este proyecto</p>
            </div>
        </div>
    )
}

export default ProjectContainer