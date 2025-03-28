import data from '../../services/data.json' assert { type: 'json' }
import ProjectCard from '../ui/project-card'
import { AllIconsStack } from '../ui/icons'
import MainTheme from './main-theme'

const Main = () => {
  return (
    <main className='main'>
      <MainTheme
        title='Projects'
        class_A='main__projects'
        children={
          <>
            {data.projects.map((e) => (
              <ProjectCard
                key={e.id}
                url={e.url}
                img={e.img}
                title={e.title}
                description={e.description}
                ariaLabel={e.ariaLabel}
              />
            ))}
          </>
        }
      />

      <MainTheme title='Stacks' class_A='list-stack' children={<AllIconsStack className='list-stack__icons' />} />
    </main>
  )
}

export default Main
