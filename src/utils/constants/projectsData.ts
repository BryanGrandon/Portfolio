import projects from '../../content/projects.json'

const ALL_PROJECTS = projects.sort((a, b) => a.title.localeCompare(b.title))
const PROJECTS_HIGHLIGHT = ALL_PROJECTS.filter((el) => el.highlight == true)

export { PROJECTS_HIGHLIGHT, ALL_PROJECTS }
