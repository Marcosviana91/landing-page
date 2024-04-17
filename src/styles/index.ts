import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    padding: 0 4px;
    max-width: 480px;
    margin: 0 auto;
  }


`

export default EstiloGlobal
