import { styled } from 'styled-components'

const StyledFooter = styled.footer`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e1d3d;

  color: #cccccc;

  > div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    a {
      color: #cccccc;
      font-size: 24px;
      line-height: 16px;
    }
  }
`

export default StyledFooter
