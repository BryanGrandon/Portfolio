import { Mail } from 'lucide-preact'

const EMAIL = 'tu-correo@gmail.com'

function ContactButton() {
  const handleContact = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(EMAIL)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <button
      onClick={handleContact}
      className='flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white transition-colors hover:bg-blue-700'
    >
      <Mail size={20} />
      Get in Touch
    </button>
  )
}

export default ContactButton
