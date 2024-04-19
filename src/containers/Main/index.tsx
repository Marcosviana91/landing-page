import Portifolio from '../Portifolio'
import Sobre from '../Sobre'
import Social from '../Social'
import StyledMain from './style'
type Props = {
  navBarActivate: string
}
function Main(props: Props) {
  return (
    <StyledMain>
      {props.navBarActivate === 'about' && <Sobre />}
      {props.navBarActivate === 'jobs' && <Portifolio />}
      {props.navBarActivate === 'social' && <Social />}
    </StyledMain>
  )
}

export default Main
