import StyledFooter from './style'

// Icons
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <strong>Marcos Viana</strong>
        <a
          href="https://www.linkedin.com/in/marcos-viana-full-stack-python/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Marcosviana91"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </StyledFooter>
  )
}

export default Footer
