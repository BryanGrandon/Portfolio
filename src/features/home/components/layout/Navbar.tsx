import { useEffect, useState } from 'preact/hooks'
import { cn } from '@shared/lib/cn'
import { SOCIAL } from '@config/website'
import useNavbar from '../../hooks/useNavbar'
import { NAVIGATION } from '../../utils/navigation'
import { handlerNavbarScroll } from '../../utils/navbar'
import LightDarkButton from '@shared/components/LightDarkButton'
import MenuButton from '../MenuButton'

const Navbar = () => {
  const { selected, visibleSectionListener } = useNavbar()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    visibleSectionListener()
    if (isOpen) return
    const cleanup = handlerNavbarScroll('navbar')
    return () => cleanup?.()
  }, [isOpen])

  return (
    <nav id='navbar' className='fixed top-0 inset-x-0 flex z-10 flex-col border-b border-divider bg-surface px-4'>
      <article class='max-width'>
        <article className='flex justify-between items-center py-3 md:py-0'>
          <h3 className='font-semibold tracking-wide text-xl'>
            Bryan <span className='text-brand'>Grandón</span>
          </h3>
          <ul className='hidden md:flex justify-between gap-4'>
            {NAVIGATION.map((el) => (
              <li key={el.id}>
                <a
                  href={el.href}
                  className={cn(
                    `border-b-2 py-3 px-4 block`,
                    selected == el.label.toLowerCase() ? 'border-brand' : 'border-transparent',
                  )}
                >
                  {el.label}
                </a>
              </li>
            ))}
          </ul>
          <div class='flex items-center gap-4'>
            {SOCIAL.map((el) => (
              <a href={el.url} target='_blank' title={el.ariaLabel} rel='noopener noreferrer' aria-label={el.ariaLabel}>
                <el.icon />
              </a>
            ))}
            <LightDarkButton />
            <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} className='flex md:hidden' />
          </div>
        </article>
        {isOpen && (
          <article className='border-t border-divider py-2'>
            <ul>
              {NAVIGATION.map((el) => (
                <a
                  href={el.href}
                  class={cn(`block p-4 text-center`, selected == el.label.toLowerCase() ? 'bg-brand' : '')}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {el.label}
                </a>
              ))}
            </ul>
          </article>
        )}
      </article>
    </nav>
  )
}

export default Navbar
