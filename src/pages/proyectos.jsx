import React, { useEffect, useState } from 'react';
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

  const [uniqueTags, setUniqueTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState("");

  useEffect(() => {
    const allTags = dataList.flatMap((project) => project.tags);
    const uniqueTags = Array.from(new Set(allTags));
    setUniqueTags(uniqueTags);
  }, []);

  const handleTagChange = (event) => {
    setSelectedTags(event.target.value);
    if (event.target.value === "") {
      setProjectList(dataList);
    } else {
      const filteredProjects = dataList.filter((project) =>
        project.tags.includes(event.target.value)
      );
      setProjectList(filteredProjects);
    }
  };

  return (
    <div className='page'>
      <NavBar />
      <h1 className='page__title'>Proyectos</h1>
      <div>
      <h2>Buscar</h2>
      <select value={selectedTags} onChange={handleTagChange}>
        <option value="">Todos</option>
        {uniqueTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      </div>
      {projectShow(projectList)}
    </div>
  )
}