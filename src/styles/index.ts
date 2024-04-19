import { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    display: none
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }

  ul li {
    list-style: none
  }

  .container {
    padding: 0 4px;
    margin: 0 auto;
    max-width: 720px;

    @media (max-width:${variaveis.BRACKPOINTS.DESKTOP}) {
      max-width: 640px;
    }

    @media (max-width:${variaveis.BRACKPOINTS.TABLET}) {
      max-width: 480px;
    }

    @media (max-width:${variaveis.BRACKPOINTS.MOBILE}) {
      max-width: 90%;
    }
  }


`

export default EstiloGlobal
