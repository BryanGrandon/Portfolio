type Icons = {
  className?: string
}

// Social

const IGithub = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' height='1.5rem' viewBox='0 0 30 30' className={className}>
      <path d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z'></path>
    </svg>
  )
}
const IIn = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' height='1.5rem' viewBox='0 0 30 30' className={className}>
      <path d='M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z'></path>
    </svg>
  )
}

export { IGithub, IIn }

// Stacks

const IReact = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='1.5rem' viewBox='0 0 256 228' className={className}>
      <path
        fill='#00D8FF'
        d='M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86'
      />
    </svg>
  )
}

const IJavascript = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='1.5rem' viewBox='0 0 128 128' className={className}>
      <path fill='#F0DB4F' d='M1.408 1.408h125.184v125.185H1.408z' />
      <path
        fill='#323330'
        d='M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237'
      />
    </svg>
  )
}

const ITypescript = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='1.5rem' viewBox='0 0 128 128' className={className}>
      <path fill='#fff' d='M22.67 47h99.67v73.67H22.67z' />
      <path
        fill='#007acc'
        d='M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.6 20.6 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.6 4.6 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.3 38.3 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9 9 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.8 16.8 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.5 16.5 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.7 31.7 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49 49 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z'
      />
    </svg>
  )
}

const ICss3 = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='1.5rem' viewBox='0 0 128 128' className={className}>
      <path fill='#1572B6' d='M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z' />
      <path fill='#33A9DC' d='m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z' />
      <path fill='#fff' d='M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z' />
      <path fill='#EBEBEB' d='m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z' />
      <path fill='#fff' d='m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z' />
      <path
        fill='#EBEBEB'
        d='M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z'
      />
    </svg>
  )
}

const ISass = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='1.5rem' viewBox='0 0 256 192' className={className}>
      <path
        fill='#CD6799'
        d='M220.281 110.514c-8.906.046-16.647 2.191-23.128 5.362c-2.379-4.71-4.757-8.906-5.176-11.984c-.467-3.59-1.026-5.782-.467-10.072c.56-4.29 3.078-10.399 3.031-10.865s-.56-2.658-5.689-2.704s-9.559.979-10.072 2.331s-1.492 4.43-2.145 7.6c-.886 4.664-10.258 21.31-15.62 30.03c-1.726-3.403-3.218-6.388-3.545-8.766c-.466-3.59-1.026-5.782-.466-10.072s3.078-10.398 3.031-10.865c-.047-.466-.56-2.658-5.689-2.704c-5.13-.047-9.56.979-10.072 2.331c-.513 1.353-1.073 4.523-2.145 7.601s-13.523 30.87-16.787 38.05a215 215 0 0 1-4.15 8.627s-.047.14-.187.373a118 118 0 0 1-1.398 2.658v.046c-.7 1.26-1.446 2.425-1.819 2.425c-.28 0-.793-3.357.093-7.927c1.865-9.652 6.295-24.667 6.249-25.18c0-.28.839-2.891-2.891-4.244c-3.638-1.352-4.943.886-5.27.886s-.56.793-.56.793s4.058-16.88-7.74-16.88c-7.367 0-17.533 8.067-22.569 15.341a6270 6270 0 0 0-17.16 9.373c-2.75 1.539-5.595 3.078-8.253 4.523c-.187-.186-.373-.42-.56-.606c-14.269-15.248-40.661-26.02-39.542-46.49c.42-7.461 2.984-27.046 50.687-50.827c39.262-19.352 70.505-13.99 75.914-2.099c7.74 16.974-16.74 48.496-57.309 53.065c-15.481 1.726-23.595-4.243-25.646-6.481c-2.145-2.332-2.472-2.472-3.265-2.005c-1.305.7-.466 2.798 0 4.01c1.213 3.17 6.202 8.766 14.642 11.518c7.461 2.424 25.6 3.777 47.563-4.71c24.574-9.513 43.786-35.952 38.144-58.101c-5.643-22.476-42.947-29.89-78.246-17.347C61.086 13.99 38.33 25.74 21.963 41.035C2.518 59.22-.56 75.028.699 81.65c4.524 23.501 36.932 38.796 49.895 50.127c-.653.373-1.26.7-1.772.98c-6.482 3.217-31.196 16.133-37.351 29.796c-6.994 15.481 1.12 26.58 6.482 28.071c16.647 4.617 33.76-3.683 42.946-17.393c9.186-13.709 8.067-31.522 3.824-39.682c-.047-.093-.093-.187-.187-.28c1.679-.979 3.404-2.005 5.083-2.984a248 248 0 0 1 9.373-5.27c-1.586 4.337-2.752 9.513-3.311 16.974c-.7 8.767 2.89 20.144 7.6 24.62c2.099 1.96 4.57 2.006 6.156 2.006c5.502 0 7.974-4.57 10.725-9.979c3.357-6.621 6.388-14.315 6.388-14.315s-3.777 20.797 6.482 20.797c3.73 0 7.507-4.85 9.186-7.321v.046s.093-.14.28-.466c.373-.606.606-.98.606-.98v-.092c1.492-2.612 4.85-8.534 9.839-18.373c6.435-12.683 12.637-28.537 12.637-28.537s.56 3.87 2.471 10.305c1.12 3.777 3.45 7.927 5.316 11.937c-1.492 2.099-2.425 3.264-2.425 3.264l.047.047c-1.213 1.585-2.518 3.31-3.964 4.99c-5.083 6.061-11.144 13.01-11.984 15.014c-.98 2.378-.746 4.104 1.12 5.503c1.352 1.026 3.776 1.165 6.248 1.026c4.57-.327 7.787-1.446 9.372-2.145c2.472-.886 5.363-2.239 8.067-4.244c4.99-3.684 8.02-8.953 7.741-15.9c-.14-3.824-1.399-7.648-2.938-11.239c.467-.652.886-1.305 1.353-1.958c7.88-11.518 13.989-24.155 13.989-24.155s.56 3.87 2.471 10.306c.933 3.264 2.845 6.808 4.523 10.258c-7.414 6.016-11.984 13.01-13.616 17.58c-2.937 8.487-.653 12.31 3.684 13.196c1.958.42 4.756-.513 6.808-1.399c2.611-.839 5.689-2.284 8.627-4.43c4.99-3.683 9.792-8.813 9.512-15.76c-.14-3.171-.979-6.296-2.145-9.327c6.295-2.61 14.409-4.056 24.76-2.844c22.197 2.611 26.58 16.46 25.74 22.29c-.839 5.828-5.502 8.999-7.04 9.978c-1.54.98-2.052 1.306-1.912 2.005c.186 1.026.932.98 2.238.793c1.819-.326 11.658-4.71 12.077-15.435c.7-13.709-12.357-28.677-35.439-28.537M49.055 168.242c-7.368 8.02-17.626 11.051-22.056 8.487c-4.756-2.752-2.891-14.596 6.155-23.082c5.502-5.176 12.59-9.98 17.3-12.917c1.072-.653 2.658-1.585 4.57-2.751c.326-.187.513-.28.513-.28l1.119-.7c3.31 12.124.14 22.803-7.601 31.243m53.625-36.465c-2.565 6.249-7.927 22.243-11.191 21.357c-2.798-.746-4.524-12.87-.56-24.854c2.005-6.016 6.248-13.197 8.72-15.994c4.01-4.477 8.44-5.97 9.512-4.15c1.353 2.378-4.896 19.724-6.481 23.641m44.252 21.17c-1.073.56-2.098.933-2.565.653c-.326-.187.467-.933.467-.933s5.549-5.968 7.74-8.673c1.26-1.585 2.751-3.45 4.337-5.549v.606c0 7.135-6.902 11.938-9.98 13.896m34.133-7.787c-.793-.56-.653-2.425 2.005-8.254c1.026-2.285 3.45-6.108 7.601-9.792c.466 1.492.793 2.938.746 4.29c-.047 9-6.481 12.357-10.352 13.756'
      />
    </svg>
  )
}

