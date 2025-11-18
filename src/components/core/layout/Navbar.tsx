import { useEffect } from 'preact/hooks'
import { NAVIGATION } from '../../../utils/constants/navigation'
import { handlerNavbarScroll } from '../../../utils/functions/handlerNavbarScroll'
import useNavbar from '../../../hooks/useNavbar'
import { hideNavbarOnScroll } from '../../../utils/functions/hideNavbarOnScroll'

const Navbar = () => {
  const { visibleSectionListener, selected } = useNavbar()

  useEffect(() => {
    visibleSectionListener()
    handlerNavbarScroll('navbar')
    hideNavbarOnScroll('menu-movil')
  }, [])

  const clickMenu = () => {
    const $menu = document.getElementById('menu-movil')
    $menu?.classList.toggle('translate-y-0')
  }

  return (
    <>
      <nav id='navbar' className='block fixed top-0 inset-x-0 bg-white/40 transition-transform duration-350 translate-0 backdrop-blur-xl'>
        <section className='flex justify-between max-w-350 mx-auto p-4'>
          <a href='/' className='font-basicaline text-xl'>
            Dev.
          </a>
          <section className='hidden md:flex gap-4 capitalize '>
            {NAVIGATION.map((el) => (
              <a key={el.id} href={el.url} className={selected == el.nav.toLowerCase() ? 'border-b-2 border-primary' : ''}>
                {el.nav}
              </a>
            ))}
          </section>
          <button onClick={clickMenu} class='block md:hidden'>
            |||
          </button>
        </section>
        <article id='menu-movil' class='fixed right-2 top-15 bg-underlay-light z-10 h-fit transition-transform duration-250 -translate-y-100'>
          <section class='flex flex-col justify-center rounded-xl overflow-hidden shadow shadow-gray-600 min-w-60'>
            {NAVIGATION.map((el) => (
              <a onClick={clickMenu} key={el.id} href={el.url} className={`text-center p-4 font-xl capitalize font-semibold ${selected == el.nav.toLowerCase() ? 'bg-primary text-white' : ''}`}>
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
