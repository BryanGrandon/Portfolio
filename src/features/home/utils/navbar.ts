const handlerNavbarScroll = (id: string) => {
  if (!window.matchMedia('(min-width: 768px)').matches) {
    return
  }

  const $navbar = document.getElementById(id)
  let lastScrollTop = 0

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop) {
      $navbar?.classList.remove('translate-0')
      $navbar?.classList.add('-translate-30')
    } else {
      $navbar?.classList.remove('-translate-30')
      $navbar?.classList.add('translate-0')
    }

    lastScrollTop = scrollTop
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}

export { handlerNavbarScroll }
