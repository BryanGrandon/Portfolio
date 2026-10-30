import { gitHub, linkedIn } from '@shared/icons/social'
import type { JSX } from 'preact/jsx-runtime'

const github = {
  icon: gitHub,
  url: 'https://github.com/BryanGrandon',
  ariaLabel: 'Open Bryan Grandón GitHub profile.',
  label: 'GitHub',
}

const linked_In = {
  icon: linkedIn,
  url: 'https://www.linkedin.com/in/bryan-grandon/',
  ariaLabel: 'Open Bryan Grandón LinkedIn profile.',
  label: 'LinkedIn',
}

type Social = {
  icon: () => JSX.Element
  url: string
  ariaLabel: string
  label: string
}

export const SOCIAL: Social[] = [{ ...github }, { ...linked_In }]
