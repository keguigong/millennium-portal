/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import qrcode from '../images/qrcode.jpg'
import bicycle from '../images/bicycle.png'

import {
  SEO,
  Layout,
  Header,
  Main,
  CompanyValue,
  Platforms,
  Businesses,
  Footer
} from '../components'

class App extends React.Component {
  render() {
    return <Layout>
      <SEO 
        title={companyText.webTitle}
        titleSuffix={companyText.webTitleSuffix}
        description={companyText.webDescription}
      />
      <Header companyText={companyText} />
      <Main companyText={companyText} />
      <CompanyValue companyText={companyText} />
      <Businesses companyText={companyText} />
      <Platforms companyText={companyText} />
      <Footer companyText={companyText} />
    </Layout>
  }
}

export default App

const companyText = {
  webTitle: '上海鸣泷实业有限公司',
  webTitleSuffix: '鸣泷实业 ｜ Millennium',
  webDescription: '上海鸣泷实业有限公司官方网站 ｜ 鸣享+ ｜ 鸣泷collection ｜ Aurora极光 ｜ 鸣金回收',
  name: 'Millennium',
  en: 'Millennium Co., Ltd.',
  ch: '上海鸣泷实业有限公司',
  description: '由多位蔚来创世版车主联合筹建，专注于分时租赁下沉渠道， 是全球第二家用户企业',
  landingImg: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80',
  seeMore: '了解更多',
  value: '基于电动汽车动力蓄电池全生命周期价值管理优势，降维深耕电动两轮车出行赛道，打造电动两轮车D2C销售模式是我们的价值主张，成为两轮电动车的滴滴+小米是我们的愿景。用户是企业发展的根本，竭尽全力服务好用户是我们不懈追求的目标。',
  writterEn: 'Songlin Du, Co-Founder of Millennium',
  writterCh: '杜松林, 鸣泷实业联合创始人',
  platformsTitle: '四大技术平台',
  platformsTitleEn: 'Four Advanced Platforms',
  platforms: [
    {
      title: '整车开发',
      background: bicycle,
      description: '分时租赁电单，鸣享+；电动两轮车零售平台，鸣泷collection；电动两轮车自有品牌，Aurora极光；锂电两轮车的整车回收及二手锂电池回收，鸣金回收。'
    },
    {
      title: '云平台',
      background: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3400&q=80',
      description: '后台管理系统，车辆的后勤保障；运维员工专用APP，及时快速的响应故障；用户APP，便捷使用，迅速反馈；用户社区，结识更多志同道合的朋友。'
    },
    {
      title: '智能电池',
      background: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      description: '车用梯次VDA模组；IP67防护能力，可水下运行；自我诊断，实时更新自身健康状况；智能BMS，远程监控获取位置电量信息。'
    },
    {
      title: '智能硬件',
      background: '',
      description: '快充/换电技术；六大定位系统定位，辅以巡迹纠偏技术；iBeacon信号区域。'
    },
  ],
  businessesTitle: '四大业务板块',
  businessesTitleEn: 'Four Business Parts',
  businesses: [
    {
      title: '鸣享出行',
      description: '秋蝉的衰弱的残声，更是北国的特产；因为北平处处全长着树，屋子又低，所以无论在什么地方，都听得见它们的啼唱。在南方是非要上郊外或山上去才听得到的。这秋蝉的嘶叫，在北平可和蟋蟀耗子一样。'
    },
    {
      title: '鸣泷Collection',
      description: '电动两轮车的精选商城，为用户提供性价比极高的品牌车型及具有设计感的相关周边衍生产品。同时也欢迎用户的产品在通过我们的审核之下，在商城投放。精选商城可以接受相应的骑行积分和现金经营兑换。'
    },
    {
      title: '极光AURORA',
      description: '极光系列将会是鸣泷品牌自己研发的车型平台，致力于为广大用户提供一款超高设计细节感动，具有o2o互联互动性的高性价两轮电动车型。平台会延续家族设计基因，不断迭代给用户惊喜。'
    },
    {
      title: '鸣金Recycle',
      description: '鸣金回收会负责锂电两轮车的整车回收及二手锂电池回收，根据不同的车况状态及电池状态，梯次利用车架及锂电池，争取将资源利用到最大化，同时也为中国的环境保护负上企业该有的责任。'
    }
  ],
  copyright: `©️ Millennium 2019-${new Date().getFullYear()}`,
  icp: '沪ICP备00000000号-0',
  police: '沪公网安备 00000000000号',
  phone: '(0755) 3633 6581',
  address: '上海市嘉定区博乐路70号',
  wechat: <img src={qrcode} height={96} />,
}