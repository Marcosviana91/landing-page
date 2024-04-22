import { styled } from 'styled-components'

const StyledPortifolio = styled.section`
  background-color: #afafafae;
  padding: 16px;
  box-shadow: 0 0 20px 20px #afafafae;
  width: 100%;

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

  #frontend {
    width: 100%;
    > div {
      border-radius: 8px;
      width: max-content;
      margin: auto;
      h3 {
        text-align: center;
      }
      img {
        width: 300px;
      }
      ul {
        display: flex;
        justify-content: space-between;

        padding-bottom: 4px;
      }
    }

    #patricia {
      /* Esquema de cores do próprio site da Patrícia:
      https://www.patricianegraocruz.com.br/ */
      background-color: #efcab7;
      padding: 0.5rem;
      border: 2px solid #a06e52;
    }
  }
`

export default StyledPortifolio
