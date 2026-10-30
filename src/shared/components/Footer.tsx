import { NAV_HOME } from '@config/navigation'
import { SOCIAL } from '@config/social'
import { ArrowUp } from 'lucide-preact'

const Footer = () => {
  return (
    <footer className='py-2 px-4 bg-surface'>
      <article className='max-width flex justify-between items-center'>
        <h3 class='text-2xl'>
          Bryan <span class='text-brand'>Grandón</span>
        </h3>

        <section className='flex gap-4 items-center'>
          {SOCIAL.map((el) => (
            <a
              href={el.url}
              target='_blank'
              title={el.ariaLabel}
              rel='noopener noreferrer'
              aria-label={el.ariaLabel}
              className='font-display'
            >
              {el.label}
            </a>
          ))}
          <a
            href={NAV_HOME}
            aria-label='Go to the top of the page'
            className=' block border border-divider p-2 rounded-full group bg-surface-elevated'
          >
            <ArrowUp size={18} className='transition-transform duration-300 group-hover:-translate-y-0.5' />
          </a>
        </section>
      </article>
    </footer>
  )
}

export default Footer
