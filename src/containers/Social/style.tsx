import { styled } from 'styled-components'

const StyledSocial = styled.section`
  background-color: #afafafae;
  padding: 16px;
  box-shadow: 0 0 20px 20px #afafafae;
  width: 100%;

  > img {
    width: 100px;
    float: left;
    margin: 0 16px;
    border-radius: 50%;
    box-shadow: 0px 0px 4px 4px #000000f0;
  }

  > h1 {
    margin: 0 16px 16px;
    text-align: center;
  }

  > p {
    text-indent: 0.5in;
  }

  ul {
    width: 50%;
    display: flex;
    justify-content: space-evenly;

    li {
      a {
        color: #010031a6;
        font-size: 48px;
        line-height: 16px;
      }
    }
  }
`

export default StyledSocial
