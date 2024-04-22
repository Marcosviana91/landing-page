import { styled } from 'styled-components'

import variaveis from '../../styles/variaveis'

const StyledUnderlay = styled.div`
  z-index: -1;
  background-color: #535353;
  color: white;

  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: ${variaveis.BRACKPOINTS.MOBILE}) {
    height: 90vh;
  }

  ul {
    li {
      font-size: 1.5rem;
      /* text-shadow: 0px 0px 6px white; */

      &.close {
        font-size: 2rem;
        /* text-shadow: 4px 4px 8px white; */
      }
      &.far {
        font-size: 1rem;
        /* text-shadow: 0px 0px 10px white; */
      }
    }
  }
`

export default StyledUnderlay
