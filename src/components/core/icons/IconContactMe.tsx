type icons = {
  size?: string
}

const IconClock = ({ size = '1.5rem' }: icons) => {
  return (
    <svg height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' role='img'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0'></path>
      <path d='M12 7v5l3 3'></path>
    </svg>
  )
}

const IconEmail = ({ size = '1.5rem' }: icons) => {
  return (
    <svg height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' role='img'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z'></path>
      <path d='M3 7l9 6l9 -6'></path>
    </svg>
  )
}

const IconTimeZone = ({ size = '1.5rem' }: icons) => {
  return (
    <svg height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' role='img'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M20.884 10.554a9 9 0 1 0 -10.337 10.328' />
      <path d='M3.6 9h16.8' />
      <path d='M3.6 15h6.9' />
      <path d='M11.5 3a17 17 0 0 0 -1.502 14.954' />
      <path d='M12.5 3a17 17 0 0 1 2.52 7.603' />
      <path d='M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0' />
      <path d='M18 16.5v1.5l.5 .5' />
    </svg>
  )
}

export { IconClock, IconEmail, IconTimeZone }
