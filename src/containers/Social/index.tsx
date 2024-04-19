import { motion } from 'framer-motion'
import StyledSocial from './style'

// Icons
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Social() {
  return (
    <StyledSocial id="social" className="container">
      <h1 id="redes-sociais">Redes Sociais</h1>
      <motion.img
        layoutId="profile-picture"
        src="https://github.com/marcosviana91.png"
      />
      <p>Encontre-me em:</p>
      <ul>
        <li>
          <motion.a
            layoutId="my-linkedin"
            href="https://www.linkedin.com/in/marcos-viana-full-stack-python/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </motion.a>
        </li>
        <li>
          <motion.a
            layoutId="my-github"
            href="https://github.com/Marcosviana91"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </motion.a>
        </li>
      </ul>
    </StyledSocial>
  )
}

export default Social
