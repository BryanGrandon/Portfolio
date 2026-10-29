const TECH_SHIELDS = {
  react: 'https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black',
  javascript: 'https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=flat-square',
  typescript: 'https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white',
  vite: 'https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white',
  vitest: 'https://img.shields.io/badge/vitest-6E9F18?style=flat&logo=vitest&logoColor=white',
  sass: 'https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white',
  react_router: 'https://img.shields.io/badge/React_Router-CA4245??style=flat&logo=react-router&logoColor=white',
  astro: 'https://img.shields.io/badge/Astro-ff5d01?style=flat&logo=astro&logoColor=ff5d0100&labelColor=191919',
  tailwindcss: 'https://img.shields.io/badge/Tailwind_CSS-grey?style=flat&logo=tailwind-css&logoColor=38B2AC',
} as const

const TECH = Object.keys(TECH_SHIELDS)
type TechShields = keyof typeof TECH_SHIELDS

const getTechnologies = (tech: string[]) => {
  let techList = []

  for (let i = 0; i < tech.length; i++) {
    const technologies = tech[i].toLowerCase()
    if (TECH.includes(technologies)) {
      techList.push({
        img: TECH_SHIELDS[technologies as TechShields],
        alt: `${technologies}-Shield`,
      })
    } else {
      techList.push({
        img: `https://img.shields.io/badge/${tech[i]}-2D3136.svg?style=flat&logo=npm&logoColor=white`,
        alt: `${tech[i]}-Shield`,
      })
    }
  }
  return techList
}

export { getTechnologies }
