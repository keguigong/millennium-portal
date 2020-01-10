/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Container } from '.'
import hex2rgba from 'hex2rgba'

import { Button } from '.'

const Main = ({
  backgroundImages,
  companyText,
}) => (<main sx={{
  minHeight: [400, 500, 600],
  maxHeight: [600, 700, 800],
  height: 'calc(100vh - 200px)',
  background: t => `url(${companyText.landingImg}) ${t.colors.deep}`,
  backgroundSize: 'cover'
}}>
  <div sx={{
    height: '100%',
    backgroundColor: hex2rgba('#3D2D6B', 0.92),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }}>
    <Container sx={{
      width: ['100%', '80%'],
      px: 4
    }}>
      <Styled.h1 sx={{
        color: 'bright',
        fontWeight: 'body',
        fontSize: [3, 4, 5],
        lineHeight: [1.6, 1.3],
        textAlign: ['center', 'left']
      }}>
        <b>{companyText.ch}</b>
        （<b>{companyText.en}</b>）
        {companyText.description}
      </Styled.h1>
      <div sx={{
        display: 'flex',
        alignItems: 'center',
        pl: [0, 3],
        mt: [3, 4],
        justifyContent: ['center', 'flex-start']
      }}>
        <Button secondary large arrow overrideCSS={{ px: 4 }}>
          {companyText.seeMore}
        </Button>
      </div>
    </Container>
  </div>
</main>)

Main.defaultProps = {
  companyText: {},
  backgroundImages: {}
}

export default Main