import StyledHeader from '../style'

function Header() {
  return (
    <StyledHeader>
      <h1>Marcos Viana</h1>
      <p>Entusiasta apaixonado por tecnologia e programação</p>
      <nav className="container">
        <ul>
          <li className="active">Sobre</li>
          <li>Portifólio</li>
          <li>Redes Sociais</li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header
