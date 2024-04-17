import { styled } from 'styled-components'

const StyledHeader = styled.header`
  min-height: 72px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: linear-gradient(to bottom, #2fa866, #063d1e);

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
        background-color: green;
        padding: 4px 16px;
        border: 1px solid white;
        cursor: pointer;

        color: black;
        font-weight: 700;

        &:first-child {
          border-top-left-radius: 12px;
          border-bottom-left-radius: 12px;
        }

        &:last-child {
          border-top-right-radius: 12px;
          border-bottom-right-radius: 12px;
        }

        &.active {
          background-color: blue;
          border: 1px solid black;
          color: white;
        }
      }
    }
  }
`

export default StyledHeader
