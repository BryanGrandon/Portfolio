import useProject from '../../../hooks/useProject'
import IconExternalLink from '../icons/IconExternalLink'

type Props = {
  link: string
  title: string
  ariaLabel?: string
  description: string
  technologies: string[]
  image: { src: string; alt: string }
}

const ProjectCard = ({ image, title, description, technologies, link, ariaLabel }: Props) => {
  const { getTechnologies } = useProject()
  const techList = getTechnologies(technologies)

  return (
    <a
      href={link}
      target='_blank'
      aria-label={ariaLabel}
      className='flex flex-col gap-6 p-4 rounded-lg shadow shadow-gray-600/40 bg-white/60 relative cursor-pointer hover:shadow-primary group hover:scale-101 transition-transform'
    >
      <picture className='w-full h-50 overflow-hidden'>
        <img
          src='https://avatars.mds.yandex.net/i?id=7ad36af4f5b3ee0cfaaa7bcf47dfd5e3_l-5315965-images-thumbs&ref=rim&n=13&w=3000&h=1687'
          alt={image.alt}
          className='h-full w-full rounded-lg shadow shadow-gray-600/40 object-cover'
        />
      </picture>

      <p class='absolute bottom-4 right-4 text-gray-600 hover:text-primary z-10 group-hover:text-primary group-hover:scale-110 transition-transform'>
        <IconExternalLink />
      </p>
      <section className='flex flex-col gap-2 px-2 relative'>
        <div className='w-fit'>
          <h3 className='text-3xl font-basicaline font-semibold'>{title}</h3>
          <sup className='block h-0.5 rounded bg-primary'></sup>
        </div>
        <p className='prose'>{description}</p>
        <section>
          {techList.map((tech) => (
            <img src={tech.img} alt={tech.alt} className='inline-block mr-2 mb-2' />
          ))}
        </section>
      </section>
    </a>
  )
}

export default ProjectCard
