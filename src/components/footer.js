/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import ReactTooltip from 'react-tooltip'

import mln from '../images/ml-normal.svg'
import police from '../images/cn-mps-number.png'
import qrcode from '../images/qrcode.jpg'
import { Container } from '.'
import { Icon } from '../icon/icon-wrapper'

const Footer = ({
  companyText
}) => (<footer>
  <Container sx={{
    display: 'flex',
    px: [3, 4],
    pt: [4, 5],
    justifyContent: 'space-between',
    flexDirection: ['column', 'column', 'row'],
    alignItems: 'center',
  }}>
    <div sx={{
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: ['column', 'row'],
      alignItems: 'center',
      position: 'relative'
    }}>
      <Styled.p sx={{ my: 0 }}><b>{companyText.copyright}</b></Styled.p>
      <Styled.p sx={{ ml: 2, my: 1 }}>{companyText.ch}</Styled.p>
    </div>
    <img src={mln} sx={{
      height: [24, 30],
      my: [2, 0],
      display: ['block', 'none']
    }} />
    <div sx={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      mt: [3, 0]
    }}>
      <a data-tip data-for='wechat' data-event='click focus'>
        <Icon name='Wechat' sx={{ mx: 2, height: [20, 24] }} />
      </a>
      <ReactTooltip id='wechat' globalEventOff='click'>
        <img src={qrcode} height={96} />
      </ReactTooltip>
      <a data-tip data-for='phone' data-event='click focus'>
        <Icon name='Phone' sx={{ mx: 2, height: [20, 24] }} />
      </a>
      <ReactTooltip id='phone' globalEventOff='click'>
        <a>(0755) 3633 6581</a>
      </ReactTooltip>
      <a data-tip data-event='click focus'>
        <Icon name='Address' sx={{ mx: 2, height: [20, 24] }} />
      </a>
      <ReactTooltip globalEventOff='click'>
        <a>上海市嘉定区博乐路70号</a>
      </ReactTooltip>
    </div>
  </Container>
  <hr sx={{
    height: 0,
    border: 0,
    borderTop: t => `1px solid ${t.colors.devider}`
  }} />
  <Container sx={{
    display: 'flex',
    px: [3, 4],
    py: 3,
    justifyContent: 'center',
    flexDirection: ['column', 'row'],
    alignItems: 'center'
  }}>
    <Styled.p>{companyText.icp}</Styled.p>
    <img src={police} sx={{ mx: 2, display: ['none', 'block'] }} />
    <Styled.p>{companyText.police}</Styled.p>
  </Container>
</footer>)

Footer.defaultProps = {
  companyText: {}
}

export default Footer