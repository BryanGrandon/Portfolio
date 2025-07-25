import { JSX } from 'react'
import data from '../../services/data.json' assert { type: 'json' }
import ProjectCard from '../ui/project-card'
import Title from '../ui/title'

const Projects = (): JSX.Element => {
  const projects = data.projects
  console.log(projects[2].url)

  return (
    <article className='projects'>
      <Title text='Projects' />
      <section className='projects__container'>
        {projects.map((e) => (
          <ProjectCard key={e.id} url={e.url} title={e.title} description={e.description} ariaLabel={e.ariaLabel} technologies={e.technologies} />
        ))}
      </section>
    </article>
  )
}

export default Projects
