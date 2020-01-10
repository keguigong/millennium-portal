/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import qrcode from '../images/qrcode.jpg'

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
      <Main companyText={companyText} backgroundImages={backgroundImages} />
      <CompanyValue companyText={companyText} />
      <Platforms companyText={companyText} />
      <Businesses companyText={companyText} />
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
  seeMore: '了解更多',
  value: '基于电动汽车动力蓄电池全生命周期价值管理优势，降维深耕电动两轮车出行赛道，打造电动两轮车D2C销售模式是我们的价值主张，成为两轮电动车的滴滴+小米是我们的愿景。用户是企业发展的根本，竭尽全力服务好用户是我们不懈追求的目标。',
  writterEn: 'Songlin Du, Co-Founder of Millennium',
  writterCh: '杜松林, 鸣泷实业联合创始人',
  copyright: `©️ Millennium 2019-${new Date().getFullYear()}`,
  icp: '沪ICP备012345678号-0',
  police: '沪公网安备 012345678910号',
  phone: '(0755) 3633 6581',
  address: '上海市嘉定区博乐路70号',
  wechat: <img src={qrcode} height={96} />,
  platformsTitle: '四大技术平台',
  platformsTitleEn: 'Four Advanced Platforms',
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
  ],
  businessesTitle: '四大业务板块',
  businessesTitleEn: 'Four Business Parts',
  businesses: [
    {
      title: '鸣享Plus',
      background: 'https://images.unsplash.com/photo-1455641374154-422f32e234cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80',
      description: '秋蝉的衰弱的残声，更是北国的特产；因为北平处处全长着树，屋子又低，所以无论在什么地方，都听得见它们的啼唱。在南方是非要上郊外或山上去才听得到的。这秋蝉的嘶叫，在北平可和蟋蟀耗子一样。'
    },
    {
      title: '鸣泷Collection',
      background: 'https://images.unsplash.com/photo-1575530818494-4944cf0eb96c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80',
      description: '江南，秋当然也是有的；但草木雕得慢，空气来得润，天的颜色显得淡，并且又时常多雨而少风。'
    },
    {
      title: '极光AURORA',
      background: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      description: '南国之秋，当然是也有它的特异的地方的，比如廿四桥的明月，钱塘江的秋潮，普陀山的凉雾，荔枝湾的残荷等等，可是色彩不浓，回味不永。比起北国的秋来，正象是黄酒之与白干，稀饭之与馍馍，鲈鱼之与大蟹，黄犬之与骆驼。'
    },
    {
      title: '鸣金回收',
      background: 'https://images.unsplash.com/photo-1523540939399-141cbff6a8d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      description: '有些批评家说，中国的文人学士，尤其是诗人，都带着很浓厚的颓废色彩，所以中国的诗文里，颂赞秋的文字特别的多。'
    }
  ]
}

const backgroundImages = {
  landing: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'
}