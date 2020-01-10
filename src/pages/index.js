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
  CompetitorComparison,
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
      {/* <CompetitorComparison companyText={companyText} /> */}
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
      description: '鸣泷具备独立的电动两轮车整车研发、生产以及销售能力，旗下拥有电动两轮车自有品牌，Aurora极光。极光集成了鸣泷实业下属多种行业领先的技术，具有续航里程长、电池安全性高以及快速的应急响应机制，结合到物联网云端监控平台，能够时刻为您保驾护航。'
    },
    {
      title: '云平台',
      background: 'https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      description: '吸取行业经验继承开发而来的鸣泷智能云平台后台管理系统，处于行业领先，能够为车辆以及备件提供完善的后勤保障，配合多种终端应用，运维APP、用户APP、以及用户社区，能够建立起车辆和用户之间的可靠的桥梁，时刻掌握车辆状态，享受及时专业的服务以及结交新的朋友，尽在智能云平台。'
    },
    {
      title: '智能电池',
      background: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      description: '鸣泷采用的电池的模组为车用梯次VDA模组，能够提供IP67的防水防尘能力，甚至可以直接在水下运行，正常充放电。同时能够自我诊断，实时更新自身健康状况，始终处于最佳工作区间，配合上智能BMS，能够实时远程监控电池的位置电量信息，保障电池安全。'
    },
    {
      title: '智能硬件',
      background: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      description: '勇猛的士兵同样需要与之匹配的盔甲和利剑，鸣泷旗下的电动车硬件同样出色。每一辆鸣泷出品的车辆均配备快充/换电技术，同时拥有六大定位系统定位，辅以巡迹纠偏技术，iBeacon信号区域，能够保证在车辆始终在安全区域骑行，保障正常运营。'
    },
  ],
  businessesTitle: '四大业务板块',
  businessesTitleEn: 'Four Business Parts',
  businesses: [
    {
      title: '鸣享出行',
      description: '鸣享出行专注于电动两轮车分时租赁业务，选用鸣泷精心挑选的电动两轮车，搭配鸣享+APP以及完善的运维平台，为用户提供便捷的出行体验，带来不一样的出行感受。'
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
  comparisonTitle: '友商对比',
  comparisonTitleEn: 'Competitor Comparison',
  comparisonHeader: [
    '品牌Brand',
    '优势Advantages',
    '劣势Disadvantages',
    '核心竞争力Cores',
    '企业定义Rankings',
  ],
  comparisonBody: [
    {
      brand: '鸣泷',
      advantages: '智能中控/智能仪表/智能电池设计，用户企业/全民众筹分润，D2C式分销渠道，可以上牌照',
      disadvantages: '初创阶段',
      cores: '解决了准入问题，专业渠道下沉',
      rankings: '3.0'
    },
    {
      brand: '哈罗出行',
      advantages: '蚂蚁金服/宁德时代资金支持，车型全，生态完整',
      disadvantages: '车电比太高，经济性差',
      cores: '支付宝相互引流',
      rankings: '2.5'
    },
    {
      brand: '滴滴街兔',
      advantages: '滴滴出行品牌背书',
      disadvantages: 'HW事业部受制于母公司政策，发展缓慢',
      cores: '出行系统完整，服务效率高',
      rankings: '2.0'
    },
    {
      brand: '骑电',
      advantages: '6线+县城准独家落地',
      disadvantages: '融资难，团队流失',
      cores: '下沉渠道建设完善',
      rankings: '2.0'
    },
    {
      brand: '小牛',
      advantages: '高端品牌形象',
      disadvantages: '放弃换电，放弃用户粘性',
      cores: '设计感',
      rankings: '2.0'
    },
    {
      brand: '丰巢',
      advantages: '进入两轮车换电服务生态',
      disadvantages: '无行业经验',
      cores: '现有强大服务网络改造较容易',
      rankings: '2.0'
    },
  ],
  copyright: `©️ Millennium 2019-${new Date().getFullYear()}`,
  icp: '沪ICP备00000000号-0',
  police: '沪公网安备 00000000000号',
  phone: '(0755) 3633 6581',
  address: '上海市嘉定区博乐路70号',
  wechat: <img src={qrcode} height={96} />,
}