import StyledSobre from './style'

function Sobre() {
  return (
    <StyledSobre className="container">
      <img src="https://github.com/marcosviana91.png" alt="" srcSet="" />
      <h1 id="sobre">Sobre</h1>
      <p>
        Apaixonado por tecnologia, sempre a viu como um hobbie. Então decidiu
        fazer migração de carreira para área de programação.
      </p>
      <h2>Atualmente</h2>
      <ul>
        <li>
          <em>Análise e Desenvolvimento de Sistemas</em> - 5º período, na{' '}
          <a href="https://unifatecie.edu.br/" target="_blank" rel="noreferrer">
            UniFATECIE
          </a>
        </li>
        <li>
          <em>Desenvolvedor Full Stack Python</em> - na{' '}
          <a href="https://ebaconline.com.br/" target="_blank" rel="noreferrer">
            EBAC
          </a>
          .
        </li>
      </ul>
    </StyledSobre>
  )
}

export default Sobre
