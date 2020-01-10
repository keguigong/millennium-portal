/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import React from 'react'

const SectionTitle = ({
  title,
  titleEn,
}) => (<div sx={{
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center'
}}>
  <Styled.h3 sx={{ mb: 0, color: 'title' }}>{title}</Styled.h3>
  <Styled.h4 sx={{ mt: 1 }}>{titleEn}</Styled.h4>
</div>)

export default SectionTitle