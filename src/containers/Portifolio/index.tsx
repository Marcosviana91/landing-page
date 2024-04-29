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
          <img src={patriciaImg} alt="Screenshot da página" />
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
              <a
                href="https://www.patricianegraocruz.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                Visitar
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="backend">
        <h2>Back-End</h2>
        <div id="chat">
          <h3>Chat com FastAPI</h3>
          <iframe
            width="350"
            height="200"
            src="https://www.youtube.com/embed/wgB1z0zqKw8?si=HpnDtdTTFdOg9Ur3&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <ul>
            <li>FastAPI</li>
            <li>Docker</li>
            <li>GraphQL</li>
            <li>React</li>
          </ul>
          <ul>
            <li>
              <a
                href="https://github.com/Marcosviana91/projeto_pessoal.CHAT_BACK-END"
                target="_blank"
                rel="noreferrer"
              >
                Veja a fonte
              </a>
            </li>
            <li>
              <a
                href="http://marcosvianadev2.ddns.net:3133/chat"
                target="_blank"
                rel="noreferrer"
              >
                Visitar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </StyledPortifolio>
  )
}

export default Portifolio
