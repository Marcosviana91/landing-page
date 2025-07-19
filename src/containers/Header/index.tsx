import StyledHeader from './style'

type Props = {
  navBarActivate: string //'about' | 'jobs' | 'social'
  setNavBarActivate: (value: string) => void
}

function Header(props: Props) {
  return (
    <StyledHeader>
      <nav className="container">
        <ul>
          <li
            className={props.navBarActivate === 'about' ? 'active' : ''}
            onClick={() => props.setNavBarActivate('about')}
          >
            Sobre
          </li>
          <li
            className={props.navBarActivate === 'jobs' ? 'active' : ''}
            onClick={() => props.setNavBarActivate('jobs')}
          >
            Portifólio
          </li>
          <li
            className={props.navBarActivate === 'social' ? 'active' : ''}
            onClick={() => props.setNavBarActivate('social')}
          >
            Redes Sociais
          </li>
        </ul>
      </nav>
      <h1>Marcos Viana</h1>
      <p>Entusiasta apaixonado por tecnologia e programação</p>
    </StyledHeader>
  )
}

export default Header