const IHtml5 = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='1.5rem' viewBox='0 0 128 128' className={className}>
      <path fill='#E44D26' d='M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z' />
      <path fill='#F16529' d='m64 116.8l36.378-10.086l8.559-95.878H64z' />
      <path
        fill='#EBEBEB'
        d='M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z'
      />
      <path
        fill='#fff'
        d='M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z'
      />
    </svg>
  )
}

const IGit = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='1.5rem' viewBox='0 0 128 128' className={className}>
      <path
        fill='#F34F29'
        d='M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.68 9.68 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.7 9.7 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.7 9.7 0 0 1 3.167-2.11V47.333a9.6 9.6 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501'
      />
    </svg>
  )
}

type All_Icons_Stack = {
  className: string
}

const AllIconsStack = ({ className }: All_Icons_Stack) => {
  return (
    <>
      <IHtml5 className={className} />
      <ICss3 className={className} />
      <IJavascript className={className} />
      <ITypescript className={className} />
      <ISass className={className} />
      <IReact className={className} />
      <IGit className={className} />
    </>
  )
}
export { IReact, IJavascript, ITypescript, ICss3, ISass, IHtml5, IGit, AllIconsStack }

// Other

const ILink = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='1.5rem' viewBox='0 0 24 24' className={className}>
      <path
        fill='none'
        stroke='currentColor'
        d='M13 6l2 -2c1 -1 3 -1 4 0l1 1c1 1 1 3 0 4l-5 5c-1 1 -3 1 -4 0M11 18l-2 2c-1 1 -3 1 -4 0l-1 -1c-1 -1 -1 -3 0 -4l5 -5c1 -1 3 -1 4 0'
      >
        <animate fill='freeze' attributeName='stroke-dashoffset' dur='0.6s' values='28;0' />
      </path>
    </svg>
  )
}

const IBars3 = ({ className }: Icons) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      height='1.5rem'
      stroke='currentColor'
      className={className}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
    </svg>
  )
}

const IEmail = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1.5rem' height='1.5rem' viewBox='0 0 24 24' className={className}>
      <path
        fill='currentColor'
        d='m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2'
      />
    </svg>
  )
}

const IArrowUp = ({ className }: Icons) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='1.2rem' viewBox='0 0 512 512' className={className}>
      <polyline
        points='112 328 256 184 400 328'
        style={{ fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '48px' }}
      />
    </svg>
  )
}

export { ILink, IBars3, IEmail, IArrowUp }
