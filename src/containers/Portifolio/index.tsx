import { motion } from 'framer-motion'
import StyledPortifolio from './style'

function Portifolio() {
  return (
    <StyledPortifolio className="container">
      <h1 id="portifolio">Portifólio</h1>
      <motion.img
        layoutId="profile-picture"
        src="https://github.com/marcosviana91.png"
      />
      <div>
        <h2>Front-End</h2>
      </div>
      <div>
        <h2>Back-End</h2>
      </div>
    </StyledPortifolio>
  )
}

export default Portifolio
