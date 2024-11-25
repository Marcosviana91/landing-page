import { motion } from 'framer-motion'
import StyledPortifolio from './style'

import Faith_Battle_Site from '../../assets/images/Faith_Battle_Site.png'
import Faith_Battle_App1_Login from '../../assets/images/Faith_Battle_App1_Login.png'
import Faith_Battle_App1_Jogando from '../../assets/images/Faith_Battle_App1_Jogando.png'

function Portifolio() {
  return (
    <StyledPortifolio className="container">
      <h1 id="portifolio">Portifólio</h1>
      <motion.img
        layoutId="profile-picture"
        src="https://github.com/marcosviana91.png"
      />
      <div id="full-stack">
        <p>
          Um projeto ambicioso que visa criar uma plataforma de jogos de cartas.
          Com API, DB, aplicativos Mobile para Android.
        </p>
        <h2>Front-End</h2>
        <div id="faith-battle">
          <h3>Faith Battle - fã page</h3>
          <img src={Faith_Battle_Site} alt="Screenshot da página" />
          <ul>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Django</li>
          </ul>
          <ul>
            {/* <li>
              <a
                href="https://github.com/Marcosviana91/landing-page-patricia-negrao-cruz"
                target="_blank"
                rel="noreferrer"
              >
                Veja a fonte
              </a>
            </li> */}
            <li>
              <a
                href="https://faith-battle.marcosvianadev.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                Veja mais...
              </a>
            </li>
          </ul>
        </div>
        <h2>Mobile</h2>
        <div id="faith-battle-app">
          <h3>Faith Battle - Jogo não oficial</h3>
          <div>
            <img src={Faith_Battle_App1_Login} alt="Screenshot da página" />
            <img src={Faith_Battle_App1_Jogando} alt="Screenshot da página" />
          </div>
          <ul>
            <li>TypeScript</li>
            <li>ReactNative</li>
            <li>ExpoGo</li>
          </ul>
          <ul>
            {/* <li>
              <a
                href="https://github.com/Marcosviana91/landing-page-patricia-negrao-cruz"
                target="_blank"
                rel="noreferrer"
              >
                Veja a fonte
              </a>
            </li> */}
            <li>
              <a
                href="https://faith-battle.marcosvianadev.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                Veja mais...
              </a>
            </li>
          </ul>
        </div>
      </div>
    </StyledPortifolio>
  )
}

export default Portifolio
