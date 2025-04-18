import { JSX } from 'react'
import Title from '../ui/title'
import data from '../../services/data.json' assert { type: 'json' }

const About = (): JSX.Element => {
  const { name } = data.staff
  const { description } = data.about

  return (
    <article className='default-width'>
      <Title text='About' />
      <article className='about'>
        <div className='about__image'></div>
        <section className='about__container'>
          <header className='about__header'>
            <h3 className='about__header-name'>{name}</h3>
            <p className='about__header-subtext'>A bit About Me</p>
          </header>
          <p className='about__text'>{description}</p>
        </section>
      </article>
    </article>
  )
}

export default About
