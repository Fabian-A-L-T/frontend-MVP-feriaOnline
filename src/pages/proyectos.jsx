import React, { useEffect, useState } from 'react';
import projectData from '../assets/data.json';
import NavBar from '../components/nav_bar'
import projectShow from '../components/projectShow';

export default function ProyectosPage(){

  var data = projectData
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
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flex: '5%' }}>
        <div style={{ marginLeft: '30%' }}>
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
  </div>
  <div style={{ flex: '90%' }}>
    {projectShow(projectList)}
  </div>
  <div style={{ flex: '5%' }}>

  </div>
</div>
    </div>
  )
}