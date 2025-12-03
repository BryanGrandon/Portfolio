type icons = {
  size?: string
}

const IconExternalLink = ({ size = '1.5rem' }: icons) => {
  return (
    <svg width={size} height={size} viewBox='0 0 24 24' fill='none' stroke='currentColor'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6' />
      <path d='M11 13l9 -9' />
      <path d='M15 4h5v5' />
    </svg>
  )
}

export default IconExternalLink
