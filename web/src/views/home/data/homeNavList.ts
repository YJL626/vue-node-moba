type homeNavItem = {
  name: string
  src: string
  iconStyle: {
    background: string
    backgroundSize: string
    width: string
    height: string
  }
}
;+`url(${require('@/assets/image/sprit.png')})`
const homeNavList: Array<homeNavItem> = [
  {
    name: '爆料站',
    src: '//pvp.qq.com/ingame/all/tobe/home/index.shtml',
    iconStyle: {
      background: `url(${require('@/assets/image/sprit.png')}) no-repeat 63.546% 15.517%`,
      backgroundSize: '375px 455px',
      width: '23px',
      height: '20px',
    },
  },
  {
    name: '故事站',
    src: '//pvp.qq.com/act/a20160510story/index.htm?ADTAG=PC.QrCode.TG',
    iconStyle: {
      background: `url(${require('@/assets/image/sprit.png')}) no-repeat 90.483% 15.614%`,
      backgroundSize: `375px 455px`,
      width: `23px`,
      height: `20px`,
    },
  },
  {
    name: '周边商城',
    src: '//pvp.qq.com/mall/m',
    iconStyle: {
      background: `url(${require('@/assets/image/sprit.png')}) no-repeat 36.746% 0.924%`,
      backgroundSize: `375px 455px`,
      width: `19px`,
      height: `22px`,
    },
  },
  {
    name: '体验服',
    src: '//pvp.qq.com/mall/m',
    iconStyle: {
      background: `url(${require('@/assets/image/sprit.png')}) no-repeat 10.408% 15.517%`,
      backgroundSize: ` 375px 455px`,
      width: `20px`,
      height: ` 20px`,
    },
  },
  {
    name: '新人专区',
    src: '//pvp.qq.com/m/m201606/goCenter.shtml',
    iconStyle: {
      background: `url(${require('@/assets/image/sprit.png')}) no-repeat 89.733% 1.266%`,
      backgroundSize: `375px 455px`,
      width: `20px`,
      height: ` 21px`,
    },
  },
  {
    name: '荣耀 传承',
    src: '//pvp.qq.com/m/memory/index.shtml',
    iconStyle: {
      background: `url(${require('@/assets/image/sprit.png')}) no-repeat 36.467% 15.287%`,
      backgroundSize: ` 375px 455px`,
      width: `24px`,
      height: ` 20px`,
    },
  },
  {
    name: '王者营地',
    src: '//image.ttwz.qq.com/wzry/wzryzs_download_4001.htm?ADTAG=mpvp.qq.com',
    iconStyle: {
      background: `url(${require('@/assets/image/sprit.png')}) no-repeat 63.3% 0.927%`,
      backgroundSize: `375px 455px`,
      width: `24px`,
      height: `24px`,
    },
  },
  {
    name: '公众号',
    src:
      '//game.weixin.qq.com/cgi-bin/comm/openlink?noticeid=90102708&appid=wx95a3a4d7c627e07d&url=https%3A%2F%2Fgame.weixin.qq.com%2Fcgi-bin%2Fh5%2Fstatic%2Fsubscribe%2Findex.html%3Fappid%3Dwx95a3a4d7c627e07d#wechat_redirect',
    iconStyle: {
      background: `url(${require('@/assets/image/sprit.png')}) no-repeat 0 96.207%`,
      backgroundSize: `375px 455px`,
      width: `24px`,
      height: ` 20px`,
    },
  },
  {
    name: '版本介绍',
    src: '//pvp.qq.com/cp/a20190320bbgxsmm/index.html',
    iconStyle: {
      background: `url(//game.gtimg.cn/images/yxzj/m/m201706/images/bg/version-icon.png) no-repeat 33.333% 33.333%`,
      backgroundSize: `25px 25px`,
      width: `24px`,
      height: ` 24px`,
    },
  },
  {
    name: '对局环境',
    src: '//pvp.qq.com/cp/a20190917station/index.html',
    iconStyle: {
      background: `url("//game.gtimg.cn/images/yxzj/m/m201706/images/bg/djhj.png") no-repeat 0 0`,
      backgroundSize: `34px 21px`,
      width: `34px`,
      height: `21px`,
    },
  },
  {
    name: 'ip共创计划',
    src: '//pvp.qq.com/cp/a20210428ipgc',
    iconStyle: {
      background: `url("//game.gtimg.cn/images/yxzj/m/m201706/images/bg/ipgc.png") no-repeat 52.174% 50%`,
      backgroundSize: `32px 32px`,
      width: '25px',
      height: '25px',
    },
  },
  {
    name: '创意互动营',
    src: '//pvp.qq.com/m/hdy/p1/index.html',
    iconStyle: {
      background: `url('//game.gtimg.cn/images/yxzj/m/m201706/images/bg/cyhdy.png') no-repeat 50% 50%`,
      backgroundSize: `28px 28px`,
      width: `25px`,
      height: `21px`,
    },
  },
]
export { homeNavList }
