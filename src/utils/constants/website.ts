import website from '../../data/json/website.json'

type WebsiteDefault = {
  title: string
  subtitle: string
  paragraph: string[]
}

type WebsiteWhitImage = WebsiteDefault & {
  img: {
    url: string
    alt: string
  }
}

type WebsiteWithLinks = {
  github: {
    ariaLabel: string
    url: string
  }
  linkedin: {
    ariaLabel: string
    url: string
  }
}

const WEBSITE_HEADER: WebsiteWhitImage = website.header
const WEBSITE_ABOUT_ME: WebsiteWhitImage = website.about_me
const WEBSITE_PROJECTS: WebsiteDefault = website.projects
const WEBSITE_SKILLS: WebsiteDefault = website.skills
const WEBSITE_CONTACT: WebsiteDefault = website.contact
const WEBSITE_SOCIAL: WebsiteWithLinks = website.social
const WEBSITE_ALL_PROJECTS: WebsiteDefault = website.all_projects

export { WEBSITE_HEADER, WEBSITE_ABOUT_ME, WEBSITE_PROJECTS, WEBSITE_SKILLS, WEBSITE_CONTACT, WEBSITE_SOCIAL, WEBSITE_ALL_PROJECTS }
