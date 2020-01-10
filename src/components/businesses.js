/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { Container } from '.'

const Businesses = ({
  companyText
}) => (<Container sx={{
  px: 3
}}>
  <div sx={{
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <Styled.h3 sx={{ mb: 0, color: 'title' }}>{companyText.businessesTitle}</Styled.h3>
    <Styled.h4 sx={{ mt: 1 }}>{companyText.businessesTitleEn}</Styled.h4>
  </div>
  <div sx={{
    display: 'grid',
    mt: [3, 4],
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)'],
    gridGap: '1rem 2.43902439%',
    justifyContent: 'center',
    textAlign: ['center', 'left']
  }}>
    {companyText.businesses.map((business, index) => (<React.Fragment key={index}>
      <div sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 3,
        py: [2, 3]
      }}>
        <Styled.h5 sx={{
          position: 'relative',
          ':before': {
            position: 'absolute',
            content: `"${index + 1}."`,
            left: [-2, -3],
            top: [-3, -4],
            zIndex: -1,
            fontSize: [5, 6],
            color: 'highlight'
          }
        }}>{business.title}</Styled.h5>
        <Styled.p sx={{
          mt: [2, 3],
          lineHeight: 1.7,
          textAlign: 'center',
          textIndent: '2em'
        }}>{business.description}</Styled.p>
      </div>
    </React.Fragment>))}
  </div>
</Container>)

Businesses.defaultProps = {
  companyText: {
    businesses: []
  }
}

export default Businesses