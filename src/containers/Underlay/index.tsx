import { motion } from 'framer-motion'
import StyledUnderlay from './style'

function sortDistance() {
  const distance = ['close', 'far', '']
  return distance[Math.floor(Math.random() * distance.length)]
}
function sortXAnimation() {
  const X = [
    ['-10vw', '110vw', '-10vw'],
    ['110vw', '-10vw', '110vw']
  ]
  return X[Math.floor(Math.random() * X.length)]
}
function sortOpacity() {
  const opacity = [
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1],
    [0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1]
  ]
  return opacity[Math.floor(Math.random() * opacity.length)]
}
function sortDelayAnimation() {
  return Math.floor(Math.random() * 10)
}
function sortFontColor() {
  const color = [
    '#ffffff',
    '#ffb35d',
    '#ffff00',
    '#ff9100',
    '#4646ff',
    '#4cff46',
    '#ff5dc1',
    '#ff5d5d',
    '#5dfff7'
  ]
  return color[Math.floor(Math.random() * color.length)]
}
function sortTechs() {
  let techs = [
    'Front-End',
    'SASS',
    'LESS',
    'Gulp',
    'Grunt',
    'TypeScript',
    'React',
    'Bootstrap',
    'Tailwind',
    'Styled-Components',
    'Framer-Motion',
    'Back-End',
    'NGINX',
    'Docker',
    'Linux',
    'Python',
    'FastAPI',
    'Uvicorn',
    'REST',
    'GaphQL',
    'SQLModel',
    'Full-Stack'
  ]
  const tempArray = []

  while (techs.length > 0) {
    const _index = Math.floor(Math.random() * techs.length)
    tempArray.push(techs[_index])
    techs = techs.filter((tech) => tech != techs[_index])
  }
  return tempArray
}
function Underlay() {
  return (
    <StyledUnderlay>
      <ul>
        {sortTechs().map((tech, index) => {
          const distance = sortDistance()
          let duration = Math.floor(Math.random() * 10) + 30
          if (distance == 'close') {
            duration = Math.floor(Math.random() * 10) + 20
          }
          if (distance == 'far') {
            duration = Math.floor(Math.random() * 10) + 40
          }
          return (
            <motion.li
              key={index}
              className={distance}
              initial={{ color: sortFontColor(), opacity: 0 }}
              animate={{
                x: sortXAnimation(),
                opacity: sortOpacity()
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: 'linear',
                delay: sortDelayAnimation()
              }}
            >
              {tech.toUpperCase()}
            </motion.li>
          )
        })}
      </ul>
    </StyledUnderlay>
  )
}

export default Underlay
