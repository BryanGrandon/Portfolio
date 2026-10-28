import { Download } from 'lucide-preact'
import { gitHub, linkedIn } from '../shared/icons/social'

const HEADER_INFO = {}

const SOCIAL = [
  {
    icon: gitHub,
    url: 'https://github.com/BryanGrandon',
    ariaLabel: 'Open Bryan Grandón GitHub profile.',
  },
  {
    icon: linkedIn,
    url: 'https://www.linkedin.com/in/bryan-grandon/',
    ariaLabel: 'Open Bryan Grandón LinkedIn profile.',
  },
]

const HERO = {
  name: 'Bryan',
  lastName: 'Grandón',
  role: 'Frontend Developer',
  description:
    'I build modern, user-friendly web applications with a focus on clean code, great UI and performance. Always learning, always improving.',
  download: '',
  urlProjects: '#projects',
  image: {
    src: '/Portfolio/images/other/avatar.webp',
    alt: "'Avatar of Bryan Grandón",
  },
}

export { SOCIAL, HERO }
