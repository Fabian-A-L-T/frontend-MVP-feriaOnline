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
  const [selectedTag, setSelectedTag] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const allTags = projectList.flatMap((product) => product.tags);
      const uniqueTags = Array.from(new Set(allTags));
      setUniqueTags(uniqueTags);
      setLoading(false);
    }, 1000);
  }, []);

  const handleTagChange = (event) => {
    setLoading(true); // Set loading state to true
    setSelectedTag(event.target.value);
    setTimeout(() => {
      setLoading(false); // Set loading state to false after processing the tag change
    }, 1000); // Simulate a 1-second loading time
  };

  return (
    <div className='page'>
      <NavBar />
      <h1 className='page__title'>Proyectos</h1>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flex: '5%' }}>
        <div style={{ marginLeft: '30%' }}>
      <h2>Buscar</h2>
      <select value={selectedTag} onChange={handleTagChange}>
        <option value="">All</option>
        {uniqueTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  </div>
  <div style={{ flex: '90%' }}>
    {loading ? (
      <div>Loading...</div>
    ) : (
      projectShow(projectList)
    )}
  </div>
  <div style={{ flex: '5%' }}>

  </div>
</div>
    </div>
  )
}