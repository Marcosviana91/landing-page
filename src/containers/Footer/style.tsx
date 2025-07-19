import { styled } from 'styled-components'

const StyledFooter = styled.footer`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #010031; */
  background-image: linear-gradient(to top, #010031 40%, #010031a6);

  color: #cccccc;

  > div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    a {
      color: #cccccc;
      font-size: 24pt;
      line-height: 16pt;
    }
  }
`

export default StyledFooter
