import { Link } from 'react-router-dom'
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa'


const socialLinks = {
	github: "https://github.com/devMorshed?tab=repositories",
	linkedin: "https://www.linkedin.com/in/morshedju/",
	facebook: "https://facebook.com/smmorshedbd",
};

const Socials = () => {
  return (
    <ul className={`text-purple-600`}>
      <li className='px-5 text-purple-600 hover:text-pink-500 transition duration-150 ease-in-out'>
        <Link
          href={socialLinks.github}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='S M Morshed | Github Link'
        >
          <FaGithub />
        </Link>
      </li>
      <li className='px-5 text-purple-600 hover:text-pink-500 transition duration-150 ease-in-out'>
        <Link
          href={socialLinks.facebook}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='S M Morshed | Facebook Link'
        >
          <FaFacebook />
        </Link>
      </li>
      
      <li className='px-5 text-purple-600 hover:text-pink-500 transition duration-150 ease-in-out'>
        <Link
          href={socialLinks.twitter}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='S M Morshed | Twitter Link'
        >
          <FaTwitter />
        </Link>
      </li>
      <li className='px-5 text-purple-600 hover:text-pink-500 transition duration-150 ease-in-out'>
        <Link
          href={socialLinks.linkedin}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='S M Morshed | LinkedIn Link'
        >
          <FaLinkedin />
        </Link>
      </li>
    </ul>
  )
}

export default Socials
