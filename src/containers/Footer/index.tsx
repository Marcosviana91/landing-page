import { motion } from 'framer-motion'
import StyledFooter from './style'

// Icons
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <strong>Marcos Viana</strong>
        <motion.a
          layoutId="my-linkedin"
          href="https://www.linkedin.com/in/marcos-viana-full-stack-python/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          layoutId="my-github"
          href="https://github.com/Marcosviana91"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </motion.a>
      </div>
    </StyledFooter>
  )
}

export default Footer
