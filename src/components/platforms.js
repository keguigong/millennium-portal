/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'

import { Container } from '.'
import mln from '../images/ml-normal.svg'

const Platforms = ({
  companyText
}) => (<Container>
  <div sx={{
    mt: [5, 6],
    mb: [0, 5],
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <Styled.h3 sx={{ mb: 0, color: 'title' }}>{companyText.platformsTitle}</Styled.h3>
    <Styled.h4 sx={{ mt: 1 }}>{companyText.platformsTitleEn}</Styled.h4>
  </div>
  {companyText.platforms.map((platform, index) => (<section key={index} sx={{
    display: 'grid',
    mt: [0, 5],
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)'],
    // gridGap: '1rem 2.43902439%',
    justifyContent: 'center',
    ...(index % 2 === 0 && {
      direction: ['initial', 'rtl']
    })
  }}>
    <div sx={{
      p: [3, 2, 4],
      py: [5, 'auto'],
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Styled.h4 sx={{
        my: 3,
        position: 'relative'
      }}>
        <img src={mln} sx={{ 
          height: [36, 40], 
          position: 'absolute',
          opacity: [0.3, 0.6],
          top: [-3, -4],
          left: '50%',
          transform: "translate(-50%, 0)",
          zIndex: -1
        }} />
        {platform.title}
      </Styled.h4>
      <Styled.p sx={{
        textIndent: '2em',
        lineHeight: 1.6,
        px: [2, 2, 3],
        textAlign: ['center', 'left']
      }}>
        {platform.description}
      </Styled.p>
    </div>
    <div sx={{
      borderRadius: [14, 16],
      // borderStyle: 'solid',
      // borderWidth: 2,
      // borderColor: 'primary',
      mx: [4, 4, 5],
      boxShadow: '0 4px 15px #00000020',
      // width: '100%',
      height: 0,
      position: 'relative',
      paddingBottom: '48%',
      background: t => `url(${platform.background}) ${t.colors.primary}`,
      backgroundSize: 'cover',
      backgroundBlendMode: 'normal',
      // backgroundColor: 'primary',
      backgroundPosition: 'center',
      transition: 'background-size .3s ease-in-out',
      ':hover, :focus': {
        // backgroundSize: '105%, 105%',
      }
    }}>
      <div sx={{
        borderRadius: [14, 16],
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'deep',
        opacity: 0.3
      }} />
    </div>
  </section>))}
</Container>)

Platforms.defaultProps = {
  companyText: {
    platforms: []
  }
}

export default Platforms