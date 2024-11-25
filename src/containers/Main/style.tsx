import { styled } from 'styled-components'
import variaveis from '../../styles/variaveis'

const StyledMain = styled.main`
  background-color: #010031a6;
  /* background-color: red; */
  width: 100vw;
  height: 80vh;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${variaveis.BRACKPOINTS.MOBILE}) {
    height: 70vh;
  }
`
export default StyledMain
