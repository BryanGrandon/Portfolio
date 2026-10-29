import { STACK } from '@shared/icons/stack-skills'
import { Briefcase, GraduationCap, Heart, MapPin } from 'lucide-preact'

export const ABOUT_ME = {
  description:
    'Junior frontend developer focused on creating modern, user-friendly web interfaces and turning ideas into seamless digital experiences. Committed to continuous learning and growth. Each project represents a new opportunity for growth, innovation, and improvement. Constantly improving to develop quality code, tackle challenges creatively, and create engaging user experiences.',
  technologies: STACK,
  general: [
    {
      icon: MapPin,
      label: 'Location',
      text: 'Rancagua, Chile',
    },
    {
      icon: GraduationCap,
      label: 'Education',
      text: 'self-taught / Front-End Development',
    },
    {
      icon: Briefcase,
      label: 'Experience',
      text: 'Junior Frontend Development (learning and building)',
    },
    {
      icon: Heart,
      label: 'Interests',
      text: 'Web Development, UI/UX, Technology, Anime, Gaming',
    },
  ],
}
