import { styled } from 'styled-components'

const StyledSobre = styled.section`
  background-color: #77959bad;
  padding: 16px;
  box-shadow: 0 0 20px 20px #77959bad;

  img {
    width: 100px;
    float: left;
    margin: 0 16px;
    border-radius: 25%;
    box-shadow: 0px 0px 4px 4px #000000f0;
  }

  > h1 {
    margin: 0 16px 16px;
  }
  > h2 {
    margin: 16px;
  }
  h3 {
    margin-top: 12px;
    margin-bottom: 8px;
    text-align: center;
  }

  > p {
    text-indent: 0.5in;
  }

  ul {
    margin-left: 16px;
  }
`

export default StyledSobre
