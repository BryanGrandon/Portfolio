import { useEffect } from 'preact/hooks'
import { NAVIGATION } from '../../../utils/constants/navigation'
import { handlerNavbarScroll } from '../../../utils/functions/handlerNavbarScroll'
import { hideNavbarOnScroll } from '../../../utils/functions/hideNavbarOnScroll'
import { clickHamburgerMenu } from '../../../utils/functions/clickHamburgerMenu'
import HamburgerMenuAnimation from '../ui/HamburgerMenuAnimation'
import useNavbar from '../../../hooks/useNavbar'

const Navbar = () => {
  const { visibleSectionListener, selected } = useNavbar()

  useEffect(() => {
    visibleSectionListener()
    handlerNavbarScroll('navbar')
    hideNavbarOnScroll('menu-movil')

    // Close HamburgerMenu in click Navigation link in movil
    const $links = document.querySelectorAll('.navigation-link')
    $links.forEach((el) => {
      el.addEventListener('click', clickHamburgerMenu)
      return () => el.removeEventListener('click', clickHamburgerMenu)
    })
  }, [])

  const clickOpenAndCloseMenu = () => document.getElementById('menu-movil')?.classList.toggle('translate-y-0')

  return (
    <>
      <nav id='navbar' className='block fixed top-0 inset-x-0 bg-white/60 dark:bg-black/60 transition-transform duration-350 translate-0 backdrop-blur-xl z-20 '>
        <section className='flex justify-between items-center max-w-350 mx-auto p-4'>
          <a href='/' className='font-basicaline text-xl'>
            Dev.
          </a>
          <section className='hidden md:flex gap-4 capitalize '>
            {NAVIGATION.map((el) => (
              <a key={el.id} href={el.url} className={` hover:text-primary ${selected == el.nav.toLowerCase() ? 'border-b-2 border-primary' : ''}`}>
                {el.nav}
              </a>
            ))}
          </section>
          <button onClick={clickOpenAndCloseMenu} class='flex md:hidden justify-center items-center h-4 w-5'>
            <HamburgerMenuAnimation />
          </button>
        </section>
        <article id='menu-movil' class='fixed right-2 top-15 rounded-xl overflow-hidden bg-underlay-light dark:bg-underlay-dark z-10 h-fit transition-transform duration-650 -translate-y-100'>
          <section class='flex flex-col justify-center  shadow shadow-gray-600 dark:shadow-gray-100 min-w-60'>
            {NAVIGATION.map((el) => (
              <a
                onClick={clickOpenAndCloseMenu}
                key={el.id}
                href={el.url}
                className={`navigation-link text-center p-4 font-xl capitalize font-semibold hover:text-secondary ${selected == el.nav.toLowerCase() ? 'bg-primary text-white' : ''}`}
              >
                {el.nav}
              </a>
            ))}
          </section>
        </article>
      </nav>
    </>
  )
}

export default Navbar
