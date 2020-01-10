/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { Container } from '.'

const SectionTitle = ({
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
    <Styled.h3 sx={{ mb: 0, color: 'title' }}>{companyText.sectionTitle}</Styled.h3>
    <Styled.h4 sx={{ mt: 1 }}>{companyText.sectionTitleEn}</Styled.h4>
  </div>
  <div sx={{
    display: 'grid',
    mt: [3, 4],
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)'],
    gridGap: '1rem 2.43902439%',
    justifyContent: 'center',
    textAlign: ['center', 'left']
  }}>
    {companyText.platforms.map((platform, index) => (<React.Fragment>
      <div sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: [2, 3],
        py: [2, 3]
      }}>
        <Styled.h5>{platform.name}</Styled.h5>
        <Styled.p>{platform.description}</Styled.p>
      </div>
    </React.Fragment>))}
  </div>
</Container>)

SectionTitle.defaultProps = {
  companyText: {
    platforms: []
  }
}

export default SectionTitle