const hideNavbarOnScroll = (id: string) => {
  const $navbar = document.getElementById(id)
  let lastScrollTop = 0

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > lastScrollTop) {
      $navbar?.classList.remove('translate-y-0')
      $navbar?.classList.add('-translate-y-100')
    }
    lastScrollTop = scrollTop
  })
}

export { hideNavbarOnScroll }
