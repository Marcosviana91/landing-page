import { styled } from 'styled-components'

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  height: 5vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #010031a6; */
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
      font-size: 24px;
      line-height: 16px;
    }
  }
`

export default StyledFooter
