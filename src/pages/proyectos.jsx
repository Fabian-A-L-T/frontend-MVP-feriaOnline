import React, { useState } from 'react';
import projectData from '../assets/data.json';
import NavBar from '../components/nav_bar'
import projectShow from '../components/projectShow';

export default function ProyectosPage(){

  var data = {
    "Projects":[
        {
            "softwareName": "algo",
            "teamName": "test 1",
            "tags": ["IA","IoT"],
            "img": "/fesw-logo.png",
            "favCounter": 12
        },
        {
            "softwareName": "algo 1",
            "teamName": "test 2",
            "tags": ["Seguridad"],
            "img": "/usm.png",
            "favCounter": 8
        },
        {
            "softwareName": "algo 2",
            "teamName": "test 3",
            "tags": ["Diseño", "3D"],
            "img": "/fesw-logo.png",
            "favCounter": 2
        },
        {
            "softwareName": "algo 3",
            "teamName": "test 4",
            "tags": ["IA"],
            "img": "/usm.png",
            "favCounter": 19
        },
        {
            "softwareName": "algo 4",
            "teamName": "test 5",
            "tags": ["IoT"],
            "img": "/fesw-logo.png",
            "favCounter": 26
        }
    ]
}
  var dataList = data.Projects
  dataList.sort((a, b) => (a.favCounter < b.favCounter) ? 1 : -1)

  const [projectList, setProjectList] = useState(dataList);

  return (
    <div className='page'>
      <NavBar />
      <h1 className='page__title'>Proyectos</h1>
      <h2>Buscar</h2>
      {projectShow(dataList)}
    </div>
  )
}