/** @jsx jsx */
import { jsx } from 'theme-ui'

import ml from '../images/ml-white.svg'
import { Container  } from '.'

const Header = ({
  companyText
}) => (<header sx={{
  width: '100%',
  position: 'absolute',
}}>
  <Container sx={{
    height: [64, 80, 100],
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    pl: [0, 0, 4],
    justifyContent: ['center', 'center', 'flex-start']
  }}>
    <img src={ml} sx={{
      height: [36, 48]
    }} />
    <h1 sx={{
      color: 'bright',
      fontSize: [4, 5],
      fontFamily: 'heading',
      ml: 2
    }}>
      {companyText.name}
    </h1>
  </Container>
</header>)

Header.defaultProps = {
  companyText: {}
}

export default Header