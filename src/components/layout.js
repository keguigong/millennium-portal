/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Global } from '@emotion/core'
import React from 'react'

// Import Futura PT typeface
import "../fonts/futurapt_book_macroman/stylesheet.css"
import "../fonts/futurapt_bookitalic_macroman/stylesheet.css"
import "../fonts/futurapt_demi_macroman/stylesheet.css"
import "../fonts/futurapt_demiitalic_macroman/stylesheet.css"

const Layout = ({
  children
}) => (<React.Fragment>
  <Global styles={{
    body: {
      margin: 0,
    },
    "*": {
      boxSizing: 'border-box'
    }
  }} />
  <Styled.root>
    {children}
  </Styled.root>
</React.Fragment>)

export default Layout