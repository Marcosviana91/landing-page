import { styled } from 'styled-components'
import variaveis from '../../styles/variaveis'

const StyledPortifolio = styled.section`
  background-color: #77959bad;
  padding: 16px;
  box-shadow: 0 0 20px 20px #77959bad;
  width: 100%;
  max-height: 60vh;
  overflow-y: scroll;

  p {
    text-indent: 0.5in;
  }

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

  #faith-battle-app {
    img {
      max-width: 175px;
    }
  }
`

export default StyledPortifolio
