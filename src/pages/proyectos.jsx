import React, { useEffect, useState } from 'react';
import projectData from '../assets/data.json';
import NavBar from '../components/nav_bar'
import projectShow from '../components/projectShow';
import '../assets/ProyectosPage.css';
import Footer from '../components/footer'

export default function ProyectosPage() {
  var data = projectData;
  var dataList = data.Projects;
  dataList.sort((a, b) => (a.favCounter < b.favCounter) ? 1 : -1);

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
    setLoading(true);
    setSelectedTag(event.target.value);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const filteredProjects = selectedTag
    ? projectList.filter((project) => project.tags.includes(selectedTag))
    : projectList;

  return (
    <div className='page' style={pageStyles}>
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
        <div style={{ flex: '90%', minHeight: '26vh', margin: '0' }}>
          {loading ? (
            <div className="loading-overlay" style={{ height: '20rem' }}>
              <div className="loading-text">Buscando...</div>
            </div>
          ) : (
            projectShow(filteredProjects)
          )}
        </div>
        <div style={{ flex: '5%' }}></div>
      </div>
      <Footer style={{marginTop:"auto"}}/>
    </div>
  );
}

const pageStyles = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}
