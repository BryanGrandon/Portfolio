import { ArrowRight, Mail } from 'lucide-preact'

const EMAIL = 'bryan.grandon.c@gmail.com'

const ContactButton = () => {
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
      className='button shadow shadow-brand transition-colors duration-350 bg-brand/80 hover:bg-accent text-white group w-fit'
    >
      <Mail size={20} className='transition-transform duration-300 group-hover:-rotate-6' />
      Get in Touch
      <ArrowRight size={20} className='transition-transform duration-300 group-hover:translate-x-1' />
    </button>
  )
}

export default ContactButton
