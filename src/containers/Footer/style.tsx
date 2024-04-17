import { styled } from 'styled-components'

const StyledFooter = styled.footer`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;

  > div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    a {
      font-size: 24px;
      line-height: 16px;
    }
  }
`

export default StyledFooter
