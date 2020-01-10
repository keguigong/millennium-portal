/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Container, BlingBling } from '.'

import mln from '../images/ml-normal.svg'

const CompanyValue = ({
  companyText
}) => (<Container sx={{
  px: [3, 4],
  position: 'relative',
  top: -80
}}>
  <div sx={{
    boxShadow: '0 4px 15px #00000020',
    backgroundColor: 'bright',
    position: 'relative',
    minHeight: 200,
    p: [3, 4],
    py: [2, 3],
    pb: [3, 4],
    pt: [5, 5],
    borderRadius: 5,
    '&::after': {
      bottom: 0,
      content: '""',
      height: 6,
      left: 0,
      right: 0,
      position: 'absolute',
      borderRadius: '0px 0px 5px 5px',
      backgroundImage: 'linear-gradient(135deg, white 12.5%, #FF5A54 12.5%, #FF5A54 37.5%, white 37.5%, white 62.5%, #3FA8F4 62.5%, #3FA8F4 87.5%, white 87.5%, white 100%)',
      backgroundSize: '60px 60px',
    },
  }}>
    <BlingBling sx={{
      position: 'absolute',
      top: -1,
      left: -1
    }}/>
    <div sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: ['center', 'center', 'flex-start'],
      // backgroundImage: t => `linear-gradient(${t.colors.body} 50%, ${t.colors.highlight})`,
      backgroundColor: 'body',
      borderRadius: '0 0 5px 5px',
      px: [3, 4],
      position: 'absolute',
      top: 0,
      right: [3, 4],
    }}>
      <img src={mln} sx={{ height: [24, 30] }} />
      <h1 sx={{
        color: 'primary',
        fontSize: [2, 3],
        fontFamily: 'heading',
        ml: 2,
      }}>
        {companyText.name}
      </h1>
    </div>
    <Styled.p sx={{
      color: 'title',
      fontFamily: 'heading',
      lineHeight: 1.7,
      textIndent: '2em',
      '::before': {
        content: 'open-quote',
        fontSize: [4, 5],
        fontWeight: 'heading',
        color: 'secondary',
        lineHeight: 0.5
      },
      '::after': {
        content: 'close-quote',
        fontSize: [4, 5],
        fontWeight: 'heading',
        color: 'secondary',
        lineHeight: 0.5
      }
    }}>
      {companyText.value}
    </Styled.p>
    <div sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end'
    }}>
      <Styled.p sx={{
        color: 'title',
        fontFamily: 'heading',
        mt: [3, 4],
        textAlign: 'right',
        fontWeight: 'heading'
      }}>
        {companyText.writterEn}
      </Styled.p>
      <Styled.p sx={{
        color: 'title',
        fontFamily: 'heading',
        fontSize: [0, 0, 1],
        textAlign: 'right'
      }}>
        {companyText.writterCh}
      </Styled.p>
    </div>
  </div>
</Container>)

CompanyValue.defaultProps = {
  companyText: {}
}

export default CompanyValue