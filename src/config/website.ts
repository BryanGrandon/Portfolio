import { Briefcase, GraduationCap, Heart, MapPin } from 'lucide-preact'
import { gitHub, linkedIn } from '../shared/icons/social'
import { STACK } from '@shared/icons/stack-skills'

const SOCIAL = [
  { icon: gitHub, url: 'https://github.com/BryanGrandon', ariaLabel: 'Open Bryan Grandón GitHub profile.' },
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
  image: { src: '/Portfolio/images/other/avatar.webp', alt: "'Avatar of Bryan Grandón" },
}

const ABOUT_ME = {
  description:
    'Junior frontend developer focused on creating modern, user-friendly web interfaces and turning ideas into seamless digital experiences. Committed to continuous learning and growth. Each project represents a new opportunity for growth, innovation, and improvement. Constantly improving to develop quality code, tackle challenges creatively, and create engaging user experiences.',
  technologies: STACK,
  general: [
    { icon: MapPin, label: 'Location', text: 'Rancagua, Chile' },
    { icon: GraduationCap, label: 'Education', text: 'self-taught / Front-End Development' },
    { icon: Briefcase, label: 'Experience', text: 'Junior Frontend Development (learning and building)' },
    { icon: Heart, label: 'Interests', text: 'Web Development, UI/UX, Technology, Anime, Gaming' },
  ],
}

export { SOCIAL, HERO, ABOUT_ME }
