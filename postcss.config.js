/**
 * 配置转换将px单位转换为vw单位
 */
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['ignore'],
      minPixeValue: 1,
      mediaQuery: false,
      exclude: [/MainTabBar/]
    }
  }
}
