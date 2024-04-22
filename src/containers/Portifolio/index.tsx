import { motion } from 'framer-motion'
import StyledPortifolio from './style'

import patriciaImg from '../../assets/images/Patricia_Negrão-800x450.png'

function Portifolio() {
  return (
    <StyledPortifolio className="container">
      <h1 id="portifolio">Portifólio</h1>
      <motion.img
        layoutId="profile-picture"
        src="https://github.com/marcosviana91.png"
      />
      <div id="frontend">
        <h2>Front-End</h2>
        <div id="patricia">
          <h3>Patrícia Negrão Consultoria</h3>
          <img src={patriciaImg} alt="" />
          <ul>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Gulp</li>
            <li>SASS</li>
          </ul>
          <ul>
            <li>
              <a
                href="https://github.com/Marcosviana91/landing-page-patricia-negrao-cruz"
                target="_blank"
                rel="noreferrer"
              >
                Veja a fonte
              </a>
            </li>
            <li>
              <a href="https://www.patricianegraocruz.com.br/">Visite o site</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>Back-End</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aperiam
          voluptates illo temporibus, quasi iusto neque eaque voluptatibus
          consectetur maxime excepturi expedita perferendis sint corrupti
          explicabo! Dignissimos nihil ea maxime.
        </p>
      </div>
    </StyledPortifolio>
  )
}

export default Portifolio
