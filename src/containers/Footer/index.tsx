import { motion } from 'framer-motion'
import StyledFooter from './style'

// Icons
import { FaLinkedin, FaGithub } from 'react-icons/fa'

type Props = {
  navBarActivate: string //'about' | 'jobs' | 'social'
}

function Footer(props: Props) {
  return (
    <StyledFooter>
      <div className="container">
        <motion.strong
          animate={{
            x: props.navBarActivate === 'social' ? 23 : 0
          }}
          transition={{
            ease: 'linear',
            delay: 0.2
          }}
        >
          Marcos Viana
        </motion.strong>
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
