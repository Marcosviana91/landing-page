import { styled } from 'styled-components'
import variaveis from '../../styles/variaveis'

const StyledPortifolio = styled.section`
  background-color: #afafafae;
  padding: 16px;
  box-shadow: 0 0 20px 20px #afafafae;
  width: 100%;
  max-height: 60vh;
  overflow-y: scroll;

  @media (max-width: ${variaveis.BRACKPOINTS.MOBILE}) {
    max-height: 50vh;
  }

  h1 {
    text-align: center;
  }

  > img {
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;

    width: 1px;
    border-radius: 50%;
    /* box-shadow: 0px 0px 4px 4px #000000f0; */
  }

  > div {
    width: 100%;

    h2 {
      margin: 8px 0;
    }

    > div {
      border-radius: 8px;
      width: max-content;
      margin: auto;
      padding: 0.5rem;

      h3 {
        text-align: center;
      }

      img,
      iframe {
        max-width: 350px;
      }

      ul {
        display: flex;
        justify-content: space-between;

        padding-bottom: 4px;
      }
    }
  }

  #frontend {
    > div {
    }

    #patricia {
      /* Esquema de cores do próprio site da Patrícia:
      https://www.patricianegraocruz.com.br/ */
      background-color: #efcab7;
      border: 2px solid #a06e52;
    }
  }

  #backend {
    #chat {
      background-color: #7a7a7a;
      border: 1px solid black;
    }
  }
`

export default StyledPortifolio
