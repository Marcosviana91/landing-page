import { styled } from 'styled-components'
import variaveis from '../../styles/variaveis'

const StyledHeader = styled.header`
  height: 20vh;
  padding-top: 5vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: red; */
  background-image: linear-gradient(to bottom, #010031 40%, #010031a6);

  @media (max-width: ${variaveis.BRACKPOINTS.MOBILE}) {
    padding-top: 1vh;
    padding-left: 8px;
    padding-right: 8px;
    text-align: center;
  }

  h1,
  p {
    color: #fff;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2666666667);
  }

  nav {
    width: 100%;
    padding: 8px;
    display: flex;
    justify-content: center;
    margin-top: 12px;

    ul {
      width: max-content;
      border-radius: 4px;

      display: flex;
      row-gap: 16px;

      li {
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #1e1d3d;
        padding: 0px 16px;
        border: 1px solid #474672;

        font-weight: 700;
        font-size: 24px;
        color: white;
        cursor: pointer;
        @media (max-width: ${variaveis.BRACKPOINTS.MOBILE}) {
          font-size: 20px;
        }

        &:first-child {
          border-top-left-radius: 12px;
          border-bottom-left-radius: 12px;
        }

        &:last-child {
          border-top-right-radius: 12px;
          border-bottom-right-radius: 12px;
        }

        &.active {
          background-color: #474672;
          border: 1px solid black;
          color: black;
        }
      }
    }
  }
`

export default StyledHeader
