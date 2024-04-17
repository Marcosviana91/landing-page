import StyledSobre from './style'

function Sobre() {
  return (
    <StyledSobre className="container">
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
        <div>
          <h2>Techs</h2>
          <p>Front-End</p>
          <ul>
            <li>SASS</li>
            <li>LESS</li>
            <li>Gulp</li>
            <li>Grunt</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>Styled-Components</li>
            <li>Framer-Motion</li>
          </ul>
          <p>Back-End</p>
          <ul>
            <li>NGINX</li>
            <li>Docker</li>
            <li>Linux</li>
            <li>Python</li>
            <li>FastAPI</li>
            <li>Uvicorn</li>
            <li>Gunicorn</li>
            <li>REST</li>
            <li>GaphQL</li>
            <li>SQLModel</li>
          </ul>
        </div>
      </ul>
    </StyledSobre>
  )
}

export default Sobre
