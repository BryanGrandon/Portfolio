const handlerNavbarScroll = (id: string) => {
  const $navbar = document.getElementById(id)
  let lastScrollTop = 0

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > lastScrollTop) {
      $navbar?.classList.remove('translate-0')
      $navbar?.classList.add('-translate-30')
    } else {
      $navbar?.classList.remove('-translate-30')
      $navbar?.classList.add('translate-0')
    }
    lastScrollTop = scrollTop
  })
}

export { handlerNavbarScroll }
