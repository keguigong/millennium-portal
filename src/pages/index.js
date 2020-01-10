/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import {
  SEO,
  Layout,
  Header,
  Main,
  CompanyValue,
  Parts,
  Footer
} from '../components'

class App extends React.Component {
  render() {
    return <Layout>
      <SEO title='Home' />
      <Header companyText={companyText} />
      <Main companyText={companyText} backgroundImages={backgroundImages} />
      <CompanyValue companyText={companyText} />
      <Parts companyText={companyText} />
      <Footer companyText={companyText} />
    </Layout>
  }
}

export default App

const companyText = {
  name: 'Millennium',
  en: 'Millennium Co., Ltd.',
  ch: '上海鸣泷实业有限公司',
  description: '由多位蔚来创世版车主联合筹建，专注于分时租赁下沉渠道， 是全球第二家用户企业',
  seeMore: '了解更多',
  value: '基于电动汽车动力蓄电池全生命周期价值管理优势，降维深耕电动两轮车出行赛道，打造电动两轮车D2C销售模式是我们的价值主张，成为两轮电动车的滴滴+小米是我们的愿景。用户是企业发展的根本，竭尽全力服务好用户是我们不懈追求的目标。',
  writterEn: 'Songlin Du, Co-Founder of Millennium',
  writterCh: '杜松林, 鸣泷实业联合创始人',
  copyright: `©️ Millennium 2019-${new Date().getFullYear()}`,
  icp: '沪ICP备012345678号-0',
  police: '沪公网安备 012345678910号',
  sectionTitle: '四大技术平台',
  sectionTitleEn: 'Four Advanced Platforms',
  platforms: [
    {
      name: '整车开发',
      description: '分时租赁电单，鸣享+；电动两轮车零售平台，鸣泷collection；电动两轮车自有品牌，Aurora极光；便捷回收电动二轮车，鸣金回收。'
    },
    {
      name: '云平台',
      description: '后台管理系统，车辆的后勤保障；运维员工专用APP，及时快速的响应故障；用户APP，便捷使用，迅速反馈；用户社区，结识更多志同道合的朋友。'
    },
    {
      name: '智能电池',
      description: '车用梯次VDA模组；IP67防护能力，可水下运行；自我诊断，实时更新自身健康状况；智能BMS，远程监控获取位置电量信息。'
    },
    {
      name: '智能硬件',
      description: '快充/换电技术；六大定位系统定位，辅以巡迹纠偏技术；iBeacon信号区域。'
    },
  ]
}

const backgroundImages = {
  landing: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'
}