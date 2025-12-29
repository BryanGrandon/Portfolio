type icons = {
  size?: string
}

const IconBackUp = ({ size = '1.5rem' }: icons) => {
  return (
    <svg height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M9 14l-4 -4l4 -4' />
      <path d='M5 10h11a4 4 0 1 1 0 8h-1' />
    </svg>
  )
}

export default IconBackUp
