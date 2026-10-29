const EMAIL = 'tu-correo@gmail.com'

const handleContact = () => {
  window.open(`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(EMAIL)}`, '_blank', 'noopener,noreferrer')
}
