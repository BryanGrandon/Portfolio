const useProject = () => {
  const getTechnologies = (tech: string[]) => {
    let techList = []

    for (let i = 0; i < tech.length; i++) {
      switch (tech[i]) {
        case 'React':
          techList.push({ img: 'https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black', alt: `${tech[i]}-Shield` })
          break

        case 'TypeScript':
          techList.push({ img: 'https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white', alt: `${tech[i]}-Shield` })
          break

        case 'Vite':
          techList.push({ img: 'https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white', alt: `${tech[i]}-Shield` })
          break

        case 'Vitest':
          techList.push({ img: 'https://img.shields.io/badge/vitest-6E9F18?style=flat&logo=vitest&logoColor=white', alt: `${tech[i]}-Shield` })
          break

        case 'Sass':
          techList.push({ img: 'https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white', alt: `${tech[i]}-Shield` })
          break

        case 'React_Router':
          techList.push({ img: 'https://img.shields.io/badge/React_Router-CA4245??style=flat&logo=react-router&logoColor=white', alt: `${tech[i]}-Shield` })
          break

        case 'Astro':
          techList.push({ img: 'https://img.shields.io/badge/Astro-ff5d01?style=flat&logo=astro&logoColor=ff5d0100&labelColor=191919', alt: `${tech[i]}-Shield` })
          break

        case 'TailwindCSS':
          techList.push({ img: 'https://img.shields.io/badge/Tailwind_CSS-grey?style=flat&logo=tailwind-css&logoColor=38B2AC', alt: `${tech[i]}-Shield` })
          break

        default:
          techList.push({ img: `https://img.shields.io/badge/${tech[i]}-2D3136.svg?style=flat&logo=npm&logoColor=white`, alt: `${tech[i]}-Shield` })
          break
      }
    }
    return techList
  }

  return { getTechnologies }
}

export default useProject
