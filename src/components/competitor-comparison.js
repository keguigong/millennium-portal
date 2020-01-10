/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'
import { Container, SectionTitle } from '.'

const CompetitorComparison = ({
  companyText
}) => (<Container sx={{
   mt: [5, 6]
}}>
  <SectionTitle {...{
    title: companyText.comparisonTitle,
    titleEn: companyText.comparisonTitleEn
  }} />
</Container>)

CompetitorComparison.defaultProps = {
  companyText: {
    comparisonHeader: [],
    comparisonBody: []
  }
}

export default CompetitorComparison