import { NAVIGATION } from '../../../utils/constants/navigation'

const Navbar = () => {
  return (
    <nav className='test flex justify-between'>
      <a href='/'>Logo</a>
      <section className='flex gap-4'>
        {NAVIGATION.map((el) => (
          <a key={el.id} href={el.url}>
            {el.nav}
          </a>
        ))}
      </section>
      <a href='#'>|||</a>
    </nav>
  )
}

export default Navbar
